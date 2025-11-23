"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Users,
  CandlestickChart,
  Trophy,
  Crown,
  Copy,
  Ghost,
  Zap,
  Link as LinkIcon,
  Check,
  Camera,
  EyeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Token } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  SolIcon,
  GlobeIcon,
  PillIcon,
  CubesIcon,
  SlashIcon,
  ChefHatOffIcon,
} from "../icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TokenHoverCard } from "./token-hover-card";

interface TokenCardProps {
  token: Token;
  type: "new" | "final-stretch" | "migrated";
}

const formatCurrency = (value: number) => {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }
  return `$${value.toFixed(2)}`;
};

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m16 11 2 2 4-4" />
  </svg>
);

const ChefIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 21v-2a4_4_0_0_0-4-4H8a4_4_0_0_0-4_4v2" />
    <path d="M8.5 2.5a2.5 2.5 0 0 1 5 0V5h-5V2.5z" />
  </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const tagIcons: Record<string, React.FC<any>> = {
  user: UserIcon,
  chef: ChefIcon,
  target: TargetIcon,
  ghost: Ghost,
  cubes: CubesIcon,
};

const Tag: React.FC<{
  tag: {
    icon: string;
    value: number;
    unit: string;
    color: string;
    duration?: string;
  };
}> = ({ tag }) => {
  const Icon = tagIcons[tag.icon];
  const colorClass = tag.color === "red" ? "text-red-400" : "text-green-400";
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full bg-black/20 px-2 py-0.5",
        colorClass
      )}
    >
      <Icon className="h-3 w-3" />
      <span className="text-[10px] font-semibold">
        {tag.value}
        {tag.unit}
      </span>
      {tag.duration && (
        <span className="text-[10px] text-muted-foreground">
          {tag.duration}
        </span>
      )}
    </div>
  );
};

export function TokenCard({ token, type }: TokenCardProps) {
  const borderClass = {
    new: "border-green-400",
    "final-stretch": "border-red-500",
    migrated: "border-yellow-400",
  }[type];

  const iconBgClass = {
    new: "bg-green-400",
    "final-stretch": "bg-red-500",
    migrated: "bg-yellow-400",
  }[type];

  const icon = {
    new: <LinkIcon className="h-3 w-3 text-card" strokeWidth={3} />,
    "final-stretch": <SlashIcon className="h-4 w-4 text-card" />,
    migrated: <Check className="h-3 w-3 text-card" strokeWidth={3} />,
  }[type];

  return (
    <div className="group bg-card p-3 font-body hover:bg-accent/50">
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-start gap-3">
        {/* Left Section */}
        <div className="relative flex flex-col items-center gap-1.5">
          <div className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-0.5 group-hover:flex">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 bg-card/80 text-muted-foreground hover:bg-transparent hover:text-blue-500 backdrop-blur-sm"
            >
              <EyeOff className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 bg-card/80 text-muted-foreground hover:bg-transparent hover:text-blue-500 backdrop-blur-sm"
            >
              <ChefHatOffIcon className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 bg-card/80 text-muted-foreground hover:bg-transparent hover:text-blue-500 backdrop-blur-sm"
            >
              <EyeOff className="h-3 w-3" />
            </Button>
          </div>
          <HoverCard openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <div className="relative cursor-pointer">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={token.imageUrl}
                    alt={token.name}
                    width={64}
                    height={64}
                    className={cn("rounded-md border-2", borderClass)}
                  />
                  <div
                    className={cn(
                      "absolute -bottom-1 -right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full",
                      iconBgClass
                    )}
                  >
                    {icon}
                  </div>
                  <div className="absolute inset-0 z-0 hidden items-center justify-center rounded-md bg-black/50 group-hover:flex">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-[240px] border-border bg-[#101A21] p-0"
              side="bottom"
              align="start"
              sideOffset={10}
            >
              <TokenHoverCard token={token} />
            </HoverCardContent>
          </HoverCard>
          <span className="font-code text-[10px] text-muted-foreground">
            {token.creatorAddress}
          </span>
        </div>

        {/* Center Section */}
        <div className="flex min-w-0 flex-col justify-between self-stretch gap-1">
          {/* Top part of center */}
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1.5">
              <h3 className="truncate text-sm font-bold text-foreground">
                {token.name}
              </h3>
              <p className="flex-shrink-0 text-xs text-muted-foreground">
                {token.subtitle}
              </p>
              <Copy className="h-3 w-3 flex-shrink-0 cursor-pointer text-muted-foreground" />
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted-foreground">
              <span className="font-bold text-cyan-400">{token.age}</span>
              <GlobeIcon className="h-3 w-3 cursor-pointer" />
              <PillIcon className="h-3 w-3 cursor-pointer" />
              <Search className="h-3 w-3 cursor-pointer" />
              <div className="flex items-center gap-0.5">
                {" "}
                <Users className="h-3 w-3" /> <span>{token.stats.users}</span>{" "}
              </div>
              <div className="flex items-center gap-0.5">
                {" "}
                <CandlestickChart className="h-3 w-3" />{" "}
                <span>{token.stats.candlesticks}</span>{" "}
              </div>
              <div className="flex items-center gap-0.5">
                {" "}
                <Trophy className="h-3 w-3" />{" "}
                <span>{token.stats.trophies}</span>{" "}
              </div>
              <div className="flex items-center gap-0.5">
                {" "}
                <Crown className="h-3 w-3" /> <span>{token.stats.crowns}</span>{" "}
              </div>
            </div>
          </div>
          {/* Bottom part of center (tags) */}
          <div className="flex flex-wrap items-center gap-1">
            {token.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end self-stretch justify-between">
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5 text-[10px]">
              <span className="text-muted-foreground">MC</span>
              <span className="font-bold text-cyan-400">
                {formatCurrency(token.marketCap)}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-[10px]">
              <span className="text-muted-foreground">V</span>
              <span>{formatCurrency(token.volume)}</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[10px] font-code">
              <span className="text-muted-foreground">F</span>
              <SolIcon className="h-2 w-2 text-purple-400" />
              <span className="text-foreground">{token.fValue.toFixed(3)}</span>
              <span className="text-muted-foreground">TX</span>
              <span className="text-foreground">{token.txCount}</span>
              <div className="h-1 w-3 rounded-full bg-gradient-to-r from-green-400 to-red-500"></div>
            </div>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-2 py-1 text-[10px] h-auto"
          >
            <Zap className="mr-1 h-3 w-3 fill-white" />
            {token.solAmount.toFixed(1)} SOL
          </Button>
        </div>
      </div>
    </div>
  );
}
