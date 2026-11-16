import { createFileRoute } from "@tanstack/react-router";
import { ArticleCta } from "@/components/article-cta";
import { MoreInsights } from "@/components/more-insights";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const post = {
  title: "Black Friday Started Weeks Ago in Hispanic Households",
  date: "November 14, 2026",
  author: "Spanish+Media Team",
  tag: "Insights",
  datePublished: "2026-11-14",
  url: "https://www.spanishmedia.com/blog/black-friday-hispanic",
  description:
    "Black Friday for U.S. Hispanic shoppers isn’t about the discount. It’s about whether the offer belongs in the household when the decision is being made.",
};

export const Route = createFileRoute("/blog/black-friday-hispanic")({
  head: () => {
    const base = pageHead({
      title: `${post.title} | Spanish+Media`,
      description: post.description,
      path: "/blog/black-friday-hispanic",
      type: "article",
      image: "/images/black-friday-aisle.jpg",
      imageAlt:
        "Hispanic shoppers in a grocery aisle during a Black Friday decision, for a U.S. Hispanic performance campaign",
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
            image: "https://www.spanishmedia.com/images/black-friday-aisle.jpg",
            mainEntityOfPage: post.url,
          },
        } as any,
      ],
    };
  },
  component: BlackFridayPost,
});

function BlackFridayPost() {
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
                src="/images/black-friday-aisle.jpg"
                alt="Hispanic man smiling while shopping for clothes, for a U.S. Hispanic Black Friday campaign"
                className="mt-10 aspect-video w-full rounded-xl object-cover"
              />
            </div>
          </header>
          <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-ink">
            <p className="text-muted">
              Black Friday is already here for a lot of Hispanic families. Not
              because the ads started early, but because the conversation did.
            </p>
            <p className="text-muted">
              It’s happening in the family group chat, where a sister forwards
              a deal, a cousin replies with a better one, and someone asks
              who’s hosting Nochebuena. By the time your translated sale banner
              goes live, the short list is already made.
            </p>

            <h2 className="mt-10 pt-4 font-display text-3xl text-ink">The decision is shared, not solo</h2>
            <p className="text-muted">
              He’s in the aisle comparing prices while his sister texts him a
              screenshot. The purchase isn’t one person reacting to one ad.
              It’s a household weighing options together. A Spanish version of
              your English sale won’t get you onto that list. An offer built to
              be shared will.
            </p>

            <h2 className="mt-10 pt-4 font-display text-3xl text-ink">The season doesn’t end on Cyber Monday</h2>
            <p className="text-muted">
              For many Hispanic families, gifting runs from Black Friday
              through Nochebuena on December 24 and into Día de Reyes on
              January 6. Brands that stop spending on December 26 leave the
              last stretch of the season to whoever stays.
            </p>

            <h2 className="mt-10 pt-4 font-display text-3xl text-ink">What to do this week</h2>
            <ul className="space-y-3 text-muted">
              <li><strong className="text-ink">Build offers people want to forward.</strong> Write the copy as if it’ll be screenshotted and dropped into a family chat, because it will be.</li>
              <li><strong className="text-ink">Plan for the whole household.</strong> Bundles, family packs, and gifts for several people beat single-item discounts.</li>
              <li><strong className="text-ink">Make payment easy to see.</strong> If you offer installments or buy now, pay later, say so in the ad, not at checkout.</li>
              <li><strong className="text-ink">Extend your calendar.</strong> Keep budget for Nochebuena and Día de Reyes instead of going dark after Cyber Monday.</li>
              <li><strong className="text-ink">Measure orders, not reach.</strong> If a placement isn’t driving add-to-carts or store visits by midweek, move the money.</li>
            </ul>

            <h2 className="mt-10 pt-4 font-display text-3xl text-ink">Where Maya AI fits</h2>
            <p className="text-muted">
              Maya AI, built on more than 12 years of Spanish+Media’s U.S.
              Hispanic campaign work, helps our team turn these insights into
              seasonal copy, creative, and spend shifts fast enough to act
              inside a five-day window. Our strategists decide what goes live.
            </p>

            <h2 className="mt-10 pt-4 font-display text-3xl text-ink">Win the conversation, not just the click</h2>
            <p className="text-muted">
              The brands that win Hispanic Black Friday aren’t the ones with
              the loudest Spanish banner. They’re the ones whose offer gets
              forwarded.
            </p>
          </div>
            <ArticleCta />
          </div>
        </article>
        <MoreInsights current="/blog/black-friday-hispanic" />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
