from django.contrib import admin
from .video_edit.models import Video, Script
from .feedback.models import Feedback, FeedbackSummary
from .pdf_log.models import PDFDocument, PDFChangeLog
from .text_recognition.models import UploadedImage

admin.site.register(Video)
admin.site.register(Script)
admin.site.register(Feedback)
admin.site.register(FeedbackSummary)
admin.site.register(PDFDocument)
admin.site.register(PDFChangeLog)
admin.site.register(UploadedImage)
