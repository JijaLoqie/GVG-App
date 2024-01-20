from django.shortcuts import render
from rest_framework import generics

from configs.models import Colors, Translation

from configs.serializers import ColorsSerializer, TranslationSerializer

# Create your views here.




class TranslationsInfoView(generics.ListAPIView):

    queryset = Translation.objects.all()
    serializer_class = TranslationSerializer



class ColorsView(generics.ListAPIView):

    queryset = Colors.objects.all()
    serializer_class = ColorsSerializer
