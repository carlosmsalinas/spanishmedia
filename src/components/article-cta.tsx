import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ArticleCta({
  headline = "Book a discovery call",
  body = "Tell us the outcome. We’ll bring the culture, the media, and Maya AI.",
}: {
  headline?: string;
  body?: string;
}) {
  return (
    <aside className="mt-12 rounded-xl border border-line bg-cream px-6 py-7 sm:px-8 sm:py-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
        Next step
      </p>
      <h2 className="mt-2 max-w-lg font-display text-2xl text-ink sm:text-3xl">
        {headline}
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
        {body}
      </p>
      <Button asChild className="mt-6" size="lg">
        <Link to="/contact">
          Book a discovery call
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </aside>
  );
}
