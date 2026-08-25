import { FadeIn } from "@workspace/ui/components/ui/motion";
import { FileText, Users, Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/ui";
import { useAppStats, useAppDashboardData } from "@workspace/data";

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export function StatsGrid() {
  const { data: stats, isLoading: isStatsLoading, error: statsError } = useAppStats();
  const { data: dashboard, isLoading: isDashboardLoading } = useAppDashboardData();

  if (isStatsLoading || isDashboardLoading) {
    return (
      <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-card">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (statsError || !stats || !dashboard) {
    return (
      <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-destructive/10 text-destructive">
        Failed to load stats.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FadeIn yOffset={10} delay={0.1}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{dashboard.stats.totalDocumentsTitle}</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalDocuments.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.totalDocuments.description}</p>
          </CardContent>
        </Card>
      </FadeIn>
      <FadeIn yOffset={10} delay={0.2}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{dashboard.stats.storageUsedTitle}</CardTitle>
            <DatabaseIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.storageUsed.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.storageUsed.description}</p>
          </CardContent>
        </Card>
      </FadeIn>
      <FadeIn yOffset={10} delay={0.3}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{dashboard.stats.activeMembersTitle}</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.activeMembers.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.activeMembers.description}</p>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
