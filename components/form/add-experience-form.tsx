"use client";
import { PencilIcon, TrashIcon, CircleAlert } from "lucide-react";
import TextInput from "../text-input";
import axios from "axios";
import { FormEvent, useState, useEffect } from "react";

interface Experience {
	id: string;
	position: string;
	organizationName: string;
	description: string;
	periodeStart: string;
	periodeEnd: string;
}

export default function AddExperienceForm() {
	const [position, setPosisi] = useState<string>("");
	const [organizationName, setPerusahaan] = useState<string>("");
	const [description, setDeskripsi] = useState<string>("");
	const [periodeStart, setTanggalMulai] = useState<string>("");
	const [periodeEnd, setTanggalSelesai] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [editingExperience, setEditingExperience] = useState<Experience | null>(
		null
	);

	const formComplete =
		position && organizationName && description && periodeStart;

	const fetchExperiences = async () => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API}/experience`
			);
			setExperiences(response.data.responseObject);
		} catch (err: any) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchExperiences();
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const experienceData = {
				position,
				organizationName,
				description,
				periodeStart,
				periodeEnd: periodeEnd === "" ? null : periodeEnd,
			};

			if (editingExperience) {
				await axios.put(
					`${process.env.NEXT_PUBLIC_BASE_API}/experience/${editingExperience.id}`,
					experienceData,
					{
						headers: {
							authorization: localStorage.getItem("token"),
							"Content-Type": "application/json",
						},
					}
				);
				location.reload();
			} else {
				await axios.post(
					`${process.env.NEXT_PUBLIC_BASE_API}/experience`,
					experienceData,
					{
						headers: {
							authorization: localStorage.getItem("token"),
							"Content-Type": "application/json",
						},
					}
				);
				location.reload();
			}

			setPosisi("");
			setPerusahaan("");
			setDeskripsi("");
			setTanggalMulai("");
			setTanggalSelesai("");
			setEditingExperience(null);
			fetchExperiences();
		} catch (err: any) {
			console.error(err);
			const message =
				err.response?.data?.message || err.response?.data?.error || "Operasi gagal";
			setError(message);
		} finally {
			setLoading(false);
		}
	};


	const handleEdit = (experience: Experience) => {
		setPosisi(experience.position);
		setPerusahaan(experience.organizationName);
		setDeskripsi(experience.description);
		setTanggalMulai(experience.periodeStart);
		setTanggalSelesai(experience.periodeEnd);
		setEditingExperience(experience);
	};

	const handleDelete = async (id: string) => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API}/experience/${id}`, {
				headers: {
					authorization: localStorage.getItem("token"),
				},
			});
			fetchExperiences();
		} catch (err: any) {
			console.error(err);
			setError("Gagal menghapus experience");
		}
	};

	const handleCancel = () => {
		setPosisi("");
		setPerusahaan("");
		setDeskripsi("");
		setTanggalMulai("");
		setTanggalSelesai("");
		setEditingExperience(null);
		setError("");
	};

	const formatDate = (dateString: string) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			year: "numeric",
			month: "short",
		});
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="mt-8 p-5 sm:p-10 bg-neutral-800 rounded-lg">
				<h2 className="text-sm sm:text-xl font-bold mb-8">
					{editingExperience ? "Edit Pengalaman" : "Tambah Pengalaman Baru"}
				</h2>

				{error && (
					<div className="mb-4 flex justify-center items-center border border-red-400 text-red-400 text-xs sm:text-base gap-2 rounded-md p-3">
						<CircleAlert />
						{error}
					</div>
				)}

				<TextInput
					id="position"
					label="Posisi"
					required
					className="mb-2"
					placeholder="Mobile Developer"
					value={position}
					onChange={(e) => setPosisi(e.target.value)}
				/>
				<TextInput
					id="organizationName"
					label="Perusahaan"
					required
					className="mb-2"
					placeholder="Freelance"
					value={organizationName}
					onChange={(e) => setPerusahaan(e.target.value)}
				/>
				<TextInput
					id="description"
					label="Deskripsi"
					required
					className="mb-2"
					placeholder="Make mobile apps for the company"
					value={description}
					onChange={(e) => setDeskripsi(e.target.value)}
				/>

				<label htmlFor="tanggal-mulai" className="text-xs sm:text-base font-medium">
					Tanggal
				</label>
				<div className="flex flex-col sm:flex-row gap-4 mt-2">
					<div className="w-full">
						<p className="text-xs sm:text-base text-neutral-400">Mulai</p>
						<input
							type="date"
							id="tanggal-mulai"
							className="w-full p-2 mt-2 border-2 border-neutral-700 rounded-md outline-none text-xs sm:text-base"
							required
							value={periodeStart}
							onChange={(e) => setTanggalMulai(e.target.value)}
						/>
					</div>
					<div className="w-full">
						<p className="text-xs sm:text-base text-neutral-400">Selesai</p>
						<input
							type="date"
							id="tanggal-selesai"
							className="w-full p-2 mt-2 border-2 border-neutral-700 rounded-md outline-none text-xs sm:text-base"
							value={periodeEnd}
							onChange={(e) => setTanggalSelesai(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex gap-4 mt-8">
					<button
						type="submit"
						disabled={!formComplete || loading}
						className={`${
							formComplete && !loading
								? "cursor-pointer bg-primary hover:bg-violet-700"
								: "cursor-not-allowed bg-gray-500"
						} flex-1 text-white text-xs sm:text-base font-semibold p-3 rounded-md`}>
						{loading ? "Processing..." : editingExperience ? "Update" : "Tambah"}
					</button>

					{editingExperience && (
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
				<h2 className="text-sm sm:text-xl font-bold mb-8">Pengalaman</h2>

				<div className="overflow-x-auto">
					<table className="table-auto w-[1000px] xl:w-full text-white">
						<thead>
							<tr className="border-b border-[#D4D4D4] text-left">
								<th className="text-xs lg:text-lg font-bold py-3">No</th>
								<th className="text-xs lg:text-lg font-bold py-3">Posisi</th>
								<th className="text-xs lg:text-lg font-bold py-3">Perusahaan</th>
								<th className="text-xs lg:text-lg font-bold py-3 px-4 w-[500px]">
									Deskripsi
								</th>
								<th className="text-xs lg:text-lg font-bold py-3">Mulai</th>
								<th className="text-xs lg:text-lg font-bold py-3">Selesai</th>
								<th className="text-xs lg:text-lg font-bold py-3">Actions</th>
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
											{experience.position}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold whitespace-nowrap">
											{experience.organizationName}
										</td>
										<td className="py-4 px-4 align-top text-xs sm:text-base font-semibold w-[300px]">
											{experience.description}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold whitespace-nowrap">
											{formatDate(experience.periodeStart)}
										</td>
										<td className="py-4 align-top text-xs sm:text-base font-semibold whitespace-nowrap">
											{experience.periodeEnd == null ? "now" : formatDate(experience.periodeEnd)}
										</td>
										<td className="py-4 align-top">
											<div className="flex items-center gap-x-[16px]">
												<div
													onClick={() => handleEdit(experience)}
													className="cursor-pointer w-[34px] h-[34px] flex justify-center items-center border border-amber-500 text-amber-500 hover:text-amber-800 p-[8px] rounded-[8px] hover:bg-amber-600 hover:bg-opacity-10">
													<PencilIcon width={18} height={18} />
												</div>
												<div
													onClick={() => handleDelete(experience.id)}
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
		</div>
	);
}
