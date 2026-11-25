import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { EXPERTISE, SKILLS } from '../data/portfolio';
import { EXPERTISE_ICONS } from './icons';
import './Expertise.css';

export function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="container-wide">
        <div className="expertise__intro" data-motion-sequence="viewport" data-motion-profile="soft">
          <div>
            <h2 className="type-section-title">{EXPERTISE.title}</h2>
          </div>
          <div>
            <p className="type-lead">{EXPERTISE.lead}</p>
          </div>
          <div className="expertise__link-wrap">
            <a className="arrow-link expertise__link" href={EXPERTISE.linkHref} target="_blank" rel="noreferrer">
              <span className="arrow-link__text">{EXPERTISE.linkLabel}</span>
              <span className="arrow-link__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="expertise__grid" data-motion-sequence="viewport" data-motion-profile="soft">
          {EXPERTISE.items.map((item, i) => {
            const Icon = EXPERTISE_ICONS[item.icon];
            return (
              <article key={item.title} className="service-card group">
                <div className="service-card__icon" aria-hidden="true">
                  <Icon size="1em" />
                </div>
                <div className="service-card__content">
                  <div className="service-card__title-line">
                    <span className="service-card__number">{String(i + 1).padStart(2, '0')}.</span>
                    <h3 className="service-card__title">{item.title}</h3>
                  </div>
                  <p className="service-card__description">{item.body}</p>
                </div>
                <span className="service-card__arrow" aria-hidden="true">
                  <span className="swap-arrow service-card__arrow-icon">
                    <ArrowUpRightIcon size={16} />
                    <ArrowUpRightIcon size={16} />
                  </span>
                </span>
              </article>
            );
          })}
        </div>

        <div className="toolkit" data-motion="viewport">
          <p className="type-accent-label toolkit__label">Toolkit</p>
          <dl className="toolkit__grid">
            {SKILLS.map((group) => (
              <div key={group.group} className="toolkit__group">
                <dt className="toolkit__group-title">{group.group}</dt>
                <dd>
                  <ul className="chip-list">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
