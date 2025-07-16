import Image from "next/image";

export default function TechSection() {
  return (
			<section
				id="tech-stack"
				className="relative h-screen flex flex-col items-stretch justify-center gap-[114px] px-4 lg:px-16 xl:px-64">
				<Image
					src={"/gradient-circle.png"}
					width={555}
					height={555}
					alt="gradient circle"
					className="absolute -bottom-96 -right-96 -z-10 w-[1000px] blur-[300px]"
				/>
				<div className="flex flex-col sm:flex-row items-center gap-5">
					<Image
						src={"/kotlin.png"}
						className="w-20 sm:w-[130px]"
						width={128}
						height={128}
						alt="kotlin"
					/>
					<div className="max-w-[368px] space-y-3 text-center sm:text-start">
						<h2 className="text-xs sm:text-2xl lg:text-4xl font-semibold">Kotlin Multiplatform</h2>
						<p className="text-xs sm:text-sm lg:text-base">
							Leveraging the power of Kotlin and Compose Multiplatform to craft modern,
							efficient, and cross-platform mobile applications with clean architecture
							and a seamless user experience.
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row-reverse items-center gap-5">
					<Image
						src={"/ktor.png"}
						className="w-20 sm:w-[130px]"
						width={128}
						height={128}
						alt="Ktor"
					/>
					<div className="max-w-[368px] space-y-3 text-center sm:text-start">
						<h2 className="text-xs sm:text-2xl lg:text-4xl font-semibold">Ktor Server</h2>
						<p className="text-xs sm:text-sm lg:text-base">
							Creating robust and scalable RESTful APIs with Ktor Server, designed for
							high performance, clean architecture, and seamless integration with
							modern client applications.
						</p>
					</div>
				</div>
			</section>
		);
}
