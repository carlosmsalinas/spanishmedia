import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ invert = false }: { invert?: boolean; compact?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile",
      )}
      aria-label="Spanish+Media home"
    >
      <img
        src={invert ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
        alt="Spanish+Media"
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
