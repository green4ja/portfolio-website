
import { FileText } from "lucide-react";

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
            href="#" 
            className="inline-flex items-center mt-6 px-6 py-3 bg-coffee-600 text-white rounded-md font-medium hover:bg-coffee-700 transition-colors"
          >
            <FileText size={18} className="mr-2" />
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
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Master of Science in Computer Science</h3>
                  <p className="text-coffee-600">University Name • 2018 - 2020</p>
                  <p className="mt-3 text-earth-600">
                    Specialized in artificial intelligence and machine learning. Thesis on "Applications of Deep Learning in Natural Language Processing."
                  </p>
                  <div className="mt-3 text-earth-700">
                    <p className="font-medium">Relevant Coursework:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-earth-600">
                      <li>Advanced Algorithms</li>
                      <li>Machine Learning</li>
                      <li>Data Mining</li>
                      <li>Computer Vision</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-earth-800">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-coffee-600">University Name • 2014 - 2018</p>
                  <p className="mt-3 text-earth-600">
                    Graduated with honors. Focused on software development and computer architecture.
                  </p>
                  <div className="mt-3 text-earth-700">
                    <p className="font-medium">Relevant Coursework:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-earth-600">
                      <li>Data Structures and Algorithms</li>
                      <li>Operating Systems</li>
                      <li>Database Systems</li>
                      <li>Web Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="section-title">Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2021",
                  },
                  {
                    title: "Certified Scrum Master",
                    issuer: "Scrum Alliance",
                    date: "2020",
                  },
                  {
                    title: "Google Cloud Professional Developer",
                    issuer: "Google",
                    date: "2019",
                  },
                  {
                    title: "React Developer Certification",
                    issuer: "Meta",
                    date: "2018",
                  },
                ].map((cert, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border border-earth-100 shadow-sm">
                    <h3 className="font-semibold text-earth-800">{cert.title}</h3>
                    <p className="text-coffee-600 text-sm">{cert.issuer}</p>
                    <p className="text-earth-500 text-sm mt-2">Issued: {cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar with Skills */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-earth-100 shadow-sm sticky top-24">
              <h2 className="font-heading text-xl font-semibold text-earth-800 mb-4">Skills</h2>

              {/* Technical Skills */}
              <div className="mb-6">
                <h3 className="text-coffee-700 font-medium mb-2">Technical</h3>
                <div className="space-y-3">
                  {[
                    { name: "JavaScript/TypeScript", level: 90 },
                    { name: "React & React Native", level: 85 },
                    { name: "Node.js", level: 80 },
                    { name: "Python", level: 75 },
                    { name: "SQL & NoSQL Databases", level: 70 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-earth-700">{skill.name}</span>
                        <span className="text-xs text-earth-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-earth-100 rounded-full h-2">
                        <div
                          className="bg-coffee-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Skills */}
              <div>
                <h3 className="text-coffee-700 font-medium mb-2">Professional</h3>
                <div className="space-y-3">
                  {[
                    { name: "Project Management", level: 85 },
                    { name: "UI/UX Design", level: 70 },
                    { name: "Team Leadership", level: 80 },
                    { name: "Problem Solving", level: 90 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-earth-700">{skill.name}</span>
                        <span className="text-xs text-earth-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-earth-100 rounded-full h-2">
                        <div
                          className="bg-coffee-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mt-6">
                <h3 className="text-coffee-700 font-medium mb-2">Languages</h3>
                <div className="space-y-3">
                  {[
                    { name: "English", level: "Native" },
                    { name: "Spanish", level: "Fluent" },
                    { name: "French", level: "Intermediate" },
                  ].map((lang) => (
                    <div key={lang.name} className="flex justify-between">
                      <span className="text-sm text-earth-700">{lang.name}</span>
                      <span className="text-sm text-earth-500">{lang.level}</span>
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
