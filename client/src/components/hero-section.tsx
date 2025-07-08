import { Code, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Hi, I'm <span className="text-primary">John</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-600 mb-6 font-medium">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                I create modern, responsive web applications using Angular, TypeScript, and cutting-edge technologies. 
                Passionate about clean code and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                  alt="Professional developer portrait" 
                  className="w-80 h-80 rounded-full object-cover shadow-2xl mx-auto border-4 border-white"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
