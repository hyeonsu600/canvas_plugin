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