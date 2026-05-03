import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDelete, onSelect }) {
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      (p.description ?? "").toLowerCase().includes(q) ||
      (p.category ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-5">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects…"
          className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-11 pr-4 py-3
                     text-sm text-stone-100 placeholder-stone-600
                     focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10
                     transition-colors duration-150"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300
                       transition-colors duration-150 focus:outline-none"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 font-medium mb-3">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {search && ` for "${search}"`}
      </p>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <EmptyState hasSearch={!!search} />
        ) : (
          filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={onDelete}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  );
}

function EmptyState({ hasSearch }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-stone-600">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="mb-4 opacity-40"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
      <p className="text-sm text-center leading-relaxed">
        {hasSearch
          ? "No projects match your search."
          : "No projects yet. Add your first one!"}
      </p>
    </div>
  );
}