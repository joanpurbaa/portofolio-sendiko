import Image from "next/image";

export default function TechSection() {
  return (
    <section
      id="tech-section"
      className="relative min-h-screen flex flex-col items-stretch justify-center gap-[114px] py-96"
    >
      <Image
        src={"/gradient-circle.png"}
        width={555}
        height={555}
        alt="gradient circle"
        className="absolute -bottom-64 -right-96 -z-10"
      />
      <div className="flex">
        <Image src={"/kotlin.png"} width={128} height={128} alt="kotlin" />
        <div className="max-w-[368px]">
          <h2 className="text-4xl">Kotlin Multiplatform</h2>
          <p>
            Leveraging the power of Kotlin and Compose Multiplatform to craft
            modern, efficient, and cross-platform mobile applications with clean
            architecture and a seamless user experience.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <Image src={"/ktor.png"} width={128} height={128} alt="Ktor" />
        <div className="max-w-[368px]">
          <h2 className="text-4xl">Ktor Server</h2>
          <p>
            Creating robust and scalable RESTful APIs with Ktor Server, designed
            for high performance, clean architecture, and seamless integration
            with modern client applications.
          </p>
        </div>
      </div>
    </section>
  );
}
