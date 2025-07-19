import TextInput from "../text-input";

export default function AddProjectForm() {
  return (
    <form className="mt-8 p-10 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold mb-8">Tambah projek Baru</h2>

      <TextInput
        id="judul"
        label="Judul"
        required
        className="mb-2"
        placeholder="Projek terbaru saya"
      />
      <TextInput
        id="deskripsi"
        label="Deskripsi"
        required
        className="mb-2"
        placeholder="Lorem ipsum dolor sit amet."
      />
      <TextInput
        id="tech"
        label="Tech Stack"
        required
        className="mb-2"
        placeholder="kotlin, laravel"
      />

      <fieldset className="inline-flex flex-col gap-2">
        <label htmlFor="image-preview" className="font-medium">
          Image preview
        </label>
        <input
          type="file"
          className="border-2 border-neutral-700 rounded-lg p-3 text-sm"
        />
      </fieldset>

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
