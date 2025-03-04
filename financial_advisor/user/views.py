from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from datetime import datetime, timedelta
from django.http import JsonResponse
import pandas as pd


def index(request):
  return render(request, 'user/html/index.html', {'title': 'index'})

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created! You are now able to log in.')
            return redirect('../login')
    else:
        form = UserRegisterForm()
    return render(request, 'user/html/register.html', {'form': form, 'title': 'Register here'})

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)  # This securely logs in the user
            messages.success(request, f'Welcome back {username}!')
            return redirect('home')  # Redirect to the named URL 'home'
        else:
            messages.info(request, 'Account does not exist or credentials are invalid. Please try again.')
    form = AuthenticationForm()
    return render(request, 'user/html/login.html', {'form': form, 'title': 'Log in'})

def home(request):
    return render(request, 'user/html/home.html')

def filter_dataset(request):
    # Get the selected timeframe from the GET request
    timeframe = request.GET.get("timeframe", "1-year")

    # Load the dataset
    try:
        dataset = pd.read_csv("data/nasdaq_data.csv")
        print("Dataset Columns:", dataset.columns)  # Debug: Print the dataset columns
    except FileNotFoundError:
        return JsonResponse({"error": "Dataset file not found."}, status=500)

    # Ensure column names are consistent
    dataset.rename(columns=lambda x: x.strip().lower(), inplace=True)

    # Check for required columns
    if "date" not in dataset.columns or "4. close" not in dataset.columns:
        return JsonResponse({"error": "Required columns 'date' or '4. close' not found in dataset."}, status=500)

    # Convert the 'date' column to datetime
    dataset["date"] = pd.to_datetime(dataset["date"])

    # Filter dataset based on the timeframe
    today = datetime.today()
    if timeframe == "6-months":
        start_date = today - timedelta(days=6 * 30)  # Approx. 6 months
    elif timeframe == "1-year":
        start_date = today - timedelta(days=365)
    elif timeframe == "2-years":
        start_date = today - timedelta(days=2 * 365)
    elif timeframe == "5-years":
        start_date = today - timedelta(days=5 * 365)
    else:
        start_date = dataset["date"].min()  # Default to all data

    # Filter the dataset
    filtered_dataset = dataset[dataset["date"] >= start_date]

    # Select only the 'date' and '4. close' columns for output
    filtered_dataset = filtered_dataset[["date", "4. close"]]

    # Convert the filtered dataset to JSON and return it
    return JsonResponse(filtered_dataset.to_dict(orient="records"), safe=False)
