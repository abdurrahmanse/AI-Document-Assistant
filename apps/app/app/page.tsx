"use client";

import { DashboardHero } from "@/modules/dashboard/components/hero";
import { RecentDocuments } from "@/modules/dashboard/components/recent-documents";
import { StatsGrid } from "@/modules/dashboard/components/stats-grid";
import { TopNav } from "@/modules/core/components/layout/top-nav";



export default function AppDashboardPage() {
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
