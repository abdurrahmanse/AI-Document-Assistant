import { Shield } from "lucide-react";

export function SecurityHero() {
  return (
    <div className="text-center space-y-6 max-w-3xl mx-auto py-24 px-4 relative z-10">
      <div className="mx-auto w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 mb-8">
        <Shield className="w-10 h-10 text-emerald-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Enterprise-grade <span className="text-emerald-500">security</span></h1>
      <p className="text-xl text-muted-foreground">We protect your sensitive documents with military-grade encryption and strict compliance standards.</p>
    </div>
  );
}
