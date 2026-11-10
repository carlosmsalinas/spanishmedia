import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-line bg-foam px-4 py-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus:border-chile focus:ring-2 focus:ring-chile/20",
        className,
      )}
      {...props}
    />
  );
}
