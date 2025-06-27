"use client"

import { useState, useRef, useEffect } from "react"
import { PDFViewer } from "@/components/pdf-log/pdf-viewer"
import { SummaryPanel } from "@/components/pdf-log/summary-panel"
import { Header } from "@/components/pdf-log/header"

// PdfFileData 타입 정의
type PdfFileData = {
  id: number;
  name: string;
  pages: number;
  summary: string;
  pageSummaries: string[];
  modificationLogs: string[][];
};

// 샘플 PDF 파일 데이터 - 이 부분 삭제
// const sampleFiles = [...] 

export default function Home() {
  const [logData, setLogData] = useState<PdfFileData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0) // 0은 전체 요약, 1부터는 실제 페이지
  const pdfContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchLogData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/pdf-log/logs');
        if (!response.ok) {
          throw new Error('Failed to fetch log data');
        }
        const data: PdfFileData[] = await response.json();
        setLogData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogData();
  }, []);

  const selectedFile = !isLoading && logData.length > 0 ? logData[currentFileIndex] : null;

  // 스크롤 이벤트 처리
  useEffect(() => {
    if (!selectedFile) return; 

    const handleScroll = () => {
      if (!pdfContainerRef.current || !selectedFile) return;

      const { scrollTop, scrollHeight, clientHeight } = pdfContainerRef.current
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight)

      const totalPages = selectedFile.pages + 1 
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
  }, [currentPage, selectedFile])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen bg-[#1a1a1a] text-white">Loading PDF log data...</div>;
  }

  if (!selectedFile) {
    return <div className="flex justify-center items-center h-screen bg-[#1a1a1a] text-white">No PDF log data available.</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] overflow-hidden">
      <div className="sticky top-0 z-50">
        <Header
          fileName={selectedFile.name}
          currentPage={currentPage === 0 ? 1 : currentPage} // 현재 페이지가 0 (전체 요약)이면 1로 표시
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