import Image from "next/image";

export default function ProjectCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="relative">
      <Image
        src={"/blank.png"}
        height={128}
        width={250}
        alt="project 1"
        className="rounded-[20px] w-full h-full"
      />

      <div className="bg-primary/50 left-0 right-0 bottom-0 h-1/2 absolute z-10 rounded-[20px] rounded-t-none px-2 py-2.5 text-background">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm">{name}</h3>
          <Image src={"/android.png"} width={24} height={24} alt="android" />
        </div>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
}
