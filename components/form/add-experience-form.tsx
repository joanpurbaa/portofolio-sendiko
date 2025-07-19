import TextInput from "../text-input";

export default function AddExperienceForm() {
  return (
    <form className="mt-8 p-10 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold mb-8">Tambah pengalaman Baru</h2>

      <TextInput
        id="posisi"
        label="Posisi"
        required
        className="mb-2"
        placeholder="Mobile Developer"
      />
      <TextInput
        id="perusahaan"
        label="Perusahaan"
        required
        className="mb-2"
        placeholder="Freelance"
      />
      <TextInput
        id="deskripsi"
        label="Deskripsi"
        required
        className="mb-2"
        placeholder="Make mobile apps for the company"
      />

      <label htmlFor="tanggal-mulai" className="font-medium">
        Tanggal
      </label>
      <div className="flex gap-4 mt-2">
        <div className="w-full">
          <p className="text-sm text-neutral-400">Mulai</p>
          <input
            type="date"
            id="tanggal-mulai"
            className="w-full p-2 mt-2 border-2 border-neutral-700 rounded-md outline-none text-sm"
            required
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-neutral-400">Selesai</p>
          <input
            type="date"
            id="tanggal-selesai"
            className="w-full p-2 mt-2 border-2 border-neutral-700 rounded-md outline-none text-sm"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className={
          "cursor-pointer bg-primary hover:bg-violet-700 w-full text-white font-semibold p-3 rounded-md mt-8"
        }
      >
        Tambah
      </button>
    </form>
  );
}
