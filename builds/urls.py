from django.urls import path

from builds.crud import BuildById, Builds


urlpatterns = [
    path("api/get-recommended", Builds.as_view()),
    path("api/get-builds", Builds.as_view()),
    path("api/get-build-by-id/<int:id>", BuildById.as_view()),
]
