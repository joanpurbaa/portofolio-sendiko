"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
	id: string;
	title: string;
	description: string;
	imagePreview: string;
	techStacks: string[];
}

export default function ProjectsSection() {
	const [projects, setProjects] = useState<Project[]>([]);

	const fetchProjects = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/v1/project`
			);
			setProjects(response.data.data);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, []);

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
			<h2 className="text-xl sm:text-4xl mb-12 font-semibold">📲 Apps by Me</h2>
			<div className="z-10 grid grid-cols-12 gap-5">
				{Array.isArray(projects) &&
					projects.map((project, index) => (
						<div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
							<img
								src={`${process.env.NEXT_PUBLIC_BASE_API}/${project.imagePreview}`}
								className="w-full h-[200px] object-cover rounded-t-lg"
							/>
							<div className="h-[150px] sm:h-[200px] flex flex-col justify-between bg-primary p-5 rounded-b-lg">
								<div className="flex flex-col gap-2">
									<h3 className="font-extrabold text-xs sm:text-lg">{project.title}</h3>
									<p className="text-xs sm:text-base line-clamp-2">
										{project.description}
									</p>
								</div>
								<div className="flex gap-3">
									{Array.isArray(project.techStacks)
										? project.techStacks.map((tech, i) => (
												<span
													key={i}
													className="inline-block bg-violet-700 text-white px-2 py-1 rounded-md text-xs mr-1 mb-1">
													{tech}
												</span>
										  ))
										: project.techStacks}
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
