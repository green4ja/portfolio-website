
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-48 bg-earth-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-earth-800 mb-2">{project.title}</h3>
        <p className="text-earth-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-earth-100 text-earth-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-coffee-700 font-medium hover:text-coffee-800 transition-colors"
        >
          View details
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
