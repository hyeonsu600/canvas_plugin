type File = {
  id: number
  name: string
  pages: number
  summary: string
  pageSummaries: string[]
  modificationLogs: string[][]
}

type SummaryPanelProps = {
  file: File
  currentPage: number
}

export function SummaryPanel({ file, currentPage }: SummaryPanelProps) {
  // 현재 페이지에 해당하는 요약 가져오기
  const getCurrentSummary = () => {
    if (currentPage >= 0 && currentPage < file.pageSummaries.length) {
      return file.pageSummaries[currentPage]
    }
    return "요약 정보가 없습니다."
  }

  // 현재 페이지에 관련된 수정 로그 가져오기
  const getPageLogs = () => {
    if (currentPage >= 0 && currentPage < file.modificationLogs.length) {
      return file.modificationLogs[currentPage]
    }
    return []
  }

  return (
    <div className="w-[300px] bg-white border-l border-gray-300 overflow-auto p-4 flex-shrink-0">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-center">페이지 요약</h2>
        <p className="text-sm">{getCurrentSummary()}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3 text-center">수정 로그</h2>
        {getPageLogs().length > 0 ? (
          <ul className="text-sm">
            {getPageLogs().map((log, index) => (
              <li key={index} className="mb-2 pb-2 border-b border-gray-200 last:border-b-0">
                {log}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 text-center">수정 로그가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
