import { useEffect } from "react";

export default function ProjectDetail({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-stone-900 border border-stone-800 rounded-2xl p-8
                   max-w-lg w-full shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-800 border border-stone-700
                     flex items-center justify-center text-stone-500
                     hover:text-stone-200 hover:border-stone-500
                     transition-colors duration-150 focus:outline-none"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Label */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-medium mb-3">
          Project Detail
        </p>

        {/* Title */}
        <h2 className="font-serif text-3xl font-bold leading-tight mb-5 pr-10">
          {project.title}
        </h2>

        <div className="h-px bg-stone-800 mb-5" />

        {/* Description */}
        <p className="text-sm text-stone-400 leading-relaxed">
          {project.description || "No description has been provided for this project."}
        </p>

        {/* Meta */}
        <div className="mt-7 flex flex-wrap gap-6">
          <MetaItem label="Category" value={project.category ?? "—"} />
          <MetaItem label="Added" value={project.date ?? "—"} />
          <MetaItem label="Project ID" value={`#${project.id}`} />
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mb-1">{label}</p>
      <p className="text-sm font-semibold text-stone-200">{value}</p>
    </div>
  );
}