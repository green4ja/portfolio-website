
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Define the project data structure
interface ProjectDetailProps {
  id: number;
  title: string;
  description: string;
  fullDescription: string[];
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  technologies: string[];
  features: string[];
  date: string;
}

// Project details data
const projectDetails: ProjectDetailProps[] = [
  {
    id: 1,
    title: "Smart Bartender Appliance",
    description: "An automated kitchen appliance that automatically pours beverages based on user-selected recipes.",
    fullDescription: [
      "The Smart Bartender Appliance (cocktail-compiler) is a custom-built kitchen appliance that automatically pours beverages based on user-selected recipes.",
      "I integrated the CocktailDB web API to suggest new recipes based on user-defined ingredient lists, providing a dynamic and personalized experience.",
      "The hardware consists of a 3D-printed housing, Raspberry Pi, 7\" touchscreen display, custom soldered relay board, power supply, voltage regulator, and peristaltic pumps to carry out the functions of the appliance.",
      "The user interface was built with a Python-based GUI using PyQt6, enabling intuitive interaction through the touchscreen display."
    ],
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Raspberry Pi", "PyQt6", "Hardware"],
    github: "https://github.com/green4ja/cocktail-compiler",
    technologies: ["Python 3", "PyQt6", "Raspberry Pi", "CocktailDB API", "3D Printing", "Electronics"],
    features: [
      "User-selected beverage recipes",
      "API integration for recipe suggestions",
      "Touchscreen interface",
      "Custom hardware solution with peristaltic pumps",
      "Automated beverage dispensing"
    ],
    date: "Nov. 2024"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  const project = projectDetails.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen">
        <div className="section-container py-16 text-center">
          <h1 className="page-title">Project Not Found</h1>
          <p className="text-lg text-earth-600 mt-4">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center mt-8 text-coffee-700 hover:text-coffee-800 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-earth-50 to-coffee-50 py-16">
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center text-coffee-700 hover:text-coffee-800 transition-colors mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <h1 className="page-title">{project.title}</h1>
          <p className="text-lg text-earth-600 max-w-3xl mt-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm bg-earth-100 text-earth-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project Image */}
            <div className="bg-earth-100 rounded-lg overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Project Description */}
            <h2 className="text-2xl font-heading font-semibold text-earth-800 mb-4">About This Project</h2>
            <div className="space-y-4 text-earth-700">
              {project.fullDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            {/* Project Features */}
            <h2 className="text-2xl font-heading font-semibold text-earth-800 mt-10 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-earth-700">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm sticky top-24">
              <h3 className="font-heading text-xl font-semibold text-earth-800 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-earth-500 font-medium">Completion Date</h4>
                  <p className="text-earth-800 mt-1">{project.date}</p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-earth-500 font-medium">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-earth-100 text-earth-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.github && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-earth-500 font-medium">Source Code</h4>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coffee-600 hover:text-coffee-700 transition-colors mt-1"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
                
                {project.demo && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-earth-500 font-medium">Live Demo</h4>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-coffee-600 hover:text-coffee-700 transition-colors mt-1"
                    >
                      Visit Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
