"use client";

import { AdminNav } from "../components/layout/admin-nav";
import { SystemOverviewHero } from "../components/dashboard/system-overview-hero";
import { CoreMetrics } from "../components/dashboard/core-metrics";
import { ManagementTabs } from "../components/dashboard/management-tabs";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <SystemOverviewHero />
        <CoreMetrics />
        <ManagementTabs />
      </main>
    </div>
  );
}
