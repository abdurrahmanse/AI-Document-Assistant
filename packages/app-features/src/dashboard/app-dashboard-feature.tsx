"use client";

import { Container } from "@workspace/ui/components/ui/container";
import { DashboardHero } from "./components/hero";
import { RecentDocuments } from "./components/recent-documents";
import { StatsGrid } from "./components/stats-grid";
import { TopNav } from "../core/components/layout/top-nav";

export function AppDashboardFeature() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <TopNav />
      <Container size="dashboard" as="main">
        <DashboardHero />
        <StatsGrid />
        <RecentDocuments />
      </Container>
    </div>
  );
}
