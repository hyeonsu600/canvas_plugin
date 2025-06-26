from django.db import models

class Feedback(models.Model):
    student_id = models.CharField(max_length=20)
    course_id = models.CharField(max_length=20)
    question = models.TextField()
    answer = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback from {self.student_id} for {self.course_id}"