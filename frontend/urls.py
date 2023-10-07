from django.contrib import admin
from django.urls import path, include
from .views import index, redirect_index

urlpatterns = [
        path('', redirect_index),
        path('home/', index),
        path('offers/', index),
        path('delivery/', index),
        path('about/', index),
]





