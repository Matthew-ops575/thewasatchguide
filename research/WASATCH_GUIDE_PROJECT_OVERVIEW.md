# TheWasatchGuide.com — Project Overview

## What This Site Is

The Wasatch Guide is an independent editorial content site covering neighborhoods, local businesses, and lifestyle along the Wasatch Front in Utah. It reads like a local publication — not a marketing agency's portfolio, not a business directory, not a blog. The tone is knowledgeable local friend, not corporate or salesy.

The site serves three strategic purposes:
1. **Sales enablement** — Real Google Search Console data (rankings, impressions, clicks) used in client pitches for Kyle Ballard's local SEO consulting practice
2. **Lead generation** — Captures email subscribers and generates warm leads for consulting clients featured in guides
3. **Long-term media asset** — Builds into an independent local content brand with its own revenue potential (sponsored content, featured listings, newsletter sponsorships, display ads)

There is zero mention of SEO services, consulting, or client work anywhere on the site. It must maintain editorial credibility at all times. Kyle Ballard is credited on the About page as the person behind the site, but the site itself is not a consulting pitch.

---

## Who Reads This Site

- People researching neighborhoods before moving to the Salt Lake metro
- Current residents looking for local business recommendations (HVAC, barbers, dentists, restaurants)
- Homebuyers comparing communities (Draper vs. Sandy vs. Cottonwood Heights)
- Outdoor enthusiasts exploring trail access, ski proximity, and recreation options
- Anyone searching "living in [area] Utah" or "best [service] in [city]"

---

## Site Architecture

### Geographic hubs are the primary organizing principle

The site is organized by geography first, with topic verticals nested underneath each area. This is critical — the content is NOT organized by industry (all HVAC content in one section, all dental in another). It is organized by place, with each place containing multiple verticals.

```
/                           → Homepage (area grid, latest posts, newsletter signup)
/about                      → About the Guide + Kyle Ballard bio
/subscribe                  → Email newsletter signup

/draper                     → Pillar guide: "Living in Draper, Utah" (2,000+ words)
/draper/restaurants          → "Where to Eat in Draper"
/draper/hvac                 → "Best HVAC Companies Serving Draper"
/draper/dentists             → "Family Dentists in Draper"
/draper/outdoor-guide        → "Corner Canyon Trails & Outdoor Life in Draper"

/sandy                      → Pillar guide: "Living in Sandy, Utah"
/sandy/restaurants           → "Where Locals Actually Eat in Sandy"
/sandy/barbers               → "Best Barber Shops in Sandy"
/sandy/hvac                  → "Trusted HVAC Companies in Sandy"

/cottonwood-heights          → Pillar guide: "Living in Cottonwood Heights"
/wasatch-back                → Pillar guide: "Park City, Heber Valley & the Wasatch Back"
/south-jordan                → Pillar guide: "South Jordan & Daybreak"
/holladay                    → Pillar guide: "Holladay & Millcreek"
/sugar-house                 → Pillar guide: "Sugar House — Salt Lake's Walkable Neighborhood"

/blog                       → Monthly posts: market updates, seasonal content, "best of" lists
/blog/south-valley-hvac      → "Best HVAC Companies in the South Valley"
/blog/draper-housing-2026    → "Draper Housing Market Update — Q2 2026"
```

### Internal linking rules
- Every area guide links to all other area guides (distributes domain authority)
- Every sub-page links back to its parent area guide
- Blog posts link to relevant area guides and sub-pages
- Homepage features the latest content across all areas

---

## Content Types

### 1. Neighborhood Pillar Guide (2,000–2,500 words)
The core content type. One per community. Targets "living in [city] Utah" keywords.

**Template structure:**
- Overview / Feel of the Place (~400 words) — vibe, who lives here, why people choose this area
- Practical Data (~600 words) — median home prices, school ratings, commute times, property taxes, HOA norms
- Best Pockets / Subdivisions (~500 words) — the specific neighborhoods within the neighborhood that locals know about
- Lifestyle / Outdoors (~400 words) — trails, skiing, dining, community events, parks
- Market Snapshot (~300 words) — recent sales trends, days on market, price per sqft. Updated quarterly.

**Frontmatter fields:**
```yaml
title: "Living in Draper, Utah — The Complete 2026 Guide"
slug: "draper"
description: "Everything you need to know about living in Draper — schools, home prices, commute times, outdoor access, and what daily life actually looks like."
area: "Draper"
county: "Salt Lake County"
type: "neighborhood-guide"
medianHomePrice: "$585,000"
population: "51,000"
schoolRating: "A+"
commuteToSLC: "22 min"
featured: true
publishedAt: "2026-03-27"
updatedAt: "2026-03-27"
```

