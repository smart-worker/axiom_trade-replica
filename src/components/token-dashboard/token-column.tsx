"use client";

import type { Token } from "@/lib/types";
import { TokenCard } from "./token-card";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
}

export function TokenColumn({ title, tokens }: TokenColumnProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <h2 className="border-b border-border px-4 py-2 text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="thin-scrollbar flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {tokens.map((token) => (
            <div key={token.id} className="border-b border-border">
              <TokenCard token={token} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
