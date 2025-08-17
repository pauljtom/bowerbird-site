import { Code, Mail } from "lucide-react";
import { AiFillApi } from "react-icons/ai";
import { GiDeer } from "react-icons/gi";
import { Button } from "./ui/button";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function HeroSection() {
   const [, setLocation] = useLocation();

  const cursor = useCursorBlink(500);
  const cityscapeArt = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⡄\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇";
  const catArt = "                    ::\n                   ###\n ###  ###....###   ###.#########   .####.###.####.\n.###.#########.   ################.  ################.\n.#############.   .###  \"###.###.####.  \"###    ####    \"####\"    \"###\"\n################     \"###\"\n################       .\n.###############.\n###\"  \"###.###.####.\n\"###    ####    \"####\"\n        \"###\"";
  const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  const navigateToPage = (pageId: string) => {
    const page: string = '/' + pageId;
    setLocation(page);
  }

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
            
            {/* <div className="tracking-wide leading-4 sm:leading-5 text-xs sm:text-sm overflow-x-auto">
              <div className="min-w-max">
                <p>⠀⠀⠀⠀⠀⣄⡀</p>
                <p>⠀⠀⠀⠀⠀⢿⣧⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                <p>⠀⠀⠀⠀⠀⢸⣿⣇⠀⢸⣿⣿⣦⣤⣄⣀⣴⣿⣷⠀⠀</p>
                <p>⠀⠀⠀⠀⠀⢸⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀</p>
                <p>⠀⠀⠀⠀⢀⣼⣿⣿⣧⣿⣿⣿⣿⡟⣿⣿⣿⠻⣿⠂⡀</p>
                <p>⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣦⣿⣏⠁</p>
                <p>⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀</p>
                <p>⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀</p>
                <p>⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀</p>
                <p>⢠⣾⣿⡿⠋⠀⠈⠙⣿⣿⣿⡿⣿⡿⠿⠟⢿⣿⣿⣷⣄</p>
                <p>⠈⠿⡿⠃⠀⠀⠀  ⣿⣿⣿⣧⠀⠀⠀⠀⠀ ⠉⠻⣿⡿  </p>
                <p>⠀⠀⠀⠀⠀⠀⠀  ⠈⢿⡿⠟⠃⠀⠀⠀⠀⠀⠀⠀  ⠈⠀⠀</p>
              </div>
            </div> */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">Hello{cursor}</h1>
            </div>




            <div className="flex flex-col items-start gap-4">
              <p className="text-sm sm:text-base">Welcome to Bowerbird <span className="text-3xl">𓅪</span></p>
              <div className="flex flex-col sm:flex-row gap-x-1">
                <p className="text-sm sm:text-base leading-relaxed mt-2">
                  Here you can find out:
                </p>
              </div>
                <div className="flex flex-col">
                <p>{'> '}a bit more about me</p>
                <p>{'> '}my thoughts at the moment</p>
                <p>{'> '}what I'm working on</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
