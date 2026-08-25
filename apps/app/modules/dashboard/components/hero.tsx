import { FadeIn } from "@workspace/ui/components/ui/motion";
import { Plus, Sparkles } from "lucide-react";
import { 
  Button, 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@workspace/ui/components/ui";

export function DashboardHero() {
  return (
    <FadeIn 
      duration={0.6}
      yOffset={20}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-background border border-white/10 shadow-lg"
    >
      <div className="absolute inset-0 backdrop-blur-2xl bg-background/20 z-0" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[60px] rounded-full mix-blend-screen z-0 pointer-events-none" />
      
      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs mb-2">
            <Sparkles className="w-3 h-3" />
            <span>AI-Powered Workspace</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            Welcome back! Here&apos;s what&apos;s happening with your analyzed documents today.
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2 rounded-full h-12 px-6 bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 shadow-lg shadow-primary/25 transition-all">
              <Plus className="w-5 h-5" />
              New Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
              <DialogDescription>
                Upload a PDF, Word, or Text document for AI analysis.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-8">
              <div className="border-2 border-dashed border-border rounded-xl h-32 flex flex-col items-center justify-center text-muted-foreground bg-secondary/20 hover:bg-secondary/40 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Click to upload or drag and drop</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="rounded-full">Cancel</Button>
              <Button className="rounded-full bg-primary hover:bg-primary/90">Start Analysis</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </FadeIn>
  );
}
