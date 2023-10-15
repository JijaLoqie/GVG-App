from django.contrib import admin
from django.urls import path, include
from .views import index, redirect_index

urlpatterns = [
        path('', redirect_index),
        path('home/', index),

        path('offers/', index),
        path('offers/constructor', index),
        path('offers/components', index),
        path('offers/builds', index),

        path('delivery/', index),

        path('about/', index),
]





