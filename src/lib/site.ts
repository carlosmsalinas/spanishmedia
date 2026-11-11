export const APP_NAME = "Spanish+Media";

/** Locked line. Do not rewrite. */
export const CULTURE_LINE = "Proof that culture is a performance channel.";

/**
 * Next, after the website: social and the LinkedIn page.
 * Do not add Instagram or LinkedIn to the footer until that page
 * looks like a company a buyer would trust. Never show follower counts.
 */

export const nav = [
  { to: "/hispanic-digital-agency" as const, label: "Who We Are" },
  { to: "/hispanic-ai-marketing" as const, label: "What We Do" },
  { to: "/work" as const, label: "Work" },
  { to: "/hispanic-marketing-insights" as const, label: "Insights" },
];

export const stats = [
  { value: "600%", label: "Average ROI" },
  { value: "12×", label: "Faster activations" },
  { value: "50%", label: "Ad cost reduction" },
  { value: "20+", label: "Digital platforms" },
];

export const services = [
  {
    step: "01",
    title: "Plan",
    body: "Build culturally engaging digital marketing strategies that increase brand awareness and conversions from U.S. Hispanic audiences.",
  },
  {
    step: "02",
    title: "Convert",
    body: "Accelerate your U.S. Hispanic customer acquisition with AI-driven marketing campaigns across multiple digital platforms.",
  },
  {
    step: "03",
    title: "Scale",
    body: "Optimize performance with data modeling and predictive analytics tailored for the U.S. Hispanic market and powered by AI.",
  },
];

export const capabilities = [
  {
    title: "Discovery and Strategy",
    body: "For brands that do not know where to start. We find the audience, the offer, and the channels, then leave you with a plan built to convert.",
  },
  {
    title: "Paid Search",
    body: "Reach U.S. Hispanics as they search for your products or services on Google, Bing, and YouTube.",
  },
  {
    title: "SEO",
    body: "Own the Spanish-language queries customers already type, so paid search is not carrying the category alone.",
  },
  {
    title: "Paid Social",
    body: "Boost brand visibility among U.S. Hispanics on Meta, Instagram, TikTok, and Pinterest.",
  },
  {
    title: "Social Media Management",
    body: "Keep Spanish and English channels active between campaigns, with content and community that paid media can actually amplify.",
  },
  {
    title: "Retail Media",
    body: "Drive U.S. Hispanic product trials and repeat purchases on Amazon Fresh, Instacart, and Kroger.",
  },
  {
    title: "Creative",
    body: "Produce the copy, artwork, and positioning that convert, at the speed Maya AI makes possible.",
  },
  {
    title: "Influencer + UGC",
    body: "Leverage U.S. Hispanic creators to boost brand visibility and sales through Hispaniverse.",
    href: "https://www.hispaniverse.com/?utm_source=spanishmedia.com&utm_medium=website",
  },
  {
    title: "Experiential",
    body: "Engage U.S. Hispanic customers with live brand experiences that create adoption and loyalty.",
  },
];

export const verticals = [
  {
    title: "Automotive",
    body: "Fill your showroom and service bays with Hispanic drivers, using campaigns that speak to the whole family.",
  },
  {
    title: "Beauty",
    body: "Turn first trials into repeat purchases with creators and content Hispanic beauty shoppers actually trust.",
  },
  {
    title: "CPG",
    body: "Move product off the shelf with retail media, search, and social that turn a first purchase into a family habit.",
  },
  {
    title: "Financial",
    body: "Open more accounts by answering Hispanic consumers’ real financial questions clearly and in their language.",
  },
  {
    title: "Healthcare",
    body: "Book more appointments with bilingual journeys built for how Hispanic families make health decisions together.",
  },
  {
    title: "Legal",
    body: "Generate more consultations with call-first campaigns that build trust before the first conversation.",
  },
  {
    title: "Media",
    body: "Grow subscribers and viewers from Hispanic audiences, often at a lower cost than the general market.",
  },
  {
    title: "Sports",
    body: "Sell more tickets and merchandise to Hispanic fans who already live for the game.",
  },
  {
    title: "Technology",
    body: "Drive more downloads, trials, and paid subscriptions from bilingual, mobile-first Hispanic users.",
  },
];

export const clients: { name: string; logo: string; className?: string }[] = [
  { name: "Amazon", logo: "/logos/amazon.svg", className: "h-[35px] translate-y-2 sm:h-[39px]" },
  { name: "AMC Networks", logo: "/logos/amc.svg", className: "h-[44px] sm:h-[48px]" },
  { name: "JBS", logo: "/logos/jbs.svg", className: "h-[33px] sm:h-[37px]" },
  { name: "Ibotta", logo: "/logos/ibotta.png", className: "h-[29px] sm:h-[33px]" },
  { name: "Nestlé", logo: "/logos/nestle.svg", className: "h-[22px] sm:h-[26px]" },
  { name: "Tranzact", logo: "/logos/tranzact.svg", className: "h-[44px] sm:h-[52px]" },
];

