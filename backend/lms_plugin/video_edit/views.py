"""
Video subtitle generation view
==============================
* Extracts audio track from an uploaded video using **ffmpeg**
* Sends the raw audio bytes to Hugging Face Whisper‑large‑v3 for transcription
* Saves the returned text in the ``transcript`` field of ``Video`` model

Environment variables
---------------------
HF_API_KEY   – Hugging Face access token
FFMPEG_PATH  – *optional* absolute path to ``ffmpeg`` binary. When omitted,
               ``shutil.which('ffmpeg')`` is attempted, and a Windows‑friendly
               fallback path can be hard‑coded below.
"""

from __future__ import annotations

import logging
import os
import shutil
import subprocess
from pathlib import Path
from typing import Final

import requests
from dotenv import load_dotenv
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Video
from .serializers import VideoSerializer

load_dotenv()
log = logging.getLogger(__name__)
log.setLevel(logging.INFO)

# ---------------------------------------------------------------------------
# ffmpeg binary resolution ---------------------------------------------------
# ---------------------------------------------------------------------------

FFMPEG_ENV: Final[str | None] = os.getenv("FFMPEG_PATH")
FFMPEG_AUTO: Final[str | None] = shutil.which("ffmpeg")
FFMPEG_FALLBACK: Final[str] = r"C:\\Users\\dylan\\Downloads\\ffmpeg-7.1.1-essentials_build\\bin\\ffmpeg.exe"  # <- change if needed

FFMPEG: Final[str | None] = next(
    (p for p in (FFMPEG_ENV, FFMPEG_AUTO, FFMPEG_FALLBACK) if p and Path(p).is_file()),
    None,
)
if not FFMPEG:
    raise RuntimeError(
        "ffmpeg executable not found. Set FFMPEG_PATH env or install ffmpeg and restart the server."
    )

# ---------------------------------------------------------------------------
# Hugging Face API settings ---------------------------------------------------
# ---------------------------------------------------------------------------

HF_API_KEY: Final[str | None] = os.getenv("HF_API_KEY")
if not HF_API_KEY:
    raise RuntimeError("HF_API_KEY environment variable is not set.")

WHISPER_ENDPOINT: Final[str] = (
    "https://api-inference.huggingface.co/models/openai/whisper-large-v3"
)
HTTP_HEADERS: Final[dict[str, str]] = {
    "Authorization": f"Bearer {HF_API_KEY}",
    # content-type is set per‑request depending on codec
}

# ---------------------------------------------------------------------------
# Main DRF view --------------------------------------------------------------
# ---------------------------------------------------------------------------

class VideoUploadView(APIView):
    """POST ``multipart/form-data`` containing a ``video_file`` field."""

    def post(self, request):
        serializer = VideoSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        video: Video = serializer.save()
        transcript = self._generate_transcript(video.video_file.path)
        video.transcript = transcript
        video.save(update_fields=["transcript"])

        return Response(VideoSerializer(video).data, status=status.HTTP_201_CREATED)

    # ---------------------------------------------------------------------
    # Private helpers ------------------------------------------------------
    # ---------------------------------------------------------------------

    def _generate_transcript(self, video_path: str) -> str:
        """Extract audio → send to Whisper → return transcript text (or error msg)."""

        video_path = Path(video_path)
        audio_path = video_path.with_suffix(".wav")

        # 1) Extract mono 16 kHz WAV (Whisper optimal spec)
        ffmpeg_cmd = [
            FFMPEG,
            "-y",  # overwrite existing
            "-i",
            str(video_path),
            "-vn",  # no video
            "-acodec",
            "pcm_s16le",
            "-ar",
            "16000",
            "-ac",
            "1",
            str(audio_path),
        ]
        try:
            log.info("▶ Running ffmpeg: %s", " ".join(ffmpeg_cmd))
            subprocess.run(
                ffmpeg_cmd,
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
            )
        except subprocess.CalledProcessError as exc:
            log.error("ffmpeg failed: %s", exc.stderr.decode(errors="ignore"))
            return "[Transcript generation failed: audio extraction error]"

        # 2) Send bytes to Hugging Face Whisper
        try:
            audio_bytes = audio_path.read_bytes()
            response = requests.post(
                WHISPER_ENDPOINT,
                headers={**HTTP_HEADERS, "Content-Type": "audio/wav"},
                data=audio_bytes,
                timeout=120,  # initial cold-start may take up to ~60 s
            )
            log.info("Whisper HTTP %s", response.status_code)
            if response.status_code == 200:
                return response.json().get("text", "[No text found in response]")
            return f"[Whisper error {response.status_code}: {response.text[:200]}]"
        except requests.Timeout:
            log.error("Whisper request timed out")
            return "[Transcript generation failed: timeout]"
        except Exception as exc:  # pylint: disable=broad-except
            log.exception("Unexpected error while calling Whisper: %s", exc)
            return "[Transcript generation failed: unexpected error]"
        finally:
            # 3) Always clean up temp WAV
            try:
                audio_path.unlink(missing_ok=True)
            except OSError:
                log.warning("Failed to delete temporary audio: %s", audio_path)
