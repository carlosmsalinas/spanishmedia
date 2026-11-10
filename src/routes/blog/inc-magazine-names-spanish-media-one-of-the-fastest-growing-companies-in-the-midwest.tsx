import { createFileRoute } from "@tanstack/react-router";
import { ArticleCta } from "@/components/article-cta";
import { MoreInsights } from "@/components/more-insights";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const post = {
  title:
    "Inc. Magazine Names Spanish+Media One of the Fastest-Growing Companies in the Midwest",
  date: "April 1, 2025",
  author: "Spanish+Media Team",
  tag: "Agency updates",
  datePublished: "2025-04-01",
  description:
    "Spanish+Media is No. 21 on Inc. Magazine’s 2025 Inc. Regionals: Midwest list of the fastest-growing companies.",
  url: "https://www.spanishmedia.com/blog/inc-magazine-names-spanish-media-one-of-the-fastest-growing-companies-in-the-midwest",
};

export const Route = createFileRoute(
  "/blog/inc-magazine-names-spanish-media-one-of-the-fastest-growing-companies-in-the-midwest",
)({
  head: () => {
    const base = pageHead({
      title: `Spanish+Media | ${post.title}`,
      description: post.description,
      path: "/blog/inc-magazine-names-spanish-media-one-of-the-fastest-growing-companies-in-the-midwest",
      type: "article",
      image: "/og/inc.jpg",
      imageAlt:
        "Three women walking a Chihuahua on the Chicago Riverwalk, Spanish+Media Inc. Magazine recognition",
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            author: {
              "@type": "Organization",
              name: "Spanish+Media",
              url: "https://www.spanishmedia.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "Spanish+Media",
              url: "https://www.spanishmedia.com/",
            },
            image: "https://www.spanishmedia.com/og/inc.jpg",
            mainEntityOfPage: post.url,
          },
        } as any,
      ],
    };
  },
  component: IncPost,
});

function IncPost() {
  return (
    <SiteShell>
      <main>
        <article>
          <header className="border-b border-line">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
              <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
                {post.tag}
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl text-ink sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 text-sm text-muted">
                {post.author}
                <span className="px-2 text-line">/</span>
                {post.date}
              </p>
              <img
                src="/images/inc-river-chihuahua.jpg"
                alt="Three women walking a Chihuahua on the Chicago Riverwalk, Spanish+Media Inc. Magazine recognition"
                className="mt-10 aspect-video w-full rounded-xl object-cover"
              />
            </div>
          </header>
          <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                <span className="font-medium">CHICAGO, IL, April 1st, 2025</span>{" "}
                — Spanish+Media, the Chicago-based U.S. Hispanic digital
                marketing agency, has been recognized as the No. 21
                fastest-growing company in the Midwest on Inc. magazine’s fifth
                annual Inc. Regionals: Midwest list.
              </p>
              <p className="text-muted">
                This prestigious recognition highlights Spanish+Media’s
                exceptional growth trajectory and solidifies its position as a
                leader in the U.S. Hispanic marketing space.
              </p>
              <blockquote className="border-l-2 border-chile pl-5 text-ink">
                “This recognition reflects the dedication of our entire team,
                the trust our clients place in us, and our commitment to help
                brands grow in the U.S. Hispanic market,” said Carlos M.
                Salinas, Spanish+Media’s CEO. “We’re honored to be among the
                region’s most dynamic companies driving economic growth and
                innovation.”
              </blockquote>
              <p className="text-muted">
                Spanish+Media leverages AI to create, activate, and optimize
                culturally-responsive customer acquisition campaigns across
                multiple digital platforms like Google, Meta, and TikTok. The
                agency manages U.S. Hispanic growth initiatives for brands in
                the U.S., Europe, and Asia.
              </p>
              <p className="text-muted">
                Bonny Ghosh, editorial director at Inc., noted that the
                Regionals honorees are “true trailblazers driving economic
                growth in their respective regions, industries, and beyond.”
              </p>
              <p className="text-muted">
                The 2025 Inc. Regionals ranks companies based on percentage
                revenue growth over a two-year period. To qualify, companies
                must have been founded and generating revenue by March 31, 2021,
                with a minimum revenue of $100,000 in 2021 and $1 million in
                2023.
              </p>
              <p className="text-muted">
                Complete results of the Inc. Regionals: Midwest list, including
                company profiles, can be found at{" "}
                <a
                  href="https://www.inc.com/regionals/midwest"
                  className="text-chile underline decoration-chile/30 underline-offset-4"
                >
                  inc.com/regionals/midwest
                </a>
                .
              </p>
            </div>
            <section className="mt-14 border-t border-line pt-8">
              <h2 className="font-display text-3xl text-ink">
                About Spanish+Media
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Spanish+Media is the Chicago-based U.S. Hispanic digital
                marketing agency that helps brands grow in the U.S. Hispanic
                market. The agency leverages AI to create, activate, and
                optimize culturally-responsive customer acquisition campaigns
                across multiple digital platforms like Google, Meta, and TikTok.
                Spanish+Media manages the U.S. Hispanic growth initiatives for
                brands in the U.S., Europe, and Asia.
              </p>
            </section>
            <ArticleCta
              headline="Ready to grow with a U.S. Hispanic partner?"
              body="We’re the Chicago agency Inc. Magazine named one of the fastest-growing companies in the Midwest."
            />
          </div>
          <MoreInsights current="inc-midwest" />
        </article>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
