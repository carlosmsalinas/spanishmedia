import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/site";

export function MoreInsights({ current }: { current: string }) {
  const others = insights.filter((item) => item.slug !== current);

  return (
    <section className="mx-auto max-w-6xl border-t border-line px-5 py-14 sm:px-8 sm:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          More insights
        </h2>
        <Link
          to="/hispanic-marketing-insights"
          className="inline-flex items-center gap-1 text-sm font-medium text-chile"
        >
          All insights
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {others.map((item) => (
          <Link
            key={item.slug}
            to={item.to}
            className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile"
          >
            <div className="overflow-hidden rounded-xl bg-cream">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-16/10 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-xs font-medium tracking-[0.14em] text-chile uppercase">
              {item.tag}
            </p>
            <h3 className="mt-1 font-display text-xl leading-tight text-wrap text-ink group-hover:text-chile">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-wrap text-muted">{item.dek}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