export const work = [
  {
    slug: "streaming",
    client: "Streaming",
    category: "Media · Search and social",
    title: "Hispanic sign-ups, at a lower cost than the general market.",
    metric: "395%",
    metricLabel: "More Hispanic sign-ups",
    image: "/images/work-streaming.jpg",
    alt: "Woman with a laptop on a couch, for a U.S. Hispanic streaming sign-up campaign",
    result:
      "In three months, a streaming platform’s Hispanic sign-ups rose 395%, at a cost per acquisition 12% lower than for non-Hispanic customers. The work was the audience, the message, and the channels.",
  },
  {
    slug: "cosmetic",
    client: "Cosmetic surgery",
    category: "Healthcare · Search and social",
    title: "Monthly surgeries from Hispanic patients, tripled in a month.",
    metric: "3×",
    metricLabel: "Monthly surgeries",
    image: "/images/work-cosmetic.jpg",
    alt: "Cosmetic surgery consultation scene for a U.S. Hispanic patient acquisition campaign",
    result:
      "A Midwest cosmetic surgery practice needed more elective procedures from Spanish-speaking patients. Prospecting and retargeting on Google and Meta tripled monthly surgeries within a month.",
  },
  {
    slug: "specialty-care",
    client: "Specialty care",
    category: "Healthcare · Search and social",
    title: "More Hispanic leads, at a much lower cost.",
    metric: "60%",
    metricLabel: "Lower cost per acquisition",
    image: "/images/work-clinics.jpg",
    alt: "Clinic waiting area for a U.S. Hispanic specialty care lead campaign",
    result:
      "A national clinic group needed Hispanic patients in 18 markets, especially women over 50. Spanish search and social produced 1.5 times as many social leads, at a cost 60% lower than its general-market social campaigns.",
  },
  {
    slug: "protein",
    client: "CPG",
    category: "CPG · Search, social, retail media",
    title: "A Hispanic flavor line became a national bestseller.",
    metric: "Best seller",
    metricLabel: "Nationwide",
    image: "/images/work-protein-6.jpg",
    alt: "Hispanic shopper selecting meat for a national Hispanic flavor line campaign",
    result:
      "A global protein company launched beef, chicken, and pork with traditional Hispanic flavors for U.S. retail. We found the audiences and bought search, social, and retail media. The line became a nationwide bestseller.",
  },
  {
    slug: "mobile",
    client: "Mobile",
    category: "Telecom · Search",
    title: "Eight thousand subscribers in a three-month pilot.",
    metric: "8,000",
    metricLabel: "Spanish-speaking subscribers",
    image: "/images/work-mobile-2.jpg",
    alt: "Person using a phone, for a U.S. Hispanic app subscriber pilot",
    result:
      "A new mobile service needed Spanish-speaking subscribers nationwide. A three-month pilot on search and display alone brought in more than 8,000 of them.",
  },
  {
    slug: "tourism",
    client: "Tourism",
    category: "Travel · Media planning",
    title: "A neighboring-state plan. Then a doubled Hispanic budget.",
    metric: "2×",
    metricLabel: "Budget the following year",
    image: "/images/work-travel-5.jpg",
    alt: "Hispanic family beside an SUV, for a neighboring-state tourism campaign",
    result:
      "A state tourism board wanted more Hispanic visitors from a neighboring state. We advised their agency of record on the channels and the message. The next year the budget doubled, and we were asked to place the Hispanic buy.",
  },
  {
    slug: "restaurant",
    client: "Restaurants",
    category: "QSR · Launch",
    title: "A first U.S. opening, with a line around the block.",
    metric: "Day 1",
    metricLabel: "Standing-room opening",
    image: "/images/work-restaurant.jpg",
    alt: "Restaurant opening scene for a first U.S. Hispanic location launch",
    result:
      "A Mexican restaurant group asked us to make its first U.S. opening a success. Digital and traditional media stayed inside a five-mile radius. On opening day the line ran around the block.",
  },
  {
    slug: "footwear",
    client: "Retail",
    category: "Retail · Audience",
    title: "A U.S. store built from the customers who already buy.",
    metric: "U.S.",
    metricLabel: "Ecommerce launch",
    image: "/images/work-footwear.jpg",
    alt: "Footwear shopper, for a U.S. Hispanic online store built from existing customers",
    result:
      "A footwear brand from Latin America opened a U.S. online store and needed to know which customers were actually profitable. We built that profile from their shoppers in other countries, and their team used it to redesign the store for Hispanic customers here.",
  },
  {
    slug: "rewards-app",
    client: "Rewards app",
    category: "Technology · Influencer and UGC",
    title: "App downloads from Hispanic customers, with no paid media.",
    metric: "1,583%",
    metricLabel: "More app downloads",
    image: "/images/work-rewards-2.jpg",
    alt: "Person with a rewards app, for organic U.S. Hispanic app downloads",
    result:
      "A cash-back app needed awareness and downloads from U.S. Hispanic customers. Influencer and UGC videos ran on the creators’ own channels. Organic impressions rose 835%, downloads rose 1,583%, and the work earned $117,000 in coverage. Paid media spend was zero.",
  },
  {
    slug: "medicare",
    client: "Health insurance",
    category: "Healthcare · UGC",
    title: "More calls, and more revenue, without more media spend.",
    metric: "294%",
    metricLabel: "More calls and consults",
    image: "/images/work-medicare.jpg",
    alt: "Healthcare conversation for a U.S. Hispanic Medicare call campaign",
    result:
      "A Medicare Advantage provider needed trust and leads from U.S. Hispanic customers. UGC videos on Meta lifted revenue 64% and calls and consultation requests 294%, with no additional paid media.",
  },
  {
    slug: "food-ugc",
    client: "CPG",
    category: "CPG · UGC",
    title: "A Hispanic flavor line, told by the people cooking it.",
    metric: "1,460%",
    metricLabel: "More social engagement",
    image: "/images/work-ugc-food-2.jpg",
    alt: "Hispanic cook checking a phone in the kitchen, for a UGC flavor line campaign",
    result:
      "A national food brand used UGC-style video on TikTok and Instagram Reels to present a Hispanic flavor line as food people actually cook. Social engagement rose 1,460%, impressions rose 916%, and cost per click decreased by 19%.",
  },
  {
    slug: "home-goods",
    client: "Home",
    category: "Retail · UGC",
    title: "UGC ads against the brand’s own non-UGC ads.",
    metric: "452%",
    metricLabel: "More conversions",
    image: "/images/work-home-2.jpg",
    alt: "Home goods scene for a U.S. Hispanic UGC ad test",
    result:
      "After a Hispanic-market launch, a home-goods company needed purchases to pick up. UGC-style videos of customers using the products beat its non-UGC ads: impressions up 732%, conversions up 452%, and cost per click 394% lower.",
  },
  {
    slug: "tea",
    client: "CPG",
    category: "CPG · UGC",
    title: "A heritage tea, shared by the people who drink it.",
    metric: "41%",
    metricLabel: "Sales versus the year before",
    image: "/images/work-tea-2.jpg",
    alt: "Heritage tea scene shared by U.S. Hispanic drinkers",
    result:
      "A wellness tea brand asked for video its own team could share, built around flavors tied to Hispanic home remedies. Sales rose 41% versus the year before, Instagram followers rose 87%, and social engagement rose 342%.",
  },
];

