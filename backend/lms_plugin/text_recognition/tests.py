from django.test import TestCase
from .models import UploadedFile
from django.core.files.uploadedfile import SimpleUploadedFile

class UploadedFileTest(TestCase):
    def test_file_upload(self):
        file = SimpleUploadedFile("test.jpg", b"file_content", content_type="image/jpeg")
        obj = UploadedFile.objects.create(student_id="s001", file=file)
        self.assertEqual(obj.student_id, "s001")
