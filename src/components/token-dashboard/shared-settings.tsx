"use client";

import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FilterModal } from "./filter-modal";
import { SlidersHorizontalIcon } from "../icons";

export function SharedSettings() {
  return (
    <>
      <Button variant="ghost" className="h-8 gap-2 px-3">
        <List className="h-4 w-4" />
        <span>Display</span>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-8 gap-2 px-3">
            <SlidersHorizontalIcon className="h-4 w-4" />
            Filter
          </Button>
        </DialogTrigger>
        <FilterModal />
      </Dialog>
      <Separator orientation="vertical" className="mx-2 h-6" />

      <div className="flex items-center gap-1 rounded-md border border-input p-1">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="font-semibold text-foreground">1</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
