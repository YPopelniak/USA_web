import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { useSeo } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getBlogPost } from "@/blog";
import { seo } from "@/content";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;
  const path = post ? `/blog/${post.slug}` : undefined;

  const schema = useMemo(
    () =>
      post && path
        ? [
            articleSchema({
              title: post.title,
              description: post.description,
              path,
              date: post.date,
            }),
            breadcrumbSchema([
              { name: "Blog", path: "/blog" },
              { name: post.title, path },
            ]),
          ]
        : [],
    [post, path],
  );

  useSeo(
    post && path
      ? {
          title: post.seoTitle,
          description: post.description,
          path,
          schema,
        }
      : { ...seo.notFound, noindex: true },
  );

  if (!post || !path) return <NotFound />;

  return (
    <>
      <PageHero
        kicker="Blog"
        title={post.title}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />

      <article className="container-page py-16 lg:py-24">
        <p className="text-[14px] text-ink-muted">{post.dateLabel}</p>

        <div className="mt-10 max-w-[68ch]">
          {post.sections.map((section) => (
            <section key={section.heading} className="mt-12 first:mt-0">
              <h2
                className="text-[24px] leading-snug"
                style={{ fontVariationSettings: '"wdth" 108, "wght" 700' }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-4 text-[17px] leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 space-y-3">
                  {section.list.map((item) => (
                    <li
                      key={item.slice(0, 48)}
                      className="flex gap-3 text-[17px] leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-brand-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className="mt-12 text-[17px] leading-relaxed text-ink-muted">
            Related service:{" "}
            <Link
              to={post.related.to}
              className="text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-700"
            >
              {post.related.label}
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap gap-3" data-cta-location="blog">
            <CallButton showNumber={false} />
            <BookButton label="Book Service" topic={post.title} />
          </div>
        </div>
      </article>
    </>
  );
}
