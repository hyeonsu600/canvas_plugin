from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PDFDocument
from .serializers import PDFDocumentSerializer

class PDFDocumentListView(APIView):
    def get(self, request):
        docs = PDFDocument.objects.all()
        serializer = PDFDocumentSerializer(docs, many=True)
        return Response(serializer.data)