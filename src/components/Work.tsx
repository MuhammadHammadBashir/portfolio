import { PROJECTS, WORK, projectSlug, type Project } from '../data/portfolio';
import { projectHref } from '../hooks/useRoute';
import './Work.css';

export function ProjectMedia({ project, autoPlay, controls }: { project: Project; autoPlay?: boolean; controls?: boolean }) {
  if (project.video) {
    return (
      <video
        src={project.video}
        poster={project.image}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        controls={controls}
        preload="metadata"
        aria-label={project.title}
      />
    );
  }
  return <img src={project.image} alt={project.title} loading="lazy" decoding="async" />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card group" href={projectHref(projectSlug(project))}>
      <figure>
        <ProjectMedia project={project} autoPlay />
        <figcaption className="project-card__overlay">
          <span className="project-card__text">
            <span className="project-card__tag">{project.tag}</span>
            <span className="type-feature-title project-card__title">{project.title}</span>
          </span>
          <span className="project-card__arrow" aria-hidden="true">
            <span className="swap-arrow project-card__arrow-icon">
              <span>↗</span>
              <span>↗</span>
            </span>
          </span>
        </figcaption>
      </figure>
    </a>
  );
}

export function Work() {
  // Pair projects into rows; odd rows flip the wide/narrow columns for rhythm.
  const rows: Project[][] = [];
  for (let i = 0; i < PROJECTS.length; i += 2) rows.push(PROJECTS.slice(i, i + 2));

  return (
    <section id="work" className="section work">
      <div className="container-wide">
        <div className="work__intro" data-motion-sequence="viewport" data-motion-profile="soft">
          <div>
            <h2 className="type-section-title">{WORK.title}</h2>
          </div>
          <div>
            <p className="type-lead">{WORK.lead}</p>
            <a className="arrow-link" href={WORK.linkHref} target="_blank" rel="noreferrer">
              <span className="type-body arrow-link__text">{WORK.linkLabel}</span>
              <span className="arrow-link__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="work__rows">
          {rows.map((row, i) => (
            <div key={i} className={`work__row${i % 2 ? ' work__row--flip' : ''}`} data-motion-sequence="viewport" data-motion-profile="soft">
              {row.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
