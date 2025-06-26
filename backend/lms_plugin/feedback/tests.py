from django.test import TestCase
from .models import Feedback

class FeedbackModelTest(TestCase):
    def test_create_feedback(self):
        fb = Feedback.objects.create(
            student_id="s001",
            course_id="c001",
            question="강의는 어땠나요?",
            answer="좋았어요!"
        )
        self.assertEqual(fb.student_id, "s001")