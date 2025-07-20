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
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#dddddd] pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex flex-col gap-8 items-center justify-center text-center">
            
            <div className="flex flex-col sm:flex-row items-center gap-3 text-3xl text-[#333333]">
              <span>Rome was not built in a day... under construction</span>
              <GiDeer size={96} color="#333333" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl font-medium text-gray-800">Click the button below to check out the top 10 Steam deals</h2>
              <Link to="/deals">
                <Button className="text-lg px-6 py-2">HERE</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
