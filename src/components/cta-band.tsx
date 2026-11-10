import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-chile text-foam">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-80">
            New business
          </p>
          <h2 className="mt-3 font-display text-4xl text-foam sm:text-5xl">
            Get more U.S. Hispanic customers.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-foam/85">
            Brief us on the outcome. We will bring the culture, the media, and
            Maya AI.
          </p>
        </div>
        <Button asChild variant="invert" size="lg">
          <Link to="/contact">
            Start a conversation
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
