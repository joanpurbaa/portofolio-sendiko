import TextInput from "../text-input";

export default function AddTechForm() {
  return (
    <form className="mt-8 p-10 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold mb-8">Tambah tech Baru</h2>

      <TextInput id="nama" label="Nama" required />

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
