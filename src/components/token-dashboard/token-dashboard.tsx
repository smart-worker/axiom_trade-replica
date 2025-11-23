"use client";

import { useMemo } from "react";
import { useTokenStream } from "@/hooks/use-token-stream";
import { TokenColumn } from "./token-column";
import { TokenDashboardSkeleton } from "./token-dashboard-skeleton";
import { DashboardHeader } from "./dashboard-header";

export function TokenDashboard() {
  const { tokens, isLoading } = useTokenStream();

  const newPairs = useMemo(
    () =>
      tokens
        .filter((token) => token.isNew)
        .sort((a, b) => b.marketCap - a.marketCap),
    [tokens]
  );
  const finalStretch = useMemo(
    () =>
      tokens
        .filter((token) => token.isFinalStretch)
        .sort((a, b) => b.marketCap - a.marketCap),
    [tokens]
  );
  const migrated = useMemo(
    () =>
      tokens
        .filter((token) => token.isMigrated)
        .sort((a, b) => b.marketCap - a.marketCap),
    [tokens]
  );

  if (isLoading) {
    return (
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <TokenDashboardSkeleton />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <DashboardHeader />
      <div className="grid min-h-0 flex-1 grid-cols-1 border-t border-border lg:grid-cols-3">
        <div className="flex flex-col min-h-0 lg:border-r lg:border-border">
          <TokenColumn title="New Pairs" tokens={newPairs} type="new" />
        </div>
        <div className="flex flex-col min-h-0 lg:border-r lg:border-border">
          <TokenColumn
            title="Final Stretch"
            tokens={finalStretch}
            type="final-stretch"
          />
        </div>
        <div className="flex flex-col min-h-0">
          <TokenColumn title="Migrated" tokens={migrated} type="migrated" />
        </div>
      </div>
    </div>
  );
}
