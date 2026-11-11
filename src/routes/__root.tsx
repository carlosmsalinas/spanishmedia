import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { APP_NAME } from "@/lib/site";
import { OG_IMAGE, SITE } from "@/lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} | Hispanic Digital Marketing Agency` },
      {
        name: "description",
        content:
          "Spanish+Media is a Chicago-based performance marketing agency built to drive brand growth from U.S. Hispanic customers. Guided by culture. Enhanced by AI.",
      },
      { name: "theme-color", content: "#144baf" },
      { property: "og:site_name", content: "Spanish+Media" },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content:
          "Hispanic woman on a rainy Chicago street at dusk, the first frame of the Spanish+Media hero video",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Spanish+Media",
          url: SITE,
          description:
            "Chicago-based performance marketing agency for U.S. Hispanic customer growth. Culture first. Enhanced by Maya AI.",
          logo: `${SITE}/favicon.png`,
          email: "csalinas@spanishmedia.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "500 West Madison Street, Suite 1000",
            addressLocality: "Chicago",
            addressRegion: "IL",
            postalCode: "60661",
            addressCountry: "US",
          },
        },
      } as any,
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Spanish+Media",
          url: SITE,
          description:
            "U.S. Hispanic customer growth fueled by culture and AI-powered performance marketing.",
        },
      } as any,
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/favicon.png", sizes: "32x32" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPCKXV7');`,
          }}
        />
      </head>
      <body className="bg-paper font-sans text-ink">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPCKXV7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
