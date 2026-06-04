import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BlogPostsGrid from "./BlogPostsGrid";

export const revalidate = 60;

async function getPosts() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return Array.isArray(data) ? data : [];
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
  url: "https://nationalengrs.com/blogs",
  name: "Industrial Fabrication & Engineering Blogs | NESF Surat",
  headline: "Industrial Fabrication & Engineering Blogs",
  description:
    "Explore expert insights on steel fabrication, industrial equipment manufacturing, skid systems, piping, and process engineering from National Engineers & Steel Fabricators.",
  publisher: {
    "@id": "https://nationalengrs.com/#organization",
  },
  isPartOf: {
    "@id": "https://nationalengrs.com/#website",
  },
  about: {
    "@id": "https://nationalengrs.com/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/blogs#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nationalengrs.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://nationalengrs.com/blogs",
    },
  ],
};

export default async function BlogPage() {
  const posts = await getPosts();
  const schemas = [blogSchema, breadcrumbSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="min-h-screen bg-white">
        <section className="relative">
          <div
            className="h-80 w-full bg-cover bg-center sm:h-95"
            style={{ backgroundImage: "url(/blogpage.png)" }}
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
                Explore expert insights on steel fabrication, industrial
                equipment manufacturing, skid systems, piping, and process
                engineering from National Engineers & Steel Fabricators.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-350 px-6 py-16">
          <BlogPostsGrid posts={posts} />
        </section>
      </main>
    </>
  );
}
