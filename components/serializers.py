from rest_framework import serializers

from .models import Component, ComponentImage, ComponentParameter, RecommendedComponent


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComponentImage
        fields = ('path',)


class ComponentParamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComponentParameter
        fields = ('parameter_name', 'parameter_value')


class ComponentSerializer(serializers.ModelSerializer):
    images = ImageSerializer(source="ComponentImage", required=False, many=True, read_only=True)
    params = ComponentParamsSerializer(source="ComponentParameter", required=False, many=True, read_only=True)

    class Meta:
        model = Component
        fields = ('id', 'title', 'component_type', 'description', 'price', 'old_price', 'status', 'recomendation_queue', 'params', 'images')



class RecommendedComponentSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(source="recommended_component", required=False, many=True, read_only=True)

    class Meta:
        model = RecommendedComponent
        fields = ('id', 'title', 'components')


    def create(self, validated_data):
        return RecommendedComponent.objects.create(**validated_data)
