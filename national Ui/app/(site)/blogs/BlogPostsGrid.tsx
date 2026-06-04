/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_POST_COUNT = 12;
const POSTS_PER_LOAD = 6;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function BlogPostsGrid({ posts }: { posts: any[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_POST_COUNT);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post: any) => {
          const postHref = `/blogs/${post.slug}`;
          const featured =
            post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
          const date = post?.date ? new Date(post.date) : null;

          return (
            <article key={post.id} className="group flex h-full flex-col">
              <Link
                href={postHref}
                className="relative aspect-16/10 w-full overflow-hidden bg-white no-underline hover:no-underline"
                aria-label={stripHtml(post?.title?.rendered)}
              >
                {featured ? (
                  <img
                    src={featured}
                    alt={stripHtml(post?.title?.rendered)}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                    No image
                  </div>
                )}
              </Link>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="text-xs text-gray-500">
                  {date ? (
                    <time dateTime={post.date}>
                      {date.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  ) : null}
                </div>

                <h3 className="mt-3 text-[20px] font-bold leading-snug text-gray-900 transition group-hover:text-orange-700">
                  <Link
                    href={postHref}
                    className="no-underline hover:no-underline"
                    dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
                  />
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {stripHtml(post?.excerpt?.rendered)}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    href="/author/deepak-awasthi"
                    className="flex items-center gap-3 no-underline hover:no-underline"
                    aria-label="Author: Deepak Awasthi"
                  >
                    <img
                      src="/deepak.png"
                      alt="Deepak Awasthi"
                      className="h-9 w-9 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="leading-tight">
                      <div className="text-xs text-gray-500">Author</div>
                      <div className="text-sm font-bold text-gray-900">
                        Deepak Awasthi
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href={postHref}
                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 no-underline hover:no-underline"
                  >
                    Read more
                    <span className="transition group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {hasMorePosts ? (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + POSTS_PER_LOAD, posts.length)
              )
            }
            className="rounded-md bg-[#ee9d54] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d88c45]"
          >
            Load More Blogs
          </button>
        </div>
      ) : null}
    </>
  );
}
