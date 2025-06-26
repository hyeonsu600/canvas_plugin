# Canvas LMS LLM 플러그인 개발 최종 실행 계획

**Version: 1.0**
**Date: 2025-06-25**

이 문서는 Canvas LMS에 연동될 LLM 기반 플러그인의 전체 개발 계획을 기술합니다. Django 백엔드와 Next.js 프론트엔드 스택을 기반으로 각 기능의 아키텍처, API 명세, 그리고 핵심 코드 구현을 포함합니다.

---

## 1. 아키텍처 및 사전 준비 (Architecture & Prerequisites)

### 1-1. 기술 스택 및 데이터 흐름

- **프론트엔드:** Next.js (Canvas `<iframe>` 내에서 렌더링)
- **백엔드:** Django, Django REST Framework
- **데이터베이스:** PostgreSQL 또는 SQLite (개발용)
- **핵심 통신:** 프론트엔드와 백엔드는 **REST API**를 통해 통신합니다. 백엔드는 모든 외부 API(Canvas, Hugging Face) 호출과 비즈니스 로직을 담당합니다.

![Architecture Diagram](https://i.imgur.com/8aV4s2G.png)
*<center>Next.js (in Canvas) <=> Django REST API <=> External APIs</center>*


### 1-2. 필수 라이브러리 설치

```bash
# Django 백엔드 환경
pip install django djangorestframework django-cors-headers python-dotenv requests pdfplumber ffmpeg-python webvtt-py

# Next.js 프론트엔드 환경에서는 'axios'를 사용하거나 내장 'fetch'를 활용합니다.
```

### 1-3. Django 환경 설정 (`.env`, `settings.py`)

1.  **`.env` 파일 생성 (프로젝트 최상단)**
    민감한 정보를 코드와 분리하여 관리합니다.

    ```ini
    # .env

    # 학교 Canvas 인스턴스 주소 (마지막에 /는 없음)
    CANVAS_API_URL="[https://your.canvas.instance.com](https://your.canvas.instance.com)"
    # Canvas 설정에서 발급받은 액세스 토큰
    CANVAS_API_TOKEN="your_canvas_api_token_here"
    # Hugging Face 설정에서 발급받은 액세스 토큰
    HF_API_TOKEN="hf_your_huggingface_token_here"
    ```

2.  **`settings.py` 설정**

    ```python
    # settings.py
    import os
    from dotenv import load_dotenv
    load_dotenv() # .env 파일 로드

    # .env 파일에서 설정값 불러오기
    CANVAS_API_URL = os.getenv("CANVAS_API_URL")
    CANVAS_API_TOKEN = os.getenv("CANVAS_API_TOKEN")
    HF_API_TOKEN = os.getenv("HF_API_TOKEN")
    
    # 설치한 앱 추가
    INSTALLED_APPS = [
        # ...
        'rest_framework',
        'corsheaders',
        'lms_plugin', # 직접 만든 앱
    ]

    # 미들웨어 추가 (corsheaders는 상단에 위치)
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware',
        # ...
    ]

    # CORS 설정 (Next.js 개발 서버 및 배포 서버 주소 허용)
    CORS_ALLOWED_ORIGINS = [
        "http://localhost:3000",
        "[http://127.0.0.1:3000](http://127.0.0.1:3000)",
        # "[https://your-nextjs-app.com](https://your-nextjs-app.com)", # 실제 배포 주소
    ]
    ```

### 1-4. API 호출 공통 함수 (`lms_plugin/utils.py`)

모든 외부 API 호출에 재사용될 함수입니다.

```python
# lms_plugin/utils.py
import requests
from django.conf import settings

def call_hf_api(model_url: str, payload: dict):
    """Hugging Face Inference API를 호출하는 범용 함수"""
    headers = {"Authorization": f"Bearer {settings.HF_API_TOKEN}"}
    response = requests.post(model_url, headers=headers, json=payload)
    response.raise_for_status()
    return response.json()

def call_canvas_api(endpoint: str, method: str = 'GET', params: dict = None):
    """Canvas LMS API를 호출하는 범용 함수"""
    headers = {'Authorization': f'Bearer {settings.CANVAS_API_TOKEN}'}
    url = f"{settings.CANVAS_API_URL}{endpoint}"
    response = requests.request(method, url, headers=headers, params=params)
    response.raise_for_status()
    return response.json() if response.content else None
```

---

## 2. 프로젝트별 최종 구현 계획

### 프로젝트 1: Feedback - 수업 평가 요약

#### ✅ 전체 흐름
1.  **(Next.js)** 사용자가 요약할 설문(퀴즈)을 선택합니다.
2.  **(Next.js -> Django)** 선택된 `course_id`와 `quiz_id`를 Django API `/api/feedback/summarize/`로 전송합니다.
3.  **(Django)**
    a. `call_canvas_api`를 이용해 해당 퀴즈의 모든 텍스트 답변을 가져옵니다.
    b. `call_hf_api`를 이용해 `google/gemma-2b-it` 모델로 경향성 요약을 요청합니다.
4.  **(Django -> Next.js)** 요약된 텍스트를 JSON 형태로 반환합니다.
5.  **(Next.js)** 받은 요약 결과를 화면에 렌더링합니다.

#### 🔗 API 엔드포인트 (`lms_plugin/urls.py`)
```python
path('api/feedback/summarize/', FeedbackSummaryView.as_view(), name='summarize-feedback'),
```

#### 💻 Django 백엔드 구현 (`lms_plugin/views.py`)
```python
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import call_canvas_api, call_hf_api

class FeedbackSummaryView(APIView):
    def post(self, request):
        course_id = request.data.get('course_id')
        quiz_id = request.data.get('quiz_id')

        # 1. Canvas API로 설문 답변 텍스트 가져오기
        try:
            submissions = call_canvas_api(f"/api/v1/courses/{course_id}/quizzes/{quiz_id}/submissions")['quiz_submissions']
            all_answers = []
            for sub in submissions:
                questions = call_canvas_api(f"/api/v1/quiz_submissions/{sub['id']}/questions")['quiz_questions']
                for q in questions:
                    if 'answer' in q and isinstance(q['answer'], str):
                        all_answers.append(q['answer'])
        except Exception as e:
            return Response({"error": f"Canvas 데이터 조회 실패: {e}"})

        if not all_answers:
            return Response({"summary": "분석할 텍스트 답변이 없습니다."})

        # 2. Hugging Face API로 요약 요청하기
        try:
            model_url = "[https://api-inference.huggingface.co/models/google/gemma-2b-it](https://api-inference.huggingface.co/models/google/gemma-2b-it)"
            full_text = "\n".join(f"- {ans}" for ans in all_answers)
            prompt = f"""당신은 강의 평가 분석 전문가입니다. 아래 학생들의 수업 평가 내용을 바탕으로, 긍정적인 경향과 부정적인(개선 제안) 경향을 명확히 구분하여 각각 2가지 핵심 항목으로 요약해주세요. 결과는 아래 형식에 맞춰 Markdown으로 작성해주세요.

# 강의 평가 요약 리포트
## 긍정적 경향
1. [첫 번째 긍정적 경향 요약]
2. [두 번째 긍정적 경향 요약]
## 개선 제안
1. [첫 번째 개선 제안 요약]
2. [두 번째 개선 제안 요약]
---
[원본 평가 내용]
{full_text}
"""
            payload = {"inputs": prompt, "parameters": {"max_new_tokens": 512, "return_full_text": False}}
            result = call_hf_api(model_url, payload)
            summary = result[0]['generated_text']
        except Exception as e:
            return Response({"error": f"AI 요약 실패: {e}"})

        return Response({"summary": summary})
```

#### 🎨 Next.js 프론트엔드 구현 (`Component.tsx`)
```tsx
const handleSummarize = async (courseId, quizId) => {
    setIsLoading(true);
    const response = await fetch('http://localhost:8000/api/feedback/summarize/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ course_id: courseId, quiz_id: quizId }),
    });
    const data = await response.json();
    setSummary(data.summary || data.error);
    setIsLoading(false);
};
```

---

### 프로젝트 2: Text Recognition - 이미지 기반 자동 채점

#### ✅ 전체 흐름
1.  **(Next.js)** 사용자가 과제 이미지 파일과 '문제', '모범 답안'을 업로드/입력합니다.
2.  **(Next.js -> Django)** `FormData`를 사용해 이미지와 텍스트를 `/api/grading/image/`로 전송합니다.
3.  **(Django)**
    a. `microsoft/trocr-base-handwritten` 모델로 이미지에서 텍스트(학생 답안)를 추출합니다 (OCR).
    b. `google/gemma-7b-it` 모델로 학생 답안을 채점하고 이유를 생성합니다.
4.  **(Django -> Next.js)** 채점 결과를 JSON으로 반환합니다.
5.  **(Next.js)** 결과를 화면에 표시합니다.

#### 🔗 API 엔드포인트 (`lms_plugin/urls.py`)
```python
path('api/grading/image/', ImageGradingView.as_view(), name='grade-image'),
```

#### 💻 Django 백엔드 구현 (`lms_plugin/views.py`)
```python
from rest_framework.parsers import MultiPartParser, FormParser

class ImageGradingView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        image_file = request.FILES.get('image')
        question = request.data.get('question')
        model_answer = request.data.get('model_answer')

        if not all([image_file, question, model_answer]):
            return Response({"error": "필수 데이터 누락"}, status=400)

        # 1. OCR 수행
        try:
            # microsoft/trocr-base-handwritten API는 바이너리 데이터를 직접 받음
            ocr_model_url = "[https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten](https://api-inference.huggingface.co/models/microsoft/trocr-base-handwritten)"
            headers = {"Authorization": f"Bearer {settings.HF_API_TOKEN}"}
            ocr_response = requests.post(ocr_model_url, headers=headers, data=image_file.read())
            ocr_response.raise_for_status()
            student_answer = ocr_response.json()[0]['generated_text']
        except Exception as e:
            return Response({"error": f"OCR 실패: {e}"})

        # 2. 채점 수행
        try:
            grade_model_url = "[https://api-inference.huggingface.co/models/google/gemma-7b-it](https://api-inference.huggingface.co/models/google/gemma-7b-it)"
            prompt = f"""... (이전 답변의 상세 채점 프롬프트) ...\n[학생 답안]: {student_answer}"""
            payload = {"inputs": prompt, "parameters": {"max_new_tokens": 512, "return_full_text": False}}
            result = call_hf_api(grade_model_url, payload)
            report = result[0]['generated_text']
        except Exception as e:
            return Response({"error": f"AI 채점 실패: {e}"})
            
        return Response({"report": report})
```
* **Next.js 구현은 이전 답변의 `FormData` 예시를 참고합니다.**

---

### 프로젝트 3: PDF_Log - PDF 페이지별 요약

#### ✅ 전체 흐름
1.  **(Next.js)** 사용자가 Canvas 파일 목록에서 PDF를 선택하고 요약할 페이지를 지정합니다.
2.  **(Next.js -> Django)** `file_id`와 `page_number`를 `/api/pdf/summarize/`로 전송합니다.
3.  **(Django)**
    a. Canvas API로 `file_id`를 이용해 PDF 다운로드 URL을 받아 서버에 임시 저장합니다.
    b. `pdfplumber`로 해당 페이지의 텍스트를 추출합니다.
    c. `gogamza/kobart-summarization` 모델로 텍스트 요약을 요청합니다.
4.  **(Django -> Next.js)** 요약 결과를 JSON으로 반환합니다.
5.  **(Next.js)** 결과를 화면에 표시합니다.

#### 🔗 API 엔드포인트 (`lms_plugin/urls.py`)
```python
path('api/pdf/summarize/', PDFSummaryView.as_view(), name='summarize-pdf'),
```

#### 💻 Django 백엔드 구현 (`lms_plugin/views.py`)
* **이전 답변의 `PDFSummaryView` 코드를 참고합니다.** 전체 로직(Canvas 파일 다운로드 -> `pdfplumber` 파싱 -> Hugging Face 요약)이 이미 완성되어 있습니다.

---

### 프로젝트 4: Video_edit - 스크립트 기반 영상 편집

두 단계의 API로 구성됩니다.

#### ✅ 흐름 1: 자막 가져오기
1.  **(Next.js)** 사용자가 편집할 영상을 선택합니다.
2.  **(Next.js -> Django)** 영상의 `media_id`를 `/api/video/captions/`로 보냅니다.
3.  **(Django)** Canvas API로 미디어 트랙을 조회하여 `.vtt` 자막 파일을 가져옵니다.
4.  **(Django -> Next.js)** 파싱된 자막 데이터를 JSON으로 반환합니다.
5.  **(Next.js)** 스크립트 편집 UI를 렌더링합니다.

#### 🔗 API 엔드포인트 1 (`lms_plugin/urls.py`)
```python
path('api/video/captions/<str:media_id>/', VideoCaptionView.as_view(), name='get-captions'),
```
* **`VideoCaptionView`의 코드는 이전 답변을 참고합니다.**

#### ✅ 흐름 2: 영상 편집하기
1.  **(Next.js)** 사용자가 스크립트 라인을 삭제하고 저장 버튼을 누릅니다.
2.  **(Next.js -> Django)** 원본 영상의 `file_id`와 삭제할 시간 정보(`start_time`, `end_time`)를 `/api/video/edit/`로 전송합니다.
3.  **(Django)**
    a. Canvas API로 원본 영상을 서버에 다운로드합니다.
    b. `ffmpeg-python`을 사용하여 해당 시간대를 잘라낸 새 영상을 생성합니다.
4.  **(Django -> Next.js)** 처리 완료 메시지를 반환합니다.
5.  **(Next.js)** 사용자에게 완료를 알립니다.

#### 🔗 API 엔드포인트 2 (`lms_plugin/urls.py`)
```python
path('api/video/edit/', VideoEditView.as_view(), name='edit-video'),
```
* **`VideoEditView`는 Canvas 파일 다운로드 로직과 `ffmpeg` 실행 로직을 결합하여 구현합니다. (이전 답변 코드 참고)**
* **주의:** 이 작업은 시간이 매우 오래 걸릴 수 있으므로, 실제 서비스에서는 비동기 처리(Celery 등) 도입을 강력히 권장합니다.