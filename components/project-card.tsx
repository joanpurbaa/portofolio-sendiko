import Image from "next/image";

export default function ProjectCard() {
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
        <div>
          <h3 className="font-bold text-sm">App Name</h3>
          {/* <Image /> */}
        </div>
        <p className="text-[12px]">Lorem, ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
}
