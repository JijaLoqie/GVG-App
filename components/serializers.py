from rest_framework import serializers

from .models import Component, ComponentImage, RecommendedComponent


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComponentImage
        fields = ('path',)


class ComponentSerializer(serializers.ModelSerializer):

    component_images = ImageSerializer(source="ComponentImage", required=False, many=True, read_only=True)

    class Meta:
        model = Component
        fields = ('id', 'title', 'component_type', 'description', 'price', 'old_price', 'status', 'recomendation_queue', 'params', 'component_images')



class RecommendedComponentSerializer(serializers.ModelSerializer):
    builds = ComponentSerializer(source="recommended_component", required=False, many=True, read_only=True)

    class Meta:
        model = RecommendedComponent
        fields = ('id', 'title', 'components')


    def create(self, validated_data):
        return RecommendedComponent.objects.create(**validated_data)
