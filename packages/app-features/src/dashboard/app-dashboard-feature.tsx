"use client";

import { DashboardHero } from "./components/hero";
import { RecentDocuments } from "./components/recent-documents";
import { StatsGrid } from "./components/stats-grid";
import { TopNav } from "../core/components/layout/top-nav";

export function AppDashboardFeature() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <TopNav />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <DashboardHero />
        <StatsGrid />
        <RecentDocuments />
      </main>
    </div>
  );
}
