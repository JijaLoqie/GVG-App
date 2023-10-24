from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
	path('get-builds', Builds.as_view()),
	path('get-build-by-id', BuildById.as_view()),
]
