from django.urls import path

from builds.crud import BuildById, Builds, RecommendedBuilds


urlpatterns = [
    path("api/get-recommended", RecommendedBuilds.as_view()),
    path("api/get-builds", Builds.as_view()),
    path("api/get-build-by-id/<int:id>", BuildById.as_view()),
]
