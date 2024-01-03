from django.urls import path
from django.views.generic import TemplateView
from .views import index, redirect_index


urlpatterns = [
    path('', index),
    path('offers/', index),
    path('offers/constructor', index),
    path('offers/components', index),
    path('offers/builds', index),

    path('component/<int:id>', index),
    path('build/<int:id>', index),

    path('delivery/', index),

    path('about/', index),

    path('cart/', index),
    path('order/', index),
]
