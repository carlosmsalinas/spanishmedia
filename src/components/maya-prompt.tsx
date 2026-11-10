import { useState } from "react";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: "optimize",
    label: "Optimize",
    prompt:
      "Analyze performance over the last 14 days and recommend improvements.",
    moves: [
      "Move budget to the audience that’s still converting.",
      "Swap in the Spanish CTA that drove the most calls.",
      "Pause placements that spend after the office closes.",
    ],
  },
  {
    id: "create",
    label: "Create",
    prompt:
      "Write three Spanish headlines for an appointment offer. Sound like the patient, not the brochure.",
    moves: [
      "Lead with the visit, not the brand name.",
      "Use the phrase families already text each other.",
      "Test the short line on Reels before it ever hits search.",
    ],
  },
  {
    id: "adapt",
    label: "Adapt",
    prompt:
      "Adapt this campaign for Mexican American and Puerto Rican/Dominican audiences.",
    moves: [
      "Build two versions from one brief, each with its own cultural voice.",
      "Keep the offer. Swap the slang, humor, and who in the family decides.",
      "Use Caribbean voice talent and rhythm, not a neutral Spanish dub.",
    ],
  },
  {
    id: "spend",
    label: "Spend",
    prompt:
      "We have $50,000 left this quarter. Where should it go to reach Hispanic shoppers?",
    moves: [
      "Put $25,000 on Meta, where last month’s sales actually came from.",
      "Use YouTube to tell the story. Use retail media to close the sale.",
      "Don’t fund any placement you can’t tie to a sale.",
    ],
  },
];

export function MayaPrompt({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const item = cases[active] ?? cases[0];

  return (
    <figure className={cn("rounded-2xl border border-line bg-foam p-6 text-ink shadow-lift sm:p-8", className)}>
      <figcaption className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase">
        <span className="text-chile">Maya AI</span>
        <span className="text-muted">Example</span>
      </figcaption>
      <div
        role="tablist"
        aria-label="Maya AI use cases"
        className="mt-5 flex flex-wrap gap-2"
      >
        {cases.map((entry, i) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-semibold",
              i === active ? "bg-chile text-foam" : "bg-cream text-muted",
            )}
          >
            {entry.label}
          </button>
        ))}
      </div>
      <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
        “{item.prompt}”
      </p>
      <ol className="mt-6 space-y-3 border-t border-line pt-6 text-base leading-snug text-muted">
        {item.moves.map((move, i) => (
          <li key={move} className="flex gap-3">
            <span className="font-medium text-chile tabular-nums">0{i + 1}</span>
            <span>{move}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
