"use client";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SharedSettings } from "./shared-settings";

export function MobileSettings() {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-border bg-card p-2">
      <SharedSettings />
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Bookmark className="h-4 w-4" />
      </Button>
    </div>
  );
}
