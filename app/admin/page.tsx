"use client";

import AddExperienceForm from "@/components/form/add-experience-form";
import AddProjectForm from "@/components/form/add-project-form";
import AddTechForm from "@/components/form/add-tech-form";
import TextInput from "@/components/text-input";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      <Link
        href={"/"}
        className="flex items-center gap-3 py-4 sm:py-8 px-4 lg:px-16 xl:px-32"
      >
        <Image
          src={"/icon.svg"}
          className="w-10 sm:w-16"
          width={30}
          height={32}
          alt="Logo"
        />
        <p className="text-xs sm:text-xl font-semibold">
          Muhammad Rizky Sendiko
        </p>
      </Link>
      <main className="py-4 sm:py-8 px-4 lg:px-16 xl:px-32 relative">
        <div className="flex gap-4">
          <Link
            href={"?modal=new-project"}
            className={`text-center font-semibold p-3 rounded-md border-2 w-[250px] transition-colors hover:border-primary hover:text-primary ${
              modal === "new-project" || !modal
                ? "border-primary text-primary"
                : "border-gray-500 text-white"
            }`}
          >
            Tambah projek baru
          </Link>
          <Link
            href={"?modal=new-experience"}
            className={`text-center font-semibold p-3 rounded-md border-2 w-[250px] transition-colors hover:border-primary hover:text-primary ${
              modal === "new-experience"
                ? "border-primary text-primary"
                : "border-gray-500 text-white"
            }`}
          >
            Tambah pengalaman baru
          </Link>
          <Link
            href={"?modal=new-tech"}
            className={`text-center font-semibold p-3 rounded-md border-2 w-[250px] transition-colors hover:border-primary hover:text-primary ${
              modal === "new-tech"
                ? "border-primary text-primary"
                : "border-gray-500 text-white"
            }`}
          >
            Tambah tech stack baru
          </Link>
        </div>

        {(modal === "new-project" || !modal) && <AddProjectForm />}
        {modal === "new-experience" && <AddExperienceForm />}
        {modal === "new-tech" && <AddTechForm />}
      </main>
    </>
  );
}
