from django.urls import path
from .views import FeedbackListCreateView, FeedbackSummaryView, FeedbackSummaryRetrieveView

urlpatterns = [
    path('', FeedbackListCreateView.as_view(), name='feedback-list-create'),
    path('summary/', FeedbackSummaryView.as_view(), name='feedback-summary'),
    path('summary/<str:course_id>/', FeedbackSummaryRetrieveView.as_view(), name='feedback-summary-get'),
]
