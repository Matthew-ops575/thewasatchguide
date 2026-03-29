# Create Content for The Wasatch Guide

You are creating content for TheWasatchGuide.com, an independent editorial site covering neighborhoods along Utah's Wasatch Front. The content must read like a premium local magazine — knowledgeable, opinionated, and grounded in real local detail.

## Input

The user will provide: $ARGUMENTS

Parse the input to determine:
1. **Content type**: `guide` (neighborhood pillar, 2000-2500 words), `blog` (600-1200 words), `vertical` (service-in-city, 1000-1500 words), or `comparison` (city vs city, 1000-1500 words)
2. **Topic/area**: The city, neighborhood, or subject
3. **Any specific angles or notes** the user wants covered

If the input is ambiguous, ask the user to clarify before proceeding.

## Before Writing

1. **Read `research/KEYWORD_STRATEGY.md`** to identify the primary and secondary keywords this content should target
2. **Read `research/WASATCH_GUIDE_PROJECT_OVERVIEW.md`** for site architecture, content type specs, and frontmatter schemas
3. **Read 1-2 existing posts in `_posts/`** to match the established voice, tone, and formatting
4. **Research the topic** using web search to gather current, accurate local data:
   - Median home prices (current year)
   - School district info and ratings
   - Population figures
   - Commute times
   - Specific restaurant/business names
   - Trail names and details
   - Recent developments or news
   - Any data that makes the content specific rather than generic
5. **Identify the target keywords** and plan where they'll appear (title, H2s, naturally in body text)

## Content Rules

### Voice and Tone
- Knowledgeable local friend — not salesy, not corporate, not generic
- Opinionated where appropriate: name honest trade-offs, don't just list positives
- Specific: use real street names, intersection references, named subdivisions, actual restaurant names
- Varied sentence structure: mix short and long, avoid repetitive patterns
- No filler paragraphs — every paragraph must add information or insight
- Lead with what makes this place/topic interesting, not with generic setup

### SEO Requirements
- Primary keyword appears in: title, meta description, first 100 words, at least one H2
- Secondary keywords distributed naturally across H2/H3 headings
- Internal links to 2-3 other published guides/posts where relevant (check `_posts/` for what exists)
- Proper heading hierarchy: single H1 (via title), H2s for sections, H3s for subsections
- Meta description: 150-160 characters, includes primary keyword, compelling enough to click

### What NEVER Appears
- Any mention of SEO services, consulting, client work, or Kyle Ballard's business
- Stock photo references — use gradient placeholders or skip images
- Affiliate links without disclosure
- Generic content that could apply to any city ("great place to live with friendly people")
- AI-detectable patterns: don't start 3+ paragraphs the same way, don't use "nestled", "vibrant", "boasts", "plethora", "hub of activity", "something for everyone"
- Emojis in the body content

### Differentiation from Competitors
- Competitors are Niche.com, BestPlaces.net, real estate agent blogs (wasatchmovingco.com, bestutahrealestate.com)
- Beat them with: named neighborhoods they don't mention, honest trade-offs they avoid, specific local details (which intersection, which trailhead parking lot, which school boundary matters), voice and personality they lack
- Every piece of content should contain at least 3-5 specific details that you would only know if you actually lived in or deeply researched the area

## Content Type Templates

### Neighborhood Pillar Guide (`type: "neighborhood-guide"`)
**Word count:** 2,000-2,500 words
**Sections:**
- Why [City]? — overview, feel, who lives here, why people choose it (~400 words)
- The Neighborhood Vibe — street-level description, east/west or north/south character differences (~400 words)
- Practical Data — schools (with district names, specific school names), commute times, housing costs with price tiers (~600 words)
- Best Pockets and Subdivisions — named neighborhoods with character descriptions (~500 words)
- Lifestyle and Outdoors — trails, recreation, dining, events, culture (~400 words)
- Market Snapshot — current trends, days on market, comparison to nearby cities (~300 words)
- The Bottom Line — honest summary with trade-offs (~150 words)

### Blog Post (`type: "blog"`)
**Word count:** 600-1,200 words
**Flexible structure.** Could be a dining guide, seasonal update, market analysis, or topical piece. Must link back to at least one pillar guide.

### Vertical Sub-Page (`type: "vertical"`)
**Word count:** 1,000-1,500 words
**Format:** Curated editorial roundup (e.g., "Best HVAC in Draper"). Not a directory listing — each business gets 2-3 sentences of honest assessment. Include 5-7 businesses.

### Comparison Post (`type: "comparison"`)
**Word count:** 1,000-1,500 words
**Format:** Honest side-by-side comparison. Cover: price, schools, commute, lifestyle, outdoor access, dining/retail. End with "who each city is best for" rather than declaring a winner. Link to both pillar guides.

## Frontmatter Schema

```yaml
---
title: "[Title with primary keyword]"
description: "[150-160 chars with primary keyword]"
excerpt: "[One compelling sentence for card previews]"
coverImage: "/assets/posts/[slug]/cover.jpg"
date: "[ISO 8601 — use current date, or future date if scheduling]"
ogImage:
  url: "/assets/posts/[slug]/cover.jpg"
type: "[neighborhood-guide | blog | vertical | comparison]"
area: "[city slug if applicable]"
tags: ["tag1", "tag2", "tag3"]
published: true
---
```

## Publishing Workflow

1. Write the content to `_posts/[slug].md`
2. If this is a new area guide, update `src/lib/navigation.ts` to add the community
3. If this is a new area guide, add area-specific data (stats, callout, explore cards) to `src/app/[area]/page.tsx`
4. If this is a blog post and `/blog` route exists, verify it appears in the blog listing
5. Run `npx next build` to verify the page builds
6. Report the primary keyword targeted, word count, and internal links included

## Publishing Cadence Reminder

- Do NOT publish more than 2 pieces of content per week
- Pillar guides should be published one at a time with at least a week between them
- Blog posts can follow 1-2 weeks after their parent pillar guide
- If the user asks to create multiple pieces at once, write them all but set future dates staggered at least 5-7 days apart
- Remind the user to submit new URLs to Google Search Console after deployment

## Quality Check Before Finishing

Before delivering the content, verify:
- [ ] Word count meets the target for the content type
- [ ] Primary keyword in title, description, first 100 words, and at least one H2
- [ ] No two paragraphs start the same way within any section
- [ ] At least 3-5 specific local details that generic competitors wouldn't include
- [ ] Honest trade-offs mentioned (not just positives)
- [ ] Internal links to existing published content
- [ ] Frontmatter is complete and valid
- [ ] No mentions of SEO, consulting, or Kyle's business
- [ ] Content passes a gut check: would a local resident read this and nod, or roll their eyes?
