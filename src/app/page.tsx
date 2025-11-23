import { TokenDashboard } from "@/components/token-dashboard/token-dashboard";

export default function Home() {
  return (
    <main className="h-dvh w-dvw overflow-hidden bg-background text-foreground">
      <TokenDashboard />
    </main>
  );
}
