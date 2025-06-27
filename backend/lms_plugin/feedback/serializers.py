from rest_framework import serializers
from .models import Feedback, FeedbackSummary

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class FeedbackSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackSummary
        fields = '__all__'