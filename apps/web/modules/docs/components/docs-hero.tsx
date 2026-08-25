import { Search } from "lucide-react";

export function DocsHero() {
  return (
    <div className="text-center space-y-8 max-w-3xl mx-auto pt-32 pb-24 px-4 relative z-10 w-full">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Documentation</h1>
      <p className="text-xl text-muted-foreground">Everything you need to build with AI Document Assistant.</p>
      
      <div className="relative max-w-2xl mx-auto mt-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search documentation..."
          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg transition-all shadow-xl"
        />
      </div>
    </div>
  );
}
