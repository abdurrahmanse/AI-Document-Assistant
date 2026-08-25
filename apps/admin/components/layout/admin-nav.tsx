import { ShieldCheck, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/ui";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export function AdminNav() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-bold text-lg tracking-tight">
          <ShieldCheck className="w-6 h-6" />
          Admin Portal
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search audit logs..." 
              className="h-9 w-64 rounded-md border border-input bg-transparent pl-9 pr-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Avatar className="h-9 w-9 border">
            <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
