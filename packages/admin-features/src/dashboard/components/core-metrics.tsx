import { Users, Activity, Server, Database, ArrowUpRight, ArrowDownRight, Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/ui";
import { useAdminMetrics } from "@workspace/data";

export function CoreMetrics() {
  const { data, isLoading, error } = useAdminMetrics();

  if (isLoading) {
    return (
      <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-card">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-destructive/10 text-destructive">
        Failed to load metrics.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalUsers.value}</div>
          <p className={`text-xs mt-1 flex items-center ${data.totalUsers.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {data.totalUsers.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
            {data.totalUsers.trend}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.activeSubscriptions.value}</div>
          <p className={`text-xs mt-1 flex items-center ${data.activeSubscriptions.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {data.activeSubscriptions.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
            {data.activeSubscriptions.trend}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Health</CardTitle>
          <Server className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">{data.systemHealth.value}</div>
          <p className="text-xs text-muted-foreground mt-1">{data.systemHealth.trend}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Database Load</CardTitle>
          <Database className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.databaseLoad.value}</div>
          <p className={`text-xs mt-1 flex items-center ${data.databaseLoad.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {data.databaseLoad.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
            {data.databaseLoad.trend}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
