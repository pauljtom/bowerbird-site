import { ExternalLink, Github, Star, GitBranch } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Angular and Node.js, featuring payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Angular", "Node.js", "MongoDB"],
      stars: 128,
      forks: 24,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Socket.io", "PostgreSQL"],
      stars: 89,
      forks: 15,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, weather maps, and personalized notifications.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["TypeScript", "API Integration", "PWA"],
      stars: 67,
      forks: 12,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Angular", "D3.js", "GraphQL"],
      stars: 156,
      forks: 31,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with workout planning, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["React Native", "Firebase", "Redux"],
      stars: 94,
      forks: 18,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, comment system, and content management capabilities.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "Prisma", "Markdown"],
      stars: 78,
      forks: 22,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      Angular: "bg-primary/10 text-primary",
      React: "bg-primary/10 text-primary",
      "Node.js": "bg-accent/10 text-accent",
      "Socket.io": "bg-accent/10 text-accent",
      MongoDB: "bg-purple-100 text-purple-600",
      PostgreSQL: "bg-purple-100 text-purple-600",
      TypeScript: "bg-primary/10 text-primary",
      "API Integration": "bg-accent/10 text-accent",
      PWA: "bg-purple-100 text-purple-600",
      "D3.js": "bg-accent/10 text-accent",
      GraphQL: "bg-purple-100 text-purple-600",
      "React Native": "bg-primary/10 text-primary",
      Firebase: "bg-accent/10 text-accent",
      Redux: "bg-purple-100 text-purple-600",
      "Next.js": "bg-primary/10 text-primary",
      Prisma: "bg-accent/10 text-accent",
      Markdown: "bg-purple-100 text-purple-600"
    };
    return colors[tech] || "bg-slate-100 text-slate-600";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      className="inline-block p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-600" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-block p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-slate-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-slate-500">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-500">
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors duration-200 font-semibold"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
