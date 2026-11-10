import { createFileRoute } from "@tanstack/react-router";
import { ArticleCta } from "@/components/article-cta";
import { MoreInsights } from "@/components/more-insights";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const post = {
  title: "There Is No “Hispanic Version” of Your Campaign",
  date: "October 28, 2026",
  author: "Spanish+Media Team",
  tag: "Insights",
  datePublished: "2026-10-28",
  url: "https://www.spanishmedia.com/blog/culture-is-a-media-channel",
  description:
    "There is no Hispanic version of your campaign. There’s a campaign built for a Hispanic customer from the start, or the money is better left where it is.",
};

export const Route = createFileRoute("/blog/culture-is-a-media-channel")({
  head: () => {
    const base = pageHead({
      title: `Spanish+Media | ${post.title}`,
      description: post.description,
      path: "/blog/culture-is-a-media-channel",
      type: "article",
      image: "/og/hispanic-version.jpg",
      imageAlt:
        "Three Hispanic women talking at a kitchen table, the setting for a U.S. Hispanic campaign",
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
  component: CulturePost,
});

function CulturePost() {
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
                src="/images/culture-table.jpg"
                alt="Three Hispanic women talking at a kitchen table, the setting for a U.S. Hispanic campaign"
                className="mt-10 aspect-video w-full rounded-xl object-cover"
              />
            </div>
          </header>
          <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                The request usually arrives after the English campaign is
                finished. Can you make a Hispanic version? Translate the
                headlines. Change the photo. Sometimes they add, “And find some
                creators.”
              </p>
              <p className="text-muted">We can do that. It rarely works.</p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Your customer isn’t waiting for a Spanish subtitle
              </h2>
              <p className="text-muted">
                She’s deciding at the kitchen table, in the family group chat,
                or in the grocery aisle while her kid asks for something else.
                If the offer doesn’t belong in that moment, translating it
                won’t fix it.
              </p>
              <p className="text-muted">
                We’ve watched brands spend a whole quarter talking to
                “Hispanics,” then wonder why the phone didn’t ring. There’s no
                such person. There’s a household in a real city that already
                buys from someone else and might switch. If we can’t say why
                they’d switch, we shouldn’t be buying search, social, or retail
                media yet.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Start with what she actually does
              </h2>
              <p className="text-muted">
                She searched for an immigration attorney, a used SUV, a
                quinceañera dress. She typed it because she needed it. If your
                business got the call or the sale, the ad earned its keep. If
                she did nothing, that money should have stopped. That’s the
                whole idea.
              </p>
              <p className="text-muted">
                We apply the same test across every channel in a U.S. Hispanic
                plan, whether it’s search, social, retail media, or
                influencers: Are we reaching someone who might call, book, sign
                up, or buy? Or are we just hoping the ad feels right?
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Impressions only prove the ad ran
              </h2>
              <p className="text-muted">
                We measure whether someone called, booked, signed up, or
                bought, and then we move the budget. It takes longer to brief.
                It also keeps us from translating a campaign that was already
                failing in English.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Where Maya AI fits
              </h2>
              <p className="text-muted">
                Maya AI, our in-house AI system, is built on more than 12 years
                of Spanish+Media’s work with U.S. Hispanic audiences. Once our
                team defines who the customer is and why she’d switch, Maya AI
                brings that cultural knowledge to the copy, the creative, the
                positioning, and where the next dollar should go. Our
                strategists set the direction, and Maya AI helps us get there
                faster.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Culture isn’t a channel
              </h2>
              <p>
                There’s no Hispanic version of your campaign. There’s a
                campaign built for a Hispanic customer from the start, or
                there’s money better left where it is.
              </p>
            </div>
            <ArticleCta
              headline="Ready to build a campaign that starts with your customer?"
              body="We’ll start with who she is and why she’d switch, then build the search, social, and retail plan around that."
            />
          </div>
          <MoreInsights current="culture-as-media" />
        </article>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
