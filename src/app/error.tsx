"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WifiOff } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-20rem)] w-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-card text-center">
      <WifiOff className="h-16 w-16 text-destructive" />
      <h2 className="text-2xl font-semibold text-foreground">
        Connection Error
      </h2>
      <p className="max-w-md text-muted-foreground">
        There was an issue with the token data stream. This might be a temporary
        problem with the mock data source.
      </p>
      <Button onClick={() => reset()}>Try to reconnect</Button>
    </div>
  );
}
