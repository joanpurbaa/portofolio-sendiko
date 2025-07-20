import ExperienceSection from "@/components/landing/experience-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import TechSection from "@/components/landing/tech-section";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<>
			<Navbar className="fixed w-full z-50" />
			<main className="overflow-x-hidden bg-zinc-900">
				<HeroSection />
				<TechSection />
				<ProjectsSection />
				<ExperienceSection />
				<footer className="bg-transparent">
					<p className="text-center text-white text-xs sm:text-sm pb-5">
						&copy; Sendiko | Sebuah Software House
					</p>
				</footer>
			</main>
		</>
	);
}
