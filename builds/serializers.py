from rest_framework import serializers

from .models import Build


class BuildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Build
        fields = ('id', 'title', 'description', 'price', 'old_price', 'status', 'body', 'ssd', 'motherboard', 'cpu', 'ram', 'hdd', 'graphics_card', 'power_supply', 'cpu_cooler', 'image_list')