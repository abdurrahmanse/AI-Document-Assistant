import { Document } from "@workspace/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";

export function DocumentCard({ document }: { document: Document }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-green-500";
      case "processing": return "bg-yellow-500 animate-pulse";
      case "failed": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base line-clamp-1 truncate" title={document.title}>
            {document.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${getStatusColor(document.status)}`} />
            <span className="text-xs text-muted-foreground capitalize">{document.status}</span>
          </div>
        </div>
        <CardDescription className="text-xs mt-1 truncate">
          {document.type}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{document.size}</span>
          <span>{new Date(document.uploadedAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}
