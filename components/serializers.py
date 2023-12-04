from rest_framework import serializers

from .models import Component


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = ('id', 'title', 'component_type', 'description', 'price', 'old_price', 'status', 'image', 'params')
