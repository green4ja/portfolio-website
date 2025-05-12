
import TimelineItem from "@/components/TimelineItem";

const experienceData = [
  {
    title: "Control Software Engineering Co-op",
    company: "Fives Cincinnati",
    location: "Hebron, KY",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Integrated a third-party SERCOS Stepper Motor Drive into a Rexroth-based controls system, expanding hardware compatibility.",
      "Implemented linear, stepper, and servo motors into a robotic tape laying system.",
    ],
    image: "/lovable-uploads/FivesRobot.png",
  },
  {
    title: "Analytics & Insights Engineering Co-op",
    company: "Altec Inc.",
    location: "Roanoke, VA",
    period: "May 2024 - Aug 2024",
    description: [
      "Earned the opportunity to become the Analytics & Insights Engineering team's first ever co-op, joining a highly specialized group of six experts company wide.",
      "Became a teaching resource for individuals interested in learning more about telematics data.",
      "Worked closely with the production team to create QlikSense tools that audited processes, ensuring only flawless utility trucks were delivered to customers.",
      "Created a tool that monitors the various AWS tables used by the team, sending out daily email reports highlighting any issues.",
    ],
    image: "/lovable-uploads/AltecPhoto2.jpeg",
  },
  {
    title: "Product Engineering (Data) Co-op",
    company: "Altec Inc.",
    location: "Elizabethtown, KY",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Improved the battery health monitoring report, leading to $1.5 million YTD of warranty cost savings.",
      "Utilized telematics data housed in Amazon Web Service to develop SQL queries and Qlik Sense apps that gather and display valuable insight on automatic daily refresh.",
      "Recognized in the company engineering newsletter for creating a new method of remotely detecting firmware updates on the controls system of Altec Green Fleet trucks.",
      "Led a presentation to the sales team showcasing a custom application I developed, delivering previously unavailable metrics with automated daily data refreshes.",
    ],
    image: "/lovable-uploads/AltecPhoto1.jpg",
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
                <p>Strong technical background in software engineering with hands-on experience in control systems and data analytics.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Proven ability to deliver impactful solutions that generate measurable results ($1.5M in cost savings).</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Excellent communication skills demonstrated through presentations to technical and non-technical stakeholders.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Passion for learning new technologies and applying them to solve real-world problems.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-coffee-500"></div>
                <p>Experience working in specialized engineering teams and adapting to different work environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
