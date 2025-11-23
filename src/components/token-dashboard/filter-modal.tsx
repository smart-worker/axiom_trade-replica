"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  RefreshCwIcon,
  XIcon,
  PumpIcon,
  BagIcon,
  DaosIcon,
  BelieveIcon,
  BoopIcon,
  RaydiumIcon,
  MayhemIcon,
  MoonshotIcon,
  CandleIcon,
  JupiterIcon,
  LaunchpadIcon,
  MeteoraIcon,
  OrcaIcon,
  BonkIcon,
  HeavenIcon,
  SugarIcon,
  MoonitIcon,
  DynamicIcon,
  SolIcon,
  UsdcIcon,
  UsdIcon,
  ChevronDown,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  DollarSignIcon,
  UsersIcon,
  MessageCircleIcon,
  AtSignIcon,
  CodeIcon,
  Globe2Icon,
  BookIcon,
  Users2Icon,
  FileTextIcon,
} from "../icons";

type Protocol = {
  name: string;
  icon: React.FC<any>;
  color: string;
  borderColor: string;
  bgColor: string;
  hoverBgColor: string;
};

const newPairsProtocols: Protocol[] = [
  {
    name: "Pump",
    icon: PumpIcon,
    color: "text-green-400",
    borderColor: "border-green-400",
    bgColor: "bg-green-400/20",
    hoverBgColor: "hover:bg-green-400/10",
  },
  {
    name: "Mayhem",
    icon: MayhemIcon,
    color: "text-red-400",
    borderColor: "border-red-400",
    bgColor: "bg-red-400/20",
    hoverBgColor: "hover:bg-red-400/10",
  },
  {
    name: "Bonk",
    icon: BonkIcon,
    color: "text-orange-400",
    borderColor: "border-orange-400",
    bgColor: "bg-orange-400/20",
    hoverBgColor: "hover:bg-orange-400/10",
  },
  {
    name: "Bags",
    icon: BagIcon,
    color: "text-green-400",
    borderColor: "border-green-400",
    bgColor: "bg-green-400/20",
    hoverBgColor: "hover:bg-green-400/10",
  },
  {
    name: "Moonshot",
    icon: MoonshotIcon,
    color: "text-purple-400",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-400/20",
    hoverBgColor: "hover:bg-purple-400/10",
  },
  {
    name: "Heaven",
    icon: HeavenIcon,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    bgColor: "bg-gray-400/20",
    hoverBgColor: "hover:bg-gray-400/10",
  },
  {
    name: "Daos.fun",
    icon: DaosIcon,
    color: "text-blue-400",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-400/20",
    hoverBgColor: "hover:bg-blue-400/10",
  },
  {
    name: "Candle",
    icon: CandleIcon,
    color: "text-orange-400",
    borderColor: "border-orange-400",
    bgColor: "bg-orange-400/20",
    hoverBgColor: "hover:bg-orange-400/10",
  },
  {
    name: "Sugar",
    icon: SugarIcon,
    color: "text-pink-400",
    borderColor: "border-pink-400",
    bgColor: "bg-pink-400/20",
    hoverBgColor: "hover:bg-pink-400/10",
  },
  {
    name: "Believe",
    icon: BelieveIcon,
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-400/20",
    hoverBgColor: "hover:bg-yellow-400/10",
  },
  {
    name: "Jupiter Studio",
    icon: JupiterIcon,
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    bgColor: "bg-cyan-400/20",
    hoverBgColor: "hover:bg-cyan-400/10",
  },
  {
    name: "Moonit",
    icon: MoonitIcon,
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-400/20",
    hoverBgColor: "hover:bg-yellow-400/10",
  },
  {
    name: "Boop",
    icon: BoopIcon,
    color: "text-pink-400",
    borderColor: "border-pink-400",
    bgColor: "bg-pink-400/20",
    hoverBgColor: "hover:bg-pink-400/10",
  },
  {
    name: "LaunchLab",
    icon: LaunchpadIcon,
    color: "text-purple-400",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-400/20",
    hoverBgColor: "hover:bg-purple-400/10",
  },
  {
    name: "Dynamic BC",
    icon: DynamicIcon,
    color: "text-red-400",
    borderColor: "border-red-400",
    bgColor: "bg-red-400/20",
    hoverBgColor: "hover:bg-red-400/10",
  },
];