export const insights = [
  {
    slug: "inc-midwest",
    date: "April 2025",
    tag: "Agency updates",
    title:
      "Inc. Magazine names Spanish+Media one of the fastest-growing companies in the Midwest.",
    dek: "No. 21 on Inc. Magazine’s 2025 Midwest list of the fastest-growing companies.",
    to: "/blog/inc-magazine-names-spanish-media-one-of-the-fastest-growing-companies-in-the-midwest" as const,
    image: "/images/inc-river-chihuahua.jpg",
  },
  {
    slug: "culture-as-media",
    date: "October 2026",
    tag: "Insights",
    title: "There Is No “Hispanic Version” of Your Campaign",
    dek: "The English campaign is already finished. Translating it rarely makes the phone ring.",
    to: "/blog/culture-is-a-media-channel" as const,
    image: "/images/culture-table.jpg",
  },
  {
    slug: "maya-ai",
    date: "November 2026",
    tag: "Insights",
    title: "Inside Maya AI: how we activate bilingual campaigns 12× faster.",
    dek: "What Maya AI is, how Spanish+Media uses it, and why the Spanish is transcreated, not translated.",
    to: "/blog/inside-maya-ai" as const,
    image: "/images/maya-article.jpg",
  },
];

export const contact = {
  newBusiness: "csalinas@spanishmedia.com",
  support: "support@spanishmedia.com",
  address: ["500 West Madison Street", "Suite 1000", "Chicago, IL 60661"],
  hours: "Monday – Friday, 8:30 AM – 5:00 PM CT",
};
