from django.urls import path, include

urlpatterns = [
    path('video/', include('lms_plugin.video_edit.urls')),
    path('feedback/', include('lms_plugin.feedback.urls')),
    path('pdf/', include('lms_plugin.pdf_log.urls')),
    path('text/', include('lms_plugin.text_recognition.urls')),
]
