"use client";

import { useMemo } from "react";
import { useTokenStream } from "@/hooks/use-token-stream";
import type { Token } from "@/lib/types";
import { TokenColumn } from "./token-column";
import { TokenDashboardSkeleton } from "./token-dashboard-skeleton";

export function TokenDashboard() {
  const { tokens, isLoading, error } = useTokenStream();

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

  if (error) {
    // Let the nearest error boundary handle it
    throw error;
  }

  if (isLoading) {
    return <TokenDashboardSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <TokenColumn title="New Pairs" tokens={newPairs} />
      <TokenColumn title="Final Stretch" tokens={finalStretch} />
      <TokenColumn title="Migrated" tokens={migrated} />
    </div>
  );
}
