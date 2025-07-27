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
	const [messages, setMessages] = useState<Experience[]>([]);

	const fetchMessages = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/v1/contact-me`
			);
			setMessages(response.data.data);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchMessages();
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
							{Array.isArray(messages) && messages.length === 0 ? (
								<tr>
									<td colSpan={7} className="py-8 text-center text-gray-400">
										Belum ada pesan
									</td>
								</tr>
							) : (
								Array.isArray(messages) &&
								messages.map((message, index) => (
									<tr key={message.id} className="border-b border-[#D4D4D4]">
										<td className="py-4 align-top text-xs sm:text-base font-medium">
											{index + 1}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold">
											{message.senderAddress}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold whitespace-nowrap">
											{message.subject}
										</td>
										<td className="py-4 px-4 align-top text-xs sm:text-base font-semibold w-[300px]">
											{message.description}
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
