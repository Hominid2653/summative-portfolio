export default function Header() {
  return (
    <header className="py-14 mb-12 border-b border-stone-800 relative">
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-amber-400" />

      <p className="text-xs tracking-[0.25em] uppercase text-amber-400 font-medium mb-3">
        Portfolio
      </p>
      <h1 className="font-serif text-5xl font-black leading-tight tracking-tight">
        Project{" "}
        <span className="text-amber-400">Showcase</span>
      </h1>
      <p className="mt-4 text-stone-400 text-sm max-w-md leading-relaxed">
        A curated collection of work. Add new projects, search, and explore the
        details behind each build.
      </p>
    </header>
  );
}