import { Skeleton } from "@/components/ui/skeleton";

function TokenCardSkeleton() {
  return (
    <div className="rounded-lg bg-card p-3">
      <div className="grid grid-cols-[auto_1fr_auto] gap-3">
        {/* Left */}
        <div className="flex flex-col items-center gap-1.5">
          <Skeleton className="h-[72px] w-[72px] rounded-md" />
          <Skeleton className="h-3 w-20" />
        </div>

        {/* Center */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-32" />
            <div className="flex gap-3">
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-col gap-1.5 items-end">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}

function ColumnSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-6 w-32" />
      <div className="flex flex-col gap-3">
        <TokenCardSkeleton />
        <TokenCardSkeleton />
        <TokenCardSkeleton />
        <TokenCardSkeleton />
      </div>
    </div>
  );
}

export function TokenDashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ColumnSkeleton />
      <ColumnSkeleton />
      <ColumnSkeleton />
    </div>
  );
}
