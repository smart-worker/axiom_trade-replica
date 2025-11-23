import {
  HelpCircle,
  LayoutGrid,
  Bookmark,
  AppWindow,
  Maximize,
  RefreshCw,
} from "lucide-react";
import { BnbIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SharedSettings } from "./shared-settings";

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

        <SharedSettings />

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
      </div>
    </header>
  );
}
