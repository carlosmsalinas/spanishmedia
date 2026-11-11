import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaBand } from "@/components/cta-band";
import { MayaPrompt } from "@/components/maya-prompt";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  clients,
  insights,
  services,
  verticals,
  work,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Spanish+Media | Hispanic Digital Marketing Agency",
      description:
        "U.S. Hispanic customer growth fueled by culture. Scale your brand with AI-powered performance marketing for the U.S. Hispanic market.",
      path: "/",
      image: "/og/home.jpg",
      imageAlt:
        "Hispanic woman on a rainy Chicago street at dusk, the first frame of the Spanish+Media hero video",
    }),
  component: Home,
});

function Home() {
  return (
    <SiteShell overlayHeader>
      <main>
        <Hero />
        <Trust />
        <WorkStrip />
        <Machine />
        <Maya />
        <Culture />
        <Verticals />
        <Insights />
        <CtaBand />
      </main>
    </SiteShell>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-navy text-foam">
      {reduceMotion ? (
        <img
          src="/images/reel-company-poster.jpg"
          alt="Hispanic woman on a rainy Chicago street at dusk, the first frame of the Spanish+Media hero video"
          className="absolute inset-0 size-full object-cover object-[50%_20%]"
        />
      ) : (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/reel-company-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/reel-company.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/45 to-navy/10" />
      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pt-28 pb-14 sm:px-8 sm:pb-20">
        <p className="reveal text-xs font-semibold tracking-[0.2em] text-foam/80 uppercase">
          Guided by culture. Enhanced by AI.
        </p>
        <h1 className="reveal reveal-d1 mt-4 max-w-4xl font-display text-[2.75rem] leading-[0.96] text-foam sm:text-6xl lg:text-7xl">
          U.S. Hispanic Customer Growth Fueled by{" "}
          <em className="text-blue-hover italic">Culture.</em>
        </h1>
        <p className="reveal reveal-d2 mt-5 max-w-xl text-base leading-relaxed text-foam/80 sm:text-lg">
          Spanish+Media is a Chicago-based U.S. Hispanic digital marketing
          agency that plans, buys, and optimizes search, social, and retail
          media for brands that need customers, not awareness.
        </p>
        <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="invertOutline" size="lg">
            <Link to="/hispanic-ai-marketing">View Services</Link>
          </Button>
        </div>
        <p className="reveal reveal-d4 mt-8 text-sm text-foam/70">
          <span className="font-medium text-foam">20+ digital platforms</span>
          <span className="mx-2 text-foam/40">·</span>
          Google, Meta, TikTok, retail media
        </p>
      </div>
    </section>
  );
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduce;
}

function Trust() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-7 sm:justify-between sm:gap-x-10">
          {clients.map((client) => (
            <li key={client.name} className="flex w-[30%] justify-center sm:w-auto">
              <img
                src={client.logo}
                alt={client.name}
                className={cn("h-[29px] w-auto max-w-full sm:h-[33px]", client.className)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkStrip() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Selected work
            </p>
            <h2 className="mt-3 max-w-lg font-display text-4xl text-ink sm:text-5xl">
              Culture that converts.
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden items-center gap-1 text-sm font-medium text-ink hover:text-chile sm:inline-flex"
          >
            All work
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {work.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              to="/work"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile"
            >
              <div className="overflow-hidden rounded-xl bg-cream">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
                {item.client}
              </p>
              <h3 className="mt-1 font-display text-2xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 font-display text-xl text-chile">
                {item.metric}{" "}
                <span className="font-sans text-sm font-medium tracking-normal text-muted">
                  {item.metricLabel}
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Machine() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
          Our services
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
          U.S. Hispanic marketing for brands ready to scale digital acquisition.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          We plan the audience, buy the media, and move the budget to what
          earns a customer.
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <p className="font-display text-sm text-chile">{item.step}</p>
              <h3 className="mt-2 font-display text-3xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Maya() {
  return (
    <section className="border-y border-line bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
            Meet Maya AI
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Hispanic cultural fluency at the speed of AI.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Maya AI gives our team a head start. It plans the campaign, drafts
            Spanish-native copy, defines the positioning, and flags where to
            spend next. Then our copywriters, designers, video editors, and
            media buyers, all experts in the Hispanic market, bring it to life
            up to 12× faster.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/how-maya-ai-works">
              See how Maya AI works
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <MayaPrompt />
      </div>
    </section>
  );
}

function Culture() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
        <div className="overflow-hidden rounded-xl lg:col-span-7">
          <img
            src="/images/community-market-hair.jpg"
            alt="Hispanic shopper checking her phone in a grocery aisle, for a U.S. Hispanic marketing campaign"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
            Culture first
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink">
            We are part of the same communities you want to reach.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Culture isn’t a campaign overlay. It’s how families make decisions,
            how humor lands, and how brands earn a place at the table. We don’t
            study it from the outside. We live it, and that’s what shapes every
            campaign we build.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/hispanic-digital-agency">Who we are</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Verticals() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Different industries. One result: more Hispanic customers.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((item) => (
            <article key={item.title} className="bg-foam p-7 sm:p-8">
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
              Spanish+Media blog
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Insights & inspiration
            </h2>
          </div>
          <Link
            to="/hispanic-marketing-insights"
            className="hidden text-sm font-medium text-ink hover:text-chile sm:inline"
          >
            Browse articles
          </Link>
        </div>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {insights.map((item) => (
            <Link
              key={item.slug}
              to={"to" in item && item.to ? item.to : "/hispanic-marketing-insights"}
              className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="text-xs tracking-[0.12em] text-muted uppercase sm:col-span-3">
                {item.date}
              </p>
              <div className="sm:col-span-9">
                <p className="text-xs font-medium tracking-[0.14em] text-chile uppercase">
                  {item.tag}
                </p>
                <h3 className="mt-1 font-display text-2xl text-ink">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
