from django.db import models

class Feedback(models.Model):
    student_id = models.CharField(max_length=100)
    course_id = models.CharField(max_length=100)
    question = models.TextField()
    answer = models.TextField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_id} - {self.course_id}"

class FeedbackSummary(models.Model):
    course_id = models.CharField(max_length=100, unique=True)
    summary = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Summary for {self.course_id}"
