import {
  List,
  LayoutGrid,
  HelpCircle,
  Bookmark,
  AppWindow,
  Maximize,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BnbIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <BnbIcon className="h-6 w-6 text-yellow-400" />
        <h1 className="text-xl font-semibold text-foreground">Pulse</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <HelpCircle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
        </Button>

        <Button variant="ghost" className="h-8 gap-2 px-3">
          <List className="h-4 w-4" />
          <span>Display</span>
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bookmark className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AppWindow className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Maximize className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RefreshCw className="h-4 w-4" />
        </Button>

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
      </div>
    </header>
  );
}
