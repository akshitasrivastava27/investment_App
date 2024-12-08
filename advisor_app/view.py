from django.views.generic.base import TemplateView
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.http import JsonResponse
from datetime import datetime, timedelta
from django.http import JsonResponse
import pandas as pd

from .forms import CustomUserCreationForm

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created successfully!')
            return redirect('login')  # Redirect to the login page
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = CustomUserCreationForm()

    return render(request, 'register.html', {'form': form})


class DashboardView(LoginRequiredMixin,TemplateView):
     pass
index_view = DashboardView.as_view(template_name="index.html")

class BuySell(LoginRequiredMixin,TemplateView):
     pass
buy_sell_view = BuySell.as_view(template_name="buy-sell.html")

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
