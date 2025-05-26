"use client"
import { useState, useEffect } from "react"

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
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State for analysis results
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [averages, setAverages] = useState<number[]>([0, 0, 0, 0, 0])
  const [keywordAnalysis, setKeywordAnalysis] = useState("")

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/feedback/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data: Student[] = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
        // 실제 앱에서는 사용자에게 오류 메시지를 보여주는 처리 추가
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Calculate averages and analyze feedback
  const performAnalysis = () => {
    if (students.length === 0) {
      alert("학생 데이터가 없습니다.");
      return;
    }
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

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 text-center">Loading students data...</div>;
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