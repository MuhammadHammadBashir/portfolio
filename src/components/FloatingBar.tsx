import { useEffect, useState } from 'react';
import { ArrowUpIcon, EnvelopeIcon } from '@phosphor-icons/react';
import { LINKS } from '../data/portfolio';
import './FloatingBar.css';

/** Bottom-right quick actions: back to top (after scrolling) and email. */
export function FloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`floating-bar${visible ? ' is-visible' : ''}`}>
      <button type="button" className="floating-bar__btn" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })} tabIndex={visible ? 0 : -1}>
        <ArrowUpIcon size={20} />
      </button>
      <a href={LINKS.email} className="floating-bar__btn" aria-label="Email Hammad" tabIndex={visible ? 0 : -1}>
        <EnvelopeIcon size={20} />
      </a>
    </div>
  );
}
