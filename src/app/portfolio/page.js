'use client';

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { projects } from "../portfolio/projects";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component
function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Tech Stack:</span> {project.techStack}
        </p>
        <a
          href={project.link}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Go to Project
        </a>
        <button
          onClick={onClose}
          className="ml-4 inline-block px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// ProjectCard for Feedforward Neural Networks
function ProjectCard({ project, onViewProject }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-blue-700 font-bold mt-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.provider}</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{project.type}</p>
      <button
        onClick={() => onViewProject(project)}
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        View Project
      </button>
    </div>
  );
}

// DeepLearningProjectCard for other sections
function DeepLearningProjectCard({ project, onViewProject }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-blue-700 font-bold mt-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{project.provider}</p>
      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{project.type}</p>
      <button
        onClick={() => onViewProject(project)}
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        View Details
      </button>
    </div>
  );
}

// Reusable component for each project section with a "Show More/Less" button
function ProjectSection({ title, projects, CardComponent, emptyMessage, onViewProject }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="mb-10">
      <h2 className="text-blue-600 font-extrabold text-2xl mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.length > 0 ? (
          visibleProjects.map((project) => (
            <CardComponent
              key={project.title}
              project={project}
              onViewProject={onViewProject}
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{emptyMessage}</p>
        )}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-start mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function DeepLearningProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and update document class
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Separate the projects by type for each section
  const projectProjects = filteredProjects.filter(
    (project) => project.type === "FNN"
  );
  const specializationProjects = filteredProjects.filter(
    (project) => project.type === "CNN"
  );
  const rnnProjects = filteredProjects.filter(
    (project) => project.type === "RNN"
  );
  const transProjects = filteredProjects.filter(
    (project) => project.type === "Transformers"
  );
  const ganProjects = filteredProjects.filter(
    (project) => project.type === "GenerativeModels"
  );
  const hmProjects = filteredProjects.filter(
    (project) => project.type === "HybridModels"
  );
  const gnnProjects = filteredProjects.filter(
    (project) => project.type === "GNN"
  );
  const reinforcementProjects = filteredProjects.filter(
    (project) => project.type === "reinforcement"
  );

  // Data for each section
  const sectionData = [
    {
      title: "Feedforward Neural Networks",
      type: "Project",
      projects: projectProjects,
      CardComponent: ProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "CONVULUTIONAL NEURAL NETWORKS",
      type: "Specialization",
      projects: specializationProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No specializations found.",
    },
    {
      title: "RECURRENT NEURAL NETWORKS",
      type: "RNN",
      projects: rnnProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "TRANSFORMERS",
      type: "Transformers",
      projects: transProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "GENERATIVE MODELS",
      type: "GenerativeModels",
      projects: ganProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "REINFORCEMENT MODELS",
      type: "reinforcement",
      projects: reinforcementProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "GRAPH NEURAL NETWORKS",
      type: "GNN",
      projects: gnnProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
    {
      title: "HYBRID MODELS",
      type: "HybridModels",
      projects: hmProjects,
      CardComponent: DeepLearningProjectCard,
      emptyMessage: "No projects found.",
    },
  ];

  // Navigation sections for filtering
  const navSections = [
    { label: "All", value: "all" },
    { label: "Feedforward Neural Networks", value: "Project" },
    { label: "CONVULUTIONAL NEURAL NETWORKS", value: "Specialization" },
    { label: "RECURRENT NEURAL NETWORKS", value: "RNN" },
    { label: "TRANSFORMERS", value: "Transformers" },
    { label: "GENERATIVE MODELS", value: "GenerativeModels" },
    { label: "REINFORCEMENT MODELS", value: "reinforcement" },
    { label: "GRAPH NEURAL NETWORKS", value: "GNN" },
    { label: "HYBRID MODELS", value: "HybridModels" },
  ];

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Global Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Custom Scrollbar Styles for WebKit browsers */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
          border: 3px solid #f1f1f1;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
        /* Firefox scrollbar styling */
        body {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>

      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header Navbar with Project Title, Search (Dark mode toggle removed) */}
          <nav className="bg-white dark:bg-gray-800 shadow-md p-4 mb-6 border border-gray-300 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-center">
              {/* Project Title */}
              <h1 className="text-blue-500 font-extrabold text-2xl">Projects</h1>
              <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for a project"
                    className="border rounded-full px-4 py-2 w-64 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
                {/* Dark mode toggle button has been removed */}
              </div>
            </div>
            {/* Navigation Filters */}
            <div className="mt-4 flex flex-wrap gap-4">
              {navSections.map((sec) => (
                <button
                  key={sec.value}
                  onClick={() => setActiveSection(sec.value)}
                  className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activeSection === sec.value
                      ? "bg-blue-500 text-white shadow"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Render Project Sections based on active filter */}
          {sectionData.map((section) => {
            if (activeSection === "all" || activeSection === section.type) {
              return (
                <ProjectSection
                  key={section.type}
                  title={section.title}
                  projects={section.projects}
                  CardComponent={section.CardComponent}
                  emptyMessage={section.emptyMessage}
                  onViewProject={handleViewProject}
                />
              );
            }
            return null;
          })}

          {/* Modal for Project Details */}
          {selectedProject && (
            <Modal project={selectedProject} onClose={closeModal} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
