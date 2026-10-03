import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

export type Crumb = { label: string; to?: string };

export function PageHero({
  kicker,
  title,
  body,
  crumbs = [],
  children,
  backgroundImage,
  backgroundAlt = "",
}: {
  kicker: string;
  title: string;
  body?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  /** Full-bleed photo behind the hero. Text switches to white so it stays readable. */
  backgroundImage?: string;
  backgroundAlt?: string;
}) {
  const onPhoto = Boolean(backgroundImage);
  const content = (
    <>
      <nav aria-label="Breadcrumb" className="mb-7">
        <ol
          className={
            onPhoto
              ? "flex flex-wrap items-center gap-1.5 text-[13px] text-white/70"
              : "flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted"
          }
        >
          <li>
            <Link
              to="/"
              className={
                onPhoto
                  ? "-my-2 inline-flex min-h-11 items-center py-2 transition-colors hover:text-white"
                  : "-my-2 inline-flex min-h-11 items-center py-2 transition-colors hover:text-brand-600"
              }
            >
              Home
            </Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5 opacity-50" aria-hidden="true" />
              {c.to ? (
                <Link
                  to={c.to}
                  className={
                    onPhoto
                      ? "-my-2 inline-flex min-h-11 items-center py-2 transition-colors hover:text-white"
                      : "-my-2 inline-flex min-h-11 items-center py-2 transition-colors hover:text-brand-600"
                  }
                >
                  {c.label}
                </Link>
              ) : (
                <span className={onPhoto ? "text-white" : "text-ink"}>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Eyebrow tone={onPhoto ? "light" : "brand"}>{kicker}</Eyebrow>
      <h1
        className={
          onPhoto
            ? "mt-5 max-w-3xl text-[34px] leading-[1.1] text-white sm:text-[46px]"
            : "mt-5 max-w-3xl text-[34px] leading-[1.1] sm:text-[46px]"
        }
      >
        {title}
      </h1>
      {body && (
        <p
          className={
            onPhoto
              ? "mt-5 max-w-2xl text-[17px] leading-relaxed text-white/80"
              : "mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-muted"
          }
        >
          {body}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </>
  );

  return (
    <section
      className={
        onPhoto
          ? "relative isolate overflow-hidden border-b border-black/20 bg-ink"
          : "border-b border-black/[0.07] bg-surface"
      }
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            aria-hidden={backgroundAlt ? undefined : true}
            className="absolute inset-0 -z-10 size-full object-cover object-[center_58%]"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/40" />
        </>
      )}
      <div className={onPhoto ? "container-page py-10 sm:py-14 lg:py-20" : "container-page py-14 lg:py-20"}>{content}</div>
    </section>
  );
}
