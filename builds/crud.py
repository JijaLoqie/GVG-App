from django.shortcuts import render, HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

from builds.models import Build
from builds.serializers import BuildSerializer


def _get_builds():
    return Build.objects.all()


def _get_build_by_id(id):
    try:
        build = Build.objects.get(id = id)
        return build
    except Build.DoesNotExist:
        return None


class Builds(generics.ListAPIView):
    queryset = _get_builds()
    serializer_class = BuildSerializer


class BuildById(APIView):
    lookup_variable = "id"
    serializer_class = BuildSerializer

    def get(self, request, format=None):
        buildId: int = request.GET.get(self.lookup_variable)
  
        if buildId == None:
            return Response({'Bad Request': 'Invalid data. Need build_it'}, status=status.HTTP_400_BAD_REQUEST)

        if build := _get_build_by_id(buildId):
            data = BuildSerializer(build).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'Room not found': 'Invalid Room Code'}, status=status.HTTP_404_NOT_FOUND)