/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

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

export default async function BlogPage() {
  const posts = await getPosts();

  const heroBg = "/blogpage.png";

  // ✅ Static author (same for all)
  const authorName = "Deepak Awasthi";
  const authorAvatar = "/deepak.png"; // ✅ put this in /public

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative">
        <div
          className="h-[320px] sm:h-[380px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/70">
              <span>HOME</span>
              <span className="text-white/40">/</span>
              <span className="text-orange-400">BLOG</span>
            </div>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Insights & Updates
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Industry notes, product updates, and practical engineering guidance.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p: any) => {
            const featured =
              p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
            const date = p?.date ? new Date(p.date) : null;

            return (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group block"
              >
                {/* ✅ Card wrapper (no border, no rounded) */}
                <div className="flex h-full flex-col">
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    {featured ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featured}
                        alt={stripHtml(p?.title?.rendered)}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                        No image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                  </div>

                  {/* CONTENT (flex so Read more stays aligned at bottom) */}
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
                    <h3
                      className="mt-3 text-[20px] font-bold leading-snug text-gray-900 group-hover:text-orange-700 transition"
                      dangerouslySetInnerHTML={{ __html: p.title?.rendered }}
                    />

                    {/* Excerpt */}
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {stripHtml(p?.excerpt?.rendered)}
                    </p>

                    {/* ✅ Author (static, inside link) */}
                    <div className="mt-5 flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={authorAvatar}
                        alt={authorName}
                        className="h-9 w-9 object-cover rounded-full"
                        loading="lazy"
                      />
                      <div className="leading-tight">
                        <div className="text-xs text-gray-500">Author</div>
                        <div className="text-sm font-bold text-gray-900">
                          {authorName}
                        </div>
                      </div>
                    </div>

                    {/* ✅ Read more fixed at bottom (same alignment in all cards) */}
                    <div className="mt-6 pt-4">
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-orange-700">
                        Read more
                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
