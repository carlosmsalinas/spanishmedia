import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { pageHead } from "@/lib/seo";

const faqs = [
  {
    question: "What is Maya AI?",
    answer:
      "Maya AI is Spanish+Media’s in-house system for live U.S. Hispanic campaigns. It proposes the plan, the copy, and the creative direction about 12 times faster than before. Cultural experts finish the work.",
  },
  {
    question: "How does Maya AI handle Spanish?",
    answer:
      "Prices, dates, and hours come back as an accurate translation. Campaign lines are rewritten for your Hispanic audience, not carried over word for word. Cultural experts make the final call before anything goes live.",
  },
  {
    question: "Who finishes the work?",
    answer:
      "Maya AI proposes the plan, the copy, and the direction. Copywriters, designers, and video editors—cultural experts in the Hispanic market—turn that into the campaign that runs. You never put a draft in market.",
  },
];

const values = [
  {
    n: "01",
    title: "Be there when your Hispanic audience is ready to choose",
    body: "Get your plan, copy, and creative direction about 12 times faster—so your campaign reaches your audience while they’re still choosing, not after they’ve bought from someone else.",
  },
  {
    n: "02",
    title: "Built for your Hispanic audience. Not just translated",
    body: "Your campaign starts with your audience—not with a finished ad in another language. The offer, the message, and the creative are developed for them from the start, in Spanish and English.",
  },
  {
    n: "03",
    title: "The budget follows a customer",
    body: "Once the work is live, Maya AI points at what earned a call, a booking, a sign-up, or a sale. The team moves the money. Impressions are not the report.",
  },
  {
    n: "04",
    title: "You get a finished campaign, not a draft",
    body: "Maya AI proposes the plan, the copy, and the direction. Our cultural experts—copywriters, designers, and video editors—turn that into the campaign that runs. You get the speed without putting a draft in market.",
  },
];

export const Route = createFileRoute("/how-maya-ai-works")({
  head: () => {
    const base = pageHead({
      title: "How Maya AI Works | Spanish+Media",
      description:
        "Maya AI is Spanish+Media’s in-house system for live U.S. Hispanic campaigns. It proposes the plan, the copy, and the creative direction about 12 times faster. Cultural experts finish the work.",
      path: "/how-maya-ai-works",
      image: "/og/maya.jpg",
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
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        } as any,
      ],
    };
  },
  component: MayaPage,
});

function MayaPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              How Maya AI works
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl text-ink sm:text-6xl">
              Maya AI: faster U.S. Hispanic campaigns, finished by cultural
              experts.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Maya AI is Spanish+Media’s in-house system for live U.S. Hispanic
              campaigns. It proposes the plan, the copy, and the creative
              direction about 12 times faster than before. Cultural experts,
              the designers and video editors, finish the ad. You are not
              waiting on a translation of last quarter’s English campaign, and
              you are not putting a draft in market.
            </p>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              What you get
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
              The culture stays in the work. The campaign gets there faster.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Maya proposes the plan, the lines, and the direction. Cultural
              experts finish it and decide where the money goes. You never
              have to manage that. You get the campaign sooner, built for your
              Hispanic audience, with the budget pointed at what is actually
              working.
            </p>
          </div>
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            {values.map((step, index) => (
              <article
                key={step.n}
                className={
                  index === 0
                    ? "grid gap-4 pt-20 pb-10 sm:grid-cols-12 sm:gap-8"
                    : "grid gap-4 border-t border-line py-10 sm:grid-cols-12 sm:gap-8"
                }
              >
                <p className="font-display text-3xl text-chile sm:col-span-2">
                  {step.n}
                </p>
                <div className="sm:col-span-9">
                  <h2 className="font-display text-3xl text-ink">{step.title}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Core features
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
              Everything your Hispanic campaign needs. Working together.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Planning",
                  body: "You get a U.S. Hispanic plan you can buy against: who it’s for, the offer, and which channel should carry it.",
                },
                {
                  title: "Copy",
                  body: "You get Spanish and English written for your Hispanic audience, not a translation of the campaign you already ran.",
                },
                {
                  title: "Artwork",
                  body: "You get finished images and layouts. Maya proposes them. Designers make the pieces that run.",
                },
                {
                  title: "Positioning",
                  body: "Maya proposes where the brand sits with your Hispanic audience: who it is for, the reason to switch, and the line. Cultural experts decide what goes into market.",
                },
                {
                  title: "Spend guidance",
                  body: "You see which audience, line, and placement is still earning a customer, and the money can move.",
                },
                {
                  title: "One system",
                  body: "Plan, creative, and buying stay together, so you are not waiting on files to move between teams.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-xl bg-foam p-7 sm:p-8"
                >
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Spanish
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
              Don’t just change the language. Make the message land.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Prices, dates, and hours need accurate translation. Campaigns
              need more: a message written for your Hispanic audience, not
              carried over word for word. Maya AI handles both. Cultural
              experts make the final call before anything goes live.
            </p>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  label: "Keep the facts exact",
                  english: "Open Saturday, 9 to 5.",
                  spanish: "Abierto el sábado, de 9 a 5.",
                  note: "The language changes. The information doesn’t.",
                },
                {
                  label: "Keep the promise. Rethink the words.",
                  english: "Convenient appointments, on your schedule.",
                  spanish: "Tu cita, a la hora que te conviene.",
                  note: "Same promise. A different way to say it.",
                },
                {
                  label: "Turn the benefit into a moment",
                  english: "A taste the whole family will love.",
                  spanish: "Sírvelo y mira quién pide más.",
                  note: "Don’t just promise they’ll love it. Help them picture it.",
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="flex flex-col rounded-xl bg-foam p-6 shadow-sm sm:p-7"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-chile uppercase">
                    {item.label}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs tracking-[0.14em] text-muted uppercase">
                      English
                    </p>
                    <p className="mt-1 text-base text-muted">{item.english}</p>
                  </div>
                  <div className="mt-5 border-t border-line pt-5">
                    <p className="text-xs tracking-[0.14em] text-chile uppercase">
                      Spanish
                    </p>
                    <p className="mt-1 font-display text-2xl leading-snug text-ink">
                      {item.spanish}
                    </p>
                  </div>
                  <p className="mt-auto pt-6 text-sm leading-relaxed text-muted">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              What a prompt looks like
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
              The team asks. Maya AI answers with the next move.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              These are the kinds of questions we ask on your U.S. Hispanic
              customer acquisition campaigns, and the recommendations Maya AI
              returns for you to put into market.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  label: "Positioning",
                  prompt:
                    "This line is about convenience. Our Hispanic audience decides at the table. Propose the position, and do not translate it.",
                  answer:
                    "The reason to switch is who decides at home, not a new slogan. Keep the offer. Change who the line is talking to.",
                },
                {
                  label: "Copy",
                  prompt:
                    "Turn that position into three Spanish lines a daughter would text her mother.",
                  answer:
                    "Lead with the person, not the brand. Keep the offer. Use the phrase they already send each other.",
                },
                {
                  label: "Spend",
                  prompt:
                    "The Spanish line is converting. The English placement is not. Where does next week’s budget go?",
                  answer:
                    "Move the money to the line that is earning the customer. Do not fund the placement you cannot tie to one.",
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="flex flex-col rounded-2xl border border-line bg-paper p-6"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-chile uppercase">
                    {item.label}
                  </p>
                  <p className="mt-4 font-display text-2xl leading-snug text-ink">
                    “{item.prompt}”
                  </p>
                  <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Questions
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">
              About Maya AI
            </h2>
            <dl className="mt-10 max-w-3xl divide-y divide-line">
              {faqs.map((item) => (
                <div key={item.question} className="py-6">
                  <dt className="font-display text-2xl text-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-muted">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-base text-muted">
              For the full story, read{" "}
              <Link to="/blog/inside-maya-ai" className="font-medium text-chile">
                Inside Maya AI
              </Link>
              .
            </p>
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
