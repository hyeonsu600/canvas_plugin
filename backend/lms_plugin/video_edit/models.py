from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='videos/')
    transcript = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Script(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='scripts')
    start_time = models.FloatField()  # 초 단위
    end_time = models.FloatField()
    text = models.TextField()

    def __str__(self):
        return f"{self.video.title} [{self.start_time} - {self.end_time}]"