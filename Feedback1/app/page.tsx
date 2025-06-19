"use client"
import { useState } from "react"

// Define student data type
type Student = {
  id: number
  name: string
  studentId: string
  department: string
  scores: number[]
  average: number
  feedback: string
}

export default function AcademicTable() {
  // Sample student data
  const students: Student[] = [
    {
      id: 1,
      name: "강혁준",
      studentId: "202#####86",
      department: "재료공학부",
      scores: [5, 4, 4, 3],
      average: 4,
      feedback: "수업이 재미 없음. 과제가 많음.",
    },
    {
      id: 2,
      name: "김민수",
      studentId: "201#####42",
      department: "컴퓨터공학과",
      scores: [3, 5, 4, 4],
      average: 4,
      feedback: "수업 내용이 어려움. 더 많은 예제 필요.",
    },
    {
      id: 3,
      name: "이지연",
      studentId: "203#####19",
      department: "경영학과",
      scores: [4, 4, 5, 5],
      average: 4.5,
      feedback: "그룹 프로젝트가 유익함. 발표 기회 더 필요.",
    },
    {
      id: 4,
      name: "박준호",
      studentId: "202#####73",
      department: "전자공학과",
      scores: [5, 5, 3, 4],
      average: 4.25,
      feedback: "실습 시간이 부족함. 이론 설명 좋음.",
    },
    {
      id: 5,
      name: "최서연",
      studentId: "201#####65",
      department: "화학공학과",
      scores: [4, 3, 5, 4],
      average: 4,
      feedback: "과제 피드백이 부족함. 강의 내용 좋음.",
    },
    {
      id: 6,
      name: "정도현",
      studentId: "203#####28",
      department: "기계공학과",
      scores: [3, 4, 4, 5],
      average: 4,
      feedback: "실험 장비 부족. 교수님 설명 명확함.",
    },
    {
      id: 7,
      name: "한소희",
      studentId: "202#####91",
      department: "건축학과",
      scores: [5, 5, 4, 3],
      average: 4.25,
      feedback: "프로젝트 기간 짧음. 수업 자료 유익함.",
    },
    {
      id: 8,
      name: "윤재민",
      studentId: "201#####37",
      department: "산업공학과",
      scores: [4, 3, 3, 5],
      average: 3.75,
      feedback: "팀 활동 많음. 개인 과제 어려움.",
    },
  ]

  // State for analysis results
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [averages, setAverages] = useState<number[]>([0, 0, 0, 0, 0])
  const [keywordAnalysis, setKeywordAnalysis] = useState("")

  // Calculate averages and analyze feedback
  const performAnalysis = () => {
    // Calculate average for each column
    const columnAverages = [0, 0, 0, 0, 0]

    // Calculate sum for each column (1번, 2번, 3번, 4번)
    students.forEach((student) => {
      student.scores.forEach((score, index) => {
        columnAverages[index] += score
      })
      // Add to the average column sum
      columnAverages[4] += student.average
    })

    // Calculate averages
    for (let i = 0; i < columnAverages.length; i++) {
      columnAverages[i] = Number.parseFloat((columnAverages[i] / students.length).toFixed(1))
    }

    setAverages(columnAverages)

    // Simple keyword analysis from feedback
    const feedbacks = students.map((s) => s.feedback)
    const keywords = ["재미", "어려움", "부족", "유익", "많음", "좋음"]
    const keywordCounts: Record<string, number> = {}

    keywords.forEach((keyword) => {
      keywordCounts[keyword] = feedbacks.filter((f) => f.includes(keyword)).length
    })

    // Create analysis text
    const analysisText = `주요 키워드: ${Object.entries(keywordCounts)
      .filter(([_, count]) => count > 0)
      .map(([keyword, count]) => `${keyword}(${count})`)
      .join(", ")}. 전반적으로 과제량과 수업 난이도에 대한 의견이 많음.`

    setKeywordAnalysis(analysisText)
    setShowAnalysis(true)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="overflow-x-auto">
        <div className="h-[300px] overflow-y-auto border border-gray-300">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="border border-gray-300 p-2 text-center">순번</th>
                <th className="border border-gray-300 p-2 text-center">이름</th>
                <th className="border border-gray-300 p-2 text-center">학번</th>
                <th className="border border-gray-300 p-2 text-center">학과</th>
                <th className="border border-gray-300 p-2 text-center">1번</th>
                <th className="border border-gray-300 p-2 text-center">2번</th>
                <th className="border border-gray-300 p-2 text-center">3번</th>
                <th className="border border-gray-300 p-2 text-center">4번</th>
                <th className="border border-gray-300 p-2 text-center">평균</th>
                <th className="border border-gray-300 p-2 text-center">피드백</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="bg-white">
                  <td className="border border-gray-300 p-2 text-center">{student.id}</td>
                  <td className="border border-gray-300 p-2 text-center">{student.name}</td>
                  <td className="border border-gray-300 p-2 text-center">{student.studentId}</td>
                  <td className="border border-gray-300 p-2 text-center">{student.department}</td>
                  {student.scores.map((score, index) => (
                    <td key={index} className="border border-gray-300 p-2 text-center">
                      {score}
                    </td>
                  ))}
                  <td className="border border-gray-300 p-2 text-center">{student.average}</td>
                  <td className="border border-gray-300 p-2 text-center">{student.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 flex">
        <button
          onClick={performAnalysis}
          className="bg-[#d9d9d9] p-2 flex items-center justify-center w-24 hover:bg-gray-300 transition-colors cursor-pointer"
        >
          <span>
            분석
            <br />
            버튼
          </span>
        </button>
        <div className="flex-1">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2 text-center w-[150px]">학목별 평균</td>
                {showAnalysis ? (
                  <>
                    {averages.map((avg, index) => (
                      <td key={index} className="border border-gray-300 p-2 text-center w-[50px]">
                        {avg}
                      </td>
                    ))}
                    <td className="border border-gray-300 p-2 text-center">{keywordAnalysis}</td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-300 p-2 text-center w-[50px]">-</td>
                    <td className="border border-gray-300 p-2 text-center w-[50px]">-</td>
                    <td className="border border-gray-300 p-2 text-center w-[50px]">-</td>
                    <td className="border border-gray-300 p-2 text-center w-[50px]">-</td>
                    <td className="border border-gray-300 p-2 text-center w-[50px]">-</td>
                    <td className="border border-gray-300 p-2 text-center">분석 버튼을 클릭하세요</td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
