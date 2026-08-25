export function FeaturesHero({ hero }: { hero: { title: string; description: string } }) {

  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto pt-32 pb-24 px-4 relative z-10">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
        {hero.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          {hero.title.split(' ').pop()}
        </span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {hero.description}
      </p>
    </div>
  );
}
