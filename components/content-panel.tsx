export function ContentPanel() {
  return (
    <div className="flex-1 border border-[#d9d9d9] relative h-full bg-white">
      <div className="absolute inset-0 overflow-auto p-4">
        {/* Sample content to demonstrate scrolling */}
        <h3 className="text-lg font-bold mb-4">Content Panel</h3>
        <p className="mb-4">This is a resizable and draggable content panel.</p>

        <div className="mb-4 p-3 bg-gray-100 rounded">
          <h4 className="font-medium mb-2">Sample Data</h4>
          <ul className="list-disc pl-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2">Instructions</h4>
          <p>Drag the header to move this panel. Use the handles on the edges to resize.</p>
        </div>

        {/* Additional content to force scrolling */}
        <div className="mt-8">
          <h4 className="font-medium mb-2">Additional Content</h4>
          <p className="mb-4">Scroll down to see more content...</p>

          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded">
                Content section {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
