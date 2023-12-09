from rest_framework import serializers

from .models import Build, BuildImage

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuildImage
        fields = ('path',)


class BuildSerializer(serializers.ModelSerializer):
    build_images = ImageSerializer(source="BuildImage", required=False, many=True, read_only=True)

    class Meta:
        model = Build
        fields = ('id', 'title', 'description', 'price', 'old_price', 'status', 'body', 'ssd', 'motherboard', 'cpu', 'ram', 'hdd', 'graphics_card', 'power_supply', 'cpu_cooler', 'build_images')


    def create(self, validated_data):
        return Build.objects.create(**validated_data)
