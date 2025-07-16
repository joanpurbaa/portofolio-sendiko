"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "flex items-center justify-between py-8 px-4 lg:px-16 xl:px-32 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/icon.svg"} width={30} height={32} alt="Logo" />
            <p>Muhammad Rizky Sendiko</p>
          </Link>
          <Menu className="block lg:hidden" onClick={handleOpen} />
        </div>

        <div
          className={`flex-col lg:flex-row items-center gap-4 pt-8 pb-2 lg:py-0 ${
            isOpen ? "flex" : "hidden lg:flex"
          }`}
        >
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
      </div>
    </nav>
  );
}
