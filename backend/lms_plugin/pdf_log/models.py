from django.db import models

class PDFDocument(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='pdf_log/')
    uploader = models.CharField(max_length=50)
    upload_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class PDFChangeLog(models.Model):
    pdf = models.ForeignKey(PDFDocument, on_delete=models.CASCADE, related_name='change_logs')
    change_summary = models.TextField()
    changed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Change on {self.pdf.title} at {self.changed_at}"