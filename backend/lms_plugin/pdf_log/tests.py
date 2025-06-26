from django.test import TestCase
from .models import PDFDocument
from django.core.files.uploadedfile import SimpleUploadedFile

class PDFDocumentTest(TestCase):
    def test_pdf_upload(self):
        file = SimpleUploadedFile("test.pdf", b"%PDF-1.4...", content_type="application/pdf")
        doc = PDFDocument.objects.create(title="Lecture Note", file=file, uploader="s001")
        self.assertEqual(doc.title, "Lecture Note")