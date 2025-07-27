"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Experience {
	id: string;
	position: string;
	organizationName: string;
	description: string;
	periodeStart: string;
	periodeEnd: string;
}

export default function ExperienceSection() {
	const [experiences, setExperiences] = useState<Experience[]>([]);

	const fetchExperiences = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/v1/experience`
			);
			setExperiences(response.data.data);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchExperiences();
	}, []);

	const formatDate = (dateString: string) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			year: "numeric",
			month: "short",
		});
	};

	return (
		<section
			id="experience"
			className="z-10 min-h-screen flex flex-col justify-start pt-20 sm:pt-32 px-4 lg:px-16 xl:px-64">
			<h2 className="text-xl sm:text-4xl font-semibold mb-12">👨‍💻 My Experience</h2>
			<div className="flex flex-col">
				{Array.isArray(experiences) &&
					experiences.map((experience, index) => (
						<div
							key={index}
							className="relative border-l-2 border-primary pl-6 pb-8 lg:pb-10">
							<div className="size-4 rounded-full bg-primary absolute z-10 -left-2.5 -top-2.5"></div>
							<div>
								<div>
									<div className="flex items-baseline justify-between sm:justify-start gap-2">
										<h3 className="font-medium text-sm sm:text-lg lg:text-2xl flex-1 sm:flex-none">
											{experience.position}
										</h3>
										<div>
											<p className="font-extrabold text-xs sm:text-base text-primary flex-1 sm:flex-none text-end sm:text-start">
												{formatDate(experience.periodeStart)}
												{" - "}
												{experience.periodeEnd == null
													? "now"
													: formatDate(experience.periodeEnd)}
											</p>
										</div>
									</div>
									<p className="font-bold text-xs sm:text-sm lg:text-base">
										at {experience.organizationName}
									</p>
								</div>
								<p className="mt-4 font-medium text-xs sm:text-sm lg:text-base">
									{experience.description}
								</p>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
