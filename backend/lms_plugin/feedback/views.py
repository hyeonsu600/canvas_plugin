from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Feedback, FeedbackSummary
from .serializers import FeedbackSerializer, FeedbackSummarySerializer
import os, requests

HF_API_KEY = os.getenv("HF_API_KEY")

class FeedbackListCreateView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class FeedbackSummaryView(APIView):
    def post(self, request):
        course_id = request.data.get("course_id")
        if not course_id:
            return Response({"error": "course_id is required"}, status=400)

        feedbacks = Feedback.objects.filter(course_id=course_id)
        if not feedbacks.exists():
            return Response({"error": "no feedback for this course"}, status=404)

        combined_text = "\n".join([f.question + "\n" + (f.answer or "") for f in feedbacks])

        response = requests.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            headers={"Authorization": f"Bearer {HF_API_KEY}"},
            json={"inputs": combined_text[:4000]}
        )

        if response.status_code == 200:
            summary_text = response.json().get("summary_text") or response.json().get("generated_text")
            summary, _ = FeedbackSummary.objects.update_or_create(
                course_id=course_id,
                defaults={"summary": summary_text}
            )
            return Response({"summary": summary_text})
        else:
            return Response({"error": "Hugging Face API failed", "detail": response.text}, status=500)

class FeedbackSummaryRetrieveView(generics.RetrieveAPIView):
    queryset = FeedbackSummary.objects.all()
    serializer_class = FeedbackSummarySerializer
    lookup_field = 'course_id'
    lookup_url_kwarg = 'course_id'