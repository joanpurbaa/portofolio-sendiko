import ExperienceSection from "@/components/landing/experience-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import TechSection from "@/components/landing/tech-section";
import Navbar from "@/components/navbar";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Suspense fallback={<>Loading...</>}>
				<Navbar className="fixed w-full z-50" />
				<main className="overflow-x-hidden bg-zinc-900">
					<HeroSection />
					<TechSection />
					<ProjectsSection />
					<ExperienceSection />
				</main>
			</Suspense>
		</>
	);
}
