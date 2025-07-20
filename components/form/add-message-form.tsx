"use client";
import { PencilIcon, TrashIcon, CircleAlert } from "lucide-react";
import TextInput from "../text-input";
import axios from "axios";
import { FormEvent, useState, useEffect } from "react";

interface Experience {
	id: string;
	senderAddress: string;
	subject: string;
	description: string;
}

export default function AddMessageForm() {
	const [experiences, setExperiences] = useState<Experience[]>([]);

	const fetchExperiences = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/contactme`
			);
			setExperiences(response.data.responseObject);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchExperiences();
	}, []);

	return (
		<div>
			<div className="mt-8 p-5 sm:p-10 bg-neutral-800 rounded-lg">
				<h2 className="text-sm sm:text-xl font-bold mb-8">Pesan</h2>

				<div className="overflow-x-auto">
					<table className="table-auto w-[1000px] xl:w-full text-white">
						<thead>
							<tr className="border-b border-[#D4D4D4] text-left">
								<th className="text-xs lg:text-lg font-bold py-3">No</th>
								<th className="text-xs lg:text-lg font-bold py-3">Email</th>
								<th className="text-xs lg:text-lg font-bold py-3">Subject</th>
								<th className="text-xs lg:text-lg font-bold py-3 px-4 w-[500px]">
									Deskripsi
								</th>
							</tr>
						</thead>
						<tbody className="relative">
							{experiences.length === 0 ? (
								<tr>
									<td colSpan={7} className="py-8 text-center text-gray-400">
										Belum ada pengalaman
									</td>
								</tr>
							) : (
								Array.isArray(experiences) &&
								experiences.map((experience, index) => (
									<tr key={experience.id} className="border-b border-[#D4D4D4]">
										<td className="py-4 align-top text-xs sm:text-base font-medium">
											{index + 1}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold">
											{experience.senderAddress}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold whitespace-nowrap">
											{experience.subject}
										</td>
										<td className="py-4 px-4 align-top text-xs sm:text-base font-semibold w-[300px]">
											{experience.description}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}