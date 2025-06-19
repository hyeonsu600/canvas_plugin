"use client"

import { useState } from "react"

type File = {
  id: number
  name: string
  pages: number
  summary: string
  pageSummaries: string[]
  modificationLogs: string[]
}

type FileListProps = {
  files: File[]
  selectedFileId: number
  onFileSelect: (fileId: number) => void
}

export function FileList({ files, selectedFileId, onFileSelect }: FileListProps) {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="flex h-full">
      <div
        className={`border border-[#d9d9d9] overflow-y-auto flex-shrink-0 transition-all duration-300 ease-in-out bg-white ${
          isVisible ? "w-[100px]" : "w-0"
        }`}
      >
        <div className="flex items-center justify-center p-2 border-b border-[#d9d9d9] bg-[#d9d9d9]">
          <button onClick={toggleVisibility} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul>
          {files.map((file) => (
            <li
              key={file.id}
              className={`p-2 border-b border-[#d9d9d9] text-xs hover:bg-gray-100 cursor-pointer ${
                file.id === selectedFileId ? "bg-gray-200" : ""
              }`}
              onClick={() => onFileSelect(file.id)}
            >
              <div className="font-medium">{file.name}</div>
              <div className="text-gray-500">{file.pages}페이지</div>
            </li>
          ))}
        </ul>
      </div>

      {!isVisible && (
        <button
          onClick={toggleVisibility}
          className="h-10 w-10 flex items-center justify-center border border-[#d9d9d9] bg-[#d9d9d9] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}
