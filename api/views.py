from django.shortcuts import render, HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

from builds.services.crud import *
from builds.serializers import *


class Builds(generics.ListAPIView):
    queryset = get_builds()
    serializer_class = BuildSerializer
    
class BuildById(APIView):
	lookup_variable = "title"
	serializer_class = BuildSerializer

	def get(self, request, format=None):
		title = request.GET.get(self.lookup_variable)
		if title == None:
			return Response({'Bad Request': 'Invalid data. Need build_it'}, status=status.HTTP_400_BAD_REQUEST)


		if build := get_build_by_name(title):
			data = BuildSerializer(build).data
			return Response(data, status=status.HTTP_200_OK)
		else:
			return Response({'Room not found': 'Invalid Room Code'}, status=status.HTTP_404_NOT_FOUND)
