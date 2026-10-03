import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/blog";
import { seo } from "@/content";

export default function BlogIndex() {
  useSeo({
    ...seo.blog,
    path: "/blog",
    schema: [breadcrumbSchema([{ name: "Blog", path: "/blog" }])],
  });

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Notes on the equipment, before you book"
        body="Short notes on upcoming Chicago conferences, newer heating and cooling equipment, repair-or-replace decisions, and what an error code does and does not tell you."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="container-page py-16 lg:py-24">
        <ul className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {blogPosts.map((post, index) => (
            <li key={post.slug}>
              <Reveal delay={index * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block py-8 sm:py-10"
                >
                  <p className="text-[13px] text-ink-muted">{post.dateLabel}</p>
                  <h2
                    className="mt-2 max-w-3xl text-[26px] leading-snug transition-colors group-hover:text-brand-600 sm:text-[32px]"
                    style={{ fontVariationSettings: '"wdth" 112, "wght" 720' }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
