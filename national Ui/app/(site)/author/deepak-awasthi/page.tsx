/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Globe } from "lucide-react";

export const revalidate = 60;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function getPosts() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=8&_embed`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function AuthorPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO (BLACK) */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-[220px_1fr] items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/deepak.png"
                alt="Deepak Awasthi - Industrial Engineering Author"
                width={220}
                height={220}
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                Deepak Awasthi
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/75">
                Author | Industrial Fabrication & Process Equipment Specialist
              </p>

              {/* Social */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>

                <a
                  href="mailto:info@nationalengineers.in"
                  className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
{/* 
                <a
                  href="/"
                  className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  <Globe className="h-4 w-4" />
                  Website
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (NO ROUNDED / NO SHADOW) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900">About the Author</h2>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-700">
            <p>
              Deepak Awasthi is a fabrication and process engineering professional associated with
              National Engineers & Steel Fabricators (NESF). His work spans heavy fabrication and
              process equipment manufacturing, supporting industrial projects where quality,
              documentation, and execution discipline matter.
            </p>

            <p>
              With practical exposure to pressure vessels, storage tanks, pipelines, ducting systems,
              and structural fabrication, his writing focuses on real-world selection guidance,
              manufacturing best practices, and quality control practices used on the shop floor and
              at project sites.
            </p>

            <p>
              Through technical, field-oriented articles, he aims to help engineers, procurement teams,
              EPC stakeholders, and plant managers make informed decisions on industrial equipment,
              vendors, and project execution planning.
            </p>
          </div>

          {/* Quick Expertise Blocks */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              "Pressure Vessels & Process Equipment",
              "Industrial Steel Fabrication Practices",
              "Quality & Inspection Mindset",
            ].map((t) => (
              <div key={t} className="border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">{t}</p>
                <p className="mt-1 text-sm text-gray-600">
                  Practical insights focused on safety, reliability and long-term plant performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES (WITH IMAGE, NO ROUNDED, NO SHADOW) */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-6 border-b border-gray-200 pb-4">
          <h3 className="text-2xl font-bold text-gray-900">Articles by Deepak Awasthi</h3>
          <p className="text-sm text-gray-600">
            Latest engineering notes & practical guidance.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p: any) => {
            const postHref = `/blogs/${p.slug}`;
            const featured =
              p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
            const date = p?.date ? new Date(p.date) : null;

            return (
              <article key={p.id} className="border border-gray-200">
                {/* IMAGE */}
                <Link href={postHref} className="block">
                  <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    {featured ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featured}
                        alt={stripHtml(p?.title?.rendered)}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                        No image
                      </div>
                    )}
                  </div>
                </Link>

                {/* CONTENT */}
                <div className="p-5">
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

                  <h4 className="mt-2 text-[18px] font-bold leading-snug text-gray-900">
                    <Link href={postHref}>
                      <span
                        dangerouslySetInnerHTML={{ __html: p.title?.rendered }}
                      />
                    </Link>
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-gray-700 line-clamp-3">
                    {stripHtml(p?.excerpt?.rendered)}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={postHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-black underline underline-offset-4"
                    >
                      Read article
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}