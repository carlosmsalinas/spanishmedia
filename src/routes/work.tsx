import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { CULTURE_LINE, work } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead({
      title: "Work | Spanish+Media",
      description:
        "Selected U.S. Hispanic performance work across CPG, healthcare, media, and retail, with the client names left off.",
      path: "/work",
      image: "/og/work.jpg",
      imageAlt:
        "Hispanic cook checking a phone in the kitchen, for a U.S. Hispanic UGC flavor line campaign",
    }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Selected work
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl text-ink sm:text-6xl text-balance">
              {CULTURE_LINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Translation is the easy part. Getting a Hispanic customer to
              sign up, call, book, or buy is the work. Here’s what that looks
              like across search, social, retail media, and UGC. The names
              stay private. The results don’t.
            </p>
          </div>
        </section>
        {work.map((item, index) => (
          <article
            key={item.slug}
            id={item.slug}
            className="border-b border-line"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
              <div
                className={
                  index % 2 === 1
                    ? "overflow-hidden rounded-xl lg:col-span-6 lg:order-2"
                    : "overflow-hidden rounded-xl lg:col-span-6"
                }
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="text-xs tracking-[0.14em] text-muted uppercase">
                  {item.category}
                </p>
                <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-5 font-display text-4xl text-chile">
                  {item.metric}
                  <span className="ml-2 font-sans text-sm font-medium tracking-normal text-muted">
                    {item.metricLabel}
                  </span>
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {item.result}
                </p>
              </div>
            </div>
          </article>
        ))}
        <CtaBand />
      </main>
    </SiteShell>
  );
}
