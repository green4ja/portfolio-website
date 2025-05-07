
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Briefcase, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-earth-800 text-earth-100 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-earth-50">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/resume" className="hover:text-white transition-colors">Resume</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-earth-50">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">your.email@example.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>City, State</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-earth-50">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FileText size={18} />
                <Link to="/resume" className="hover:text-white transition-colors">Download Resume</Link>
              </li>
              <li className="flex items-center gap-2">
                <Briefcase size={18} />
                <Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-700 mt-8 pt-8 text-center text-earth-300">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
