import AboutSection from "@/components/landing/about-section";
import ExperienceSection from "@/components/landing/experience-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import TechSection from "@/components/landing/tech-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar className="fixed w-full z-50" />
      <main className="px-4 lg:px-16 xl:px-32 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </>
  );
}
