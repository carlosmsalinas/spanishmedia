import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader overlay={overlayHeader} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
