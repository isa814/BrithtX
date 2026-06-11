"use client";

import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
import PortfolioDashboard from "@/components/dashboard/PortfolioDashboard";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-surface-950 text-surface-200">
      <TopBar />
      <PortfolioDashboard />
      <BottomNav />
    </div>
  );
}
