import ProjectCard from "../project-card";
import Image from "next/image";

export default function ProjectsSection() {
	return (
		<section
			id="recent-work"
			className="relative min-h-screen flex flex-col justify-center py-32 px-4 lg:px-16 xl:px-64">
			<Image
				src={"/gradient-circle.png"}
				width={555}
				height={555}
				alt="gradient circle"
				className="absolute -bottom-96 -left-96 z-0 w-[1000px] blur-[300px]"
			/>
			<h2 className="text-sm sm:text-4xl mb-12 font-semibold">📲 Apps by Me</h2>

			<div className="grid grid-cols-12 gap-5">
				{[...Array(6)].map((_, index) => (
					<ProjectCard
						className="col-span-12 sm:col-span-6 md:col-span-4"
						key={index}
						name="App name"
						description="Lorem ipsum dolor sit amet consectetur.."
					/>
				))}
			</div>
		</section>
	);
}
