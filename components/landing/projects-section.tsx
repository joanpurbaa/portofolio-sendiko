import ProjectCard from "../project-card";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="min-h-screen py-96">
      <h2 className="font-light text-4xl mb-12">Apps by Me</h2>

      <div className="grid grid-cols-5 gap-2">
        {[...Array(15)].map((_, index) => (
          <ProjectCard
            key={index}
            name="App name"
            description="Lorem ipsum dolor sit amet consectetur.."
          />
        ))}
      </div>
    </section>
  );
}
