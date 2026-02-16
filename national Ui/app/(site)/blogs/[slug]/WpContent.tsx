"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";

type Props = { html: string };

function normalizeText(s: string) {
  return (s || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function makeDetails(summaryText: string, bodyNodes: Node[], className: string) {
  const details = document.createElement("details");
  details.className = className;

  const summary = document.createElement("summary");
  summary.className = `${className}__summary`;
  summary.textContent = summaryText;

  const body = document.createElement("div");
  body.className = `${className}__body`;

  bodyNodes.forEach((n) => body.appendChild(n));

  details.appendChild(summary);
  details.appendChild(body);
  return details;
}

export default function WpContent({ html }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Prevent double processing
    if (root.getAttribute("data-enhanced") === "1") return;
    root.setAttribute("data-enhanced", "1");

    /**
     * ✅ 1) TOC -> <details>
     * We find the first "Table of Contents" heading/label and wrap its block.
     */
    const tocLabelCandidates = Array.from(
      root.querySelectorAll("h1,h2,h3,h4,p,strong,span,div")
    ).filter((el) => normalizeText(el.textContent || "") === "table of contents");

    const tocLabel = tocLabelCandidates[0] as HTMLElement | undefined;

    if (tocLabel) {
      // Find a reasonable container: closest block/container OR parent
      let container: HTMLElement | null =
        tocLabel.closest(
          'div[class*="toc"], nav[class*="toc"], div[id*="toc"], div[class*="table-of-contents"], nav[class*="table-of-contents"]'
        ) || tocLabel.parentElement;

      // If still too small, expand to a larger wrapper that contains the list
      if (container) {
        const hasList =
          !!container.querySelector("ul,ol") ||
          !!container.querySelector('a[href*="#"]');

        if (!hasList) {
          // maybe list is in next siblings
          let probe: HTMLElement | null = container;
          for (let i = 0; i < 6 && probe; i++) {
            if (probe.querySelector("ul,ol") || probe.querySelector('a[href*="#"]')) {
              container = probe;
              break;
            }
            probe = probe.parentElement;
          }
        }
      }

      // Wrap if not already in details
      if (container && !container.closest("details")) {
        // Move the container node into details body
        const moved = container.cloneNode(true);
        container.replaceWith(
          makeDetails("Table of Contents", [moved], "ne-toc")
        );
      }
    }

    /**
     * ✅ 2) FAQ -> accordion <details>
     * Covers: RankMath, Yoast/schema-faq, and generic patterns.
     */

    // --- RankMath FAQ ---
    const rmItems = Array.from(root.querySelectorAll(".rank-math-faq-item"));
    if (rmItems.length) {
      rmItems.forEach((item) => {
        const qEl = item.querySelector(".rank-math-question");
        const aEl = item.querySelector(".rank-math-answer");
        if (!qEl || !aEl) return;

        const details = document.createElement("details");
        details.className = "ne-faq";

        const summary = document.createElement("summary");
        summary.className = "ne-faq__q";
        summary.textContent = (qEl.textContent || "").trim();

        const ans = document.createElement("div");
        ans.className = "ne-faq__a";
        ans.innerHTML = aEl.innerHTML;

        details.appendChild(summary);
        details.appendChild(ans);

        item.replaceWith(details);
      });
    }

    // --- Yoast/schema-faq ---
    const schemaSections = Array.from(root.querySelectorAll(".schema-faq-section"));
    if (schemaSections.length) {
      schemaSections.forEach((sec) => {
        const qEl =
          sec.querySelector(".schema-faq-question") ||
          sec.querySelector("strong") ||
          sec.querySelector("h3,h4");
        const aEl =
          sec.querySelector(".schema-faq-answer") ||
          sec.querySelector("p");

        if (!qEl || !aEl) return;

        const details = document.createElement("details");
        details.className = "ne-faq";

        const summary = document.createElement("summary");
        summary.className = "ne-faq__q";
        summary.textContent = (qEl.textContent || "").trim();

        const ans = document.createElement("div");
        ans.className = "ne-faq__a";
        ans.innerHTML = (aEl as HTMLElement).innerHTML;

        details.appendChild(summary);
        details.appendChild(ans);

        sec.replaceWith(details);
      });
    }

    /**
     * --- Generic FAQ (like your screenshot) ---
     * Detect "Frequently Asked Questions" heading, then convert
     * subsequent h3/h4 blocks + next paragraph(s) into accordion.
     */
    const faqHeading = Array.from(root.querySelectorAll("h1,h2,h3,h4")).find(
      (h) => normalizeText(h.textContent || "") === "frequently asked questions"
    ) as HTMLElement | undefined;

    if (faqHeading) {
      // collect nodes after FAQ heading until next H2 (section boundary)
      const parent = faqHeading.parentElement || root;
      const all = Array.from(parent.children);

      const startIdx = all.indexOf(faqHeading);
      if (startIdx >= 0) {
        const nodes: HTMLElement[] = [];
        for (let i = startIdx + 1; i < all.length; i++) {
          const el = all[i] as HTMLElement;
          if (!el) continue;

          // stop at next major section
          if (el.tagName === "H2") break;

          nodes.push(el);
        }

        // Now parse pattern: H3/H4 = question, subsequent nodes until next H3/H4 = answer
        let i = 0;
        while (i < nodes.length) {
          const el = nodes[i];
          const isQ = el.tagName === "H3" || el.tagName === "H4";

          if (isQ) {
            const qText = (el.textContent || "").trim();
            const answerParts: HTMLElement[] = [];

            let j = i + 1;
            while (j < nodes.length) {
              const next = nodes[j];
              if (next.tagName === "H3" || next.tagName === "H4") break;
              // ignore empty divs
              if ((next.textContent || "").trim().length) answerParts.push(next);
              j++;
            }

            // Create details only if we have some answer
            if (qText && answerParts.length) {
              const details = document.createElement("details");
              details.className = "ne-faq";

              const summary = document.createElement("summary");
              summary.className = "ne-faq__q";
              summary.textContent = qText;

              const ans = document.createElement("div");
              ans.className = "ne-faq__a";
              ans.innerHTML = answerParts.map((x) => x.outerHTML).join("");

              details.appendChild(summary);
              details.appendChild(ans);

              // Replace question node with details, remove answer nodes
              el.replaceWith(details);
              answerParts.forEach((x) => x.remove());
            }
            i = j;
          } else {
            i++;
          }
        }
      }
    }
  }, [html]);

  return (
    <div
      ref={ref}
      className="
        max-w-none text-gray-800

        /* universal spacing for WP content */
        [&_p]:my-5 [&_p]:leading-8
        [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[26px] [&_h2]:font-extrabold [&_h2]:text-gray-900
        [&_h3]:mt-8  [&_h3]:mb-3 [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:text-gray-900
        [&_h4]:mt-6  [&_h4]:mb-2 [&_h4]:text-[16px] [&_h4]:font-bold [&_h4]:text-gray-900

        [&_ul]:my-5 [&_ul]:pl-6 [&_ul]:list-disc
        [&_ol]:my-5 [&_ol]:pl-6 [&_ol]:list-decimal
        [&_li]:my-2

        [&_strong]:text-gray-900
        [&_a]:text-orange-700 [&_a]:font-semibold hover:[&_a]:underline

        /* images / tables */
        [&_img]:my-8 [&_img]:max-w-full
        [&_table]:my-8 [&_table]:w-full [&_table]:text-sm
        [&_th]:bg-gray-50 [&_th]:text-left [&_th]:p-3
        [&_td]:p-3
        [&_tr]:border-b [&_tr]:border-gray-100

        /* TOC details */
        [&_.ne-toc]:my-8
        [&_.ne-toc]:bg-gray-50
        [&_.ne-toc]:px-6 [&_.ne-toc]:py-5
        [&_.ne-toc__summary]:cursor-pointer
        [&_.ne-toc__summary]:font-extrabold
        [&_.ne-toc__summary]:text-gray-900
        [&_.ne-toc__summary]:select-none
        [&_.ne-toc__body]:mt-4

        /* FAQ accordion */
        [&_.ne-faq]:my-4
        [&_.ne-faq]:bg-gray-50
        [&_.ne-faq]:px-6 [&_.ne-faq]:py-5
        [&_.ne-faq__q]:cursor-pointer
        [&_.ne-faq__q]:font-extrabold
        [&_.ne-faq__q]:text-gray-900
        [&_.ne-faq__q]:select-none
        [&_.ne-faq__a]:mt-3
        [&_.ne-faq__a_p]:my-3
        [&_.ne-faq__a]:text-gray-700

        /* remove default marker */
        [&_summary]:list-none
        [&_summary::-webkit-details-marker]:hidden
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
