from django.urls import path
from . import views

urlpatterns = [
    path('advisor/', views.advisor, name='advisor'),
]