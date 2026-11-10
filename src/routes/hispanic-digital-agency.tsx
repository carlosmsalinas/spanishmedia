import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { stats } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hispanic-digital-agency")({
  head: () =>
    pageHead({
      title: "Spanish+Media | Hispanic Digital Agency",
      description:
        "The leading U.S. Hispanic digital marketing agency. Culture meets AI digital performance for brands expanding in the U.S. Hispanic market.",
      path: "/hispanic-digital-agency",
      image: "/og/who.jpg",
      imageAlt:
        "Spanish+Media team in a Chicago high-rise office, a U.S. Hispanic performance marketing agency",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              About Spanish+Media
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl text-ink sm:text-6xl text-balance">
              The Leading U.S. Hispanic Digital Marketing Agency
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Spanish+Media is a Chicago-based U.S. Hispanic digital marketing
              agency that plans, buys, and optimizes search, social, and retail
              media for brands that need customers, not awareness.
            </p>
          </div>
        </section>

        <section className="mt-3 border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3">
            {[
              {
                title: "Powered by AI",
                body: "Maya AI is built in-house and used on live campaigns. Planning, creative, and buying work from the same system.",
              },
              {
                title: "Driven by Performance",
                body: "An engagement is held to a customer result: a lead, a call, a booking, or a sale. Impressions are not the report.",
              },
              {
                title: "Guided by Authenticity",
                body: "The people doing the work are part of the U.S. Hispanic communities the media has to reach. Culture is the input, not a last look.",
              },
            ].map((item) => (
              <article key={item.title}>
                <h2 className="font-display text-2xl text-ink">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y-[1px] border-line bg-cream text-ink">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
                  The Spanish+Media digital advantage
                </p>
                <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                  Cultural attractiveness is how the media converts.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted lg:col-span-5">
                U.S. Hispanic customers choose the brand that belongs in the
                household, the joke, and the moment of decision. We plan and buy
                search, social, and retail media around that, not around a
                translated line. Maya AI brings the work back about 12 times
                faster than before.
              </p>
            </div>
            <div className="mt-14 grid border-t-[1px] border-line sm:grid-cols-3">
              {stats.slice(0, 3).map((item, i) => (
                <div
                  key={item.label}
                  className={
                    i > 0
                      ? "border-t-[1px] border-line pt-8 sm:border-t-0 sm:border-l-[1px] sm:pt-10 sm:pl-8"
                      : "pt-8 sm:pt-10 sm:pr-8"
                  }
                >
                  <p className="font-display text-5xl text-chile sm:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs font-medium tracking-[0.14em] text-muted uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t-[1px] border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
              <p className="shrink-0 text-xs font-medium tracking-[0.14em] text-muted uppercase">
                Recognition
              </p>
              <p className="font-display text-xl text-ink sm:text-right">
                Inc. Magazine named Spanish+Media one of the fastest-growing
                companies in the Midwest.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
                Our office
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                Downtown Chicago. Markets everywhere.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Our headquarters are located in the downtown area of the Windy
                City, from which we serve clients across the United States,
                Mexico, Europe, and Asia.
              </p>
              <p className="mt-4 text-sm text-ink">
                500 West Madison Street, Suite 1000
                <br />
                Chicago, IL 60661
              </p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/office-team.jpg"
                alt="Spanish+Media team in a Chicago high-rise office, a U.S. Hispanic performance marketing agency"
                className="aspect-16/10 w-full object-cover"
              />
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
