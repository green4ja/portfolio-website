
import { useState } from "react";
import ProjectCard, { ProjectProps } from "@/components/ProjectCard";

// Sample project data
const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management and payment integration.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for managing personal and team tasks.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    title: "Health & Wellness Platform",
    description: "A web application for tracking health metrics and providing wellness recommendations.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Real Estate Listings",
    description: "A platform for browsing and managing real estate listings with advanced filtering.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media engagement and performance.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["Angular", "Chart.js", "Firebase"],
  },
];

// All unique tags from projects
const allTags = Array.from(
  new Set(projectsData.flatMap((project) => project.tags))
);

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-earth-50 to-coffee-50 py-16">
        <div className="section-container text-center">
          <h1 className="page-title">My Projects</h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Explore the various projects I've worked on throughout my career. Each project 
            represents a unique challenge and solution.
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Filter by tags */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-earth-700 mb-4">Filter by technology:</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? "bg-coffee-600 text-white"
                  : "bg-earth-100 text-earth-700 hover:bg-earth-200"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-coffee-600 text-white"
                    : "bg-earth-100 text-earth-700 hover:bg-earth-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-earth-600">No projects match the selected filter.</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 px-4 py-2 bg-coffee-600 text-white rounded-md hover:bg-coffee-700 transition-colors"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
