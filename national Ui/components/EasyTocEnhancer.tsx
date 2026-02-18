"use client";

import { useEffect } from "react";

function findTocRoot(el: HTMLElement | null) {
  if (!el) return null;
  // Easy Table of Contents common wrappers (different versions)
  return (
    el.closest("#ez-toc-container") ||
    el.closest(".ez-toc-container") ||
    el.closest("[class*='ez-toc']") ||
    el.closest("[id*='ez-toc']")
  ) as HTMLElement | null;
}

function findTocList(tocRoot: HTMLElement) {
  // common list containers used by plugin
  return (
    tocRoot.querySelector<HTMLElement>(".ez-toc-list") ||
    tocRoot.querySelector<HTMLElement>(".ez-toc-list-level-1") ||
    tocRoot.querySelector<HTMLElement>("ul, ol")
  );
}

export default function EasyTocEnhancer() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;

      const tocRoot = findTocRoot(a);
      if (!tocRoot) return; // not a TOC click

      const rawHref = a.getAttribute("href") || "";

      // ✅ 1) Close/toggle button: usually href="#" or javascript:void(0)
      const isToggleLike =
        rawHref === "#" ||
        rawHref === "" ||
        rawHref.toLowerCase().startsWith("javascript:") ||
        a.closest(".ez-toc-title-toggle") ||
        a.classList.contains("ez-toc-toggle") ||
        a.classList.contains("ez-toc-btn");

      if (isToggleLike) {
        e.preventDefault();
        e.stopPropagation();

        const list = findTocList(tocRoot);
        if (list) {
          const hidden = getComputedStyle(list).display === "none";
          list.style.display = hidden ? "block" : "none";
        }
        return;
      }

      // ✅ 2) Normal TOC link: full URL -> hash only
      let hash = "";
      const hashIndex = rawHref.indexOf("#");
      if (hashIndex >= 0) hash = rawHref.slice(hashIndex); // "#Heading_ID"
      else if (rawHref.startsWith("#")) hash = rawHref;

      if (!hash) return;

      // convert link to hash-only (so even if default happens, it won't go external)
      a.setAttribute("href", hash);

      // ✅ 3) Smooth scroll to heading (prevent navigation)
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      let el = document.getElementById(id);

      // fallback: some themes/plugins mismatch underscores vs hyphens
      if (!el && id.includes("_")) el = document.getElementById(id.replace(/_/g, "-"));
      if (!el && id.includes("-")) el = document.getElementById(id.replace(/-/g, "_"));

      if (!el) {
        // last fallback: CSS escape selector
        try {
          el = document.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
        } catch {}
      }

      if (el) {
        e.preventDefault();
        e.stopPropagation();

        const offset = 90; // sticky header offset
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });

        history.replaceState(null, "", `#${id}`);
      }
    };

    // ✅ Capture phase so it beats default navigation
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
