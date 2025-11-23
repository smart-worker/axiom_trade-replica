"use client";

import { Zap } from "lucide-react";
import type { Token } from "@/lib/types";
import { TokenCard } from "./token-card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontalIcon } from "../icons";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FilterModal } from "./filter-modal";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
  type: "new" | "final-stretch" | "migrated";
  isMobile?: boolean;
}

export function TokenColumn({
  title,
  tokens,
  type,
  isMobile = false,
}: TokenColumnProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      {!isMobile && (
        <div className="flex items-center justify-between border-b border-border px-4 py-1.5">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 rounded-full border border-border p-0.5 pr-2">
              <div className="flex items-center gap-1 text-xs">
                <Zap className="h-3.5 w-3.5" />
                <span>0</span>
              </div>
              <div className="h-2 w-6 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
              <div className="flex items-center text-xs font-medium">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto px-1.5 py-0 text-xs text-blue-400"
                >
                  P1
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto px-1.5 py-0 text-xs text-muted-foreground"
                >
                  P2
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto px-1.5 py-0 text-xs text-muted-foreground"
                >
                  P3
                </Button>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground"
                >
                  <SlidersHorizontalIcon className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <FilterModal />
            </Dialog>
          </div>
        </div>
      )}
      <div className="thin-scrollbar flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {tokens.map((token) => (
            <div key={token.id} className="border-b border-border">
              <TokenCard token={token} type={type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
