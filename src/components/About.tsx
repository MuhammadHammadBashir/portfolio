import { ABOUT } from '../data/portfolio';
import { Button } from './Button';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container-wide">
        <div className="about__grid">
          <figure className="about__media" data-motion="viewport">
            <video src={ABOUT.media.video} poster={ABOUT.media.poster} muted loop playsInline autoPlay preload="metadata" aria-label={ABOUT.media.alt} />
          </figure>
          <div className="about__copy" data-motion-sequence="viewport" data-motion-profile="soft">
            <p className="type-accent-label">{ABOUT.eyebrow}</p>
            <h2 className="type-section-title">{ABOUT.title}</h2>
            <p className="type-lead">{ABOUT.lead}</p>
            <div className="about__count">
              <div className="about__thumbs" aria-hidden="true">
                {ABOUT.thumbs.map((src, i) => (
                  <img key={src} src={src} alt="" width={48} height={48} loading="lazy" style={{ zIndex: ABOUT.thumbs.length - i }} />
                ))}
              </div>
              <div className="about__count-text">
                <strong>{ABOUT.countValue}</strong>
                <span className="type-body">{ABOUT.countLabel}</span>
              </div>
            </div>
            <ul className="about__points">
              {ABOUT.points.map((point) => (
                <li key={point}>
                  <span className="about__bullet" aria-hidden="true">
                    →
                  </span>
                  <span className="type-body">{point}</span>
                </li>
              ))}
            </ul>
            <Button href={ABOUT.cta.href} label={ABOUT.cta.label} size="md" className="about__cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
