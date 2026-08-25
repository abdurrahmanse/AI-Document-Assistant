"use client";

import { AdminNav } from "@workspace/admin-features";
import { SystemOverviewHero } from "@workspace/admin-features";
import { CoreMetrics } from "@workspace/admin-features";
import { ManagementTabs } from "@workspace/admin-features";

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
