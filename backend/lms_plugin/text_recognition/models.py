from django.db import models

class UploadedImage(models.Model):
    image = models.ImageField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    recognized_text = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.image.name