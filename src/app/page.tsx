import { TokenDashboard } from "@/components/token-dashboard/token-dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-6 flex items-center justify-between md:mb-8">
          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
              <path
                d="M10 16L14 20L18 12L22 16"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Pulse
            </h1>
          </div>
        </header>
        <TokenDashboard />
      </div>
    </div>
  );
}
