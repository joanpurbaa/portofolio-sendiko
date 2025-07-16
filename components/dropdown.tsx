import { Triangle } from "lucide-react";

export default function Dropdown({ title }: { title: string }) {
  return (
    <button className="flex gap-[2px]">
      <p className="font-extrabold text-white bg-primary rounded-l-full rounded-r-sm px-4 py-2 text-xs sm:text-sm">
        {title}
      </p>
      <div className="bg-primary rounded-r-full rounded-l-sm flex items-center justify-center px-2.5">
        <Triangle fill="white" className="rotate-180 w-2 sm:w-3.5" />
      </div>
    </button>
  );
}
