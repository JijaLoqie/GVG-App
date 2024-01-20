from django.urls import path

from configs.views import ColorsView, TranslationsInfoView


urlpatterns = [
    path("get-translations", TranslationsInfoView.as_view()),
    path("get-colors", ColorsView.as_view()),
]
