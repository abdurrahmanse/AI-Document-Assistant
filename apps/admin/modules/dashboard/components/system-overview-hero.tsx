import { FadeIn } from "@workspace/ui/components/ui/motion";
import { ShieldCheck, Settings, Activity } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export function SystemOverviewHero() {
  return (
    <FadeIn 
      duration={0.6}
      yOffset={20}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-900/10 via-primary/5 to-background border border-white/10 shadow-lg"
    >
      <div className="absolute inset-0 backdrop-blur-2xl bg-background/20 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen z-0 pointer-events-none" />
      
      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs mb-2">
            <ShieldCheck className="w-3 h-3" />
            <span>Enterprise Command Center</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
            System Overview
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            Manage infrastructure, security policies, and monitor real-time enterprise telemetry.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto rounded-full h-12 px-6 backdrop-blur-md bg-background/50 border-border/50 hover:bg-secondary/50">
            <Settings className="w-4 h-4 mr-2" />
            Global Settings
          </Button>
          <Button className="w-full sm:w-auto rounded-full h-12 px-6 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-lg shadow-primary/25 transition-all">
            <Activity className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
