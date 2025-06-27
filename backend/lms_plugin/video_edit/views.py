# video_edit/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Video
from .serializers import VideoSerializer
import requests
import os

HF_API_KEY = os.environ.get("HF_API_KEY")  

class VideoUploadView(APIView):
    def post(self, request):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            video = serializer.save()

            transcript = self.generate_transcript(video.video_file.path)
            video.transcript = transcript
            video.save()

            return Response(VideoSerializer(video).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_transcript(self, video_path):
        
        with open(video_path, 'rb') as f:
            response = requests.post(
                "https://api-inference.huggingface.co/models/openai/whisper-large",
                headers={"Authorization": f"Bearer {HF_API_KEY}"},
                files={"file": f}
            )
        if response.status_code == 200:
            return response.json().get("text", "")
        return "[Transcript generation failed]"
