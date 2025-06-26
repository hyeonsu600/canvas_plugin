from django.db import models

class UploadedFile(models.Model):
    student_id = models.CharField(max_length=20)
    file = models.FileField(upload_to='text_recognition/')
    extracted_text = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"File by {self.student_id}"