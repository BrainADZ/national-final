/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

function estimateReadingTime(html = "") {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { words, minutes };
}

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(
      slug
    )}&_embed`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.[0] ?? null;
}

async function getCategories() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/categories?per_page=50&hide_empty=true&orderby=count&order=desc`,
    { next: { revalidate: 300 } }
  );
  if (!res.ok) return [];
  return res.json();
}
async function getRankMathCanonical(fullUrl: string) {
  if (!process.env.WORDPRESS_URL) return null;

  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(fullUrl)}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;

  const data = await res.json();
  const head: string = data?.head || "";

  const match = head.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return match?.[1] || null;
}


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const seoTitle = post?.meta?.rank_math_title?.toString().trim();
  const seoDesc  = post?.meta?.rank_math_description?.toString().trim();

  // ✅ base canonical from WP
  let canonical = post?.link || undefined;

  // ✅ override canonical from Rank Math (if enabled)
  const rmCanonical = post?.link ? await getRankMathCanonical(post.link) : null;
  if (rmCanonical) canonical = rmCanonical;

  return {
    title: seoTitle || stripHtml(post?.title?.rendered || ""),
    description: seoDesc || stripHtml(post?.excerpt?.rendered || "").slice(0, 160),
    alternates: { canonical },
  };
}


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, categories] = await Promise.all([getPost(slug), getCategories()]);
  if (!post) notFound();

  const featured =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large
      ?.source_url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "";

  const date = post?.date ? new Date(post.date) : null;

  const postCatIds: number[] = Array.isArray(post.categories)
    ? post.categories
    : [];
  const postCats = categories
    .filter((c: any) => postCatIds.includes(c.id))
    .slice(0, 3);

  const rt = estimateReadingTime(post?.content?.rendered || "");

  // STATIC BANNER (same for all posts) - change this path
  const bannerSrc = "/bgblog.png";

  return (
    <div className="bg-white">
      {/* HERO (STATIC BANNER + TITLE/META INSIDE HERO) */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bannerSrc}
          alt="Blog banner"
          className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px]"
          loading="eager"
        />

        {/* overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-432 px-4 pb-8 sm:px-6 sm:pb-10">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-semibold tracking-wide text-white/75">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-orange-200">Post</span>
            </div>

            {/* Title */}
            <h1
              className="mt-3 max-w-4xl text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[44px]"
              dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
            />

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              {date ? (
                <span>
                  {date.toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              ) : null}

              <span className="text-white/35">•</span>
              <span>{rt.minutes} min read</span>

              {postCats?.length ? <span className="text-white/35">•</span> : null}

              <div className="flex flex-wrap gap-2">
                {postCats.map((c: any) => (
                  <Link
                    key={c.id}
                    href={`/blog?category=${c.id}`}
                    className="text-orange-200 hover:text-white hover:underline"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* LEFT */}
          <div>
            {/* Top actions */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/blog"
                className="text-sm font-semibold text-gray-900 hover:underline"
              >
                ← Back to Blog
              </Link>

              
            </div>

            {/* FEATURED IMAGE (ABOVE CONTENT, NOT IN HERO) */}
            {featured ? (
              <div className="mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured}
                  alt={stripHtml(post.title?.rendered)}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}

            {/* ARTICLE (FORCED SPACING + FAQ SUPPORT) */}
            <article
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

                /* blockquote */
                [&_blockquote]:my-8
                [&_blockquote]:border-l-4 [&_blockquote]:border-orange-600
                [&_blockquote]:bg-orange-50
                [&_blockquote]:px-5 [&_blockquote]:py-4

                /* HR */
                [&_hr]:my-12 [&_hr]:border-gray-200

                /* FAQ / accordion support (details/summary) */
                [&_details]:my-4
                [&_details]:bg-gray-50
                [&_details]:px-5 [&_details]:py-4
                [&_summary]:cursor-pointer
                [&_summary]:font-bold
                [&_summary]:text-gray-900
                [&_summary]:list-none

                /* RankMath FAQ (if present) */
                [&_.rank-math-faq-item]:my-4
                [&_.rank-math-question]:font-bold
                [&_.rank-math-answer]:mt-3
              "
              dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
            />

            {/* CTA (RECTANGLE, NO ROUNDED, NO BORDERS) */}
            <div className="mt-12 bg-gray-50 px-6 py-6 sm:px-8">
              <div className="text-xs font-bold tracking-widest text-gray-600">
                NEED A QUOTE?
              </div>
              <div className="mt-2 text-xl font-bold text-gray-900">
                Talk to our engineering team.
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Share your requirement and we’ll help you with the right
                solution.
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-orange-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-800"
                >
                  Contact Us →
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center bg-white px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-100"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8 lg:sticky lg:top-6 lg:self-start">
            {/* Categories (RECTANGLE, NO ROUNDED/BORDERS) */}
            <div className="bg-gray-50 px-6 py-6">
              <div className="text-xs font-bold tracking-widest text-gray-600">
                CATEGORIES
              </div>
              <div className="mt-2 text-lg font-bold text-gray-900">
                Browse topics
              </div>

              <div className="mt-4 space-y-2">
                {categories?.length ? (
                  categories.slice(0, 12).map((c: any) => (
                    <Link
                      key={c.id}
                      href={`/blog?category=${c.id}`}
                      className="flex items-center justify-between bg-white px-4 py-3 text-sm hover:bg-gray-100"
                    >
                      <span className="font-semibold text-gray-900">
                        {c.name}
                      </span>
                      <span className="text-xs text-gray-500">{c.count}</span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-700">No categories found.</p>
                )}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-gray-50 px-6 py-6">
              <div className="text-xs font-bold tracking-widest text-gray-600">
                QUICK LINKS
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <Link
                  href="/blog"
                  className="block bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  ← Back to Blog
                </Link>
                <Link
                  href="/products"
                  className="block bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="block bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Brand card */}
            <div className="bg-white px-6 py-6">
              <div className="text-xs font-bold tracking-widest text-orange-700">
                NATIONAL ENGINEERS
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Precision-engineered heat transfer & fabrication solutions backed
                by decades of manufacturing excellence.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center text-sm font-bold text-orange-700 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
