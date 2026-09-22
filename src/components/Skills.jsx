import { Braces, Database, Layers, Terminal } from "lucide-react";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";
const icons = {
  frontend: Layers,
  backend: Braces,
  database: Database,
  tools: Terminal,
};
export default function Skills({ t }) {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        label={t.skillsLabel}
        title={t.skillsTitle}
        description={t.skillsIntro}
      />
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = icons[group.id];
          return (
            <article className="skill-card" key={group.id}>
              <Icon className="skill-icon" size={23} />
              <h3>{t.skillGroups[group.id]}</h3>
              <div className="badges">
                {group.technologies.map((skill) => (
                  <span dir="ltr" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
