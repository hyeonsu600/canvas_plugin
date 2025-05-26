"use client"

export function ActionButtons({
  onResetScores,
  onApplyModifications,
}: {
  onResetScores: () => void
  onApplyModifications: () => void
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
        <button className="bg-[#d9d9d9] px-6 py-3 text-center border-r border-[#ffffff] hover:bg-gray-300 transition-colors">
          이전
        </button>
        <button className="bg-[#d9d9d9] px-6 py-3 text-center hover:bg-gray-300 transition-colors">다음</button>
      </div>
    </div>
  )
}
