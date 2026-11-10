import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-md border border-line bg-foam px-4 text-base text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus:border-chile focus:ring-2 focus:ring-chile/20",
        className,
      )}
      {...props}
    />
  );
}
