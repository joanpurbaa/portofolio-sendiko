"use client";
import { PencilIcon, TrashIcon, CircleAlert } from "lucide-react";
import TextInput from "../text-input";
import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
interface TechStack {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export default function AddTechForm() {
	const [title, settitle] = useState<string>("");
	const [description, setDeskripsi] = useState<string>("");
	const [icon, setIcon] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [techStacks, setTechStacks] = useState<TechStack[]>([]);
	const [editingTech, setEditingTech] = useState<TechStack | null>(null);

	const formComplete = title && description && icon;

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

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const formData = new FormData();

			formData.append("title", title);
			formData.append("description", description);

			if (icon) {
				formData.append("icon", icon);
			}

			if (editingTech) {
				await axios.put(
					`${process.env.NEXT_PUBLIC_BASE_API}/techstack/${editingTech.id}`,
					formData,
					{
						headers: {
							authorization: localStorage.getItem("token"),
							"Content-Type": "multipart/form-data",
						},
					}
				);

				location.reload();
			} else {
				await axios.post(
					`${process.env.NEXT_PUBLIC_BASE_API}/techstack`,
					formData,
					{
						headers: {
							authorization: localStorage.getItem("token"),
							"Content-Type": "multipart/form-data",
						},
					}
				);

				location.reload();
			}

			settitle("");
			setDeskripsi("");
			setIcon(null);
			setEditingTech(null);
			fetchTechStacks();
		} catch (err: any) {
			console.error(err);
			const message =
				err.response?.data?.message || err.response?.data?.error || "Operasi gagal";
			setError(message);
		} finally {
			setLoading(false);
		}
	};

	const handleEdit = (tech: TechStack) => {
		settitle(tech.title);
		setDeskripsi(tech.description);
		setEditingTech(tech);
	};

	const handleDelete = async (id: string) => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API}/techstack/${id}`, {
				headers: {
					authorization: localStorage.getItem("token"),
					"Content-Type": "multipart/form-data",
				},
			});
			fetchTechStacks();
		} catch (err: any) {
			console.error(err);
			setError("Gagal menghapus tech stack");
		}
	};

	const handleCancel = () => {
		settitle("");
		setDeskripsi("");
		setIcon(null);
		setEditingTech(null);
		setError("");
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="mt-8 p-5 sm:p-10 bg-neutral-800 rounded-lg"
				encType="multipart/form-data">
				<h2 className="text-sm sm:text-xl font-bold mb-8">
					{editingTech ? "Edit Tech Stack" : "Tambah Tech Baru"}
				</h2>

				{error && (
					<div className="mb-4 flex justify-center items-center border border-red-400 text-red-400 text-xs sm:text-base gap-2 rounded-md p-3">
						<CircleAlert />
						{error}
					</div>
				)}

				<TextInput
					id="title"
					label="title"
					placeholder="Kotlin"
					className="mb-2"
					value={title}
					onChange={(e) => settitle(e.target.value)}
				/>
				<TextInput
					id="description"
					label="Deskripsi"
					placeholder="Lorem ipsum dolor sit amet"
					className="mb-2"
					value={description}
					onChange={(e) => setDeskripsi(e.target.value)}
				/>

				<fieldset className="inline-flex flex-col gap-2 w-full mb-4">
					<label htmlFor="icon-preview" className="text-xs sm:text-base font-medium">
						Icon
					</label>
					<input
						type="file"
						accept="image/*"
						onChange={(e) => setIcon(e.target.files?.[0] || null)}
						className="w-full border-2 border-neutral-700 rounded-lg p-3 text-xs sm:text-base"
					/>
				</fieldset>

				<div className="flex gap-4">
					<button
						type="submit"
						disabled={!formComplete || loading}
						className={`${
							formComplete && !loading
								? "cursor-pointer bg-primary hover:bg-violet-700"
								: "cursor-not-allowed bg-gray-500"
						} flex-1 text-white text-xs sm:text-base font-semibold p-3 rounded-md`}>
						{loading ? "Processing..." : editingTech ? "Update" : "Tambah"}
					</button>

					{editingTech && (
						<button
							type="button"
							onClick={handleCancel}
							className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold p-3 rounded-md px-8">
							Batal
						</button>
					)}
				</div>
			</form>

			<div className="mt-8 p-5 sm:p-10 bg-neutral-800 rounded-lg">
				<h2 className="text-sm sm:text-xl font-bold mb-8">Tech Stack</h2>

				<div className="overflow-x-auto">
					<table className="table-auto w-[1000px] xl:w-full text-white">
						<thead>
							<tr className="border-b border-[#D4D4D4] text-left">
								<th className="text-xs lg:text-lg font-bold py-3">No</th>
								<th className="text-xs lg:text-lg font-bold py-3">Icon</th>
								<th className="text-xs lg:text-lg font-bold py-3">title</th>
								<th className="text-xs lg:text-lg font-bold py-3 px-4 w-[500px]">
									Deskripsi
								</th>
								<th className="text-xs lg:text-lg font-bold py-3">Actions</th>
							</tr>
						</thead>
						<tbody className="relative">
							{techStacks.length === 0 ? (
								<tr>
									<td colSpan={5} className="py-8 text-center text-gray-400">
										Belum ada tech stack
									</td>
								</tr>
							) : (
								Array.isArray(techStacks) &&
								techStacks.map((tech, index) => (
									<tr key={tech.id} className="border-b border-[#D4D4D4]">
										<td className="py-4 align-top text-xs sm:text-base font-medium">
											{index + 1}
										</td>
										<td className="py-4 align-top">
											<img
												className="w-[150px] h-[150px] object-cover"
												src={tech.icon || "/kotlin.png"}
												alt={tech.title}
											/>
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold">
											{tech.title}
										</td>
										<td className="py-4 px-4 align-top text-xs sm:text-base font-semibold w-[500px]">
											{tech.description}
										</td>
										<td className="py-4 align-top">
											<div className="flex items-center gap-x-[16px]">
												<div
													onClick={() => handleEdit(tech)}
													className="cursor-pointer w-[34px] h-[34px] flex justify-center items-center border border-amber-500 text-amber-500 hover:text-amber-800 p-[8px] rounded-[8px] hover:bg-amber-600 hover:bg-opacity-10">
													<PencilIcon width={18} height={18} />
												</div>
												<div
													onClick={() => handleDelete(tech.id)}
													className="cursor-pointer w-[34px] h-[34px] flex justify-center items-center border border-red-500 text-red-500 hover:text-red-800 p-[8px] rounded-[8px] hover:bg-red-600 hover:bg-opacity-10">
													<TrashIcon width={14} height={18} />
												</div>
											</div>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
