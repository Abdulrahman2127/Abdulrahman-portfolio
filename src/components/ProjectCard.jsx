import { ArrowUpRight, GitFork, Image } from "lucide-react";

function ProjectLink({ url, children, label }) {
  if (!url) return null;
  return (
    <a
      className="project-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project, language, t, index }) {
  const title = project.title[language];
  return (
    <article
      className={`project-card${project.featured ? " project-card-featured" : ""}`}
    >
      <div className="project-image">
        {project.image ? (
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.viewScreenshot} — ${title}`}
            className="project-screenshot-link"
          >
            <img
              src={project.image}
              alt={`${title} — ${t.projectScreenshot}`}
              loading="lazy"
              decoding="async"
              width="1600"
              height="900"
              style={{ objectPosition: project.imagePosition || "center top" }}
            />
          </a>
        ) : (
          <span className="project-image-pending">
            <Image size={24} aria-hidden="true" />
            {t.preview}
          </span>
        )}
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.featured ? t.featuredProject : t.nav.projects}</span>
          <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>
          <bdi>{title}</bdi>
        </h3>
        <p>{project.description[language]}</p>
        <div className="badges">
          {project.technologies.map((tech) => (
            <span dir="ltr" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <ProjectLink url={project.liveUrl} label={`${t.live} — ${title}`}>
            {t.live}
            <ArrowUpRight size={16} aria-hidden="true" />
          </ProjectLink>
          <ProjectLink url={project.githubUrl} label={`${t.github} — ${title}`}>
            <GitFork size={16} aria-hidden="true" />
            {t.github}
          </ProjectLink>
        </div>
      </div>
    </article>
  );
}
