import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link for static hosting
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:john.developer@email.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600">john.developer@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Location</h4>
                      <p className="text-slate-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-xl hover:bg-blue-600 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2 inline" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
