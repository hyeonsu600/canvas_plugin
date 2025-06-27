"use client"

import { useState, useRef } from "react"
import VideoPlayer from "@/components/video-player"
import ScriptNavigator from "@/components/script-navigator"
import ScriptEditor from "@/components/script-editor"
import type { Script } from "@/types/script"

export default function Home() {
  // Sample script data with timestamps
  const [scripts, setScripts] = useState<Script[]>([
    { id: 1, startTime: 0, endTime: 5, text: "안녕하세요, 오늘은 리액트에 대해 알아보겠습니다." },
    { id: 2, startTime: 5, endTime: 10, text: "리액트는 페이스북에서 개발한 자바스크립트 라이브러리입니다." },
    { id: 3, startTime: 10, endTime: 15, text: "컴포넌트 기반 아키텍처를 사용하여 UI를 구성합니다." },
    { id: 4, startTime: 15, endTime: 20, text: "가상 DOM을 활용하여 효율적인 렌더링을 제공합니다." },
    { id: 5, startTime: 20, endTime: 25, text: "다양한 생태계와 커뮤니티 지원이 활발합니다." },
  ])

  // Original scripts for reset functionality
  const originalScripts = useRef<Script[]>([...scripts])

  // Deleted time segments
  const [deletedSegments, setDeletedSegments] = useState<{ start: number; end: number }[]>([])

  // Current video time
  const [currentTime, setCurrentTime] = useState(0)

  // Add this after the other useState declarations
  const [isPlaying, setIsPlaying] = useState(false)

  // Selected script for editing
  const [selectedScript, setSelectedScript] = useState<Script | null>(null)

  // Video player reference
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle time update from video player
  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time)

    // Check if current time is in a deleted segment
    const isInDeletedSegment = deletedSegments.some((segment) => time >= segment.start && time < segment.end)

    // Skip over deleted segments
    if (isInDeletedSegment && videoRef.current) {
      // Find the next valid segment
      const nextValidTime = deletedSegments.reduce((nextTime, segment) => {
        if (time >= segment.start && time < segment.end) {
          return segment.end
        }
        return nextTime
      }, time)

      videoRef.current.currentTime = nextValidTime
    }
  }

  // Add these functions after the other handler functions
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time
    }
  }

  // Handle script selection
  const handleScriptSelect = (script: Script) => {
    setSelectedScript(script)

    // Optionally seek video to script start time
    if (videoRef.current) {
      videoRef.current.currentTime = script.startTime
    }
  }

  // Handle script update
  const handleScriptUpdate = (updatedScript: Script) => {
    setScripts(scripts.map((script) => (script.id === updatedScript.id ? updatedScript : script)))
    setSelectedScript(null)
  }

  // Handle script deletion
  const handleScriptDelete = (scriptId: number) => {
    // Find the script to delete
    const scriptToDelete = scripts.find((script) => script.id === scriptId)

    if (scriptToDelete) {
      // Add the time segment to deleted segments
      setDeletedSegments([...deletedSegments, { start: scriptToDelete.startTime, end: scriptToDelete.endTime }])

      // Remove the script from the list
      setScripts(scripts.filter((script) => script.id !== scriptId))
      setSelectedScript(null)

      // If we're currently in the deleted segment, skip ahead
      if (videoRef.current && currentTime >= scriptToDelete.startTime && currentTime < scriptToDelete.endTime) {
        videoRef.current.currentTime = scriptToDelete.endTime
      }
    }
  }

  // Handle reset
  const handleReset = () => {
    setScripts([...originalScripts.current])
    setSelectedScript(null)
    setDeletedSegments([]) // Clear deleted segments
  }

  // Handle save
  const handleSave = () => {
    // In a real app, this would save to a database or API
    originalScripts.current = [...scripts]
    // Also save the deleted segments as the new baseline
    alert("변경 사항이 저장되었습니다.")
  }

  return (
    <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left section - Video player */}
      <div className="w-full md:w-1/2">
        <VideoPlayer
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          deletedSegments={deletedSegments}
        />
        <div className="flex gap-4 justify-start mt-4">
          <button
            className="bg-[#d9d9d9] px-6 py-2 text-center hover:bg-gray-300 transition-colors"
            onClick={handleReset}
          >
            초기화
          </button>
          <button
            className="bg-[#d9d9d9] px-6 py-2 text-center hover:bg-gray-300 transition-colors"
            onClick={handleSave}
          >
            저장
          </button>
        </div>
      </div>

      {/* Right section - Script navigator and editor */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        {/* Script navigator */}
        <ScriptNavigator
          scripts={scripts}
          currentTime={currentTime}
          onScriptSelect={handleScriptSelect}
          onSeek={handleSeek}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          totalDuration={videoRef.current?.duration || 0}
          deletedSegments={deletedSegments}
        />

        {/* Script editor */}
        <ScriptEditor
          selectedScript={selectedScript}
          onUpdate={handleScriptUpdate}
          onDelete={handleScriptDelete}
          onCancel={() => setSelectedScript(null)}
        />
      </div>
    </main>
  )
}
