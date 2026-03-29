# Implementation Status — The Wasatch Guide

Last updated: 2026-03-29

---

## Phase 1 — COMPLETE

- [x] Homepage
- [x] Draper neighborhood guide (2,300 words, rewritten for depth)
- [x] Sandy neighborhood guide (2,100 words)
- [x] Cottonwood Heights neighborhood guide (1,850 words)
- [x] About page
- [x] Mobile responsive design (hamburger menu, responsive hero, scroll stats bar)
- [x] URL restructure (`/draper`, `/sandy`, `/cottonwood-heights`)
- [x] Schema markup (WebSite, Organization, Article, BreadcrumbList)
- [x] Blog starter kit alignment (`_posts/`, `api.ts`, typed interfaces)
- [x] GA4 integration (G-MBYV4WZLQ2)
- [x] Google Search Console (verified)

## Phase 2 — COMPLETE

- [x] Wasatch Back guide (Park City / Heber Valley / Midway)
- [x] South Jordan & Daybreak guide
- [x] Holladay & Millcreek guide
- [x] Sugar House guide
- [x] "Where Locals Actually Eat in Sandy" blog post
- [x] "Draper vs Sandy" comparison blog post
- [x] "Cottonwood Heights vs Holladay" comparison blog post
- [x] "South Jordan vs Draper" comparison blog post
- [x] "Best Dentists in Sandy" vertical
- [x] Blog listing page (`/blog` route with `/blog/[slug]` detail pages)
- [x] Scalable dropdown nav (Communities, Topics, Blog, About)
- [x] Newsletter signup via Netlify Forms
- [x] Homepage search (client-side, indexes all published content)
- [x] Homepage "Latest" section dynamically pulls from published posts
- [x] Sitemap updated for blog routes
- [x] Content creation skill (`.claude/commands/create-content.md`)

## Phase 3 — IN PROGRESS

### Infrastructure TODO

- [ ] **Netlify daily build trigger** — Set up a Netlify build hook and daily cron (e.g., via GitHub Actions or Netlify's scheduled functions) to enable automatic publishing of future-dated content
- [ ] **Real photography** — Replace "Cover photo" gradient placeholders on all guide and blog cards with actual local photography. Needs: cover images for each `_posts/*.md` file, stored in `/public/assets/posts/[slug]/cover.jpg`
- [ ] **Migrate newsletter to Kit (ConvertKit)** — When ready to send emails, create Kit account, get form ID, update `NewsletterForm.tsx` to submit to Kit API instead of Netlify Forms. Export existing Netlify form submissions to import.

### Content TODO

- [ ] "Utah Housing Market 2026" — Seasonal blog post, high volume keyword, refresh Q1 each year
- [ ] "Best Ski Access Neighborhoods Utah" — Seasonal blog post, peaks Oct-Feb, links to Cottonwood Heights + Wasatch Back pillars
- [ ] "Park City vs Heber City" — Comparison blog post, low competition, builds on Wasatch Back pillar
- [ ] "Moving to Utah 2026" — Evergreen blog post, very high volume, links to all pillar guides
- [ ] "Best Salt Lake City Suburbs for Families" — Roundup blog post, links to all pillar guides
- [ ] "Best HVAC Companies in the South Valley" — Vertical, deferred until client pipeline warrants it
- [ ] "Best HVAC in Cottonwood Heights" — Vertical, thinnest SERP / easiest service keyword win

## Phase 4 — PLANNED

- [ ] Additional city guides based on demand (Lehi, Murray, Ogden, etc.)
- [ ] Medical verticals based on client pipeline
- [ ] Monthly blog cadence targeting seasonal and timely searches
- [ ] Quarterly content refresh (update market data in existing pillar guides)
- [ ] Search functionality enhancement (full-text search if content volume warrants it)

---

## Current Site Stats

- **Total pages:** 19 (7 pillar guides, 5 blog/comparison posts, 1 vertical, blog listing, about, homepage, sitemap, robots)
- **Content directory:** `_posts/` (12 markdown files)
- **Hosting:** Netlify
- **Domain:** thewasatchguide.com (DNS via Cloudflare)
- **Analytics:** GA4 (G-MBYV4WZLQ2)
- **Search Console:** Verified
- **Newsletter:** Netlify Forms (submissions in Netlify dashboard)

## How to Create New Content

Use the Claude Code skill:
```
/create-content guide for [city name]
/create-content blog "[post title]"
/create-content comparison [city] vs [city]
/create-content vertical best [service] in [city]
```

After creating a new pillar guide, also update:
1. `src/lib/navigation.ts` — add community to nav
2. `src/app/[area]/page.tsx` — add area stats/callout/explore cards
3. `src/app/page.tsx` — update homepage area cards if needed
4. `src/components/Footer.tsx` — update footer community links

Blog posts and verticals only need the markdown file in `_posts/` — everything else is automatic.

## Key Files

| File | Purpose |
|---|---|
| `_posts/*.md` | All content (guides, blog, verticals) |
| `src/lib/api.ts` | Content API (reads _posts, filters by date/type) |
| `src/lib/navigation.ts` | Nav communities and topics config |
| `src/lib/search.ts` | Search index generator |
| `src/interfaces/post.ts` | Post type definitions |
| `src/app/[area]/page.tsx` | Guide detail page (includes area stats data) |
| `src/app/blog/page.tsx` | Blog listing page |
| `src/app/blog/[slug]/page.tsx` | Blog post detail page |
| `src/components/Nav.tsx` | Navigation with dropdowns |
| `src/components/Search.tsx` | Client-side search |
| `src/components/NewsletterForm.tsx` | Netlify Forms newsletter |
| `.claude/commands/create-content.md` | Content creation skill |
| `research/KEYWORD_STRATEGY.md` | Full keyword research and prioritization |
