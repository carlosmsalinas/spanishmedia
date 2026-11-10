export const SITE = "https://www.spanishmedia.com";
export const OG_IMAGE = `${SITE}/og/home.jpg`;

export function pageHead({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  imageAlt?: string;
}) {
  const url = path === "/" ? SITE : `${SITE}${path}`;
  const og = image ? `${SITE}${image}` : OG_IMAGE;
  const alt =
    imageAlt ||
    "Spanish+Media, a Chicago U.S. Hispanic performance marketing agency";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: og },
      { property: "og:image:alt", content: alt },
      { property: "og:site_name", content: "Spanish+Media" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: og },
      { name: "twitter:image:alt", content: alt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
