"use client"

import { useState, useRef, useEffect } from "react"
import { PDFViewer } from "@/components/pdf-viewer"
import { SummaryPanel } from "@/components/summary-panel"
import { Header } from "@/components/header"

// 샘플 PDF 파일 데이터
const sampleFiles = [
  {
    id: 1,
    name: "20250304.lecture.MSE intro (005).pdf",
    pages: 10,
    summary:
      "이 문서는 재료공학 입문 세미나에 대한 내용을 담고 있습니다. 재료과학의 기본 개념과 공학적 응용에 대해 설명하며, 다양한 재료의 특성과 활용 방안을 소개합니다.",
    pageSummaries: [
      "전체 문서 요약: 재료공학의 기초 개념과 응용 분야에 대한 종합적인 소개를 제공합니다.",
      "1페이지: 세미나 제목과 발표자 정보가 포함된 표지 페이지입니다.",
      "2페이지: 재료공학의 정의와 중요성에 대해 설명합니다.",
      "3페이지: 금속, 세라믹, 폴리머, 복합재료 등 다양한 재료 유형을 소개합니다.",
      "4페이지: 재료의 구조와 특성 간의 관계에 대해 설명합니다.",
      "5페이지: 재료 특성 평가 방법에 대해 설명합니다.",
      "6페이지: 재료 가공 및 제조 기술을 소개합니다.",
      "7페이지: 재료공학의 최신 연구 동향을 소개합니다.",
      "8페이지: 재료공학의 산업적 응용 사례를 제시합니다.",
      "9페이지: 재료공학 분야의 미래 전망에 대해 논의합니다.",
      "10페이지: 참고문헌 및 추가 학습 자료를 제공합니다.",
    ],
    modificationLogs: [
      ["2025-03-01: 문서 초안 작성", "2025-03-02: 재료 특성 섹션 보완"], // 전체 문서
      ["2025-03-01: 표지 페이지 디자인", "2025-03-04: 표지 페이지 최종 수정"], // 1페이지
      ["2025-03-01: 정의 섹션 작성", "2025-03-02: 중요성 부분 보완"], // 2페이지
      ["2025-03-01: 재료 유형 목록 작성", "2025-03-03: 복합재료 설명 추가"], // 3페이지
      ["2025-03-01: 구조-특성 관계 설명 작성"], // 4페이지
      ["2025-03-02: 평가 방법 섹션 작성"], // 5페이지
      ["2025-03-02: 가공 기술 섹션 작성"], // 6페이지
      ["2025-03-03: 연구 동향 업데이트"], // 7페이지
      ["2025-03-03: 응용 사례 추가"], // 8페이지
      ["2025-03-04: 미래 전망 섹션 작성"], // 9페이지
      ["2025-03-04: 참고문헌 목록 업데이트"], // 10페이지
    ],
  },
]

export default function Home() {
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0) // 0은 전체 요약, 1부터는 실제 페이지
  const selectedFile = sampleFiles[currentFileIndex]
  const pdfContainerRef = useRef<HTMLDivElement>(null)

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (!pdfContainerRef.current) return

      const { scrollTop, scrollHeight, clientHeight } = pdfContainerRef.current
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight)

      // 스크롤 위치에 따라 페이지 계산
      // 전체 요약 페이지(0)와 실제 페이지(1~n)를 고려
      const totalPages = selectedFile.pages + 1 // +1은 요약 페이지
      const calculatedPage = Math.min(Math.floor(scrollPercentage * totalPages), totalPages - 1)

      if (calculatedPage !== currentPage) {
        setCurrentPage(calculatedPage)
      }
    }

    const container = pdfContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [currentPage, selectedFile.pages])

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] overflow-hidden">
      <div className="sticky top-0 z-50">
        <Header
          fileName={selectedFile.name}
          currentPage={currentPage === 0 ? 1 : currentPage}
          totalPages={selectedFile.pages}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* PDF 뷰어 */}
        <div className="flex-1 flex">
          <PDFViewer file={selectedFile} currentPage={currentPage} containerRef={pdfContainerRef} />
          <SummaryPanel file={selectedFile} currentPage={currentPage} />
        </div>
      </div>
    </div>
  )
}
