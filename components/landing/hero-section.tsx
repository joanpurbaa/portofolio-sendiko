import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-screen">
      <Image
        src={"/gradient-circle.png"}
        width={555}
        height={555}
        alt="gradient circle"
        className="absolute -bottom-64 -right-96 -z-10"
      />
      <div className="flex flex-col gap-2">
        <p>
          Hi, i'm <span className="font-bold">SENDIKO</span>
        </p>
        <h1 className="font-semibold text-5xl flex flex-col gap-2.5">
          <span>
            FULLSTACK <span className="text-primary">KOTLIN</span>
          </span>
          <span>DEVELOPER</span>
        </h1>
        <div className="flex gap-2">
          <Image src={"/github.png"} width={32} height={32} alt="github" />
          <Image src={"/linkedin.png"} width={32} height={32} alt="linkedin" />
          <Image src={"/gmail.png"} width={32} height={32} alt="gmail" />
        </div>
      </div>
    </section>
  );
}
