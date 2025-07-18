"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ className }: { className?: string }) {
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={cn(
				"flex items-center justify-between py-4 sm:py-8 px-4 lg:px-16 xl:px-32 backdrop-blur-xl",
				className
			)}>
			<div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center">
				<div className="flex items-center justify-between">
					<Link href={"/"} className="flex items-center gap-3">
						<Image
							src={"/icon.svg"}
							className="w-10 sm:w-16"
							width={30}
							height={32}
							alt="Logo"
						/>
						<p className="text-xs sm:text-xl font-semibold">Muhammad Rizky Sendiko</p>
					</Link>
					<Menu className="block lg:hidden" onClick={handleOpen} />
				</div>

				<div
					className={`flex-col lg:flex-row items-center gap-7 pt-8 pb-2 lg:py-0 ${
						isOpen ? "flex" : "hidden lg:flex"
					}`}>
					<Link
						href={"#about"}
						className={`${
							pathname == "/hubungi-saya" ? "hidden" : "block"
						} font-semibold text-xs sm:text-sm`}>
						ABOUT
					</Link>
					<Link
						href={"#tech-stack"}
						className={`${
							pathname == "/hubungi-saya" ? "hidden" : "block"
						} font-semibold text-xs sm:text-sm`}>
						TECH STACK
					</Link>
					<Link
						href={"#recent-work"}
						className={`${
							pathname == "/hubungi-saya" ? "hidden" : "block"
						} font-semibold text-xs sm:text-sm`}>
						RECENT WORK
					</Link>
					<Link
						href={"#experience"}
						className={`${
							pathname == "/hubungi-saya" ? "hidden" : "block"
						} font-semibold text-xs sm:text-sm`}>
						EXPERIENCE
					</Link>
					<Dropdown title="CONTACT ME" />
				</div>
			</div>
		</nav>
	);
}
