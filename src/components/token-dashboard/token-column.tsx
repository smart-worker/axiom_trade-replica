"use client";

import type { Token } from "@/lib/types";
import { TokenCard } from "./token-card";
import { usePrevious } from "@/hooks/use-previous";
import { useMemo } from "react";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
}

export function TokenColumn({ title, tokens }: TokenColumnProps) {
  const prevTokens = usePrevious(tokens);

  const prevTokensMap = useMemo(() => {
    if (!prevTokens) return new Map<string, Token>();
    return new Map(prevTokens.map((t) => [t.id, t]));
  }, [prevTokens]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="flex flex-col gap-3">
        {tokens.map((token) => (
          <TokenCard
            key={token.id}
            token={token}
            prevToken={prevTokensMap.get(token.id)}
          />
        ))}
      </div>
    </div>
  );
}
