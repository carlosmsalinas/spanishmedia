import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { MayaPrompt } from "@/components/maya-prompt";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { capabilities, stats } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hispanic-ai-marketing")({
  head: () =>
    pageHead({
      title: "Spanish+Media | Hispanic AI Digital Marketing",
      description:
        "Get more U.S. Hispanic customers with culturally fluent content and precise AI-targeted campaigns across search, social, and retail media.",
      path: "/hispanic-ai-marketing",
      image: "/og/services.jpg",
      imageAlt:
        "Woman with a laptop on a couch, for a U.S. Hispanic streaming and digital marketing campaign",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Discovery and lead generation services
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl text-ink sm:text-6xl text-balance">
              Get More U.S. Hispanic Customers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              By combining an exceptional knowledge of U.S. Hispanic consumer
              behavior, innovative digital content, and precise AI targeted
              campaigns, we help brands achieve trackable business growth from
              today's U.S. Hispanic market.
            </p>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="bg-paper p-7 sm:p-8">
                <h2 className="font-display text-2xl text-ink">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-cream text-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
                Meet Maya AI
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Hit your U.S. Hispanic marketing goals with AI.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Maya AI allows us to plan and propose multi-channel digital
                campaigns in Spanish and English 12 times faster than before.
                Designers and video editors turn those proposals into the
                finished artwork and video, without sanding off the culture
                that makes the work convert.
              </p>
              <Link
                to="/how-maya-ai-works"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-chile"
              >
                How Maya AI works
                <ArrowRight className="size-4" />
              </Link>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-3xl text-ink">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] tracking-[0.12em] text-muted uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <MayaPrompt />
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-4xl text-ink">
              Gain U.S. Hispanic leads, insights, and revenue
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Your budget works harder",
                  body: "We eliminate waste and maximize every dollar.",
                },
                {
                  title: "You reach market faster",
                  body: "What used to take weeks now takes days.",
                },
                {
                  title: "You get results you can measure",
                  body: "Clear ROI, not just impressions.",
                },
              ].map((item) => (
                <article key={item.title} className="border-t border-line pt-6">
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base text-muted">{item.body}</p>
                </article>
              ))}
            </div>
            <Button asChild className="mt-10" size="lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
