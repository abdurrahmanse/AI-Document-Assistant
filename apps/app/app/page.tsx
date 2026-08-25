"use client";

import { DashboardHero } from "@/components/dashboard/hero";
import { RecentDocuments } from "@/components/dashboard/recent-documents";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { TopNav } from "@/components/layout/top-nav";



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
