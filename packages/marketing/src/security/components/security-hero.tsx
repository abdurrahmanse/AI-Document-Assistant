import { Shield } from "lucide-react";

export function SecurityHero({ hero }: { hero: { title: string; description: string } }) {
  return (
    <div className="text-center space-y-6 max-w-3xl mx-auto pt-32 pb-24 px-4 relative z-10">
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <Shield className="w-8 h-8 text-emerald-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
        {hero.title.split(' ').slice(0, -1).join(' ')}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
          {hero.title.split(' ').pop()}
        </span>
      </h1>
      <p className="text-xl text-muted-foreground">
        {hero.description}
      </p>
    </div>
  );
}
