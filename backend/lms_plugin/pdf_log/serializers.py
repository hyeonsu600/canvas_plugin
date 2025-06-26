from rest_framework import serializers
from .models import PDFDocument, PDFChangeLog

class PDFChangeLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDFChangeLog
        fields = '__all__'

class PDFDocumentSerializer(serializers.ModelSerializer):
    change_logs = PDFChangeLogSerializer(many=True, read_only=True)

    class Meta:
        model = PDFDocument
        fields = '__all__'