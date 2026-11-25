import { CONTACT, NAV, PROFILE } from '../data/portfolio';
import { Button } from './Button';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="footer__shade" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__cta" data-motion-sequence="viewport" data-motion-profile="soft">
          <p className="footer__eyebrow">
            <span aria-hidden="true" />
            {CONTACT.eyebrow}
            <span aria-hidden="true" />
          </p>
          <h2 className="footer__title">{CONTACT.title}</h2>
          <p className="footer__lead">{CONTACT.lead}</p>
          <div className="footer__actions">
            <Button href={CONTACT.primary.href} label={CONTACT.primary.label} variant="accent" size="md" />
            <Button href={CONTACT.secondary.href} label={CONTACT.secondary.label} variant="outline-light" size="md" />
          </div>
        </div>

        <div className="footer__nav-row">
          <nav aria-label="Social profiles" className="footer__social">
            {CONTACT.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Footer navigation" className="footer__links">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span className="type-small">
            © {year} {PROFILE.name}. All rights reserved.
          </span>
          <span className="type-small footer__credit">
            Designed by Aqeel Abbas Khan, Associate SE
          </span>
        </div>
      </div>
    </footer>
  );
}
