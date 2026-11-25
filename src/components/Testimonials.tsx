import { TESTIMONIALS, type Testimonial } from '../data/portfolio';
import './Testimonials.css';

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, '')
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="review-card">
      {t.body.split('\n\n').map((para) => (
        <p key={para.slice(0, 40)}>{para}</p>
      ))}
      <footer className="review-card__author">
        <span className="review-card__avatar" aria-hidden="true">
          {initials(t.name)}
        </span>
        <div>
          <cite className="review-card__name">
            {t.link ? (
              <a href={t.link} target="_blank" rel="noreferrer">
                {t.name}
              </a>
            ) : (
              t.name
            )}
          </cite>
          <span className="review-card__role">{t.role}</span>
        </div>
      </footer>
    </article>
  );
}

/** A column that scrolls upwards forever; the list is rendered 3× so the loop is seamless. */
function Column({ items, speed, className = '' }: { items: Testimonial[]; speed: 'normal' | 'slow' | 'fast'; className?: string }) {
  return (
    <div className={`reviews__column ${className}`}>
      <div className={`reviews__track reviews__track--${speed}`}>
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="reviews__set" aria-hidden={copy > 0 || undefined}>
            {items.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const all = TESTIMONIALS.items;
  const [a, b, c, d, e] = all;
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-head" data-motion-sequence="viewport" data-motion-profile="soft">
          <h2 className="type-section-title">{TESTIMONIALS.title}</h2>
          <p className="type-lead">{TESTIMONIALS.lead}</p>
        </div>
        <div className="reviews__wall" data-motion="viewport">
          {/* Phones: one column with every review. Tablet and up: three columns. */}
          <Column items={all} speed="normal" className="reviews__column--mobile" />
          <Column items={[a, d]} speed="normal" className="reviews__column--desktop" />
          <Column items={[b, e]} speed="slow" className="reviews__column--desktop" />
          <Column items={[c, a]} speed="fast" className="reviews__column--desktop" />
        </div>
      </div>
    </section>
  );
}
