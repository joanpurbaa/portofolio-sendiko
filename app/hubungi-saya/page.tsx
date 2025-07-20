"use client";
import Navbar from "@/components/navbar";
import axios from "axios";
import { CircleAlert } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function HubungiSaya() {
	const [email, setEmail] = useState<string>("");
	const [subjek, setSubjek] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const formComplete = email && subjek && description;
	const [loading, setLoading] = useState(false);

	const formData = new FormData();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		formData.append("senderAddress", email);
		formData.append("subject", subjek);
		formData.append("description", description);

		await axios
			.post(`${process.env.NEXT_PUBLIC_BASE_API}/contactme`, formData, {
				headers: {
					authorization: localStorage.getItem("token"),
					"Content-Type": "application/json",
				},
			})
			.then((result) => console.log(result));

		setLoading(false);
	};

	return (
		<section className="relative w-screen h-screen overflow-hidden">
			<Image
				src={"/gradient-circle.png"}
				width={555}
				height={555}
				alt="gradient circle"
				className="absolute -top-72 -right-72 z-0 w-[500px] blur-[300px]"
			/>
			<Image
				src={"/gradient-circle.png"}
				width={555}
				height={555}
				alt="gradient circle"
				className="absolute -bottom-96 -left-96 z-0 w-[1000px] blur-[300px]"
			/>
			<Navbar className="fixed w-full z-50" />
			<div className="z-10 h-full grid grid-cols-12 items-center px-5">
				<form
					onSubmit={handleSubmit}
					className="col-start-1 md:col-start-4 xl:col-start-5 col-end-13 md:col-end-10 xl:col-end-9 bg-zinc-800 rounded-lg p-5">
					<h1 className="mt-4 text-lg sm:text-3xl font-extrabold text-center">
						Kontak aku segera ya!
					</h1>
					{!formComplete && (
						<div className="my-8 flex justify-center items-center border border-red-400 text-red-400 text-xs sm:text-base gap-2 rounded-md p-3">
							<CircleAlert />
							Semua input harus terisi
						</div>
					)}
					<ul className={`${formComplete && "mt-8"} space-y-3 text-xs sm:text-base`}>
						<li className="flex flex-col gap-2">
							<label htmlFor="">Email</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="outline-none bg-zinc-900 p-3 rounded-md"
								type="text"
								placeholder="Masukkan email kamu"
							/>
						</li>
						<li className="flex flex-col gap-2">
							<label htmlFor="">Subjek</label>
							<input
								onChange={(e) => setSubjek(e.target.value)}
								className="outline-none bg-zinc-900 p-3 rounded-md"
								type="text"
								placeholder="Masukkan subjek kamu"
							/>
						</li>
						<li className="flex flex-col gap-2">
							<label htmlFor="">Deskripsi</label>
							<textarea
								onChange={(e) => setDescription(e.target.value)}
								rows={5}
								className="outline-none bg-zinc-900 p-3 rounded-md resize-none"
								name=""
								id=""
								placeholder="Masukkan deskripsi subjek kamu"></textarea>
						</li>
						<li>
							<button
								type={`${formComplete ? "submit" : "button"}`}
								className={`${
									formComplete
										? "cursor-pointer bg-primary hover:bg-violet-700"
										: "cursor-not-allowed bg-gray-500"
								} w-full text-white font-semibold p-3 rounded-md`}>
								{loading ? "Sedang mengirim..." : "Kirim"}
							</button>
						</li>
					</ul>
				</form>
			</div>
		</section>
	);
}
