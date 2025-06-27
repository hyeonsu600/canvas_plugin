from django.urls import path
from .views import UploadedImageView

urlpatterns = [
    path('', UploadedImageView.as_view(), name='image-upload-list'),
]
