import { Code, Mail, ExternalLink, Github } from "lucide-react";
import { AiFillApi } from "react-icons/ai";
import { GiDeer } from "react-icons/gi";
import { Button } from "./ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

function ProjectCard({ title, description, tech, link, github }: ProjectCardProps) {
  return (
    <div className="border border-[#25de34] bg-[#1a1a1a] p-4 sm:p-6 rounded-lg hover:bg-[#252525] transition-colors duration-200">
      <h3 className="text-lg sm:text-xl font-semibold text-[#25de34] mb-3">{title}</h3>
      <p className="text-[#25de34] opacity-80 mb-4 leading-relaxed text-sm sm:text-base">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs border border-[#25de34] text-[#25de34] rounded bg-transparent"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {link && (
          <Link href={link}>
            <Button size="sm" className="bg-[#25de34] text-[#181516] hover:bg-[#1fb82a] transition-colors w-full sm:w-auto">
              <ExternalLink className="w-4 h-4 mr-1" />
              View Project
            </Button>
          </Link>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-[#25de34] text-[#181516] hover:bg-[#1fb82a] transition-colors w-full sm:w-auto">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  const TextArt = (label: string, text: string) => {
  return (
    <pre
      aria-label={label}
      className="text-art"
    >{text}</pre>
  );
}

  function useCursorBlink(interval = 500) {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
      const timer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, interval);

      return () => clearInterval(timer);
    }, [interval]);

    return showCursor ? "_" : "";
  }

  return (
    <section id="home" className="min-h-screen font-code flex items-start justify-start bg-[#181516] text-[#25de34] pt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="w-full">
          <div className="w-full flex flex-col gap-6 sm:gap-8 items-start justify-start">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Projects:</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                <ProjectCard 
                    title="Steam Deals Checker"
                    description="A web application that tracks and displays current Steam game deals, helping users find the best discounts on games."
                    tech={["React", "TypeScript", "Steam API"]}
                    link="/deals"
                />
                  <ProjectCard 
                    title="DBD Api"
                    description="A web API that holds DBD perk data"
                    tech={["C#", ".NET", "DBD Api"]}
                    github="https://github.com/pauljtom/dbd-data-api"
                />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
