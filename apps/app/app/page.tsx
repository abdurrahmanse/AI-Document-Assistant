"use client";

import { DashboardHero, RecentDocuments, StatsGrid, TopNav } from "@workspace/app-features";



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
