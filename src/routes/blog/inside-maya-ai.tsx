import { createFileRoute } from "@tanstack/react-router";
import { ArticleCta } from "@/components/article-cta";
import { MoreInsights } from "@/components/more-insights";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const post = {
  title: "Inside Maya AI: how we activate bilingual campaigns 12× faster.",
  date: "November 1, 2026",
  datePublished: "2026-11-01",
  dateModified: "2026-11-02",
  author: "Spanish+Media Team",
  tag: "Insights",
  description:
    "Maya AI is the in-house system Spanish+Media uses to plan and build U.S. Hispanic advertising campaigns, up to 12× faster. People still finish the work.",
  url: "https://www.spanishmedia.com/blog/inside-maya-ai",
};

const faqs = [
  {
    question: "What is Maya AI?",
    answer:
      "Maya AI is Spanish+Media’s proprietary AI system for planning and building U.S. Hispanic marketing campaigns, including strategy, Spanish copy, positioning, and spend recommendations.",
  },
  {
    question: "How is Maya AI different from ChatGPT or other AI tools?",
    answer:
      "General AI tools aren’t built for the U.S. Hispanic market. Maya AI is powered by Spanish+Media’s 12+ years of campaign experience, so it understands cultural differences across Hispanic communities, transcreation instead of literal translation, and what drives trust and conversion with Hispanic audiences.",
  },
  {
    question: "Can businesses use Maya AI directly?",
    answer:
      "Maya AI is used by Spanish+Media’s team on client campaigns. It isn’t sold as standalone software.",
  },
  {
    question: "How much faster is Maya AI?",
    answer:
      "Campaigns move from brief to launch up to 12× faster than with our previous process.",
  },
  {
    question: "Which platforms does Spanish+Media run campaigns on?",
    answer: "Meta, Google, YouTube, TikTok, and retail media.",
  },
  {
    question: "Is the Spanish copy translated?",
    answer:
      "No. All copy is transcreated in Spanish from the start and reviewed by native-speaking copywriters.",
  },
];

export const Route = createFileRoute("/blog/inside-maya-ai")({
  head: () => {
    const base = pageHead({
      title: `Spanish+Media | ${post.title}`,
      description: post.description,
      path: "/blog/inside-maya-ai",
      type: "article",
      image: "/og/inside-maya.jpg",
      imageAlt:
        "Spanish+Media team reviewing campaign layouts for a U.S. Hispanic advertising campaign",
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
            dateModified: post.dateModified,
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
            image: "https://www.spanishmedia.com/og/inside-maya.jpg",
            mainEntityOfPage: post.url,
          },
        } as any,
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        } as any,
      ],
    };
  },
  component: MayaPost,
});

