
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-earth-50 to-coffee-50 py-16">
        <div className="section-container text-center">
          <h1 className="page-title">Resume & Qualifications</h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            My educational background, professional qualifications, and key skills.
          </p>
          <a 
            href="/lovable-uploads/Greenebaum_Jacob_Resume_2025.pdf"
            download="Greenebaum_Jacob_Resume_2025.pdf"
            className="inline-flex items-center mt-6 px-6 py-3 bg-coffee-600 text-white rounded-md font-medium hover:bg-coffee-700 transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download Resume PDF
          </a>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education Section */}
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Bachelor of Science, Computer Engineering</h3>
                  <p className="text-coffee-600">University of Cincinnati • Cincinnati, OH • 2027</p>
                  <p className="mt-3 text-earth-600">
                    GPA: 3.5/4.0
                  </p>
                  <div className="mt-3 text-earth-700">
                    <p className="font-medium">Relevant Coursework:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-earth-600">
                      <li>Software Engineering</li>
                      <li>Computer Architecture</li>
                      <li>Data Structures and Algorithms</li>
                      <li>Electronics II</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="section-title">Professional Experience</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Control Software Engineering Co-op</h3>
                  <p className="text-coffee-600">Fives Cincinnati • Hebron, KY • Jan 2025</p>
                  <div className="mt-3 text-earth-600">
                    <ul className="list-disc pl-5 mt-1 space-y-2">
                      <li>Integrated a third-party SERCOS Stepper Motor Drive into a Rexroth-based controls system, expanding hardware compatibility.</li>
                      <li>Implemented linear, stepper, and servo motors into a robotic tape laying system.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Analytics & Insights Engineering Co-op</h3>
                  <p className="text-coffee-600">Altec Inc. • Roanoke, VA • May 2024</p>
                  <div className="mt-3 text-earth-600">
                    <ul className="list-disc pl-5 mt-1 space-y-2">
                      <li>Earned the opportunity to become the Analytics & Insights Engineering team's first ever co-op, joining a highly specialized group of six experts company wide.</li>
                      <li>Became a teaching resource for individuals interested in learning more about telematics data.</li>
                      <li>Worked closely with the production team to create QlikSense tools that audited processes, ensuring only flawless utility trucks were delivered to customers.</li>
                      <li>Created a tool that monitors the various AWS tables used by the team, sending out daily email reports highlighting any issues.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Product Engineering (Data) Co-op</h3>
                  <p className="text-coffee-600">Altec Inc. • Elizabethtown, KY • Aug 2023</p>
                  <div className="mt-3 text-earth-600">
                    <ul className="list-disc pl-5 mt-1 space-y-2">
                      <li>Improved the battery health monitoring report, leading to $1.5 million YTD of warranty cost savings.</li>
                      <li>Utilized telematics data housed in Amazon Web Service to develop SQL queries and Qlik Sense apps that gather and display valuable insight on automatic daily refresh.</li>
                      <li>Recognized in the company engineering newsletter for creating a new method of remotely detecting firmware updates on the controls system of Altec Green Fleet trucks.</li>
                      <li>Led a presentation to the sales team showcasing a custom application I developed, delivering previously unavailable metrics with automated daily data refreshes.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar with Skills */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm sticky top-24">
              <h2 className="font-heading text-xl font-semibold text-earth-800 mb-4">Skills</h2>

              {/* Technical Skills */}
              <div className="mb-6">
                <h3 className="text-coffee-700 font-medium mb-2">Programming Languages</h3>
                <div className="space-y-3">
                  {[
                    { name: "Python 3" },
                    { name: "C++" },
                    { name: "C# (.NET, WPF)" },
                    { name: "SQL" },
                    { name: "MATLAB" },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <span className="text-sm text-earth-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software/Frameworks */}
              <div>
                <h3 className="text-coffee-700 font-medium mb-2">Software & Frameworks</h3>
                <div className="space-y-3">
                  {[
                    { name: "Microsoft Office" },
                    { name: "VSCode" },
                    { name: "VS 2022" },
                    { name: "Indraworks" },
                    { name: "Qlik" },
                    { name: "AWS" },
                    { name: "Raspberry Pi" },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <span className="text-sm text-earth-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Skills */}
              <div className="mt-6">
                <h3 className="text-coffee-700 font-medium mb-2">Web Technologies</h3>
                <div className="space-y-3">
                  {[
                    { name: "HTML/CSS" },
                    { name: "JavaScript" },
                    { name: "API Integration" },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <span className="text-sm text-earth-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
