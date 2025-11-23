"use client";

import React, { useState, useEffect } from "react";
import {
  BnbIcon,
  BtcIcon,
  EthIcon,
  GenericTokenIcon,
  SolIcon,
  UsdtIcon,
} from "../icons";
import { cn } from "@/lib/utils";
import type { Token } from "@/lib/types";
import { ArrowDown, ArrowUp } from "lucide-react";

interface TokenCardProps {
  token: Token;
  prevToken: Token | undefined;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const tokenIcons: { [key: string]: React.ReactNode } = {
  BTC: <BtcIcon className="h-10 w-10 text-orange-400" />,
  ETH: <EthIcon className="h-10 w-10 text-blue-400" />,
  USDT: <UsdtIcon className="h-10 w-10 text-green-500" />,
  BNB: <BnbIcon className="h-10 w-10 text-yellow-500" />,
  SOL: <SolIcon className="h-10 w-10 text-purple-400" />,
  Generic: <GenericTokenIcon className="h-10 w-10 text-gray-400" />,
};

export function TokenCard({ token, prevToken }: TokenCardProps) {
  const [priceChange, setPriceChange] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (prevToken && token.price !== prevToken.price) {
      setPriceChange(token.price > prevToken.price ? "up" : "down");
      const timer = setTimeout(() => setPriceChange(null), 1500);
      return () => clearTimeout(timer);
    }
  }, [token.price, prevToken]);

  const isPositiveChange = token.priceChange24hPercent >= 0;
  const icon = tokenIcons[token.icon] || (
    <GenericTokenIcon className="h-10 w-10 text-gray-400" />
  );

  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground p-4 transition-shadow hover:shadow-lg",
        priceChange === "up" && "animate-flash-green",
        priceChange === "down" && "animate-flash-red"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <div className="font-semibold text-foreground">{token.name}</div>
            <div className="text-xs text-muted-foreground">{token.symbol}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="font-medium tabular-nums text-foreground">
            {formatCurrency(token.marketCap)}
          </div>
          <div className="text-xs text-muted-foreground">MC</div>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div
            className={cn(
              "flex items-center gap-1 tabular-nums",
              isPositiveChange ? "text-price-up" : "text-price-down"
            )}
          >
            {isPositiveChange ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>{Math.abs(token.priceChange24hPercent).toFixed(0)}%</span>
          </div>
          <div className="text-muted-foreground">
            <span className="font-medium text-foreground">
              {formatCurrency(token.volume24h)}
            </span>
            <span className="ml-1">Vol</span>
          </div>
        </div>
        <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {formatCurrency(token.price)}
        </div>
      </div>
    </div>
  );
}
