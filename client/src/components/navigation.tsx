import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GiDeer } from "react-icons/gi";
import { NavLink } from "react-router";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'wouter';

export default function Navigation() {
  // const navigate = useNavigate();
  const [, setLocation] = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cursor = useCursorBlink(500)

  let showCursor: boolean = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  function useTimer(initialTime = 0) {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      let interval: NodeJS.Timeout | undefined;
      if (isActive) {
        interval = setInterval(() => {
          setTime(time => time + 1);
        }, 1000);
      } else if (!isActive && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, time]);

    return { time, isActive, setIsActive, setTime };
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigateToPage = (pageId: string) => {
    const page: string = '/' + pageId;
    setLocation(page);
  }

  const navItems = [
    { id: "", label: "Home" },
    { id: "deals", label: "Deals" },
    // { id: "about", label: "About" },
    // { id: "skills", label: "Skills" },
    // { id: "projects", label: "Projects" },
    // { id: "contact", label: "Contact" },
  ];

  const getCursor = () => {
    const cursor = "_";
    if (showCursor) {
      showCursor = false;
      return cursor
    } else {
      showCursor = true;
      return "";
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-[#4c392e] backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 py-4 font-code">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-x-1 justify-center items-center font-medium text-md text-[#ffffff]">
            <div className="">
              bowerbird
            </div>
            <div>{cursor}</div>

          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                className="text-[#ffffff] text-sm hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
