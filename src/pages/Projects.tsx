import { useState } from "react";
import ProjectCard, { ProjectProps } from "@/components/ProjectCard";
import { Link } from "react-router-dom";

// Project data from resume
const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Smart Bartender Appliance",
    description: "An automated kitchen appliance that pours beverages based on user-selected recipes.",
    image: "/lovable-uploads/cocktail-compiler-enclosure.JPG",
    tags: ["Python", "Raspberry Pi", "PyQt6", "Hardware"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase projects and experience.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Frontend"],
  },
  {
    id: 3,
    title: "Battery Health Monitoring System",
    description: "Improved battery health monitoring report leading to $1.5M YTD warranty cost savings.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["SQL", "AWS", "Qlik Sense", "Data Analytics"],
  },
  {
    id: 4,
    title: "SERCOS Stepper Motor Integration",
    description: "Integration of third-party SERCOS Stepper Motor Drive into a Rexroth-based controls system.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    tags: ["Hardware", "Control Systems", "Engineering"],
  },
  {
    id: 5,
    title: "Robotic Tape Laying System",
    description: "Implementation of linear, stepper, and servo motors into a robotic tape laying system.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    tags: ["Robotics", "Control Systems", "Engineering"],
  },
  {
    id: 6,
    title: "Remote Firmware Update Detection",
    description: "New method for remotely detecting firmware updates on the controls system of fleet trucks.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tags: ["Firmware", "IoT", "Telematics"],
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
            Explore the various projects I've worked on throughout my education and career. Each project 
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
