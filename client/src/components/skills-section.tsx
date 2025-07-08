import { Palette, Server, Wrench, Star } from "lucide-react";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "Angular", rating: 5 },
    { name: "TypeScript", rating: 5 },
    { name: "Tailwind CSS", rating: 4 },
    { name: "React", rating: 4 },
  ];

  const backendSkills = [
    { name: "Node.js", rating: 4 },
    { name: "Express.js", rating: 4 },
    { name: "MongoDB", rating: 4 },
    { name: "PostgreSQL", rating: 3 },
  ];

  const toolsSkills = [
    { name: "Git", rating: 5 },
    { name: "Docker", rating: 4 },
    { name: "AWS", rating: 3 },
    { name: "CI/CD", rating: 3 },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "Angular", "React", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Tailwind CSS", "SCSS", "Git", "Docker", "AWS", "Jest", "Cypress"
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-slate-300"
        }`}
      />
    ));
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Frontend</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Backend</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & DevOps */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Tools & DevOps</h3>
              </div>
              <div className="space-y-4">
                {toolsSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Technology Badges */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
