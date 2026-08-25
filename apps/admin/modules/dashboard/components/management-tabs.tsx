import { AlertCircle } from "lucide-react";
import { 
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button
} from "@workspace/ui/components/ui";

const auditLogs = [
  { id: "LOG-001", action: "User Login", user: "Admin (admin@corp.com)", status: "Success", time: "2m ago" },
  { id: "LOG-002", action: "API Key Created", user: "John Doe (john@corp.com)", status: "Success", time: "15m ago" },
  { id: "LOG-003", action: "Failed Authentication", user: "Unknown (192.168.1.5)", status: "Failed", time: "1h ago" },
  { id: "LOG-004", action: "Settings Updated", user: "Admin (admin@corp.com)", status: "Success", time: "3h ago" },
];

export function ManagementTabs() {
  return (
    <Tabs defaultValue="audit" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="audit">Security & Audit</TabsTrigger>
        <TabsTrigger value="users">User Management</TabsTrigger>
        <TabsTrigger value="billing">Billing & Plans</TabsTrigger>
      </TabsList>
      
      <TabsContent value="audit" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Recent Audit Logs</CardTitle>
            <CardDescription>
              Security and access logs across the entire platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
              <div className="space-y-0 border rounded-md overflow-hidden min-w-[800px]">
                <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 text-sm font-medium text-muted-foreground">
                  <div className="col-span-2">Log ID</div>
                  <div className="col-span-4">Action</div>
                  <div className="col-span-3">User</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1 text-right">Time</div>
                </div>
                {auditLogs.map((log) => (
                  <div key={log.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 items-center text-sm hover:bg-muted/30 transition-colors">
                    <div className="col-span-2 font-mono text-muted-foreground truncate">{log.id}</div>
                    <div className="col-span-4 font-medium flex items-center gap-2 truncate">
                      {log.status === "Failed" && <AlertCircle className="w-4 h-4 text-destructive shrink-0" />}
                      <span className="truncate">{log.action}</span>
                    </div>
                    <div className="col-span-3 truncate">{log.user}</div>
                    <div className="col-span-2">
                      <Badge variant={log.status === "Success" ? "default" : "destructive"}>
                        {log.status}
                      </Badge>
                    </div>
                    <div className="col-span-1 text-right text-muted-foreground whitespace-nowrap">{log.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">View All Logs</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="users" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>User Directory</CardTitle>
            <CardDescription>Manage users, roles, and permissions.</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg mt-4">
            User management grid will render here...
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="billing" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Billing</CardTitle>
            <CardDescription>Enterprise billing and subscription management.</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg mt-4">
            Revenue charts will render here...
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
