from rest_framework import serializers
from .models import Video, Script

class ScriptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Script
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    scripts = ScriptSerializer(many=True, read_only=True)

    class Meta:
        model = Video
        fields = '__all__'