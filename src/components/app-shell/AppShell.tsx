"use client";

import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
import PortfolioDashboard from "@/components/dashboard/PortfolioDashboard";
import StandalonePortfolio from "@/components/portfolio/StandalonePortfolio";
import ContactSection from "@/components/ContactSection";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-surface-950 pb-28 text-surface-200 md:pb-0">
      <TopBar />
      <main id="home">
        <PortfolioDashboard />
        <StandalonePortfolio />
        <ContactSection />
      </main>
      <BottomNav />
    </div>
  );
}
