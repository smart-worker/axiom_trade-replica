"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import type { Token } from "@/lib/types";
import { Camera } from "lucide-react";

const formatMarketCap = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)}K`;
  }
  return value.toString();
};

const formatTxCount = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}m`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}k`;
  }
  return value.toString();
};

export function TokenHoverCard({ token }: { token: Token }) {
  const googleSearchUrl = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(
    token.imageUrl
  )}`;

  return (
    <div className="flex flex-col gap-2 p-2 text-foreground">
      <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
        <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg bg-card aspect-square">
          <Image
            src={token.imageUrl}
            alt={token.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 hidden items-center justify-center rounded-md bg-black/50 group-hover:flex">
            <Camera className="h-10 w-10 text-white" />
          </div>
        </div>
      </a>

      {token.similarTokens && token.similarTokens.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm text-muted-foreground">Similar Tokens</h3>
          <div className="flex flex-col gap-2">
            {token.similarTokens.map((st, index) => (
              <React.Fragment key={st.id}>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg p-2 hover:bg-white/5">
                  <div className="relative h-8 w-8 items-center justify-center rounded-md bg-card">
                    <Image
                      src={st.imageUrl}
                      alt={st.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-bold text-foreground">
                        {st.name}
                      </span>
                      <span className="text-green-400">{st.age}</span>
                    </div>
                    <p className="text-muted-foreground">
                      TX: {formatTxCount(st.txCount)}
                    </p>
                  </div>
                  <span className="text-right text-xs font-bold text-cyan-400">
                    {formatMarketCap(st.marketCap)}
                  </span>
                </div>
                {index < token.similarTokens!.length - 1 && (
                  <Separator className="bg-border/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
