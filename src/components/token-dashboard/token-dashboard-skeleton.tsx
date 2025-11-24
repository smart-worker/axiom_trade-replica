import { Skeleton } from "@/components/ui/skeleton";

function TokenCardSkeleton() {
  return (
    <div className="bg-card p-3">
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-start gap-3">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-1.5">
          <Skeleton className="h-16 w-16 flex-shrink-0 rounded-md" />
          <Skeleton className="h-3 w-16" />
        </div>

        {/* Center Section */}
        <div className="flex min-w-0 flex-col justify-between self-stretch gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1.5">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-12" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end self-stretch justify-between">
          <div className="flex flex-col items-end gap-1.5">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-7 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

function ColumnSkeleton() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-1.5">
        <Skeleton className="h-7 w-32" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-7 rounded-md" />
        </div>
      </div>
      <div className="thin-scrollbar overflow-y-auto">
        <div className="flex flex-col">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="border-b border-border">
              <TokenCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TokenDashboardSkeleton() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-muted-foreground">
        <Skeleton className="h-7 w-24" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-1 border-t border-border lg:grid-cols-3">
        <div className="flex min-h-0 flex-col lg:border-r lg:border-border">
          <ColumnSkeleton />
        </div>
        <div className="flex min-h-0 flex-col lg:border-r lg:border-border">
          <ColumnSkeleton />
        </div>
        <div className="flex min-h-0 flex-col">
          <ColumnSkeleton />
        </div>
      </div>
    </div>
  );
}
