import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { insights } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hispanic-marketing-insights")({
  head: () =>
    pageHead({
      title: "Hispanic Marketing Insights | Spanish+Media",
      description:
        "Stay ahead with the latest in U.S. Hispanic digital marketing trends from Spanish+Media.",
      path: "/hispanic-marketing-insights",
      image: "/og/insights.jpg",
      imageAlt:
        "Three Hispanic women talking at a kitchen table, the setting for a U.S. Hispanic campaign",
    }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Spanish+Media blog
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink sm:text-6xl">
              Insights & inspiration
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted">
              Stay ahead with the latest in U.S. Hispanic digital marketing
              trends.
            </p>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-6xl divide-y divide-line px-5 sm:px-8">
            {insights.map((item) => (
              <article key={item.slug} className="grid gap-4 py-12 sm:grid-cols-12">
                <div className="sm:col-span-3">
                  <p className="text-xs tracking-[0.12em] text-muted uppercase">
                    {item.date}
                  </p>
                  <p className="mt-2 text-xs font-medium tracking-[0.14em] text-chile uppercase">
                    {item.tag}
                  </p>
                </div>
                <div className="sm:col-span-8">
                  <h2 className="font-display text-3xl text-ink">
                  {"to" in item && item.to ? (
                    <Link to={item.to} className="hover:text-chile">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {item.dek}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