const finalStretchProtocols: Protocol[] = [
  {
    name: "Raydium",
    icon: RaydiumIcon,
    color: "text-purple-400",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-400/20",
    hoverBgColor: "hover:bg-purple-400/10",
  },
  {
    name: "Meteora AMM",
    icon: MeteoraIcon,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    bgColor: "bg-gray-400/20",
    hoverBgColor: "hover:bg-gray-400/10",
  },
  {
    name: "Meteora AMM V2",
    icon: MeteoraIcon,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    bgColor: "bg-gray-400/20",
    hoverBgColor: "hover:bg-gray-400/10",
  },
  {
    name: "Pump AMM",
    icon: PumpIcon,
    color: "text-green-400",
    borderColor: "border-green-400",
    bgColor: "bg-green-400/20",
    hoverBgColor: "hover:bg-green-400/10",
  },
  {
    name: "Orca",
    icon: OrcaIcon,
    color: "text-gray-400",
    borderColor: "border-gray-400",
    bgColor: "bg-gray-400/20",
    hoverBgColor: "hover:bg-gray-400/10",
  },
];

const allProtocols: Protocol[] = [
  ...newPairsProtocols,
  ...finalStretchProtocols,
];

const quoteTokens = [
  { name: "SOL", icon: SolIcon },
  { name: "USDC", icon: UsdcIcon },
  { name: "USD1", icon: UsdIcon },
];

const mainTabs = [
  { name: "Audit", icon: FileTextIcon },
  { name: "$ Metrics", icon: DollarSignIcon },
  { name: "Socials", icon: UsersIcon },
];

const socialIcons = [
  { icon: MessageCircleIcon, color: "text-blue-400" },
  { icon: AtSignIcon, color: "text-pink-400" },
  { icon: CodeIcon, color: "text-green-400" },
  { icon: Globe2Icon, color: "text-purple-400" },
  { icon: BookIcon, color: "text-orange-400" },
  { icon: Users2Icon, color: "text-yellow-400" },
];

