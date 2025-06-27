"use client"

import { useState, useRef, useEffect } from "react"
import VideoPlayer from "@/components/video-player"
import ScriptNavigator from "@/components/script-navigator"
import ScriptEditor from "@/components/script-editor"
import type { Script } from "@/types/script"

export default function Home() {
  const [scripts, setScripts] = useState<Script[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const originalScripts = useRef<Script[]>([])

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

  useEffect(() => {
    const fetchScripts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/video-edit/scenes');
        if (!response.ok) {
          throw new Error('Failed to fetch scripts');
        }
        const data: Script[] = await response.json();
        setScripts(JSON.parse(JSON.stringify(data)));
        originalScripts.current = JSON.parse(JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScripts();
  }, []);

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
    setScripts(JSON.parse(JSON.stringify(originalScripts.current)))
    setSelectedScript(null)
    setDeletedSegments([]) // Clear deleted segments
  }

  // Handle save
  const handleSave = () => {
    // In a real app, this would save to a database or API
    originalScripts.current = JSON.parse(JSON.stringify(scripts))
    // Also save the deleted segments as the new baseline
    alert("변경 사항이 저장되었습니다.")
  }

  if (isLoading) {
    return <div className="container mx-auto p-4 text-center">Loading video scripts...</div>;
  }
  
  // videoRef.current?.duration이 없을 경우 scripts 기반으로 totalDuration 계산
  const totalDuration = videoRef.current?.duration || (scripts.length > 0 ? scripts[scripts.length - 1].endTime : 0);

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
          totalDuration={totalDuration}
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