import { CertificateIcon, GraduationCapIcon } from '@phosphor-icons/react';
import { EXPERIENCE } from '../data/portfolio';
import './Experience.css';

export function Experience() {
  const { education } = EXPERIENCE;
  return (
    <section id="experience" className="section experience">
      <div className="container-wide">
        <div className="experience__layout">
          <aside className="experience__side">
            <div className="experience__intro" data-motion-sequence="viewport" data-motion-profile="soft">
              <p className="type-accent-label">{EXPERIENCE.eyebrow}</p>
              <h2 className="type-section-title">{EXPERIENCE.title}</h2>
              <p className="type-lead">{EXPERIENCE.lead}</p>
            </div>

            <div className="experience__extras" data-motion-sequence="viewport" data-motion-profile="soft">
              <div className="info-card">
                <span className="info-card__icon" aria-hidden="true">
                  <GraduationCapIcon size="1em" />
                </span>
                <div>
                  <h3 className="info-card__title">Education</h3>
                  <p className="info-card__strong">{education.degree}</p>
                  <p className="info-card__muted">
                    {education.school} · {education.period} · {education.note}
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon" aria-hidden="true">
                  <CertificateIcon size="1em" />
                </span>
                <div>
                  <h3 className="info-card__title">Certifications</h3>
                  <ul className="info-card__list">
                    {EXPERIENCE.certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <ol className="experience__roles" data-motion-sequence="viewport" data-motion-profile="soft">
            {EXPERIENCE.roles.map((role) => (
              <li key={role.role + role.period} className="role-card">
                <div className="role-card__head">
                  <div>
                    <h3 className="type-feature-title role-card__title">{role.role}</h3>
                    <p className="role-card__company">{role.company}</p>
                  </div>
                  <span className="role-card__period">{role.period}</span>
                </div>
                <ul className="role-card__points">
                  {role.points.map((p) => (
                    <li key={p} className="type-small">
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
