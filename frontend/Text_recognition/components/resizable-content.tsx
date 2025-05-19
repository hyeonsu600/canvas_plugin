"use client"

import { ContentPanel } from "@/components/content-panel"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export function ResizableContent() {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex-1">
      <ResizablePanel defaultSize={50}>
        <ContentPanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ContentPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
