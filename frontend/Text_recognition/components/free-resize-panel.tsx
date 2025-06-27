"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ContentPanel } from "./content-panel"

interface Position {
  x: number
  y: number
  width: number
  height: number
  zIndex: number
}

export function FreeResizePanel() {
  // Initialize panels with positions that are definitely visible
  const [panels, setPanels] = useState<Position[]>([
    { x: 50, y: 50, width: 400, height: 300, zIndex: 1 },
    { x: 200, y: 100, width: 400, height: 300, zIndex: 2 },
  ])

  const [activePanel, setActivePanel] = useState<number | null>(null)
  const [resizing, setResizing] = useState<boolean>(false)
  const [resizeDirection, setResizeDirection] = useState<string | null>(null)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [startSize, setStartSize] = useState({ width: 0, height: 0 })
  const [startPanelPos, setStartPanelPos] = useState({ x: 0, y: 0 })

  // Debug state to track what's happening
  const [debugInfo, setDebugInfo] = useState({
    lastAction: "None",
    resizeAttempts: 0,
    activePanel: null as number | null,
    resizeDirection: null as string | null,
  })

  const containerRef = useRef<HTMLDivElement>(null)

  // Handle panel activation (bring to front)
  const activatePanel = (index: number) => {
    setPanels((prevPanels) => {
      const newPanels = [...prevPanels]
      const maxZ = Math.max(...newPanels.map((p) => p.zIndex))
      newPanels[index] = { ...newPanels[index], zIndex: maxZ + 1 }
      return newPanels
    })
    setActivePanel(index)
    setDebugInfo((prev) => ({ ...prev, activePanel: index }))
  }

  // Start dragging the panel
  const startDrag = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    activatePanel(index)
    setStartPos({ x: e.clientX, y: e.clientY })
    setStartPanelPos({ x: panels[index].x, y: panels[index].y })

    // Use window events instead of document for better capture
    window.addEventListener("mousemove", handleDrag)
    window.addEventListener("mouseup", stopDrag)

    setDebugInfo((prev) => ({ ...prev, lastAction: "Started Drag" }))
  }

  // Handle panel dragging
  const handleDrag = (e: MouseEvent) => {
    if (activePanel === null) return

    const deltaX = e.clientX - startPos.x
    const deltaY = e.clientY - startPos.y

    setPanels((prevPanels) => {
      const newPanels = [...prevPanels]
      newPanels[activePanel] = {
        ...newPanels[activePanel],
        x: startPanelPos.x + deltaX,
        y: startPanelPos.y + deltaY,
      }
      return newPanels
    })

    setDebugInfo((prev) => ({ ...prev, lastAction: "Dragging" }))
  }

  // Start resizing the panel - completely revised
  const startResize = (e: React.MouseEvent, index: number, direction: string) => {
    // Prevent default and stop propagation to avoid interference
    e.preventDefault()
    e.stopPropagation()

    // Activate the panel and set up resize state
    activatePanel(index)
    setResizing(true)
    setResizeDirection(direction)

    // Store initial positions and sizes
    setStartPos({ x: e.clientX, y: e.clientY })
    setStartSize({
      width: panels[index].width,
      height: panels[index].height,
    })
    setStartPanelPos({
      x: panels[index].x,
      y: panels[index].y,
    })

    // Use window events for better capture
    window.addEventListener("mousemove", handleResize)
    window.addEventListener("mouseup", stopResize)

    // Update debug info
    setDebugInfo((prev) => ({
      ...prev,
      lastAction: `Started Resize: ${direction}`,
      resizeAttempts: prev.resizeAttempts + 1,
      resizeDirection: direction,
    }))

    console.log(`Resize started: ${direction}, panel: ${index}`)
  }

  // Handle panel resizing - completely revised
  const handleResize = (e: MouseEvent) => {
    // Early return if we're not in resize mode
    if (activePanel === null || !resizeDirection) return

    // Calculate the delta from the start position
    const deltaX = e.clientX - startPos.x
    const deltaY = e.clientY - startPos.y

    console.log(`Resizing: ${resizeDirection}, deltaX: ${deltaX}, deltaY: ${deltaY}`)

    setPanels((prevPanels) => {
      const newPanels = [...prevPanels]
      const panel = { ...newPanels[activePanel] }

      // Handle different resize directions
      switch (resizeDirection) {
        case "e": // East (right)
          panel.width = Math.max(100, startSize.width + deltaX)
          break
        case "s": // South (bottom)
          panel.height = Math.max(100, startSize.height + deltaY)
          break
        case "se": // Southeast (bottom-right corner)
          panel.width = Math.max(100, startSize.width + deltaX)
          panel.height = Math.max(100, startSize.height + deltaY)
          break
        case "w": // West (left)
          const newWidth = Math.max(100, startSize.width - deltaX)
          panel.x = startPanelPos.x + (startSize.width - newWidth)
          panel.width = newWidth
          break
        case "n": // North (top)
          const newHeight = Math.max(100, startSize.height - deltaY)
          panel.y = startPanelPos.y + (startSize.height - newHeight)
          panel.height = newHeight
          break
        case "sw": // Southwest (bottom-left corner)
          const swWidth = Math.max(100, startSize.width - deltaX)
          panel.x = startPanelPos.x + (startSize.width - swWidth)
          panel.width = swWidth
          panel.height = Math.max(100, startSize.height + deltaY)
          break
        case "ne": // Northeast (top-right corner)
          panel.width = Math.max(100, startSize.width + deltaX)
          const neHeight = Math.max(100, startSize.height - deltaY)
          panel.y = startPanelPos.y + (startSize.height - neHeight)
          panel.height = neHeight
          break
        case "nw": // Northwest (top-left corner)
          const nwWidth = Math.max(100, startSize.width - deltaX)
          panel.x = startPanelPos.x + (startSize.width - nwWidth)
          panel.width = nwWidth
          const nwHeight = Math.max(100, startSize.height - deltaY)
          panel.y = startPanelPos.y + (startSize.height - nwHeight)
          panel.height = nwHeight
          break
      }

      newPanels[activePanel] = panel
      return newPanels
    })

    setDebugInfo((prev) => ({ ...prev, lastAction: `Resizing: ${resizeDirection}` }))
  }

  // Stop dragging
  const stopDrag = () => {
    window.removeEventListener("mousemove", handleDrag)
    window.removeEventListener("mouseup", stopDrag)
    setDebugInfo((prev) => ({ ...prev, lastAction: "Stopped Drag" }))
  }

  // Stop resizing - revised
  const stopResize = () => {
    console.log("Resize stopped")
    setResizing(false)
    setResizeDirection(null)
    window.removeEventListener("mousemove", handleResize)
    window.removeEventListener("mouseup", stopResize)
    setDebugInfo((prev) => ({
      ...prev,
      lastAction: "Stopped Resize",
      resizeDirection: null,
    }))
  }

  // Clean up event listeners
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleDrag)
      window.removeEventListener("mouseup", stopDrag)
      window.removeEventListener("mousemove", handleResize)
      window.removeEventListener("mouseup", stopResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        backgroundColor: "rgba(200, 200, 200, 0.1)",
        border: "1px dashed #ccc",
      }}
    >
      {/* Debug info */}
      <div className="absolute top-0 left-0 p-2 text-xs text-gray-500 z-[2000]">
        <div>Panels: {panels.length}</div>
        <div>Last Action: {debugInfo.lastAction}</div>
        <div>Active Panel: {debugInfo.activePanel !== null ? debugInfo.activePanel : "None"}</div>
        <div>Resize Direction: {debugInfo.resizeDirection || "None"}</div>
        <div>Resize Attempts: {debugInfo.resizeAttempts}</div>
      </div>

      {panels.map((panel, index) => (
        <div
          key={index}
          className="absolute border-2 border-blue-500 bg-white shadow-lg"
          style={{
            left: `${panel.x}px`,
            top: `${panel.y}px`,
            width: `${panel.width}px`,
            height: `${panel.height}px`,
            zIndex: panel.zIndex + 1000,
          }}
        >
          {/* Header for dragging - make it more visible */}
          <div
            className="h-8 bg-blue-500 cursor-move flex items-center justify-between px-3"
            onMouseDown={(e) => startDrag(e, index)}
          >
            <span className="text-white font-medium">Panel {index + 1}</span>
            <div className="w-20 h-2 bg-white rounded-full"></div>
          </div>

          {/* Content */}
          <div className="h-[calc(100%-32px)] overflow-hidden">
            <ContentPanel />
          </div>

          {/* Resize handles - completely revised for better usability */}
          {/* East (right) handle */}
          <div
            className="absolute right-0 top-1/2 w-6 h-20 -translate-y-1/2 cursor-e-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "e")}
          >
            <div className="w-1 h-10 bg-blue-500"></div>
          </div>

          {/* South (bottom) handle */}
          <div
            className="absolute bottom-0 left-1/2 h-6 w-20 -translate-x-1/2 cursor-s-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "s")}
          >
            <div className="w-10 h-1 bg-blue-500"></div>
          </div>

          {/* Southeast (bottom-right) handle */}
          <div
            className="absolute bottom-0 right-0 w-12 h-12 cursor-se-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "se")}
          >
            <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
          </div>

          {/* West (left) handle */}
          <div
            className="absolute left-0 top-1/2 w-6 h-20 -translate-y-1/2 cursor-w-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "w")}
          >
            <div className="w-1 h-10 bg-blue-500"></div>
          </div>

          {/* North (top) handle */}
          <div
            className="absolute top-0 left-1/2 h-6 w-20 -translate-x-1/2 cursor-n-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "n")}
          >
            <div className="w-10 h-1 bg-blue-500"></div>
          </div>

          {/* Southwest (bottom-left) handle */}
          <div
            className="absolute bottom-0 left-0 w-12 h-12 cursor-sw-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "sw")}
          >
            <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
          </div>

          {/* Northeast (top-right) handle */}
          <div
            className="absolute top-0 right-0 w-12 h-12 cursor-ne-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "ne")}
          >
            <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
          </div>

          {/* Northwest (top-left) handle */}
          <div
            className="absolute top-0 left-0 w-12 h-12 cursor-nw-resize bg-blue-200 opacity-70 hover:opacity-100 border border-blue-500 flex items-center justify-center"
            onMouseDown={(e) => startResize(e, index, "nw")}
          >
            <div className="w-4 h-4 bg-blue-500 transform rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
