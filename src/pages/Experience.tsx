
import TimelineItem from "@/components/TimelineItem";

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc",
    location: "New York, NY",
    period: "2021 - Present",
    description: [
      "Lead a team of 5 developers building enterprise SaaS applications using React, Node.js, and AWS.",
      "Implemented CI/CD pipelines that reduced deployment time by 40% and improved code quality.",
      "Designed and developed a microservices architecture that increased system scalability and reliability.",
    ],
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "San Francisco, CA",
    period: "2018 - 2021",
    description: [
      "Developed and maintained client-facing web applications using React, Redux, and Node.js.",
      "Collaborated with design team to implement responsive and accessible user interfaces.",
      "Optimized database queries and API endpoints, resulting in a 30% improvement in application performance.",
    ],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    location: "Austin, TX",
    period: "2016 - 2018",
    description: [
      "Built dynamic websites and e-commerce platforms for clients in various industries.",
      "Implemented SEO best practices, resulting in improved search engine rankings for clients.",
      "Participated in daily scrums and agile development processes.",
    ],
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-earth-50 to-coffee-50 py-16">
        <div className="section-container text-center">
          <h1 className="page-title">Work Experience</h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            My professional journey and the projects I've contributed to throughout my career.
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="pt-8">
            {experienceData.map((job, index) => (
              <TimelineItem
                key={index}
                {...job}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-coffee-50 p-8 rounded-lg border border-coffee-100">
            <h2 className="font-heading text-2xl font-semibold text-earth-800 mb-4">
              What I Bring to Your Team
            </h2>
            <ul className="space-y-3 text-earth-700">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Extensive experience in full-stack development with modern technologies.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Strong problem-solving skills and attention to detail.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Excellent communication and collaboration abilities.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Adaptability and eagerness to learn new technologies.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Commitment to writing clean, maintainable, and efficient code.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
