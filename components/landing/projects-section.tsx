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
			<h2 className="text-xl sm:text-4xl mb-12 font-semibold">📲 Apps by Me</h2>
			<div className="grid grid-cols-12 gap-5">
				{[...Array(6)].map((_, index) => (
					<div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
						<img
							src={"https://mmc.tirto.id/image/2019/07/22/logo-baru-gojek-02.jpg"}
							className="w-full h-[200px] object-cover rounded-t-lg"
						/>
						<div className="h-[150px] sm:h-[200px] flex flex-col justify-between bg-primary p-5 rounded-b-lg">
							<div className="flex flex-col gap-2">
								<h3 className="font-extrabold text-xs sm:text-lg">Gojek</h3>
								<p className="text-xs sm:text-base line-clamp-2">
									Mudahkan mobilitas kamu dihari-hari ini, dengan banyaknya promo untuk
									kamu yang ngator di SCBD!
								</p>
							</div>
							<div className="flex gap-3">
								<p className="bg-violet-700 text-xs sm:text-base px-3 py-1 rounded-sm sm:rounded-md">Kotlin</p>
								<p className="bg-violet-700 text-xs sm:text-base px-3 py-1 rounded-sm sm:rounded-md">Fluter</p>
								<p className="bg-violet-700 text-xs sm:text-base px-3 py-1 rounded-sm sm:rounded-md">React Native</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
