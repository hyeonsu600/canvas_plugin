from django.urls import path
from .views import FeedbackListCreateView

urlpatterns = [
    path('', FeedbackListCreateView.as_view(), name='feedback-list-create'),
]