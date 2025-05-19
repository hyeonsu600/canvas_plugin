"use client"

import { useState } from "react"
import { List } from "@/components/list"
import { ScoreTable } from "@/components/score-table"
import { ActionButtons } from "@/components/action-buttons"
import { SimpleResizePanel } from "@/components/simple-resize-panel"

// Define types for our data
type Score = {
  id: number
  problem: string
  score: number
  modified: number
}

type Student = {
  id: string
  name: string
  scores: Score[]
}

// Sample student data with individual scores
const initialStudents: Student[] = [
  {
    id: "202####386",
    name: "김희준",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 10, modified: 10 },
      { id: 3, problem: "3번", score: 9, modified: 10 },
      { id: 4, problem: "4번", score: 0, modified: 5 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####387",
    name: "이민수",
    scores: [
      { id: 1, problem: "1번", score: 8, modified: 8 },
      { id: 2, problem: "2번", score: 7, modified: 7 },
      { id: 3, problem: "3번", score: 10, modified: 10 },
      { id: 4, problem: "4번", score: 9, modified: 9 },
      { id: 5, problem: "5번", score: 6, modified: 6 },
    ],
  },
  {
    id: "202####388",
    name: "박지영",
    scores: [
      { id: 1, problem: "1번", score: 9, modified: 9 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 7, modified: 7 },
    ],
  },
  {
    id: "202####389",
    name: "최현우",
    scores: [
      { id: 1, problem: "1번", score: 6, modified: 6 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 7, modified: 7 },
      { id: 4, problem: "4번", score: 9, modified: 9 },
      { id: 5, problem: "5번", score: 10, modified: 10 },
    ],
  },
  {
    id: "202####390",
    name: "정수민",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 6, modified: 6 },
    ],
  },
  {
    id: "202####391",
    name: "강태호",
    scores: [
      { id: 1, problem: "1번", score: 7, modified: 7 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####392",
    name: "윤서연",
    scores: [
      { id: 1, problem: "1번", score: 9, modified: 9 },
      { id: 2, problem: "2번", score: 10, modified: 10 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 9, modified: 9 },
    ],
  },
  {
    id: "202####393",
    name: "임준호",
    scores: [
      { id: 1, problem: "1번", score: 8, modified: 8 },
      { id: 2, problem: "2번", score: 7, modified: 7 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 8, modified: 8 },
    ],
  },
  {
    id: "202####394",
    name: "한미래",
    scores: [
      { id: 1, problem: "1번", score: 10, modified: 10 },
      { id: 2, problem: "2번", score: 9, modified: 9 },
      { id: 3, problem: "3번", score: 8, modified: 8 },
      { id: 4, problem: "4번", score: 7, modified: 7 },
      { id: 5, problem: "5번", score: 9, modified: 9 },
    ],
  },
  {
    id: "202####395",
    name: "송지원",
    scores: [
      { id: 1, problem: "1번", score: 7, modified: 7 },
      { id: 2, problem: "2번", score: 8, modified: 8 },
      { id: 3, problem: "3번", score: 9, modified: 9 },
      { id: 4, problem: "4번", score: 10, modified: 10 },
      { id: 5, problem: "5번", score: 7, modified: 7 },
    ],
  },
]

export default function Home() {
  // Create a deep copy of initialStudents to avoid reference issues
  const [students, setStudents] = useState<Student[]>(JSON.parse(JSON.stringify(initialStudents)))
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0)

  // Get current student
  const currentStudent = students[currentStudentIndex]

  // Reset scores to initial values for current student
  const handleResetScores = () => {
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents]
      // Create a deep copy of the initial scores for the current student
      newStudents[currentStudentIndex].scores = JSON.parse(JSON.stringify(initialStudents[currentStudentIndex].scores))
      return newStudents
    })
  }

  // Apply modifications to scores for current student
  const handleApplyModifications = () => {
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents]
      newStudents[currentStudentIndex].scores = newStudents[currentStudentIndex].scores.map((row) => ({
        ...row,
        score: row.modified,
      }))
      return newStudents
    })
  }

  // Update scores for current student
  const updateScores = (newScores: Score[]) => {
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents]
      newStudents[currentStudentIndex].scores = newScores
      return newStudents
    })
  }

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  // Navigate to previous student
  const handlePrevious = () => {
    if (currentStudentIndex > 0) {
      setCurrentStudentIndex(currentStudentIndex - 1)
    }
  }

  // Navigate to next student
  const handleNext = () => {
    if (currentStudentIndex < students.length - 1) {
      setCurrentStudentIndex(currentStudentIndex + 1)
    }
  }

  // Handle student selection
  const handleStudentSelect = (index: number) => {
    setCurrentStudentIndex(index)
  }

  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      <div className="flex h-[70vh] gap-4">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <List
            isVisible={sidebarVisible}
            onToggle={toggleSidebar}
            currentIndex={currentStudentIndex}
            onNavigate={handleStudentSelect}
            students={students}
          />
        </div>

        {/* Main content area with panels - ensure it has a minimum size */}
        <div className="flex-grow border border-gray-300 relative min-w-[600px] min-h-[400px]">
          <SimpleResizePanel />
        </div>
      </div>

      <div className="flex gap-4 justify-between mt-4">
        <ScoreTable
          rows={currentStudent.scores}
          setRows={(newScores) => updateScores(newScores)}
          studentName={currentStudent.name}
        />
        <div className="flex gap-4 items-end">
          <ActionButtons
            onResetScores={handleResetScores}
            onApplyModifications={handleApplyModifications}
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={currentStudentIndex > 0}
            canGoNext={currentStudentIndex < students.length - 1}
          />
        </div>
      </div>
    </div>
  )
}
