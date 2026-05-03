import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import Toast from "./components/Toast";

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack shopping platform built with React, Node.js, and Stripe. Features product search, cart management, and real-time order tracking.",
    category: "Web App",
    date: "Jan 2024",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Real-time weather visualization using the OpenWeather API with animated charts and a 7-day forecast view. Built with React and Recharts.",
    category: "Dashboard",
    date: "Mar 2024",
  },
  {
    id: 3,
    title: "Task Manager CLI",
    description:
      "A command-line productivity tool written in Python with local SQLite storage, priority tagging, and deadline reminders.",
    category: "CLI Tool",
    date: "Apr 2024",
  },
];

export default function App() {
  const [projects, setProjects] = useState(SAMPLE_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2200);
  }

  function handleAddProject(newProject) {
    const id = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
    setProjects((prev) => [{ id, ...newProject }, ...prev]);
    showToast("Project added successfully");
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    if (selectedProject?.id === id) setSelectedProject(null);
    showToast("Project removed");
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <Header />

        <div className="flex flex-col gap-8">
          <ProjectForm onAdd={handleAddProject} />
          <ProjectList
            projects={projects}
            onDelete={handleDeleteProject}
            onSelect={setSelectedProject}
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {toast && <Toast message={toast} />}
    </div>
  );
}