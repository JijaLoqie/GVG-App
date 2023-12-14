from django.urls import path

from components.crud import ComponentById, Components, RecommendedComponents


urlpatterns = [
    path("api/get-recommended", RecommendedComponents.as_view()),
    path("api/get-components", Components.as_view()),
    path("api/get-component-by-id/<int:id>", ComponentById.as_view()),
]
