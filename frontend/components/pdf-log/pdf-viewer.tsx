"use client"

import type { RefObject } from "react"

type File = {
  id: number
  name: string
  pages: number
  summary: string
  pageSummaries: string[]
  modificationLogs: string[][]
}

type PDFViewerProps = {
  file: File
  currentPage: number
  containerRef: RefObject<HTMLDivElement | null>
}

export function PDFViewer({ file, currentPage, containerRef }: PDFViewerProps) {
  // PDF 페이지 내용을 시뮬레이션하는 함수
  const getPageContent = () => {
    // 각 페이지의 높이를 동일하게 설정
    const pageHeight = "calc(100vh - 100px)"

    // 모든 페이지를 렌더링 (스크롤로 이동)
    return (
      <>
        {/* 요약 페이지 */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-8 border-b border-gray-700">
          <h1 className="text-2xl font-bold mb-6">{file.name} - 전체 요약</h1>
          <p className="text-lg mb-8">{file.summary}</p>
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">수정 로그</h2>
            <ul className="list-disc pl-5">
              {file.modificationLogs[0].map((log, index) => (
                <li key={index} className="mb-2">
                  {log}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 실제 PDF 페이지들 */}
        {Array.from({ length: file.pages }).map((_, index) => {
          const pageNum = index + 1

          // 첫 번째 페이지는 표지 페이지로 특별히 처리
          if (pageNum === 1) {
            return (
              <div
                key={pageNum}
                className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-8 border-b border-gray-700"
              >
                <div className="text-center max-w-2xl">
                  <h1 className="text-4xl font-bold mb-16">Materials Science and Engineering</h1>
                  <h2 className="text-3xl font-bold mb-16">Introductory Seminar</h2>
                  <h3 className="text-2xl mb-16">Youngeun Kim</h3>
                  <p className="text-xl">2025.03.04 lecture</p>
                  <div className="mt-32 flex justify-center">
                    <img src="/placeholder.svg?height=50&width=400" alt="서울대학교 로고" className="h-10" />
                  </div>
                </div>
              </div>
            )
          }

          // 나머지 페이지들
          return (
            <div
              key={pageNum}
              className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-8 border-b border-gray-700"
            >
              <h2 className="text-xl mb-4">페이지 {pageNum}</h2>
              <div className="border border-gray-300 rounded-lg p-10 w-3/4 h-3/4 flex items-center justify-center">
                <p className="text-gray-500">PDF 페이지 {pageNum} 내용</p>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div ref={containerRef} className="flex-1 bg-white overflow-y-auto relative">
      {getPageContent()}

      {/* 오른쪽 스크롤바 표시기 */}
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-[#f0f0f0] flex flex-col items-center">
        <div
          className="absolute bg-gray-400 w-4 rounded"
          style={{
            top: `${(currentPage / (file.pages + 1)) * 100}%`,
            height: `${100 / (file.pages + 1)}%`,
          }}
        ></div>
      </div>
    </div>
  )
}
