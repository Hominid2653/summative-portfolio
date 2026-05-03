import { useState } from "react";

const CATEGORIES = [
  "Web App",
  "Dashboard",
  "CLI Tool",
  "Mobile App",
  "API",
  "Library",
  "Other",
];

export default function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web App");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!title.trim()) {
      setError("Please enter a project title.");
      return;
    }
    setError("");
    onAdd({
      title: title.trim(),
      description: description.trim(),
      category,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    });
    setTitle("");
    setDescription("");
    setCategory("Web App");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-7 w-full">
      <h2 className="font-serif text-xl font-bold mb-6 text-stone-100">
        Add Project
      </h2>

      {/* Title */}
      <div className="mb-5">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={handleKeyDown}
          placeholder="Project name"
          className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5
                     text-sm text-stone-100 placeholder-stone-600
                     focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10
                     transition-colors duration-150"
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-400">{error}</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What did you build?"
          rows={4}
          className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5
                     text-sm text-stone-100 placeholder-stone-600 resize-none
                     focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10
                     transition-colors duration-150"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5
                     text-sm text-stone-100
                     focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10
                     transition-colors duration-150 appearance-none cursor-pointer"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500
                   text-stone-950 font-semibold text-sm rounded-lg py-3 px-4
                   transition-all duration-150 hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-amber-400/50"
      >
        + Add Project
      </button>
    </div>
  );
}