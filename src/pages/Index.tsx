
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-earth-50 to-coffee-50 py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-earth-900 mb-6 animate-fade-in">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-earth-700 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Professional Title | Expertise | Location
            </p>
            <p className="text-lg text-earth-600 mb-10 animate-fade-in" style={{animationDelay: "0.4s"}}>
              Welcome to my portfolio! I'm passionate about creating meaningful work 
              that combines innovation with practical solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-md bg-coffee-600 text-white font-medium hover:bg-coffee-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md border border-earth-300 text-earth-800 font-medium hover:bg-earth-100 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-earth-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="text-earth-600 mb-6">
                I am a passionate professional with expertise in [Your Field]. With [X] years of experience, 
                I've developed a strong foundation in [Key Skills] and have successfully delivered 
                projects for [Types of Clients/Companies].
              </p>
              <p className="text-earth-600 mb-8">
                My approach combines creative thinking with technical expertise to develop 
                solutions that are both innovative and practical. I believe in continuous learning 
                and staying updated with the latest trends and technologies in my field.
              </p>
              <Link
                to="/resume"
                className="inline-flex items-center text-coffee-700 font-medium hover:text-coffee-800 transition-colors"
              >
                Learn more about my background
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-earth-50">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-48 bg-earth-200 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-earth-800 mb-2">Project Title {item}</h3>
                  <p className="text-earth-600 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <Link
                    to={`/projects`}
                    className="inline-flex items-center text-coffee-700 font-medium hover:text-coffee-800 transition-colors"
                  >
                    View details
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-md bg-coffee-600 text-white font-medium hover:bg-coffee-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Web Development",
              "UX Design",
              "Project Management",
              "Content Strategy",
              "Data Analysis",
              "Digital Marketing",
              "Mobile Development",
              "SEO Optimization",
            ].map((skill) => (
              <div key={skill} className="bg-earth-50 rounded-lg p-6 text-center card-hover">
                <h3 className="font-medium text-earth-800">{skill}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/resume"
              className="inline-flex items-center text-coffee-700 font-medium hover:text-coffee-800 transition-colors"
            >
              View full skill set
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-600 text-white">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-coffee-100 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance projects, full-time positions, and consulting work. 
            Let's connect and discuss how I can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-md bg-white text-coffee-700 font-medium hover:bg-coffee-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
