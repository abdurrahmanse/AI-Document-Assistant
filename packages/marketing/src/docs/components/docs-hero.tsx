export function DocsHero({ hero }: { hero: { title: string; description: string } }) {

  return (
    <div className="text-center space-y-4 max-w-2xl mx-auto pt-32 pb-24 px-4 relative z-10">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{hero.title}</h1>
      <p className="text-xl text-muted-foreground">{hero.description}</p>
    </div>
  );
}
