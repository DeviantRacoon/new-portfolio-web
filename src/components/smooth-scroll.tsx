"use client";

import { useEffect } from "react";

export function SmoothScroll({ offset = 20 }: { offset?: number }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();
      // @ts-ignore
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();

      try {
        history.replaceState(null, "", href);
      } catch {}

      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    // Capture phase to run before framework/link handlers
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick as any, { capture: true } as any);
  }, [offset]);

  return null;
}
