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
from django.contrib.auth import authenticate, login as auth_login


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
