import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { contact, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Chicago-based performance marketing for brands ready to scale U.S.
            Hispanic customer acquisition. Guided by culture. Enhanced by AI.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Agency
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink hover:text-chile">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/how-maya-ai-works" className="text-ink hover:text-chile">
                Maya AI
              </Link>
            </li>
            <li>
              <a
                href="https://hispaniverse.com/"
                className="text-ink hover:text-chile"
              >
                Hispaniverse
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Chicago
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            {contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-3 text-sm text-muted">{contact.hours}</p>
          <a
            href={`mailto:${contact.newBusiness}`}
            className="mt-3 block text-sm text-chile hover:text-chile-deep"
          >
            {contact.newBusiness}
          </a>
          <Link
            to="/contact"
            className="mt-3 block text-sm text-ink hover:text-chile"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Spanish+Media. All rights reserved.</p>
          <p>U.S. Hispanic digital marketing agency · Chicago</p>
        </div>
      </div>
    </footer>
  );
}
