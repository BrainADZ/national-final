/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function getCategoryBySlug(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/categories?slug=${encodeURIComponent(
      slug
    )}`,
    { next: { revalidate: 300 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.[0] ?? null; // { id, name, slug, description, ... }
}

async function getPostsByCategoryId(catId: number) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${catId}&per_page=12&_embed`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  return res.json();
}

/** ✅ SEO for category page */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category) return {};

  const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");
  const canonical = siteUrl
    ? `${siteUrl}/blogs/category/${category.slug}`
    : `/blogs/category/${category.slug}`;

  const title = `${stripHtml(category.name)} Blogs | NESF Surat`;
  const description =
    stripHtml(category.description || "") ||
    `Read latest blogs in ${stripHtml(category.name)} category by National Engineers & Steel Fabricators (NESF) Surat.`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = await getPostsByCategoryId(category.id);

  // Same hero bg like blog list
  const heroBg = "/blogpage.png";

  // ✅ Static author (same for all)
  const authorName = "Deepak Awasthi";
  const authorAvatar = "/deepak.png";
  const authorHref = "/author/deepak-awasthi";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative">
        <div
          className="h-80 w-full bg-cover bg-center sm:h-95"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-350 flex-col justify-end px-6 pb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70">
              <Link href="/" className="hover:text-white">
                HOME
              </Link>
              <span className="text-white/40">/</span>
              <Link href="/blogs" className="hover:text-white">
                BLOG
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-orange-400">
                {stripHtml(category.name).toUpperCase()}
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {stripHtml(category.name)} Blogs
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Showing posts in <span className="font-bold">{stripHtml(category.name)}</span>{" "}
              category.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-350 px-6 py-16">
        {/* Back row like your blog list vibe */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-gray-900 hover:underline"
          >
            ← Back to Blog
          </Link>

          <div className="text-sm text-gray-600">
            Total posts: <span className="font-bold text-gray-900">{posts?.length || 0}</span>
          </div>
        </div>

        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p: any) => {
              const postHref = `/blogs/${p.slug}`;
              const featured =
                p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
              const date = p?.date ? new Date(p.date) : null;

              return (
                <div key={p.id} className="group flex h-full flex-col">
                  {/* IMAGE (blog link) */}
                  <Link
                    href={postHref}
                    className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 no-underline hover:no-underline"
                    aria-label={stripHtml(p?.title?.rendered)}
                  >
                    {featured ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featured}
                        alt={stripHtml(p?.title?.rendered)}
                        className="h-full w-full transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                        No image
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                  </Link>

                  {/* CONTENT */}
                  <div className="mt-5 flex flex-1 flex-col">
                    {/* Date */}
                    <div className="text-xs text-gray-500">
                      {date ? (
                        <time dateTime={p.date}>
                          {date.toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      ) : null}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-[20px] font-bold leading-snug text-gray-900 transition group-hover:text-orange-700">
                      <Link
                        href={postHref}
                        className="no-underline hover:no-underline"
                        dangerouslySetInnerHTML={{ __html: p.title?.rendered }}
                      />
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {stripHtml(p?.excerpt?.rendered)}
                    </p>

                    {/* Author */}
                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        href={authorHref}
                        className="flex items-center gap-3 no-underline hover:no-underline"
                        aria-label={`Author: ${authorName}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={authorAvatar}
                          alt={authorName}
                          className="h-9 w-9 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div className="leading-tight">
                          <div className="text-xs text-gray-500">Author</div>
                          <div className="text-sm font-bold text-gray-900">
                            {authorName}
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Read more */}
                    <div className="mt-6 pt-4">
                      <Link
                        href={postHref}
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 no-underline hover:no-underline"
                      >
                        Read more
                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-gray-50 p-10 text-center">
            <div className="text-lg font-bold text-gray-900">
              No posts found
            </div>
            <p className="mt-2 text-sm text-gray-700">
              There are no posts in <span className="font-bold">{stripHtml(category.name)}</span>{" "}
              yet.
            </p>
            <Link
              href="/blogs"
              className="mt-5 inline-flex items-center bg-orange-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-800"
            >
              Explore all blogs →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}