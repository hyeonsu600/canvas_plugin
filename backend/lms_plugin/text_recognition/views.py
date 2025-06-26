from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UploadedFile
from .serializers import UploadedFileSerializer
import pytesseract
from PIL import Image
import os

class FileUploadOCRView(APIView):
    def post(self, request):
        serializer = UploadedFileSerializer(data=request.data)
        if serializer.is_valid():
            file_instance = serializer.save()
            file_path = file_instance.file.path
            extracted_text = self.perform_ocr(file_path)
            file_instance.extracted_text = extracted_text
            file_instance.save()
            return Response(UploadedFileSerializer(file_instance).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def perform_ocr(self, path):
        try:
            image = Image.open(path)
            text = pytesseract.image_to_string(image, lang='eng+kor')  # 한국어 + 영어 OCR
            return text.strip()
        except Exception as e:
            return f"[OCR Failed]: {str(e)}"
