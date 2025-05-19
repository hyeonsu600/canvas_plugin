"use client"

import { useState, useEffect } from "react"
import type { Script } from "@/types/script"

interface ScriptEditorProps {
  selectedScript: Script | null
  onUpdate: (script: Script) => void
  onDelete: (scriptId: number) => void
  onCancel: () => void
}

export default function ScriptEditor({ selectedScript, onUpdate, onDelete, onCancel }: ScriptEditorProps) {
  const [editText, setEditText] = useState("")

  // Update edit text when selected script changes
  useEffect(() => {
    if (selectedScript) {
      setEditText(selectedScript.text)
    } else {
      setEditText("")
    }
  }, [selectedScript])

  // Handle update
  const handleUpdate = () => {
    if (selectedScript) {
      onUpdate({
        ...selectedScript,
        text: editText,
      })
    }
  }

  // Handle delete
  const handleDelete = () => {
    if (selectedScript) {
      if (window.confirm("이 스크립트와 해당 비디오 부분을 삭제하시겠습니까?")) {
        onDelete(selectedScript.id)
      }
    }
  }

  return (
    <div className="border border-[#111111] rounded-md">
      <div className="p-4 flex flex-col gap-4">
        <textarea
          className="border border-[#111111] rounded-md p-3 w-full min-h-[100px] resize-none"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder={selectedScript ? "" : "스크립트를 선택하세요"}
          disabled={!selectedScript}
        />
      </div>
      <div className="flex justify-end gap-2 p-2">
        <button
          className={`px-4 py-1 text-center ${
            selectedScript ? "bg-[#d9d9d9] hover:bg-gray-300" : "bg-gray-200 cursor-not-allowed"
          } transition-colors`}
          onClick={handleUpdate}
          disabled={!selectedScript}
        >
          수정
        </button>
        <button
          className={`px-4 py-1 text-center ${
            selectedScript ? "bg-[#d9d9d9] hover:bg-gray-300" : "bg-gray-200 cursor-not-allowed"
          } transition-colors`}
          onClick={handleDelete}
          disabled={!selectedScript}
        >
          삭제
        </button>
        <button
          className={`px-4 py-1 text-center ${
            selectedScript ? "bg-[#d9d9d9] hover:bg-gray-300" : "bg-gray-200 cursor-not-allowed"
          } transition-colors`}
          onClick={onCancel}
          disabled={!selectedScript}
        >
          취소
        </button>
      </div>
    </div>
  )
}