export function FilterModal() {
  const [activeTopTab, setActiveTopTab] = useState("New Pairs");
  const [activeMainTab, setActiveMainTab] = useState("Audit");
  const [selectedProtocols, setSelectedProtocols] = useState<string[]>([]);
  const [selectedQuoteTokens, setSelectedQuoteTokens] = useState<string[]>([
    "SOL",
  ]);

  const toggleProtocol = (name: string) => {
    setSelectedProtocols((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const toggleQuoteToken = (name: string) => {
    setSelectedQuoteTokens((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const CustomCheckbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="flex items-center gap-2 cursor-pointer text-xs">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <CheckboxCheckedIcon className="h-4 w-4 text-blue-600" />
      ) : (
        <CheckboxUncheckedIcon className="h-4 w-4" />
      )}
      {label}
    </label>
  );

  const getProtocolsForTab = () => {
    switch (activeTopTab) {
      case "New Pairs":
        return newPairsProtocols;
      case "Final Stretch":
        return finalStretchProtocols;
      case "Migrated":
        return allProtocols;
      default:
        return [];
    }
  };

  const currentProtocols = getProtocolsForTab();

  return (
    <DialogContent className="max-w-[400px] w-full bg-[#18181a] border-border p-0 text-foreground overflow-hidden flex flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 flex-shrink-0">
        <h2 className="text-[11px] font-semibold">Filters</h2>
        <div className="flex items-center gap-3">
          <RefreshCwIcon className="h-4 w-4 cursor-pointer text-muted-foreground" />
          <DialogClose asChild>
            <XIcon className="h-5 w-5 cursor-pointer text-muted-foreground" />
          </DialogClose>
        </div>
      </div>

      <div className="flex flex-col min-h-0">
        <div className="px-4 pt-4">
          <div className="flex border-b border-border">
            {["New Pairs", "Final Stretch", "Migrated"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTopTab(tab)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-[11px] font-medium transition-colors relative -bottom-px",
                  activeTopTab === tab
                    ? "text-foreground border-b-2 border-white"
                    : "text-muted-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-4 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[11px] font-semibold">Protocols</h3>
                <Button
                  variant="link"
                  className="text-[11px] h-auto p-0 text-blue-500"
                  onClick={() =>
                    setSelectedProtocols(currentProtocols.map((p) => p.name))
                  }
                >
                  Select All
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {currentProtocols.map((p) => (
                  <Button
                    key={p.name}
                    variant="outline"
                    onClick={() => toggleProtocol(p.name)}
                    className={cn(
                      "h-8 text-[11px] justify-start gap-1.5 rounded-full border bg-transparent hover:bg-transparent",
                      p.color,
                      p.borderColor,
                      p.hoverBgColor,
                      {
                        [p.bgColor]: selectedProtocols.includes(p.name),
                      }
                    )}
                  >
                    <p.icon className={cn("h-4 w-4", p.color)} />
                    <span>{p.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[11px] font-semibold">Quote Tokens</h3>
                <Button
                  variant="link"
                  className="text-[11px] h-auto p-0 text-blue-500"
                  onClick={() => setSelectedQuoteTokens([])}
                >
                  Unselect All
                </Button>
              </div>
              <div className="flex gap-2">
                {quoteTokens.map((t) => (
                  <Button
                    key={t.name}
                    variant="outline"
                    onClick={() => toggleQuoteToken(t.name)}
                    className={cn(
                      "h-8 text-[11px] justify-center gap-1.5 border-border bg-transparent",
                      {
                        "bg-green-400/20":
                          selectedQuoteTokens.includes(t.name) &&
                          t.name === "SOL",
                      },
                      {
                        "bg-blue-400/20":
                          selectedQuoteTokens.includes(t.name) &&
                          t.name === "USDC",
                      },
                      {
                        "bg-yellow-400/20":
                          selectedQuoteTokens.includes(t.name) &&
                          t.name === "USD1",
                      }
                    )}
                  >
                    <t.icon className="h-4 w-4" />
                    <span>{t.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <h3 className="text-[11px] font-semibold mb-2">
                  Search Keywords
                </h3>
                <Input
                  placeholder="keyword1, keyword2..."
                  className="bg-background border-border text-[11px]"
                />
              </div>
              <div>
                <h3 className="text-[11px] font-semibold mb-2">
                  Exclude Keywords
                </h3>
                <Input
                  placeholder="keyword1, keyword2..."
                  className="bg-background border-border text-[11px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 thin-scrollbar overflow-y-auto">
          <div className="px-4">
            <div className="flex items-center gap-2 p-1">
              {mainTabs.map((tab) => (
                <Button
                  key={tab.name}
                  onClick={() => setActiveMainTab(tab.name)}
                  className={cn(
                    "flex-1 h-8 rounded-full text-[11px] bg-transparent hover:bg-transparent text-muted-foreground",
                    activeMainTab === tab.name
                      ? "bg-[#22242d] hover:bg-[#22242d]/90 text-white"
                      : "bg-transparent hover:bg-transparent"
                  )}
                >
                  {tab.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="py-4 bg-[#18181a] px-4">
            {activeMainTab === "Audit" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <CustomCheckbox
                    label="Dex Paid"
                    checked={true}
                    onChange={() => {}}
                  />
                  <CustomCheckbox
                    label="CA ends in 'pump'"
                    checked={false}
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold mb-2">Age</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Input
                        placeholder="Min"
                        className="bg-background border-border pr-8 text-[11px]"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] flex items-center text-muted-foreground">
                        m <ChevronDown className="h-3 w-3" />
                      </span>
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="Max"
                        className="bg-background border-border pr-8 text-[11px]"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] flex items-center text-muted-foreground">
                        m <ChevronDown className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold mb-2">
                    Top 10 Holders %
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      className="bg-background border-border text-[11px]"
                    />
                    <Input
                      placeholder="Max"
                      className="bg-background border-border text-[11px]"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold mb-2">
                    Dev Holding %
                  </h4>
                  <Input className="bg-background border-border text-[11px]" />
                </div>
              </div>
            )}
            {activeMainTab === "$ Metrics" && (
              <div className="text-center py-8 text-muted-foreground text-[11px]">
                $ Metrics controls will be here.
              </div>
            )}
            {activeMainTab === "Socials" && (
              <div className="space-y-3">
                <h4 className="text-[11px] font-semibold">Socials</h4>
                <div className="grid grid-cols-6 gap-2">
                  {socialIcons.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={cn(
                        "h-9 w-9 bg-background border-border",
                        item.color
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
                <Input
                  placeholder="Search Socials"
                  className="bg-background border-border text-[11px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-border px-4 py-3 bg-[#18181a] flex-shrink-0">
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="bg-muted text-muted-foreground text-[11px] h-9 px-3"
          >
            Import
          </Button>
          <Button
            variant="secondary"
            className="bg-muted text-muted-foreground text-[11px] h-9 px-3"
          >
            Export
          </Button>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-[11px] h-9 px-3">
          Apply All
        </Button>
      </div>
    </DialogContent>
  );
}
