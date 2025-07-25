import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Deals from "@/components/deals";

export default function SteamDeals() {
  return (
    <>
      <Navigation />
      <Deals />
      {/* <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer /> */}
    </>
  );
}