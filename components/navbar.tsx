import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between p-4 py-8 px-32",
        className
      )}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"/logo.png"} width={30} height={32} alt="Logo" />
        <p>Muhammad Rizky Sendiko</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/"} className="font-extrabold text-sm">
          ABOUT
        </Link>
        <Link href={"/"} className="font-extrabold text-sm">
          TECH STACK
        </Link>
        <Link href={"/"} className="font-extrabold text-sm">
          RECENT WORK
        </Link>
        <Link href={"/"} className="font-extrabold text-sm">
          EXPERIENCE
        </Link>
        <Dropdown title="CONTACT ME" />
      </div>
    </nav>
  );
}
