from django.test import TestCase
from .models import Video, Script
from django.core.files.uploadedfile import SimpleUploadedFile

class ScriptModelTest(TestCase):
    def test_script_create(self):
        video = Video.objects.create(title="test", video_file=SimpleUploadedFile("test.mp4", b"video"))
        script = Script.objects.create(video=video, start_time=0.0, end_time=1.5, text="안녕하세요")
        self.assertEqual(script.text, "안녕하세요")