function MayaPost() {
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
                src="/images/maya-article.jpg"
                alt="Spanish+Media team reviewing campaign layouts for a U.S. Hispanic advertising campaign"
                className="mt-10 aspect-video w-full rounded-xl object-cover"
              />
            </div>
          </header>
          <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <h2 className="font-display text-3xl text-ink">What is Maya AI?</h2>
              <p className="text-muted">
                Maya AI is the in-house artificial intelligence system that
                Spanish+Media, a Chicago-based Hispanic marketing agency, uses
                to plan and build U.S. Hispanic advertising campaigns. Built on
                more than 12 years of our campaign work, Maya AI drafts
                strategy, Spanish-native copy, brand positioning, and media
                spend recommendations. Our copywriters, designers, video
                editors, and media buyers then refine that work into finished
                campaigns, up to 12× faster than our previous process.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Why do Hispanic marketing campaigns take so long to launch?
              </h2>
              <p className="text-muted">
                The idea is rarely what takes the time. It’s the stretch after
                the brief: who it’s for, the Spanish, the pictures, the buy.
                That used to sit in a queue. Maya AI shortens the queue. The
                people who decide what runs are still the ones who decide.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Does Maya AI understand Hispanic audiences?
              </h2>
              <p className="text-muted">
                Yes, because we built it to. Generic AI tools default to
                “neutral” Spanish and general-market assumptions. Maya AI is
                built on more than 12 years of Spanish+Media’s work with U.S.
                Hispanic audiences: what converts, what builds trust, and how
                messaging changes across Mexican American, Caribbean, Central
                American, and South American communities. It understands that a
                campaign for a Puerto Rican family in Orlando shouldn’t sound
                like one for a Mexican American family in Chicago.
              </p>
              <p className="text-muted">
                We still write the brief, and we still read what comes back.
                Maya AI puts what we already know into the draft. Someone on
                the team has to say whether it sounds right.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                How does Spanish+Media use Maya AI?
              </h2>
              <p className="text-muted">
                A few prompts from live work.
              </p>
              <h3 className="pt-2 font-display text-2xl text-ink">
                1. Seasonal timing (retail / jewelry)
              </h3>
              <p className="text-ink">
                “Plan our Mother’s Day campaign for Mexican American shoppers.”
              </p>
              <p className="text-muted">
                Maya AI flags that many Mexican American families celebrate Día
                de las Madres on May 10, not on the U.S. date. It recommends
                launching early enough to cover both, so the brand doesn’t
                arrive after the moment has passed.
              </p>
              <h3 className="pt-2 font-display text-2xl text-ink">
                2. Trust over urgency (legal services)
              </h3>
              <p className="text-ink">
                “Our immigration ad gets clicks but no calls. The audience is
                parents worried about their family’s status. Rework the angle.”
              </p>
              <p className="text-muted">
                Maya AI shifts the message from urgency to reassurance: a real
                attorney’s face, “hablamos español” up front, and a call-first
                CTA instead of a form. For this audience, a phone call feels
                safer than typing personal details into a website.
              </p>
              <h3 className="pt-2 font-display text-2xl text-ink">
                3. Who decides (automotive)
              </h3>
              <p className="text-ink">
                “Adapt this national lease offer for first-time Hispanic
                buyers. Don’t translate it.”
              </p>
              <p className="text-muted">
                Maya AI repositions the ad around the family rather than the
                solo driver, since the purchase is often a family decision. It
                also puts the dealership’s Spanish-speaking staff in the
                creative, because talking with someone who speaks your language
                removes a key barrier.
              </p>
              <h3 className="pt-2 font-display text-2xl text-ink">
                4. Code-switching (consumer apps)
              </h3>
              <p className="text-ink">
                “Write five TikTok hooks for bilingual Latinos ages 25–34.”
              </p>
              <p className="text-muted">
                Maya AI drafts hooks in natural Spanglish, the way this
                audience actually talks, instead of choosing all English or all
                Spanish. Our copywriters then pick the lines that sound real
                and cut the ones that feel forced.
              </p>
              <h3 className="pt-2 font-display text-2xl text-ink">
                5. Spending that matches behavior (media buying)
              </h3>
              <p className="text-ink">
                “Calls drop after 6 p.m., but our spend doesn’t. Where should
                the budget go?”
              </p>
              <p className="text-muted">
                Maya AI recommends shifting spend to the hours when calls
                actually come in and adding weekend budget, when families talk
                through big decisions together.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                What’s the difference between translation and transcreation?
              </h2>
              <p className="text-muted">
                A translation swaps the words. Transcreation is when the joke,
                who the line is talking to, and the reason to call have to
                change too, or it doesn’t work. That’s the job Maya is built
                for. A native Spanish-speaking marketer still reads it before
                it runs.
              </p>
              <h2 className="pt-4 font-display text-3xl text-ink">
                Does Maya AI replace human marketers?
              </h2>
              <p className="text-muted">
                No. What comes back is a start. The team rewrites it, makes the
                pictures, cuts the video, and buys the media. Nothing raw goes
                into market, and nobody sits on a translation for weeks.
              </p>
              <p>
                Faster only helps if it still sounds like it belongs with that
                audience. That’s the part the team does.
              </p>
            </div>

            <section className="mt-16 border-t border-line pt-12">
              <h2 className="font-display text-3xl text-ink">
                Frequently asked questions
              </h2>
              <dl className="mt-8 space-y-8">
                {faqs.map((item) => (
                  <div key={item.question}>
                    <dt className="font-display text-2xl text-ink">
                      {item.question}
                    </dt>
                    <dd className="mt-3 text-base leading-relaxed text-muted">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <ArticleCta
              headline="Your next U.S. Hispanic campaign, finished faster."
              body="Tell us who you want to reach and what a win looks like. We’ll show you the plan, the culture, and where the budget goes."
            />
          </div>
          <MoreInsights current="maya-ai" />
        </article>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
