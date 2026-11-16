import { createFileRoute } from "@tanstack/react-router";
import { ArticleCta } from "@/components/article-cta";
import { MoreInsights } from "@/components/more-insights";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const post = {
  title: "Black Friday Isn’t a Sale. It’s a Decision Window.",
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
      image: "/og/hispanic-version.jpg",
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
            image: "https://www.spanishmedia.com/og/hispanic-version.jpg",
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
        <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
            {post.tag}
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {post.date} · {post.author}
          </p>

          <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-ink">
            <p>
              Black Friday is already here for a lot of Hispanic households. Not
              because the ads started early, but because the conversation did.
            </p>
            <p>
              The request usually shows up as a brief: “We need a Hispanic
              Black Friday campaign.” Translate the headlines. Swap the photo.
              Maybe add a creator. We can do that. It rarely moves the number.
            </p>

            <h2>The decision isn’t waiting for the ad</h2>
            <p>
              She’s looking at the price while she’s already in the aisle, or
              while her sister is texting her the deal she saw. The offer has
              to belong in that moment. A Spanish version of the English sale
              doesn’t fix a message that wasn’t built for how the household
              decides.
            </p>
            <p>
              We’ve watched brands spend the week talking to “Hispanics” and
              then wonder why the add-to-cart didn’t follow. There’s no such
              person. There’s a household in a real city that already has a
              short list, and might switch if the reason is clear.
            </p>

            <h2>Treat it like any other performance window</h2>
            <p>
              No one launches a search campaign by translating a TV spot. You
              start with what people are looking for, build for that intent,
              buy against it, and measure what it returns. Black Friday works
              the same way. It has its own audience, its own moments of
              decision, and its own signals of what converts. When you plan it
              as a channel from the start, it performs like one. When you bolt
              it onto a finished English campaign, it performs like an
              afterthought.
            </p>

            <h2>What actually moves</h2>
            <p>
              She searched for the item, the store, the comparison. She typed
              it because she needed it. If your business got the order or the
              store visit, the work earned its keep. If she did nothing, that
              money should have stopped.
            </p>
            <p>
              We hold every U.S. Hispanic plan to that standard, whether it’s
              search, social, retail media, or creators: Are we reaching
              someone who might buy, or are we just hoping the ad feels right?
            </p>

            <h2>Where Maya AI fits</h2>
            <p>
              Maya AI is built on more than 12 years of Spanish+Media’s work
              with U.S. Hispanic audiences. Once the team defines who the
              customer is and why she’d switch during this window, Maya AI
              brings that knowledge to the copy, the creative, the positioning,
              and where the next dollar should go. The team still decides what
              goes live.
            </p>

            <h2>Plan it, buy it, measure it</h2>
            <p>
              There’s no Hispanic version of your Black Friday campaign.
              There’s culture, planned as a performance channel from the start,
              or there’s money better left where it is.
            </p>
          </div>

          <ArticleCta />
        </article>
        <MoreInsights current="/blog/black-friday-hispanic" />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
