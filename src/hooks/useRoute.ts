import { useEffect, useLayoutEffect, useState } from 'react';

/**
 * Tiny hash router. Project pages live at `#/work/<slug>`; any other hash
 * (`#about`, `#contact`…) is a section anchor on the home page.
 * Hash routes work on any static host without server rewrites.
 */
export type Route = { page: 'home'; anchor: string } | { page: 'project'; slug: string };

const PROJECT_PREFIX = '#/work/';

function parse(hash: string): Route {
  if (hash.startsWith(PROJECT_PREFIX)) {
    return { page: 'project', slug: decodeURIComponent(hash.slice(PROJECT_PREFIX.length)) };
  }
  return { page: 'home', anchor: hash.replace(/^#/, '') };
}

export const projectHref = (slug: string) => `${PROJECT_PREFIX}${encodeURIComponent(slug)}`;

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  // After the page swaps, the browser can't scroll to an anchor that didn't exist yet.
  useLayoutEffect(() => {
    if (route.page === 'project') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const target = route.anchor && document.getElementById(route.anchor);
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }, [route]);

  return route;
}
