"use client"

import React from "react"

import { forwardRef, useState, useEffect } from "react"

interface VideoPlayerProps {
  onTimeUpdate: (time: number) => void
  onPlay?: () => void
  onPause?: () => void
  deletedSegments?: { start: number; end: number }[]
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ onTimeUpdate, onPlay, onPause, deletedSegments = [] }, ref) => {
    const [videoUrl, setVideoUrl] = useState<string>("/placeholder.svg?height=400&width=600")
    const [isPlaceholder, setIsPlaceholder] = useState(true)
    const [videoDuration, setVideoDuration] = useState(0)
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    // Handle file upload
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file && file.type.startsWith("video/")) {
        const url = URL.createObjectURL(file)
        setVideoUrl(url)
        setIsPlaceholder(false)
      }
    }

    // Handle time update
    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      onTimeUpdate(e.currentTarget.currentTime)
    }

    // Handle metadata loaded
    const handleMetadataLoaded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      setVideoDuration(e.currentTarget.duration)
    }

    // Draw deleted segments on canvas
    useEffect(() => {
      if (canvasRef.current && !isPlaceholder && videoDuration > 0) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (ctx) {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          // Draw timeline
          ctx.fillStyle = "#e5e7eb" // gray-200
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          // Draw deleted segments in red
          ctx.fillStyle = "rgba(239, 68, 68, 0.5)" // red-500 with opacity
          deletedSegments.forEach((segment) => {
            const startX = (segment.start / videoDuration) * canvas.width
            const width = ((segment.end - segment.start) / videoDuration) * canvas.width
            ctx.fillRect(startX, 0, width, canvas.height)
          })
        }
      }
    }, [deletedSegments, isPlaceholder, videoDuration])

    return (
      <div className="relative w-full">
        {isPlaceholder ? (
          <div className="bg-[#d9d9d9] aspect-video w-full rounded-md flex flex-col items-center justify-center">
            <p className="mb-4 text-gray-700">비디오를 업로드하세요</p>
            <label className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600 transition-colors">
              비디오 선택
              <input type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
        ) : (
          <div className="relative">
            <video
              ref={ref}
              src={videoUrl}
              className="w-full rounded-md"
              controls
              onTimeUpdate={handleTimeUpdate}
              onPlay={onPlay}
              onPause={onPause}
              onLoadedMetadata={handleMetadataLoaded}
            />
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">삭제된 구간:</p>
              <canvas ref={canvasRef} className="w-full h-4 rounded" width="600" height="20" />
            </div>
          </div>
        )}
      </div>
    )
  },
)

VideoPlayer.displayName = "VideoPlayer"

export default VideoPlayer
