"use client"

import { useState, useEffect, SetStateAction } from "react"
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

export default function Home() {
  const [students, setStudents] = useState<Student[]>([])
  const [initialStudentsDataFromApi, setInitialStudentsDataFromApi] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0)

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/text-recognition/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data: Student[] = await response.json();
        setStudents(JSON.parse(JSON.stringify(data))); 
        setInitialStudentsDataFromApi(JSON.parse(JSON.stringify(data)));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Get current student
  const currentStudent = students.length > 0 ? students[currentStudentIndex] : null;

  // Reset scores to initial values for current student
  const handleResetScores = () => {
    if (!currentStudent || initialStudentsDataFromApi.length === 0) return;

    setStudents((prevStudents) => {
      const newStudents = JSON.parse(JSON.stringify(prevStudents));
      const originalStudentData = initialStudentsDataFromApi.find(s => s.id === currentStudent.id);
      if (originalStudentData) {
        newStudents[currentStudentIndex].scores = JSON.parse(JSON.stringify(originalStudentData.scores));
      }
      return newStudents;
    });
  }

  // Apply modifications to scores for current student
  const handleApplyModifications = () => {
    if (!currentStudent) return;
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
  const updateScores = (newScoresInput: SetStateAction<Score[]>) => {
    if (!currentStudent) return;
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents]
      const currentScores = newStudents[currentStudentIndex].scores
      // newScoresInput이 함수이면 실행, 아니면 직접 사용
      const updatedScores = typeof newScoresInput === 'function'
        ? newScoresInput(currentScores)
        : newScoresInput
      newStudents[currentStudentIndex].scores = updatedScores
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
    if (students.length > 0 && currentStudentIndex < students.length - 1) {
      setCurrentStudentIndex(currentStudentIndex + 1)
    }
  }

  // Handle student selection
  const handleStudentSelect = (index: number) => {
    setCurrentStudentIndex(index)
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading student scores...</div>;
  }

  if (!currentStudent) {
    return <div className="flex justify-center items-center h-screen">No student data available.</div>;
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
          setRows={updateScores}
          studentName={currentStudent.name}
        />
        <div className="flex gap-4 items-end">
          <ActionButtons
            onResetScores={handleResetScores}
            onApplyModifications={handleApplyModifications}
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={currentStudentIndex > 0}
            canGoNext={students.length > 0 && currentStudentIndex < students.length - 1}
          />
        </div>
      </div>
    </div>
  )
} 