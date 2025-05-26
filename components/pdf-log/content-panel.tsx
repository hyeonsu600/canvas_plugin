export function ContentPanel() {
  return (
    <div className="flex-1 border border-[#d9d9d9] relative">
      <div className="absolute inset-0 overflow-auto">
        {/* Content that forces both horizontal and vertical scrollbars */}
        <div className="w-[2000px] h-[2000px] relative">
          {/* Sample content to demonstrate scrolling */}
          <div className="absolute top-0 left-0 p-4">상단 왼쪽 콘텐츠</div>
          <div className="absolute bottom-0 right-0 p-4">하단 오른쪽 콘텐츠</div>
        </div>
      </div>
    </div>
  )
}
