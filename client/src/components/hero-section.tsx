import { Code, Mail } from "lucide-react";
import { AiFillApi } from "react-icons/ai";
import { GiDeer } from "react-icons/gi";
import { Button } from "./ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen font-code flex items-center justify-center bg-[#181516] text-[#25de34] pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex flex-col gap-8 items-center justify-center text-center">
            
            <div className="flex flex-col sm:flex-row items-center gap-3 text-3xl">
              <span>Hello friend :)</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p>Welcome to my personal page</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