### 2. Vertical Sub-Page (1,000–1,500 words)
Topic-specific content nested under a geographic hub. Targets "[service/topic] in [city]" keywords.

Examples: "Best HVAC Companies Serving Draper," "Where to Eat in Sandy," "Family Dentists in Cottonwood Heights"

**Frontmatter fields:**
```yaml
title: "Best HVAC Companies Serving Draper"
slug: "draper/hvac"
description: "Trusted HVAC companies serving Draper, UT — rated by reviews, response time, and pricing transparency."
area: "Draper"
category: "home-services"
type: "vertical"
parentGuide: "draper"
publishedAt: "2026-04-15"
```

### 3. Blog Post (600–1,200 words)
Timely or seasonal content. Market updates, "best of" roundups, seasonal tips.

**Frontmatter fields:**
```yaml
title: "Draper Housing Market Update — Q2 2026"
slug: "blog/draper-housing-q2-2026"
description: "What's happening in Draper real estate — median prices, inventory, and what buyers and sellers should know this quarter."
category: "real-estate"
areas: ["draper"]
type: "blog"
publishedAt: "2026-06-01"
```

---

## Content Categories

Used for filtering on the homepage and in navigation:

- **Neighborhoods** — pillar area guides
- **Dining** — restaurant and food content
- **Home Services** — HVAC, plumbing, electrical, contractors
- **Healthcare** — doctors, dentists, specialists
- **Outdoors** — trails, skiing, recreation
- **Real Estate** — market updates, buying/selling guides

---

## Design Direction

### Aesthetic: Editorial / Mountain Modern
The site should feel like a premium local magazine — clean, confident, and grounded. Not flashy, not corporate, not generic blog template.

### Typography
- **Headlines:** Fraunces (serif, variable weight) — distinctive, editorial character
- **Body text:** Commissioner — clean, readable, slightly warm
- Both available on Google Fonts

### Color Palette
```css
--slate: #1C1F26;       /* Primary dark / nav / footer */
--charcoal: #2A2D35;    /* Secondary dark */
--ridge: #3D5A4C;       /* Primary green — mountain/editorial accent */
--ridge-light: #4E7A62; /* Hover state for ridge */
--sage: #8BAF9A;        /* Light green accent */
--sand: #C7B89B;        /* Warm gold accent */
--sand-light: #E8DFD0;  /* Light warm accent */
--warm: #F5F1EB;        /* Warm background */
--cream: #FAF8F4;       /* Page background */
--white: #FFFFFF;
--rust: #B5654A;        /* Dining category accent */
--sky: #6B97B0;         /* Services category accent */
--muted: #7D8087;       /* Secondary text */
--text: #3A3D44;        /* Body text */
```

### Category badge colors
- Neighborhoods: `--ridge` (green)
- Dining: `--rust` (terracotta)
- Home Services: `--sky` (blue)
- Outdoors: `--sage` (light green)
- Healthcare: `#7B68A4` (purple)
- Real Estate: `--sand` (gold)

### Layout principles
- Generous whitespace — the site should breathe
- Full-width hero sections for area guides
- Card-based grids for content browsing
- Sticky nav that goes dark on scroll
- No sidebar — content-focused single column for guides, grid layouts for browsing pages
- Mobile-first responsive design

---

## SEO Requirements

### On every page:
- Unique `<title>` tag with primary keyword + "| The Wasatch Guide"
- Unique meta description (150–160 characters)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Canonical URL
- Proper heading hierarchy (single H1, H2s for sections, H3s for subsections)

### Site-wide:
- XML sitemap at /sitemap.xml (auto-generated)
- robots.txt allowing all crawlers
- Schema markup: WebSite, Organization, Article (for blog posts), and LocalBusiness references where relevant
- Breadcrumb navigation on all sub-pages
- Clean URL structure (no trailing slashes, no query parameters)
- Fast page loads (target < 2 seconds)
- All images optimized with descriptive alt text

### Internal linking strategy:
- Every area guide links to 2–3 other area guides naturally within the text
- Every vertical sub-page links back to its parent area guide
- Homepage dynamically lists the most recent content
- Footer contains links to all published area guides

---

## Technical Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with frontmatter in /content directory
- **Hosting:** Netlify
- **Repository:** github.com/Matthew-ops575/thewasatchguide
- **Domain:** thewasatchguide.com (DNS via Cloudflare)
- **Analytics:** Google Analytics 4 (to be added)
- **Search Console:** Google Search Console (to be added)

