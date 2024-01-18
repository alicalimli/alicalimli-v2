import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { projects } from "@/data";

const ProjectsSection = () => {
  const renderProjects = projects.map((project) => (
    <li key={project.title}>
      <ItemCard item={project} />
    </li>
  ));

  return (
    <Section title="Projects">
      <main>
        <ul className="grid xs:grid-cols-2 gap-8 relative">{renderProjects}</ul>
      </main>
    </Section>
  );
};

export default ProjectsSection;
