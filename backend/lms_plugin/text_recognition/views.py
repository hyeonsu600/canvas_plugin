from rest_framework import generics
from .models import UploadedImage
from .serializers import UploadedImageSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from PIL import Image
import pytesseract

class UploadedImageView(generics.ListCreateAPIView):
    queryset = UploadedImage.objects.all()
    serializer_class = UploadedImageSerializer
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        instance = serializer.save()
        image = Image.open(instance.image.path)
        text = pytesseract.image_to_string(image, lang='eng+kor')
        instance.recognized_text = text
        instance.save()