---

## Content Publishing Workflow

1. Write guide as markdown file with proper frontmatter
2. Place in `/content/guides/` (for area guides) or `/content/blog/` (for blog posts)
3. Commit and push to GitHub
4. Netlify auto-deploys on push to main branch
5. Submit new URL to Google Search Console for indexing

---

## What NOT to Put on This Site

- Any mention of SEO services, consulting, or client work
- Kyle Ballard's consulting pricing or service packages
- Client logos or testimonials about consulting work
- "Powered by" or "built by" footers linking to a consulting business
- Affiliate links disguised as editorial recommendations (if affiliate links are ever used, they must be disclosed)
- Thin or duplicate content — every page must offer genuine, unique value
- Stock photos — use real local photography or no images at all

---

## Current Priority Content (Build Order)

### Phase 1 — COMPLETE
1. ~~Homepage~~ ✓
2. ~~Draper neighborhood guide~~ ✓
3. ~~Sandy neighborhood guide~~ ✓
4. ~~Cottonwood Heights neighborhood guide~~ ✓
5. ~~About page~~ ✓
6. ~~Mobile responsive design~~ ✓
7. ~~URL restructure (/draper, /sandy, etc.)~~ ✓
8. ~~Schema markup (WebSite, Organization, Article, Breadcrumb)~~ ✓
9. ~~Blog starter kit alignment (_posts/, api.ts, typed interfaces)~~ ✓
10. ~~GA4 integration~~ ✓
11. ~~Google Search Console~~ ✓

### Phase 2 — COMPLETE
12. ~~Wasatch Back (Park City / Heber Valley) guide~~ ✓
13. ~~"Where Locals Actually Eat in Sandy" (blog post)~~ ✓
14. ~~Blog listing page (/blog route)~~ ✓
15. ~~Scalable nav with dropdown menus~~ ✓
16. ~~South Jordan / Daybreak guide~~ ✓ (pulled forward)
17. ~~Holladay / Millcreek guide~~ ✓ (pulled forward)
18. ~~Sugar House guide~~ ✓ (pulled forward)
19. ~~"Draper vs Sandy" comparison~~ ✓ (pulled forward)
20. ~~"Cottonwood Heights vs Holladay" comparison~~ ✓ (pulled forward)
21. ~~"South Jordan vs Draper" comparison~~ ✓ (pulled forward)
22. ~~"Best Dentists in Sandy" vertical~~ ✓ (pulled forward)

### Phase 3 — IN PROGRESS
23. Newsletter signup integration (needs email provider selection)
24. "Utah Housing Market 2026" (seasonal blog post)
25. "Best Ski Access Neighborhoods Utah" (seasonal blog post)
26. "Park City vs Heber City" (comparison blog post)
27. "Moving to Utah 2026" (evergreen blog post)
28. "Best Salt Lake City Suburbs for Families" (roundup blog post)
29. "Best HVAC Companies in the South Valley" (blog post — deferred from Phase 2)
30. Service verticals per city based on consulting client pipeline
31. Real photography to replace gradient placeholders
32. Netlify scheduled build trigger (daily cron for future-dated content)

### Phase 4 — PLANNED
33. Additional city guides based on demand (Lehi, Murray, etc.)
34. Medical verticals based on client pipeline
35. Monthly blog cadence targeting seasonal and timely searches
36. Search functionality (currently placeholder)
37. Content refresh cycle (quarterly market data updates)

---

## Business Context

This site supports Kyle Ballard's local SEO consulting practice based in Salt Lake City. The three target client niches are:

1. **Real estate agents** — proof of concept niche (current client: Ethan Holcomb, Summit Sotheby's, Draper)
2. **Home services / trades** — volume niche (HVAC, plumbing, electrical)
3. **Medical specialists** — premium niche (orthopedic surgeons, dentists)

A second client exists: Excel Barber Shop in Sandy, UT (single-chair, operated by a barber named Nonna).

Content published on TheWasatchGuide.com serves multiple business functions:
- Proves SEO competence to prospective clients with real ranking data
- Can be migrated to client websites via 301 redirects when they sign up, giving their site an SEO head start
- Features paying clients in relevant guides as a retainer benefit
- Builds an independent audience and email list with long-term monetization potential

The consulting business website (separate domain, to be built) will pitch services directly. TheWasatchGuide.com is the proof, not the pitch.
