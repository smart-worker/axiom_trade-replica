import { Skeleton } from "@/components/ui/skeleton";

function TokenCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-2 h-3 w-16" />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-2 h-3 w-10" />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-24 rounded-full" />
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
