from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),  # This sets up the admin URL
]

urlpatterns = [
    path('', views.index, name='index'),
]
