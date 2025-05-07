
import { Briefcase } from "lucide-react";

export interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  image?: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  image,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-px bg-earth-200 transform -translate-x-1/2"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-1 left-3 w-5 h-5 rounded-full bg-coffee-600 border-4 border-white shadow transform -translate-x-1/2 flex items-center justify-center">
        <Briefcase size={12} className="text-white" />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-earth-100 overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-heading text-xl font-semibold text-earth-800">{title}</h3>
              <p className="text-coffee-600 font-medium">{company} • {location}</p>
            </div>
            <span className="text-sm text-earth-500 font-medium bg-earth-100 px-3 py-1 rounded-full whitespace-nowrap">
              {period}
            </span>
          </div>
          
          <div className="text-earth-700 space-y-3">
            {description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          {image && (
            <div className="mt-6 rounded-md overflow-hidden">
              <img
                src={image}
                alt={company}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
