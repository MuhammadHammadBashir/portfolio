import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { LINKS, NAV, PROFILE } from '../data/portfolio';
import './Header.css';

function NavBar({ fixed, visible, menuOpen, onToggle }: { fixed?: boolean; visible?: boolean; menuOpen: boolean; onToggle: () => void }) {
  return (
    <div className="container-wide">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label={`${PROFILE.name}, back to top`}>
          {PROFILE.logo}
        </a>
        <nav className="header__nav" aria-label={fixed ? 'Main navigation (sticky)' : 'Main navigation'}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="header__link" tabIndex={fixed && !visible ? -1 : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href="#contact" className="btn header__cta" tabIndex={fixed && !visible ? -1 : undefined}>
            <span className="btn__wrap">
              <span className="btn__text">Let&apos;s talk</span>
              <span className="btn__hover" aria-hidden="true">
                Hire me
              </span>
            </span>
          </a>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-controls="site-nav-drawer"
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
            onClick={onToggle}
            tabIndex={fixed && !visible ? -1 : undefined}
          >
            <span className="menu-toggle__bar" aria-hidden="true" />
            <span className="menu-toggle__bar" aria-hidden="true" />
            <span className="menu-toggle__bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Publish the header height so the hero can sit just below it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--site-header-height', `${Math.ceil(el.getBoundingClientRect().height)}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Show the fixed bar once the hero is mostly scrolled away (same 300px threshold as Nova).
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 300);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Drawer: lock page scroll, close on Escape, move focus into the dialog.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [menuOpen]);

  const toggle = () => setMenuOpen((open) => !open);
  const close = () => setMenuOpen(false);

  return (
    <>
      <div id="site-nav-drawer" className={`drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="drawer__backdrop" onClick={close} aria-hidden="true" />
        <aside className="drawer__sheet" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="drawer__deck" aria-hidden="true">
            <div className="drawer__layer drawer__layer--1" />
            <div className="drawer__layer drawer__layer--2" />
            <div className="drawer__layer drawer__layer--3" />
          </div>
          <div className="drawer__content">
            <div className="drawer__top">
              <button ref={closeRef} type="button" className="drawer__close" aria-label="Close menu" onClick={close} tabIndex={menuOpen ? 0 : -1}>
                <span className="drawer__close-bar" aria-hidden="true" />
                <span className="drawer__close-bar" aria-hidden="true" />
                <span className="drawer__close-bar" aria-hidden="true" />
              </button>
            </div>
            <div className="drawer__scroller">
              <nav className="drawer__nav" aria-label="Mobile navigation">
                {NAV.map((item, i) => (
                  <div key={item.href} className="drawer__item" style={{ '--stagger': i } as CSSProperties}>
                    <a href={item.href} className="drawer__link" onClick={close} tabIndex={menuOpen ? 0 : -1}>
                      {item.label}
                    </a>
                  </div>
                ))}
                <div className="drawer__item" style={{ '--stagger': NAV.length } as CSSProperties}>
                  <a href="#contact" className="drawer__link drawer__link--cta" onClick={close} tabIndex={menuOpen ? 0 : -1}>
                    Let&apos;s talk
                  </a>
                </div>
              </nav>
              <div className="drawer__social">
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>
                  LinkedIn
                </a>
                <span aria-hidden="true">/</span>
                <a href={LINKS.github} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>
                  GitHub
                </a>
                <span aria-hidden="true">/</span>
                <a href={LINKS.cv} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>
                  CV
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="header-wrap">
        <header ref={headerRef} className="header header--static">
          <NavBar menuOpen={menuOpen} onToggle={toggle} />
        </header>
        <header className={`header header--fixed${scrolled ? ' is-visible' : ''}`} aria-hidden={!scrolled}>
          <NavBar fixed visible={scrolled} menuOpen={menuOpen} onToggle={toggle} />
        </header>
      </div>
    </>
  );
}
