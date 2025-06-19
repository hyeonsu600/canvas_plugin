"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import type { Script } from "@/types/script"

interface ScriptNavigatorProps {
  scripts: Script[]
  currentTime: number
  onScriptSelect: (script: Script) => void
  onSeek: (time: number) => void
  isPlaying: boolean
  onPlayPause: () => void
  totalDuration: number
  deletedSegments?: { start: number; end: number }[]
}

export default function ScriptNavigator({
  scripts,
  currentTime,
  onScriptSelect,
  onSeek,
  isPlaying,
  onPlayPause,
  totalDuration,
  deletedSegments = [],
}: ScriptNavigatorProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Find current script based on time
  const currentScript = scripts.find((script) => currentTime >= script.startTime && currentTime < script.endTime)

  // Update scroll position when current time changes
  useEffect(() => {
    if (totalDuration > 0) {
      const newPosition = (currentTime / totalDuration) * 100
      setScrollPosition(newPosition)
    }
  }, [currentTime, totalDuration])

  // Handle scroll bar drag
  const handleScrollChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = Number.parseFloat(e.target.value)
    setScrollPosition(newPosition)

    // Calculate new time based on scroll position
    const newTime = (newPosition / 100) * totalDuration

    // Seek to the new time
    onSeek(newTime)

    // Find script at this position
    const scriptAtPosition = scripts.find((script) => newTime >= script.startTime && newTime < script.endTime)

    if (scriptAtPosition) {
      onScriptSelect(scriptAtPosition)
    }
  }

  return (
    <div className="border border-[#111111] rounded-md flex flex-col">
      <div className="p-4 flex flex-col gap-4 flex-grow">
        {/* Script container */}
        <div ref={containerRef} className="max-h-60 overflow-y-auto flex flex-col gap-2">
          {scripts.map((script) => (
            <div
              key={script.id}
              className={`border border-[#111111] rounded-md p-3 cursor-pointer ${
                currentScript?.id === script.id ? "bg-gray-100" : ""
              }`}
              onClick={() => onScriptSelect(script)}
            >
              <div className="text-xs text-gray-500 mb-1">
                {formatTime(script.startTime)} - {formatTime(script.endTime)}
              </div>
              <div className="text-center">{script.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#d9d9d9] p-3 text-center relative">
        {/* Navigation bar with controls */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm">{formatTime(currentTime)}</div>
          <button
            onClick={onPlayPause}
            className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-colors"
          >
            {isPlaying ? (
              <>
                <span className="sr-only">일시정지</span>
                <Pause size={16} />
              </>
            ) : (
              <>
                <span className="sr-only">재생</span>
                <Play size={16} />
              </>
            )}
          </button>
          <div className="text-sm">{formatTime(totalDuration)}</div>
        </div>

        {/* Interactive timeline */}
        <div
          className="h-4 bg-gray-300 rounded relative cursor-pointer mb-1"
          onClick={(e) => {
            if (!containerRef.current) return
            const rect = e.currentTarget.getBoundingClientRect()
            const clickPosition = (e.clientX - rect.left) / rect.width
            const newTime = clickPosition * totalDuration
            onSeek(newTime)
          }}
        >
          {/* Draw deleted segments */}
          {deletedSegments.map((segment, index) => {
            const startPercent = (segment.start / totalDuration) * 100
            const widthPercent = ((segment.end - segment.start) / totalDuration) * 100
            return (
              <div
                key={index}
                className="absolute top-0 h-full bg-red-500 opacity-50"
                style={{
                  left: `${startPercent}%`,
                  width: `${widthPercent}%`,
                }}
              />
            )
          })}

          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-l"
            style={{ width: `${scrollPosition}%` }}
          ></div>
          <div
            className="absolute top-0 h-full w-2 bg-white border border-gray-400 rounded-full transform -translate-x-1/2"
            style={{ left: `${scrollPosition}%` }}
          ></div>
        </div>

        <div className="text-sm">네비게이션 바</div>
      </div>
    </div>
  )
}

// Helper function to format time in MM:SS format
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}
