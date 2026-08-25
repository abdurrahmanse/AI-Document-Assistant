import { FileText, Share2, MoreVertical, Clock } from "lucide-react";
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

const recentDocuments = [
  { id: 1, title: "Q3 Financial Report", date: "2 hours ago", status: "Analyzed", members: 3 },
  { id: 2, title: "Product Roadmap 2026", date: "5 hours ago", status: "Processing", members: 5 },
  { id: 3, title: "Legal Terms v4", date: "Yesterday", status: "Analyzed", members: 2 },
  { id: 4, title: "Marketing Copy", date: "Yesterday", status: "Failed", members: 1 },
];

export function RecentDocuments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recently uploaded and analyzed documents.</CardDescription>
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
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" /> Share
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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
