"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

type Student = {
  id: string
  name: string
  scores: any[]
}

type ListProps = {
  isVisible: boolean
  onToggle: () => void
  currentIndex?: number
  onNavigate?: (index: number) => void
  students: Student[]
}

export function List({ isVisible, onToggle, currentIndex = 0, onNavigate, students }: ListProps) {
  const router = useRouter()
  const listRef = useRef<HTMLDivElement>(null)

  // Add transition effect when visibility changes
  useEffect(() => {
    if (listRef.current) {
      if (isVisible) {
        listRef.current.style.width = "100px"
        listRef.current.style.minWidth = "100px"
        listRef.current.style.opacity = "1"
      } else {
        listRef.current.style.width = "0"
        listRef.current.style.minWidth = "0"
        listRef.current.style.opacity = "0"
      }
    }
  }, [isVisible])

  const handleStudentClick = (index: number) => {
    if (onNavigate) {
      onNavigate(index)
    } else {
      // Navigate to student page
      router.push(`/student/${index}`)
    }
  }

  return (
    <div className="flex">
      <div
        ref={listRef}
        className="border border-[#d9d9d9] flex-shrink-0 transition-all duration-300 ease-in-out"
        style={{ width: isVisible ? "100px" : "0", overflow: "hidden" }}
      >
        <div className="flex items-center justify-center p-2 border-b border-[#d9d9d9] bg-[#d9d9d9]">
          <button onClick={onToggle} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* Added overflow-y-auto for scrollbar */}
        <div className="overflow-y-auto max-h-[calc(100%-40px)]">
          <ul>
            {students.map((student, index) => (
              <li
                key={index}
                className={`p-2 border-b border-[#d9d9d9] text-xs hover:bg-gray-100 cursor-pointer ${currentIndex === index ? "bg-gray-200" : ""}`}
                onClick={() => handleStudentClick(index)}
              >
                <div className="font-medium">{student.name}</div>
                <div className="text-gray-500">{student.id}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating button that appears when sidebar is collapsed */}
      {!isVisible && (
        <button
          onClick={onToggle}
          className="h-10 w-10 flex items-center justify-center border border-[#d9d9d9] bg-[#d9d9d9] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}
