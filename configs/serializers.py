from rest_framework import serializers

from configs.models import Colors, Translation


class TranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Translation
        fields = ('enabled', 'link')


class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ('text', 'background', 'primary', 'secondary', 'accent')

