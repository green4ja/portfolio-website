
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-earth-50 to-coffee-50 py-16">
        <div className="section-container text-center">
          <h1 className="page-title">Get In Touch</h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="section-title">Contact Information</h2>
            <p className="text-earth-600 mb-8">
              Feel free to reach out to me using any of the methods below. I'm always open to
              discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-coffee-100 p-3 rounded-lg text-coffee-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-earth-800">Email</h3>
                  <a href="mailto:green4ja@mail.uc.edu" className="text-coffee-600 hover:text-coffee-700 transition-colors">
                    green4ja@mail.uc.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-coffee-100 p-3 rounded-lg text-coffee-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-earth-800">Phone</h3>
                  <a href="tel:+15133104419" className="text-coffee-600 hover:text-coffee-700 transition-colors">
                    (513) 310-4419
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-coffee-100 p-3 rounded-lg text-coffee-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-earth-800">Location</h3>
                  <p className="text-earth-600">
                    Cincinnati, OH<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium text-earth-800 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/green4ja"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 bg-earth-100 text-earth-700 rounded-md hover:bg-coffee-100 hover:text-coffee-700 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 bg-earth-100 text-earth-700 rounded-md hover:bg-coffee-100 hover:text-coffee-700 transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="section-title">Send a Message</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-earth-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
