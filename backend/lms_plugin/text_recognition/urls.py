from django.urls import path
from .views import FileUploadOCRView

urlpatterns = [
    path('upload/', FileUploadOCRView.as_view(), name='file-upload-ocr'),
]
