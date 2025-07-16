const EXPERIENCES = [
  {
    title: "Mobile Developer",
    company: "Direktorat Pusat Informasi, Telkom University",
    duration: "July 2025 - Now",
    description:
      "Lorem ipsum dolor sit amet consectetur adispicing elit. Lorem ipsum dolor sit amet consectetur adispicing elit.Lorem ipsum dolor sit amet consectetur adispicing elit.",
  },
  {
    title: "Android Development Mentor",
    company: "Chevalier Laboratory SAS, School of Applied Science",
    duration: "August 2024 - Now",
    description:
      "Lorem ipsum dolor sit amet consectetur adispicing elit. Lorem ipsum dolor sit amet consectetur adispicing elit.Lorem ipsum dolor sit amet consectetur adispicing elit.",
  },
  {
    title: "Mobile Developer",
    company: "Freelance",
    duration: "July 2023 - Now",
    description:
      "Lorem ipsum dolor sit amet consectetur adispicing elit. Lorem ipsum dolor sit amet consectetur adispicing elit.Lorem ipsum dolor sit amet consectetur adispicing elit.",
  },
  {
    title: "Kotlin Mentor",
    company: "Dilesin Academy",
    duration: "October 2024 - November 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adispicing elit. Lorem ipsum dolor sit amet consectetur adispicing elit.Lorem ipsum dolor sit amet consectetur adispicing elit.",
  },
  {
    title: "Android Developer",
    company: "PT. Puskomedia Indonesia Kreatif",
    duration: "April 2022 - September 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adispicing elit. Lorem ipsum dolor sit amet consectetur adispicing elit.Lorem ipsum dolor sit amet consectetur adispicing elit.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="min-h-screen">
      <h2 className="font-light text-4xl mb-12">My Experience</h2>

      <div className="flex flex-col">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="relative border-l-2 border-primary pl-6 pb-8 lg:pb-2"
          >
            <div className="size-4 rounded-full bg-primary absolute z-10 -left-2.5 -top-2.5"></div>

            <div>
              <div>
                <div className="flex items-baseline justify-between sm:justify-start gap-2">
                  <h3 className="font-medium text-lg lg:text-2xl flex-1 sm:flex-none">
                    {experience.title}
                  </h3>
                  <p className="font-extrabold text-sm text-primary flex-1 sm:flex-none">
                    {experience.duration}
                  </p>
                </div>
                <p className="font-bold text-sm lg:text-base">
                  at {experience.company}
                </p>
              </div>
              <p className="mt-4 font-medium text-sm lg:text-base">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
