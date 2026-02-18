"use client";

import { useEffect } from "react";

function hide(el: HTMLElement) {
  el.style.display = "none";
  el.setAttribute("aria-hidden", "true");
}
function show(el: HTMLElement) {
  el.style.display = "block";
  el.setAttribute("aria-hidden", "false");
}

const ROOT_SELECTOR =
  ".sp-easy-accordion, .sp_easyaccordion, .ea-accordion, .easy-accordion, [class*='sp-ea'], [id*='sp-ea']";

const ITEM_SELECTOR = ".ea-card, .sp-ea-single, .ea-item, .accordion-item";

const HEADER_SELECTOR =
  ".ea-header, .sp-ea-header, .ea-title, .sp-ea-title, .accordion-title, h3, h4, button";

const BODY_SELECTOR =
  ".ea-body, .sp-ea-body, .ea-content, .sp-ea-content, .accordion-content, .ea-body-content, .sp-ea-panel, .sp-ea-body-content";

/** inject + / – icon (works even if CSS classes differ) */
function ensureIcon(header: HTMLElement) {
  let icon = header.querySelector<HTMLElement>("[data-ea-icon]");
  if (icon) return icon;

  // make header an icon container
  if (!header.style.position) header.style.position = "relative";
  header.style.paddingRight = "52px";

  icon = document.createElement("span");
  icon.setAttribute("data-ea-icon", "true");
  icon.style.position = "absolute";
  icon.style.right = "16px";
  icon.style.top = "50%";
  icon.style.transform = "translateY(-50%)";
  icon.style.fontSize = "22px";
  icon.style.fontWeight = "800";
  icon.style.lineHeight = "1";
  icon.style.color = "#6b7280"; // gray-500
  icon.textContent = "+";

  header.appendChild(icon);
  return icon;
}

function setIcon(icon: HTMLElement | null, open: boolean) {
  if (!icon) return;
  icon.textContent = open ? "–" : "+";
  icon.style.color = open ? "#c2410c" : "#6b7280"; // orange-700 : gray-500
}

export default function EasyAccordionEnhancer() {
  useEffect(() => {
    try {
      const roots = Array.from(
        document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)
      );
      if (!roots.length) return;

      const cleanups: Array<() => void> = [];

      roots.forEach((root) => {
        // Find items (fallback to direct children)
        const items = Array.from(root.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
        const finalItems = items.length
          ? items
          : (Array.from(root.children) as HTMLElement[]);

        if (!finalItems.length) return;

        // Helpers
        const closeAll = () => {
          finalItems.forEach((it) => {
            const h = it.querySelector<HTMLElement>(HEADER_SELECTOR);
            const b = it.querySelector<HTMLElement>(BODY_SELECTOR);
            if (!h || !b) return;

            h.setAttribute("aria-expanded", "false");
            hide(b);

            const ic = h.querySelector<HTMLElement>("[data-ea-icon]");
            setIcon(ic, false);
          });
        };

        finalItems.forEach((item, index) => {
          const header = item.querySelector<HTMLElement>(HEADER_SELECTOR);
          const body = item.querySelector<HTMLElement>(BODY_SELECTOR);
          if (!header || !body) return;

          // prevent double-binding if component re-mounts
          if (header.getAttribute("data-ea-bound") === "1") return;
          header.setAttribute("data-ea-bound", "1");

          header.style.cursor = "pointer";
          header.setAttribute("role", "button");
          header.setAttribute("tabindex", "0");

          // icon
          const icon = ensureIcon(header);

          // init collapsed
          header.setAttribute("aria-expanded", "false");
          hide(body);
          setIcon(icon, false);

          const toggle = () => {
            const isOpen = header.getAttribute("aria-expanded") === "true";

            // close all first (accordion behavior)
            closeAll();

            // open current if it was closed
            if (!isOpen) {
              header.setAttribute("aria-expanded", "true");
              show(body);
              setIcon(icon, true);
            }
          };

          const onClick = (e: Event) => {
            e.preventDefault();
            toggle();
          };

          const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          };

          header.addEventListener("click", onClick);
          header.addEventListener("keydown", onKeyDown);

          cleanups.push(() => {
            header.removeEventListener("click", onClick);
            header.removeEventListener("keydown", onKeyDown);
          });

          // optional: first open
          if (index === 0) {
            header.setAttribute("aria-expanded", "true");
            show(body);
            setIcon(icon, true);
          }
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    } catch (e) {
      console.error("EasyAccordionEnhancer error:", e);
    }
  }, []);

  return null;
}
