import { useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon, GlobeIcon } from '@phosphor-icons/react';
import { PROFILE, PROJECTS, projectSlug } from '../data/portfolio';
import { projectHref } from '../hooks/useRoute';
import { ProjectMedia } from './Work';
import './ProjectPage.css';

export function ProjectPage({ slug }: { slug: string }) {
  const index = PROJECTS.findIndex((p) => projectSlug(p) === slug);
  const project = PROJECTS[index];

  useEffect(() => {
    const previous = document.title;
    document.title = project ? `${project.title} | ${PROFILE.name}` : `Project not found | ${PROFILE.name}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="section project-page">
        <div className="container-wide project-page__inner">
          <a className="project-page__back" href="#work">
            <ArrowLeftIcon size={18} /> Back to work
          </a>
          <h1 className="type-section-title">Project not found</h1>
          <p className="type-lead">This project doesn&apos;t exist or has moved.</p>
        </div>
      </section>
    );
  }

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className="section project-page">
      <div className="container-wide project-page__inner">
        <a className="project-page__back" href="#work" data-motion="fade">
          <ArrowLeftIcon size={18} /> Back to work
        </a>

        <header className="project-page__head" data-motion-sequence="fade" data-motion-profile="soft">
          <p className="type-accent-label">{project.tag}</p>
          <h1 className="type-section-title project-page__title">{project.title}</h1>
          <p className="project-page__role">{project.role}</p>
        </header>

        <div className="project-page__media" data-motion="fade">
          <ProjectMedia key={projectSlug(project)} project={project} autoPlay controls />
        </div>

        <div className="project-page__body" data-motion-sequence="viewport" data-motion-profile="soft">
          <div>
            <h2 className="type-feature-title project-page__subhead">Overview</h2>
            <ul className="project-page__points">
              {project.body.split('\n').map((line) => (
                <li key={line} className="type-body">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <aside className="project-page__aside">
            <h2 className="type-feature-title project-page__subhead">Tech stack</h2>
            <ul className="chip-list" aria-label="Tech stack">
              {project.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            {(project.link || project.github) && (
              <div className="project-page__links">
                {project.link && (
                  <a className="btn btn--primary btn--md" href={project.link} target="_blank" rel="noreferrer">
                    <span className="btn__wrap">
                      <span className="btn__text">
                        <GlobeIcon size={18} /> Live project
                      </span>
                      <span className="btn__hover" aria-hidden="true">
                        <ArrowUpRightIcon size={18} /> Live project
                      </span>
                    </span>
                  </a>
                )}
                {project.github && (
                  <a className="btn btn--outline btn--md" href={project.github} target="_blank" rel="noreferrer">
                    <span className="btn__wrap">
                      <span className="btn__text">
                        <GithubLogoIcon size={18} /> View code
                      </span>
                      <span className="btn__hover" aria-hidden="true">
                        <ArrowUpRightIcon size={18} /> View code
                      </span>
                    </span>
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>

        <nav className="project-page__pager" aria-label="More projects">
          <a href={projectHref(projectSlug(prev))} className="project-page__pager-link">
            <span className="project-page__pager-label">
              <ArrowLeftIcon size={16} /> Previous
            </span>
            <span className="project-page__pager-title">{prev.title}</span>
          </a>
          <a href={projectHref(projectSlug(next))} className="project-page__pager-link project-page__pager-link--next">
            <span className="project-page__pager-label">
              Next <ArrowRightIcon size={16} />
            </span>
            <span className="project-page__pager-title">{next.title}</span>
          </a>
        </nav>
      </div>
    </article>
  );
}
