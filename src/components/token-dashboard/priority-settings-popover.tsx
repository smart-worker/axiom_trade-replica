"use client";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CoinIcon, PumpIcon, ShieldOffIcon } from "../icons";
import { PersonStandingIcon } from "lucide-react";

export function PrioritySettingsPopover({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        className="w-auto border-border bg-[#18181A] p-2"
        side="bottom"
        align="start"
      >
        <div className="flex flex-col gap-2 text-xs text-foreground">
          <div className="flex items-center gap-2">
            <PersonStandingIcon className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold">20%</span>
          </div>
          <div className="flex items-center gap-2">
            <PumpIcon className="h-4 w-4 text-yellow-400" />
            <span className="font-semibold text-yellow-400">0.001</span>
          </div>
          <div className="flex items-center gap-2">
            <CoinIcon className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold">0.01</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldOffIcon className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold">Off</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
