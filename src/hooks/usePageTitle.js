import { useEffect } from "react";

const SITE = "apurbadutta.lol";

/**
 * Sets document.title on mount and resets to the default on unmount.
 * @param {string} pageTitle - e.g. "Contact" | null for home (shows domain only)
 */
export function usePageTitle(pageTitle = null) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — ${SITE}` : SITE;
    return () => {
      document.title = SITE;
    };
  }, [pageTitle]);
}
