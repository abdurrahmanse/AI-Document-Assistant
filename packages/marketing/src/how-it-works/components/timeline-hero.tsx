export function TimelineHero({ hero }: { hero: { title: string; description: string } }) {
  return (
    <div className="text-center space-y-4 max-w-3xl mx-auto pt-32 pb-24 px-4 relative z-10">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
        {hero.title.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{hero.title.split(' ').pop()}</span>
      </h1>
      <p className="text-xl text-muted-foreground">{hero.description}</p>
    </div>
  );
}
