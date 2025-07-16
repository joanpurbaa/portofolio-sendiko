import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-end gap-24 lg:gap-[252px] min-h-screen py-96"
    >
      <Image
        src={"/gradient-circle.png"}
        width={555}
        height={555}
        alt="gradient circle"
        className="absolute -bottom-64 -left-96 -z-10"
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">
          Muhammad Rizky Sendiko
        </h2>
        <p className="text-center max-w-[451px] leading-[24px]">
          A passionate software developer specializing in Kotlin Multiplatform
          development. I build seamless, modern user experiences using Jetpack
          Compose and follow clean, scalable architectures like MVI and Clean
          Architecture.
        </p>
      </div>
      <Image src={"/sendiko.png"} width={247} height={389} alt="Foto Sendiko" />
    </section>
  );
}
