/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 60;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function getPosts() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=12&_embed`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
export const metadata: Metadata = buildMetadata({
  title: "Industrial Fabrication Blogs | NESF Surat",
  description:
    "Read expert blogs on steel fabrication, skid systems, piping, HVAC ducting, and industrial equipment manufacturing by NESF Surat.",
  path: "/blogs",
  image: "/blogpage.png",
});
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://nationalengrs.com/blogs#blog",
  "url": "https://nationalengrs.com/blogs",
  "name": "Industrial Fabrication & Engineering Blogs | NESF Surat",
  "headline": "Industrial Fabrication & Engineering Blogs",
  "description":
    "Explore expert insights on steel fabrication, industrial equipment manufacturing, skid systems, piping, and process engineering from National Engineers & Steel Fabricators.",
  "publisher": {
    "@id": "https://nationalengrs.com/#organization",
  },
  "isPartOf": {
    "@id": "https://nationalengrs.com/#website",
  },
  "about": {
    "@id": "https://nationalengrs.com/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/blogs#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nationalengrs.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://nationalengrs.com/blogs",
    },
  ],
};

export default async function BlogPage() {
  const posts = await getPosts();

  const heroBg = "/blogpage.png";

  // ✅ Static author (same for all)
  const authorName = "Deepak Awasthi";
  const authorAvatar = "/deepak.png"; // ✅ put this in /public
  const authorHref = "/author/deepak-awasthi"; // ✅ change as needed
  const schemas = [blogSchema, breadcrumbSchema];
  return (<>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
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
              <span>HOME</span>
              <span className="text-white/40">/</span>
              <span className="text-orange-400">BLOG</span>
            </div>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Industrial Fabrication & Engineering Blogs
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Explore expert insights on steel fabrication, industrial equipment manufacturing, skid systems, piping, and process engineering from National Engineers & Steel Fabricators.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-350 px-6 py-16">
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

                  {/* Title (blog link) */}
                  <h3 className="mt-3 text-[20px] font-bold leading-snug text-gray-900 transition group-hover:text-orange-700">
                    <Link
                      href={postHref}
                      className="no-underline hover:no-underline"
                      dangerouslySetInnerHTML={{ __html: p.title?.rendered }}
                    />
                  </h3>

                  {/* Excerpt (not a link) */}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {stripHtml(p?.excerpt?.rendered)}
                  </p>

                  {/* ✅ Author (separate link) */}
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

                  {/* ✅ Read more (blog link) */}
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
      </section>
    </div>
  </>
  );
}
