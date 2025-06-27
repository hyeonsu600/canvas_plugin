"use client"

import type React from "react"

type Row = {
  id: number
  problem: string
  score: number
  modified: number
}

type ScoreTableProps = {
  rows: Row[]
  setRows: React.Dispatch<React.SetStateAction<Row[]>>
}

export function ScoreTable({ rows, setRows }: ScoreTableProps) {
  // Calculate totals
  const totalScore = rows.reduce((sum, row) => sum + row.score, 0)
  const totalModified = rows.reduce((sum, row) => sum + row.modified, 0)

  // Handle modification input change
  const handleModifiedChange = (id: number, value: string) => {
    const numValue = Number.parseInt(value) || 0
    setRows(rows.map((row) => (row.id === id ? { ...row, modified: numValue } : row)))
  }

  return (
    <div className="border border-[#d9d9d9] flex flex-col" style={{ width: "400px" }}>
      {/* Fixed header */}
      <div className="border-b border-[#d9d9d9]">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="border-r border-[#d9d9d9] p-2 font-medium bg-white" style={{ width: "33%" }}>
                문제
              </th>
              <th className="border-r border-[#d9d9d9] p-2 font-medium bg-white" style={{ width: "33%" }}>
                점수
              </th>
              <th className="p-2 font-medium bg-white" style={{ width: "33%" }}>
                수정
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Scrollable body */}
      <div className="overflow-y-auto flex-grow" style={{ maxHeight: "200px" }}>
        <table className="w-full text-center">
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border-r border-b border-[#d9d9d9] p-2" style={{ width: "33%" }}>
                  {row.problem}
                </td>
                <td className="border-r border-b border-[#d9d9d9] p-2" style={{ width: "33%" }}>
                  {row.score}
                </td>
                <td className="border-b border-[#d9d9d9] p-2" style={{ width: "33%" }}>
                  <input
                    type="number"
                    value={row.modified}
                    onChange={(e) => handleModifiedChange(row.id, e.target.value)}
                    className="w-full text-center border border-gray-300 rounded p-1"
                    min="0"
                    max="10"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fixed footer */}
      <div className="border-t border-[#d9d9d9]">
        <table className="w-full text-center">
          <tbody>
            <tr>
              <td className="border-r border-[#d9d9d9] p-2" style={{ width: "33%" }}>
                합계
              </td>
              <td className="border-r border-[#d9d9d9] p-2" style={{ width: "33%" }}>
                {totalScore}
              </td>
              <td className="p-2" style={{ width: "33%" }}>
                {totalModified}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
