"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TechStack {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export default function TechSection() {
	const [techStacks, setTechStacks] = useState<TechStack[]>([]);

	const fetchTechStacks = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/techstack`
			);
			setTechStacks(response.data.responseObject);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchTechStacks();
	}, []);

	return (
		<section
			id="tech-stack"
			className="relative h-screen flex flex-col items-stretch justify-center gap-[114px] px-4 lg:px-16 xl:px-64">
			<Image
				src={"/gradient-circle.png"}
				width={555}
				height={555}
				alt="gradient circle"
				className="absolute -bottom-96 -right-96 z-0 w-[1000px] blur-[300px]"
			/>
			<div className="z-10 flex flex-col gap-[114px]">
				{techStacks.map((stack, index) => (
					<div
						key={stack.id}
						className={`flex flex-col sm:flex-row ${
							index % 2 !== 0 ? "sm:flex-row-reverse" : ""
						} items-center gap-5`}>
						<img src={stack.icon} className="w-20 sm:w-[130px]" alt={stack.title} />
						<div className="max-w-[368px] space-y-3 text-center sm:text-start">
							<h2 className="text-xs sm:text-2xl lg:text-4xl font-semibold">
								{stack.title}
							</h2>
							<p className="text-xs sm:text-sm lg:text-base">{stack.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
