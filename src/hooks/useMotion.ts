import { useEffect } from 'react';

/**
 * React port of Nova's motion.js.
 * - [data-motion="fade"] and children of [data-motion-sequence="fade"] reveal right after load.
 * - [data-motion="viewport"] and children of [data-motion-sequence="viewport"] reveal when 15% visible.
 * Re-scans whenever `pageKey` changes so newly rendered pages animate too.
 * Sequence children get --motion-order so they stagger. Reduced motion shows everything at once.
 */
export function useMotion(pageKey?: string) {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show = (el: Element) => el.setAttribute('data-motion-visible', '');

    const collect = (kind: 'fade' | 'viewport') => {
      const items: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>(`[data-motion="${kind}"]`).forEach((el) => items.push(el));
      document.querySelectorAll<HTMLElement>(`[data-motion-sequence="${kind}"]`).forEach((seq) => {
        Array.from(seq.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty('--motion-order', String(i));
          items.push(child as HTMLElement);
        });
      });
      return items;
    };

    const fade = collect('fade');
    const viewport = collect('viewport');

    if (reduced || !('IntersectionObserver' in window)) {
      [...fade, ...viewport].forEach(show);
      return;
    }

    root.setAttribute('data-motion-ready', '');

    // Let the hidden state paint once so the transition actually runs.
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => fade.forEach(show)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    viewport.forEach((el) => observer.observe(el));

    // Safety net: anchor jumps can skip past elements without them ever intersecting.
    // Reveal anything that is already above the bottom of the viewport.
    let pending = viewport;
    let raf = 0;
    const sweep = () => {
      raf = 0;
      pending = pending.filter((el) => {
        if (el.hasAttribute('data-motion-visible')) return false;
        if (el.getBoundingClientRect().top < window.innerHeight) {
          show(el);
          observer.unobserve(el);
          return false;
        }
        return true;
      });
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [pageKey]);
}
