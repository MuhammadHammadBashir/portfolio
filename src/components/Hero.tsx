import type { CSSProperties } from 'react';
import { HERO } from '../data/portfolio';
import { Button } from './Button';
import './Hero.css';

export function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero__card">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__content" data-motion-sequence="fade">
              <p className="type-accent-label hero__eyebrow">{HERO.eyebrow}</p>
              <h1 className="type-hero hero__title">
                {HERO.titleStart} <span className="text-accent">{HERO.titleAccent}</span>
              </h1>
              <p className="type-lead hero__lead">{HERO.lead}</p>
              <div className="hero__actions">
                <Button href={HERO.primaryCta.href} label={HERO.primaryCta.label} />
                <Button href={HERO.secondaryCta.href} label={HERO.secondaryCta.label} variant="outline" />
              </div>
            </div>
            <div className="hero__trusted" data-motion="fade" style={{ '--motion-delay': '480ms' } as CSSProperties}>
              <span className="hero__trusted-label">{HERO.trustedLabel}</span>
              {HERO.trusted.map((name) => (
                <span key={name} className="hero__trusted-name">
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__media" data-motion="fade" style={{ '--motion-delay': '120ms' } as CSSProperties}>
            <svg className="hero__clip-defs" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <clipPath id="hero-photo-blob" clipPathUnits="objectBoundingBox">
                  <path d="M .22 .08 C .38 .02 .64 0 .84 .05 C .98 .09 1.02 .2 .98 .38 C .96 .52 .86 .58 .74 .66 C .62 .74 .57 .9 .43 .97 C .29 1.04 .15 .93 .1 .78 C .05 .62 .02 .48 .1 .34 C .14 .26 .16 .16 .22 .08 Z" />
                </clipPath>
              </defs>
            </svg>
            <figure className="hero__figure">
              <img src={HERO.image.src} alt={HERO.image.alt} width={HERO.image.width} height={HERO.image.height} fetchPriority="high" />
            </figure>
          </div>
        </div>

        <div className="hero__stats" data-motion-sequence="viewport" data-motion-profile="soft">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <strong className="type-section-lg text-accent">{stat.value}</strong>
              <span className="type-small">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
