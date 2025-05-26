"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ContentPanel } from "./content-panel"

interface PanelProps {
  initialX: number
  initialY: number
  initialWidth: number
  initialHeight: number
  zIndex: number
  id: number
}

// Individual panel component with its own state
function Panel({ initialX, initialY, initialWidth, initialHeight, zIndex, id }: PanelProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState("")
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 })
  const [startSize, setStartSize] = useState({ width: 0, height: 0 })
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const panelRef = useRef<HTMLDivElement>(null)

  // Start dragging the panel
  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setStartPoint({ x: e.clientX, y: e.clientY })
    setStartPosition({ x: position.x, y: position.y })

    console.log(`Panel ${id}: Drag started`)
  }

  // Start resizing the panel
  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeDirection(direction)
    setStartPoint({ x: e.clientX, y: e.clientY })
    setStartSize({ width: size.width, height: size.height })
    setStartPosition({ x: position.x, y: position.y })

    console.log(`Panel ${id}: Resize started, direction: ${direction}`)
  }

  // Handle mouse movement for both dragging and resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - startPoint.x
        const deltaY = e.clientY - startPoint.y
        setPosition({
          x: startPosition.x + deltaX,
          y: startPosition.y + deltaY,
        })
      } else if (isResizing) {
        const deltaX = e.clientX - startPoint.x
        const deltaY = e.clientY - startPoint.y

        console.log(`Panel ${id}: Resizing, deltaX: ${deltaX}, deltaY: ${deltaY}, direction: ${resizeDirection}`)

        switch (resizeDirection) {
          case "e": // Right
            setSize({ ...size, width: Math.max(100, startSize.width + deltaX) })
            break
          case "s": // Bottom
            setSize({ ...size, height: Math.max(100, startSize.height + deltaY) })
            break
          case "se": // Bottom-right
            setSize({
              width: Math.max(100, startSize.width + deltaX),
              height: Math.max(100, startSize.height + deltaY),
            })
            break
          case "w": // Left
            const newWidth = Math.max(100, startSize.width - deltaX)
            setSize({ ...size, width: newWidth })
            setPosition({ ...position, x: startPosition.x + startSize.width - newWidth })
            break
          case "n": // Top
            const newHeight = Math.max(100, startSize.height - deltaY)
            setSize({ ...size, height: newHeight })
            setPosition({ ...position, y: startPosition.y + startSize.height - newHeight })
            break
          case "sw": // Bottom-left
            const swWidth = Math.max(100, startSize.width - deltaX)
            setSize({
              width: swWidth,
              height: Math.max(100, startSize.height + deltaY),
            })
            setPosition({ ...position, x: startPosition.x + startSize.width - swWidth })
            break
          case "ne": // Top-right
            const neHeight = Math.max(100, startSize.height - deltaY)
            setSize({
              width: Math.max(100, startSize.width + deltaX),
              height: neHeight,
            })
            setPosition({ ...position, y: startPosition.y + startSize.height - neHeight })
            break
          case "nw": // Top-left
            const nwWidth = Math.max(100, startSize.width - deltaX)
            const nwHeight = Math.max(100, startSize.height - deltaY)
            setSize({
              width: nwWidth,
              height: nwHeight,
            })
            setPosition({
              x: startPosition.x + startSize.width - nwWidth,
              y: startPosition.y + startSize.height - nwHeight,
            })
            break
        }
      }
    }

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        console.log(`Panel ${id}: Drag ended`)
      }
      if (isResizing) {
        setIsResizing(false)
        console.log(`Panel ${id}: Resize ended`)
      }
    }

    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, startPoint, startSize, startPosition, size, position, resizeDirection, id])

  return (
    <div
      ref={panelRef}
      className="absolute border-2 border-blue-500 bg-white shadow-lg"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: zIndex + 1000,
      }}
    >
      {/* Header for dragging */}
      <div className="h-8 bg-blue-500 cursor-move flex items-center justify-between px-3" onMouseDown={handleDragStart}>
        <span className="text-white font-medium">Panel {id}</span>
        <div className="text-white text-xs">
          {Math.round(size.width)} x {Math.round(size.height)}
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-32px)] overflow-hidden">
        <ContentPanel />
      </div>

      {/* Resize handles */}
      <div
        className="absolute right-0 top-1/2 w-6 h-20 -translate-y-1/2 cursor-e-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "e")}
      >
        <div className="w-1 h-10 bg-blue-500"></div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 h-6 w-20 -translate-x-1/2 cursor-s-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "s")}
      >
        <div className="w-10 h-1 bg-blue-500"></div>
      </div>

      <div
        className="absolute bottom-0 right-0 w-12 h-12 cursor-se-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "se")}
      >
        <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
      </div>

      <div
        className="absolute left-0 top-1/2 w-6 h-20 -translate-y-1/2 cursor-w-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "w")}
      >
        <div className="w-1 h-10 bg-blue-500"></div>
      </div>

      <div
        className="absolute top-0 left-1/2 h-6 w-20 -translate-x-1/2 cursor-n-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "n")}
      >
        <div className="w-10 h-1 bg-blue-500"></div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-12 h-12 cursor-sw-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "sw")}
      >
        <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
      </div>

      <div
        className="absolute top-0 right-0 w-12 h-12 cursor-ne-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "ne")}
      >
        <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
      </div>

      <div
        className="absolute top-0 left-0 w-12 h-12 cursor-nw-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
        onMouseDown={(e) => handleResizeStart(e, "nw")}
      >
        <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
      </div>
    </div>
  )
}

// Container component that manages multiple panels
export function SimpleResizePanel() {
  const [panels] = useState([
    { id: 1, x: 50, y: 50, width: 400, height: 300, zIndex: 1 },
    { id: 2, x: 200, y: 100, width: 400, height: 300, zIndex: 2 },
  ])

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundColor: "rgba(200, 200, 200, 0.1)",
        border: "1px dashed #ccc",
      }}
    >
      <div className="absolute top-0 left-0 p-2 text-xs text-gray-500 z-[2000]">
        <div>Panels: {panels.length}</div>
        <div>Drag the header to move, use handles to resize</div>
      </div>

      {panels.map((panel) => (
        <Panel
          key={panel.id}
          id={panel.id}
          initialX={panel.x}
          initialY={panel.y}
          initialWidth={panel.width}
          initialHeight={panel.height}
          zIndex={panel.zIndex}
        />
      ))}
    </div>
  )
}
