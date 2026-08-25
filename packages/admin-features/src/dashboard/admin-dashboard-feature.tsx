"use client";

import { Container } from "@workspace/ui/components/ui/container";
import { AdminNav } from "../core/components/layout/admin-nav";
import { SystemOverviewHero } from "./components/system-overview-hero";
import { CoreMetrics } from "./components/core-metrics";
import { ManagementTabs } from "./components/management-tabs";

export function AdminDashboardFeature() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <Container size="dashboard" as="main">
        <SystemOverviewHero />
        <CoreMetrics />
        <ManagementTabs />
      </Container>
    </div>
  );
}
