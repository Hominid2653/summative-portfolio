const CATEGORY_COLORS = {
  "Web App":   "bg-violet-500/15 text-violet-300",
  "Dashboard": "bg-sky-500/15 text-sky-300",
  "CLI Tool":  "bg-emerald-500/15 text-emerald-300",
  "Mobile App":"bg-pink-500/15 text-pink-300",
  "API":       "bg-orange-500/15 text-orange-300",
  "Library":   "bg-teal-500/15 text-teal-300",
  "Other":     "bg-stone-500/15 text-stone-300",
};

export default function ProjectCard({ project, onDelete, onSelect }) {
  const initial = project.title.charAt(0).toUpperCase();
  const badgeClass = CATEGORY_COLORS[project.category] ?? CATEGORY_COLORS["Other"];

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative bg-stone-900 border border-stone-800 rounded-xl px-5 py-4
                 flex items-start gap-4 cursor-pointer
                 hover:bg-stone-800/80 hover:border-stone-700 hover:translate-x-1
                 transition-all duration-150"
    >
      {/* Left accent bar on hover */}
      <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-amber-400 rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

      {/* Avatar */}
      <div className="w-11 h-11 rounded-lg bg-stone-800 border border-stone-700 flex-shrink-0
                      flex items-center justify-center font-serif text-lg font-bold text-amber-400">
        {initial}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-stone-100 truncate mb-1">
          {project.title}
        </p>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
          {project.description || "No description provided."}
        </p>
        {project.category && (
          <span
            className={`inline-block mt-2 text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded ${badgeClass}`}
          >
            {project.category}
          </span>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(project.id);
        }}
        title="Remove project"
        className="flex-shrink-0 p-1.5 rounded-md text-stone-600
                   hover:text-red-400 hover:bg-red-400/10
                   opacity-0 group-hover:opacity-100
                   transition-all duration-150 focus:outline-none focus:opacity-100"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>
    </div>
  );
}