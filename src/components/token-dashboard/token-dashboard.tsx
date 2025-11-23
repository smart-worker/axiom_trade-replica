"use client";

import { useMemo, useState, useEffect } from "react";
import { useTokenStream } from "@/hooks/use-token-stream";
import { TokenColumn } from "./token-column";
import { TokenDashboardSkeleton } from "./token-dashboard-skeleton";
import { DashboardHeader } from "./dashboard-header";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SolIcon, BnbIcon } from "../icons";
import { ChevronDown } from "lucide-react";
import { MobileSettings } from "./mobile-settings";

export function TokenDashboard() {
  const { tokens, isLoading } = useTokenStream();
  const isMobile = useBreakpoint(1024); // Changed breakpoint to lg for desktop/mobile split
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient || isLoading) {
    return (
      <div className="flex h-full flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-4">
          <TokenDashboardSkeleton />
        </div>
      </div>
    );
  }

  const tabClass =
    "text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-[#2C2D30] rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap";

  const renderContent = () => {
    if (isMobile) {
      return (
        <Tabs
          defaultValue="final-stretch"
          className="flex h-full w-full flex-col"
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="settings" className="border-b-0">
              <div className="border-b border-border">
                <TabsList className="h-auto w-full justify-between gap-2 bg-transparent p-2">
                  <div className="flex flex-shrink-0 items-center gap-2">
                    <SolIcon className="h-7 w-7" />
                    <BnbIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="no-scrollbar flex-shrink min-w-0 overflow-x-auto">
                    <div className="flex items-center gap-2">
                      <TabsTrigger value="new-pairs" className={tabClass}>
                        New Pairs
                      </TabsTrigger>
                      <TabsTrigger value="final-stretch" className={tabClass}>
                        Final Stretch
                      </TabsTrigger>
                      <TabsTrigger value="migrated" className={tabClass}>
                        Migrated
                      </TabsTrigger>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-border p-1 text-sm">
                      <span className="pl-2">P1</span>
                      <AccordionTrigger className="group p-0">
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </AccordionTrigger>
                    </div>
                  </div>
                </TabsList>
              </div>
              <AccordionContent>
                <MobileSettings />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <TabsContent value="new-pairs" className="min-h-0 flex-1">
            <TokenColumn
              title="New Pairs"
              tokens={newPairs}
              type="new"
              isMobile={isMobile}
            />
          </TabsContent>
          <TabsContent value="final-stretch" className="min-h-0 flex-1">
            <TokenColumn
              title="Final Stretch"
              tokens={finalStretch}
              type="final-stretch"
              isMobile={isMobile}
            />
          </TabsContent>
          <TabsContent value="migrated" className="min-h-0 flex-1">
            <TokenColumn
              title="Migrated"
              tokens={migrated}
              type="migrated"
              isMobile={isMobile}
            />
          </TabsContent>
        </Tabs>
      );
    }

    return (
      <div className="grid min-h-0 flex-1 grid-cols-1 border-t border-border lg:grid-cols-3">
        <div className="flex min-h-0 flex-col lg:border-r lg:border-border">
          <TokenColumn title="New Pairs" tokens={newPairs} type="new" />
        </div>
        <div className="flex min-h-0 flex-col lg:border-r lg:border-border">
          <TokenColumn
            title="Final Stretch"
            tokens={finalStretch}
            type="final-stretch"
          />
        </div>
        <div className="flex min-h-0 flex-col">
          <TokenColumn title="Migrated" tokens={migrated} type="migrated" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      {!isMobile && <DashboardHeader />}
      {renderContent()}
    </div>
  );
}
