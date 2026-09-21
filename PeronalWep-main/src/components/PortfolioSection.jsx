import {
  ArrowDown,
  ArrowUpRight,
  GitFork,
  BriefcaseBusiness,
  Mail,
  MessageCircle,
  Terminal,
} from "lucide-react";
import Skills from "./Skills";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { contacts } from "../data/contact";

const contactIcons = {
  email: Mail,
  github: GitFork,
  linkedin: BriefcaseBusiness,
  whatsapp: MessageCircle,
};

function DeveloperVisual() {
  return (
    <div className="developer-visual" dir="ltr" aria-hidden="true">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>developer.ts</span>
          <Terminal size={14} />
        </div>
        <div className="terminal-code">
          <div>
            <span className="line-number">01</span>
            <span className="code-comment">
              // a little about the developer
            </span>
          </div>
          <div>
            <span className="line-number">02</span>
            <span className="code-keyword">const</span> developer = {"{"}
          </div>
          <div>
            <span className="line-number">03</span> name:{" "}
            <span className="code-string">'Abdulrahman'</span>,
          </div>
          <div>
            <span className="line-number">04</span> role:{" "}
            <span className="code-string">'Full-Stack Developer'</span>,
          </div>
          <div>
            <span className="line-number">05</span> stack: [
            <span className="code-string">'React'</span>,{" "}
            <span className="code-string">'Node.js'</span>],
          </div>
          <div>
            <span className="line-number">06</span> focus:{" "}
            <span className="code-string">'Building useful things'</span>
          </div>
          <div>
            <span className="line-number">07</span>
            {"};"}
          </div>
          <div>
            <span className="line-number">08</span>
          </div>
          <div>
            <span className="line-number">09</span>
            <span className="code-keyword">export default</span> developer;
          </div>
        </div>
        <div className="terminal-bottom">
          <span>
            <i className="status-dot" />
            ready to build
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </div>
      <div className="ghost-note">
        <svg width="28" height="28" viewBox="0 0 14 14" fill="currentColor">
          <path d="M5 1h4v1h2v2h1v2h1v7h-2v-2H9v2H7v-2H5v2H3v-2H1V6h1V4h1V2h2z" />
          <path fill="#131516" d="M4 5h2v3H4zm5 0h2v3H9z" />
        </svg>
        <span>still curious. always building.</span>
        <span>↵</span>
      </div>
    </div>
  );
}

export default function PortfolioSection({ language, t }) {
  return (
    <>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <p className="availability">
            <i className="status-dot" />
            {t.available}
          </p>
          <h1>
            <span className="greeting">{t.hello}</span>
            {t.role}
            <span className="heading-period">.</span>
          </h1>
          <p className="hero-description">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.viewProjects}
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              {t.contactMe}
            </a>
          </div>
          <p className="hero-note">{t.heroNote}</p>
        </div>
        <DeveloperVisual />
        <div className="hero-bottom">
          <span className="eyebrow">{t.stackLabel}</span>
          <div className="stack-names" dir="ltr">
            <span>React</span>
            <i />
            <span>Node.js</span>
            <i />
            <span>MongoDB</span>
            <i />
            <span>TypeScript</span>
          </div>
          <a href="#about">
            {t.scroll}
            <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <section id="about" className="section container about-section">
        <div>
          <SectionHeading label={t.aboutLabel} title={t.aboutTitle} />
          <div className="about-copy">
            <p>{t.aboutText}</p>
            <p>{t.aboutMore}</p>
          </div>
        </div>
        <div className="principles">
          {t.principles.map(([number, title, text]) => (
            <div className="principle" key={number}>
              <span className="principle-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionHeading
            label={t.projectsLabel}
            title={t.projectsTitle}
            description={t.projectsIntro}
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                language={language}
                t={t}
              />
            ))}
          </div>
          {projects.some((project) => project.placeholder) && (
            <p className="placeholder-note">
              <span />
              {t.placeholderNote}
            </p>
          )}
        </div>
      </section>
      <Skills t={t} />
      <section id="contact" className="container contact-section">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>
              {t.contactTitle}
              <span className="heading-period">.</span>
            </h2>
            <p className="contact-text">{t.contactText}</p>
            <p className="availability">
              <i className="status-dot" />
              {t.available}
            </p>
          </div>
          <div className="contact-list">
            {contacts.map((contact) => {
              const Icon = contactIcons[contact.id];
              const contents = (
                <>
                  <Icon size={19} />
                  <span>
                    {t[contact.id]}
                    <small>{contact.detail || t.unavailable}</small>
                  </span>
                  {contact.url ? (
                    <ArrowUpRight size={17} />
                  ) : (
                    <span className="contact-dash">—</span>
                  )}
                </>
              );
              return contact.url ? (
                <a
                  key={contact.id}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row"
                >
                  {contents}
                </a>
              ) : (
                <div
                  key={contact.id}
                  className="contact-row"
                  aria-disabled="true"
                >
                  {contents}
                </div>
              );
            })}
            {contacts.every((contact) => !contact.url) && (
              <p className="contact-pending">{t.contactPending}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
