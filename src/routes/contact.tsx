import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Spanish+Media | Hispanic Advertising Agency",
      description:
        "Find out how our AI-powered digital marketing services can drive measurable U.S. Hispanic growth for your brand.",
      path: "/contact",
      image: "/og/contact.jpg",
      imageAlt:
        "Hispanic shopper selecting meat for a national Hispanic flavor line campaign",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formId) {
      setError("The form is not connected yet. Email csalinas@spanishmedia.com.");
      return;
    }
    setPending(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Email csalinas@spanishmedia.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <SiteShell>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-chile uppercase">
                Contact us
              </p>
              <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
                Get More U.S. Hispanic Customers
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Find out how our AI-powered digital marketing services can drive
                measurable U.S. Hispanic growth for your brand.
              </p>
              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    New business
                  </dt>
                  <dd className="mt-1">
                    Carlos M. Salinas
                    <br />
                    <a
                      href={`mailto:${contact.newBusiness}`}
                      className="text-chile hover:text-chile-deep"
                    >
                      {contact.newBusiness}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    Client care
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contact.support}`}
                      className="text-chile hover:text-chile-deep"
                    >
                      {contact.support}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    Studio
                  </dt>
                  <dd className="mt-1 text-ink">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="mt-2 block text-muted">{contact.hours}</span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-line bg-foam p-6 shadow-lift sm:p-8">
                {sent ? (
                  <div className="py-10">
                    <p className="text-xs font-semibold tracking-[0.16em] text-chile uppercase">
                      Received
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-ink">
                      Thank you.
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      Your submission has been received. A member of the new
                      business team will follow up shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" htmlFor="name">
                        <Input
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                        />
                      </Field>
                      <Field label="Email" htmlFor="email">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                        />
                      </Field>
                    </div>
                    <Field label="Company" htmlFor="company">
                      <Input id="company" name="company" autoComplete="organization" />
                    </Field>
                    <Field label="What are you trying to grow?" htmlFor="message">
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Brand, market, outcome…"
                      />
                    </Field>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={pending}
                    >
                      {pending ? "Sending…" : "Send brief"}
                    </Button>
                    {error ? (
                      <p className="text-sm text-chile" role="alert">
                        {error}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
