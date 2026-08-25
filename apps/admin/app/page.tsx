"use client";

import { AdminNav } from "../modules/core/components/layout/admin-nav";
import { SystemOverviewHero } from "../modules/dashboard/components/system-overview-hero";
import { CoreMetrics } from "../modules/dashboard/components/core-metrics";
import { ManagementTabs } from "../modules/dashboard/components/management-tabs";

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
