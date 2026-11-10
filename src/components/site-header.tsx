import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const light = overlay;

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <header
      className={cn(
        "z-40",
        overlay
          ? "fixed inset-x-0 top-0 text-foam transition-[background-color,border-color] duration-200"
          : "sticky top-0 border-b border-line/80 bg-paper/85 text-ink backdrop-blur-md",
        overlay && (open || scrolled)
          ? "border-b border-foam/10 bg-navy/80 backdrop-blur-md"
          : overlay && "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Logo invert={light} />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-150",
                  light
                    ? active
                      ? "text-foam"
                      : "text-foam/75 hover:text-foam"
                    : active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="primary" size="sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
        <button
          type="button"
          className={cn(
            "flex size-11 items-center justify-center rounded-md md:hidden",
            light ? "text-foam" : "text-ink",
          )}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div
          className={cn(
            "border-t px-5 py-5 md:hidden",
            light
              ? "border-foam/10 bg-navy"
              : "border-line bg-paper",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium",
                  light ? "text-foam hover:bg-foam/5" : "text-ink hover:bg-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full" variant="primary">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
