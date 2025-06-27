from django.urls import path
from .views import PDFDocumentListView

urlpatterns = [
    path('', PDFDocumentListView.as_view(), name='pdf-list'),
]
