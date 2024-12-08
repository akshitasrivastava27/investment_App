"""
URL configuration for advisor_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include
from advisor_app.view import (index_view,buy_sell_view)
from advisor_app.view import register
from django.contrib.auth.views import LogoutView
from django.contrib.auth.views import LoginView
from . import view
from custom.views import (
      login_view,
      recoverpw_view,
      lock_screen_view,
      confirm_mail_view,
     )
urlpatterns = [

    #auth
     path('accounts/login/', LoginView.as_view(template_name='login.html'), name='login'),
     path('accounts/register/', register, name='register'),
     path('logout/', LogoutView.as_view(next_page='/accounts/login/'), name='logout'),
   
       
    path("recoverpw",  view=recoverpw_view, name="recoverpw"),
    path("lock-screen",  view=lock_screen_view, name="lock-screen"),
    path("confirm-mail",  view=confirm_mail_view, name="confirm-mail"),
      
    path('admin/', admin.site.urls),

    path("", view=index_view, name="index"),
    path("buy-sell-chart", view=buy_sell_view, name="buy-sell-chart"),
    path('filter_dataset', view.filter_dataset, name='filter_dataset'),

    #Apps
    path("apps/", include("apps.urls")),

    # #Custom
    path("custom/", include("custom.urls")),

    #Components
    path("components/", include("components.urls")),
    
    # Layouts
    path("layouts/", include("layouts.urls")),
]
