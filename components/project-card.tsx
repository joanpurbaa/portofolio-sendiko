import Image from "next/image";

export default function ProjectCard({
  name,
  description,
  className
}: {
  name: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`${className} relative`}>
      <Image
        src={"/blank.png"}
        height={128}
        width={250}
        alt="project 1"
        className="rounded-lg w-full h-full"
      />

      <div className="bg-primary/50 left-0 right-0 bottom-0 h-1/2 absolute z-10 rounded-lg rounded-t-none px-2 py-2.5 text-background">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xs sm:text-lg">{name}</h3>
          <Image src={"/android.png"} width={24} height={24} alt="android" />
        </div>
        <p className="text-xs sm:text-base line-clamp-1">{description}</p>
      </div>
    </div>
  );
}
