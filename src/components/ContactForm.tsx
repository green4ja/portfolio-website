
import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-earth-200 focus:border-coffee-400 focus:ring focus:ring-coffee-100 focus:ring-opacity-50 outline-none transition"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-earth-200 focus:border-coffee-400 focus:ring focus:ring-coffee-100 focus:ring-opacity-50 outline-none transition"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-earth-200 focus:border-coffee-400 focus:ring focus:ring-coffee-100 focus:ring-opacity-50 outline-none transition"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-md border border-earth-200 focus:border-coffee-400 focus:ring focus:ring-coffee-100 focus:ring-opacity-50 outline-none transition"
          placeholder="How can I help you?"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-coffee-600 text-white rounded-md font-medium flex items-center justify-center hover:bg-coffee-700 transition-colors disabled:opacity-70"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
