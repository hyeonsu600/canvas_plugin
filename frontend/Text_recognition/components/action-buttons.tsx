"use client"

export function ActionButtons({
  onResetScores,
  onApplyModifications,
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
}: {
  onResetScores: () => void
  onApplyModifications: () => void
  onPrevious: () => void
  onNext: () => void
  canGoPrevious?: boolean
  canGoNext?: boolean
}) {
  return (
    <div className="flex gap-2">
      <button
        className="bg-[#d9d9d9] px-6 py-3 text-center hover:bg-gray-300 transition-colors"
        onClick={onResetScores}
      >
        초기 점수
      </button>
      <button
        className="bg-[#d9d9d9] px-6 py-3 text-center hover:bg-gray-300 transition-colors"
        onClick={onApplyModifications}
      >
        수정 반영
      </button>
      <div className="flex">
        <button
          className={`bg-[#d9d9d9] px-6 py-3 text-center border-r border-[#ffffff] hover:bg-gray-300 transition-colors ${!canGoPrevious ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={onPrevious}
          disabled={!canGoPrevious}
        >
          이전
        </button>
        <button
          className={`bg-[#d9d9d9] px-6 py-3 text-center hover:bg-gray-300 transition-colors ${!canGoNext ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={onNext}
          disabled={!canGoNext}
        >
          다음
        </button>
      </div>
    </div>
  )
}
