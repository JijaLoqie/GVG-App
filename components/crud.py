from django.shortcuts import render, HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

from components.models import Component
from components.serializers import ComponentSerializer


def _get_components():
    return Component.objects.all()


def _get_component_by_id(id):
    try:
        component = Component.objects.get(id = id)
        return component
    except Component.DoesNotExist:
        return None


class Components(generics.ListAPIView):
    queryset = _get_components()
    serializer_class = ComponentSerializer


class ComponentById(APIView):
    lookup_variable = "id"
    serializer_class = ComponentSerializer

    def get(self, request, id: int, format=None):
        componentId: int = id
  
        if componentId == None:
            return Response({'Bad Request': 'Invalid data. Need component_it'}, status=status.HTTP_400_BAD_REQUEST)

        if component := _get_component_by_id(componentId):
            data = ComponentSerializer(component).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'Room not found': 'Invalid Room Code'}, status=status.HTTP_404_NOT_FOUND)
