import { Triangle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown({ title }: { title: string }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className="relative">
			<div
				className="cursor-pointer flex items-center gap-3 bg-primary rounded-full py-3 px-5 transition-colors"
				onClick={toggleDropdown}>
				<p className="font-extrabold text-white text-xs sm:text-sm">{title}</p>
				<Triangle
					fill="white"
					className={`w-4 transition-transform duration-300 ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}
				/>
			</div>

			<div
				className={`absolute top-full left-0 mt-2 bg-primary rounded-lg shadow-lg w-full z-10 transition-all duration-300 ${
					isOpen
						? "opacity-100 visible translate-y-0"
						: "opacity-0 invisible -translate-y-2"
				}`}>
				<div>
					<div className="hover:bg-violet-700 px-4 py-2 rounded-t-lg">
						<Link
							href={"/hubungi-saya"}
							className="text-white cursor-pointer transition-colors">
							Hubungi saya
						</Link>
					</div>
					<div className="hover:bg-violet-700 px-4 py-2">
						<Link
							target="_blank"
							href="https://www.linkedin.com/in/rizky-sendiko/"
							className="text-white cursor-pointer transition-colors">
							LinkedIn
						</Link>
					</div>
					<div className="hover:bg-violet-700 px-4 py-2 rounded-b-lg">
						<Link href={"/"} className="text-white cursor-pointer transition-colors">
							Email
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
