"use client";

import { AdminNav } from "../core/components/layout/admin-nav";
import { SystemOverviewHero } from "./components/system-overview-hero";
import { CoreMetrics } from "./components/core-metrics";
import { ManagementTabs } from "./components/management-tabs";

export function AdminDashboardFeature() {
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
