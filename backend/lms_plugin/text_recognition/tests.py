from django.test import TestCase
from .models import UploadedImage
from django.core.files.uploadedfile import SimpleUploadedFile

class UploadedImageTest(TestCase):
    def test_image_upload(self):
        img = SimpleUploadedFile("test.png", b"file_content", content_type="image/png")
        uploaded = UploadedImage.objects.create(image=img)
        self.assertTrue(uploaded.image.name.startswith("uploads/"))