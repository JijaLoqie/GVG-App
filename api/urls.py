from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
	path('get-builds', hello_view),
	path('get-build/<str:build_id>', hello_view),
    
]
