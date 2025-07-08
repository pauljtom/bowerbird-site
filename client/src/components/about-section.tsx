import { Code, Server, Smartphone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate developer with a focus on creating exceptional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a dedicated full-stack developer with over 5 years of experience building scalable web applications. 
                My expertise spans across modern frameworks like Angular, React, and Node.js, with a strong foundation in TypeScript and responsive design.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating user-centric solutions. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-slate-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Code className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Frontend Development</h4>
                      <p className="text-slate-600">Creating responsive, interactive user interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Backend Development</h4>
                      <p className="text-slate-600">Building robust APIs and server-side logic</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Smartphone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Mobile-First Design</h4>
                      <p className="text-slate-600">Ensuring optimal experience across all devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
