import { FileText, Share2, MoreVertical, Clock, Loader2 } from "lucide-react";
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge
} from "@workspace/ui/components/ui";

import { useRecentDocuments, useAppDashboardData } from "@workspace/data";

export function RecentDocuments() {
  const { data: recentDocuments, isLoading: isDocsLoading, error: docsError } = useRecentDocuments();
  const { data: dashboard, isLoading: isDashboardLoading } = useAppDashboardData();

  if (isDocsLoading || isDashboardLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dashboard?.recentDocuments.title || "Recent Activity"}</CardTitle>
          <CardDescription>{dashboard?.recentDocuments.description || "Your recently uploaded and analyzed documents."}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-card">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground mr-2" />
            {dashboard?.recentDocuments.loadingText || "Loading..."}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (docsError || !recentDocuments || !dashboard) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dashboard?.recentDocuments.title || "Recent Activity"}</CardTitle>
          <CardDescription>{dashboard?.recentDocuments.description || "Your recently uploaded and analyzed documents."}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-32 w-full items-center justify-center border rounded-lg bg-destructive/10 text-destructive">
            {dashboard?.recentDocuments.errorText || "Failed to load recent documents."}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dashboard.recentDocuments.title}</CardTitle>
        <CardDescription>{dashboard.recentDocuments.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocuments.map((doc) => (
            <div key={doc.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 p-4 border border-border rounded-lg bg-background hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium truncate max-w-[200px] sm:max-w-[300px]">{doc.title}</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1 gap-2">
                    <Clock className="w-3 h-3" />
                    {doc.date}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
                <Badge variant={doc.status === "Analyzed" ? "default" : doc.status === "Processing" ? "secondary" : "destructive"}>
                  {doc.status}
                </Badge>
                
                <div className="flex -space-x-2 hidden sm:flex">
                  {[...Array(doc.members)].map((_, j) => (
                    <Avatar key={j} className="w-8 h-8 border-2 border-background">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${doc.id}${j}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-8 h-8 shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>{dashboard.recentDocuments.menuItems.viewDetails}</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" /> {dashboard.recentDocuments.menuItems.share}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">{dashboard.recentDocuments.menuItems.delete}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
