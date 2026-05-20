# Kanita Polimac — Portfolio Build Package

Everything you need to build your portfolio on Claude Design. 5 case studies, 5 thumbnails, and a master prompt that tells Claude Design exactly what to do.

---

## Package contents

| File | What it is |
|------|------------|
| `store-intelligence-case-study.html` | Case 01 — SymphonyAI retail AI vision product |
| `carea-case-study.html` | Case 02 — Pregnancy & mental health app |
| `airdomo-case-study.html` | Case 03 — AI-native real estate platform |
| `system-akvile-case-study.html` | Case 04 — AI skin diagnostics |
| `telemeet-case-study.html` | Case 05 — AI meetings for data-sensitive industries |
| `thumb-store-intelligence.svg` | Portfolio grid thumbnail for Case 01 |
| `thumb-carea.svg` | Portfolio grid thumbnail for Case 02 |
| `thumb-airdomo.svg` | Portfolio grid thumbnail for Case 03 |
| `thumb-system-akvile.svg` | Portfolio grid thumbnail for Case 04 |
| `thumb-telemeet.svg` | Portfolio grid thumbnail for Case 05 |

All 5 case studies share the same editorial design system (Fraunces serif + Inter, off-white background, accent color per project, large impact numbers at the bottom).

---

## How to use this with Claude Design

1. **Go to Claude Design** (claude.ai with the design feature, or whichever Claude Design surface you're using).
2. **Start a new project** for the portfolio.
3. **Upload all 10 files** from this folder (5 HTML + 5 SVG).
4. **Paste the prompt below** as your first instruction.
5. Iterate from there — Claude Design has full source code for every case study, so you can ask it to use any element from any case study as a starting point.

---

## THE PROMPT TO PASTE INTO CLAUDE DESIGN

Copy everything between the lines below.

---

```
Build me the portfolio website for Kanita Polimac — Senior Product Designer specializing in AI-powered and data-driven SaaS products.

I'm attaching everything you need:
- 5 fully built case study HTML files. These are the source of truth — use their content, copy, metrics, and design system as-is.
- 5 SVG thumbnails to use as the project preview cards in the work grid.

═══════════════════════════════════════════
WHAT TO BUILD
═══════════════════════════════════════════

A single-page-scroll portfolio homepage with a sticky minimal nav, plus 5 individual case study sub-pages.

Total deliverable: 1 home page + 5 case study pages = 6 pages.

═══════════════════════════════════════════
THE 5 CASE STUDIES — IN THIS EXACT ORDER
═══════════════════════════════════════════

The portfolio focuses entirely on these 5 projects. Do not invent additional projects. Do not pull from my LinkedIn experience to add Motiff, Galora Media, digital BIM academy, or FOREO as case studies — those companies appear ONLY in the Experience timeline section, not in the work grid.

═══ 01 — STORE INTELLIGENCE (SymphonyAI retail AI) ═══
HTML: store-intelligence-case-study.html
Thumbnail: thumb-store-intelligence.svg
Industry: Enterprise Retail · AI Vision Product
Card headline: "An AI vision product that drives 5% more sales for retailers."
Card metrics to surface: 11% on-shelf availability · 23% planogram compliance · 5% sales increase
Accent color: deep blue (#2A4A7F)

═══ 02 — CAREA ═══
HTML: carea-case-study.html
Thumbnail: thumb-carea.svg
Industry: Healthcare · Maternal mental health
Card headline: "Designing an AI-supported pregnancy and mental health app for emotional honesty."
Card metrics: 78% onboarding completion (up from 41%) · 52% retention lift · 38% DAU lift
Accent color: warm clay (#C2543B)

═══ 03 — AIRDOMO ═══
HTML: airdomo-case-study.html
Thumbnail: thumb-airdomo.svg
Industry: PropTech · AI-native SaaS
Card headline: "AI-native real estate. And a partner platform I built solo with Claude in 3 days."
Card metrics: 43% workflow time saved · 2.1× retention · 3 days to ship AirDX
Accent color: electric blue (#2A5DD9)

★ STORYTELLING NOTE — IMPORTANT
The AirDX story is the single strongest signal in this portfolio. AirDX is Airdomo's affiliate partner program. I built it end-to-end alone with Claude in 3 days: the application form, Zoho CRM integration, approval email loop, an on-the-spot site builder for approved partners, and the publish/approve flow.

This must be prominent — both in the case study (already is) AND in how the homepage card is written. The card needs to say something like "An AI-native real estate platform — plus an entire partner platform I shipped solo with Claude in 3 days." This is the proof point that I am a designer who ships, not just designs.

═══ 04 — SYSTEM AKVILE ═══
HTML: system-akvile-case-study.html
Thumbnail: thumb-system-akvile.svg
Industry: Healthcare · AI skin diagnostics
Card headline: "Turning data collection into a conversation users finish."
Card metrics: 48% drop-off reduction · 46% retention lift · 34% subscription conversion
Accent color: muted forest (#3F5F4A)

═══ 05 — TELEMEET ═══
HTML: telemeet-case-study.html
Thumbnail: thumb-telemeet.svg
Industry: Enterprise SaaS · AI Meetings
Card headline: "Transforming digital meetings for data-sensitive industries."
Card metrics: 62% admin time saved · 94% compliance flags caught · 71% pilot-to-paid conversion
Accent color: indigo (#3A4DD9)

═══════════════════════════════════════════
HOMEPAGE SECTIONS — IN ORDER
═══════════════════════════════════════════

(1) STICKY MINIMAL NAV
Top-left: "Kanita Polimac · Product Designer"
Right: Work / About / Experience / Contact (anchor links)

(2) HERO SECTION
Name: Kanita Polimac
Title: Senior Product Designer · AI & Data-Driven Products
Tagline (large Fraunces serif, italic emphasis):
  "I design products that don't just look good — they solve hard problems at scale."
One-line bio (Inter, smaller):
  "8+ years designing AI-powered and data-heavy SaaS products for global teams. MSc in Information Technology with focus on AI, advanced data, and cybersecurity."
Two CTAs: "View work" (anchor) and "Book a consultation" (mailto link to be filled in)

Below the CTAs: 4 stat badges
  - "8+ years designing AI & data products"
  - "5 industries shipped in" (healthcare, real estate, retail, enterprise SaaS, AI tools)
  - "MSc IT · AI, Data, Cybersecurity"
  - "Built & shipped AI-powered platforms solo"

(3) SELECTED WORK — 5-card grid
A 5-card grid (not a carousel). Each card shows:
  - Case number (01–05)
  - Project name + industry
  - One-line problem framing (use the card headline from above)
  - The headline metric in large Fraunces serif
  - The thumbnail SVG as the preview image
  - "Read case study →" link to the individual case page

Order: 01, 02, 03, 04, 05 (Store Intelligence first, TeleMeet last).

(4) HOW I WORK — 4 pillars
  - Research & systems thinking — IA, user research, behavioral analysis, mapping mature ecosystems
  - AI-augmented workflows — using AI as a design partner; 2–3 hours daily studying AI and design
  - Business-aligned design — designed for cost reduction, profit growth, conversion, operational efficiency
  - Cross-functional leadership — fluent with engineers, PMs, C-suite; led teams as a startup CEO

(5) EXPERIENCE TIMELINE
Clean vertical timeline. Each entry: company, role, dates, location, one-sentence impact. Use this content:
  - Feb 2026 – Present · Product Designer · Carea App (Contract, London/Remote) — AI-supported pregnancy and mental health app
  - Apr 2026 – May 2026 · Product AI Engineer · Airdomo (Contract, San Diego) — AI-native real estate platform; built AirDX partner platform end-to-end
  - Sep 2025 – Apr 2026 · Product Designer · Airdomo (Full-time, San Diego) — owned product architecture, upload system, retention strategy
  - Jan 2024 – Jul 2025 · Product Designer · Motiff (Full-time, Chicago) — working on SymphonyAI's retail AI ecosystem (Store Intelligence)
  - Dec 2022 – Jan 2024 · Product Designer · System Akvile (Full-time, Hamburg/Remote) — AI-powered skin tracking app
  - Mar 2021 – Dec 2022 · CEO & Product Designer · Galora Media (Sarajevo/Remote) — won the German Incubator BiH entrepreneurial competition; led the company across construction, freight, finance, healthcare, skincare, sports
  - Oct 2020 – Jun 2022 · Product Designer & Team Lead · digital BIM academy (Contract, Switzerland/Remote)
  - Jun 2019 – Mar 2021 · Product Designer · FOREO (Full-time, Zagreb) — one of the largest global skincare brands

(6) AI EXPERTISE — dedicated short section
Short essay paragraph: "AI is not a tool I added to my workflow. It's a layer I design with — and increasingly, ship with."
Sub-points: shipped AI-powered SaaS for SymphonyAI retail, System Akvile skin diagnostics, Airdomo (Product Designer → Product AI Engineer transition), and Carea (AI-supported maternal mental health). The daily 2–3 hour learning practice as a credibility signal, not a brag.

(7) RECOGNITION
Surface that Galora Media won the German-incubator-run entrepreneurial competition in Bosnia and Herzegovina. Press mentions to cite:
  - balkaninnovation.com/news/39/promising-women-startups-in-the-western-balkans
  - centar.ba/vijesti/17037/eu-podrzava-nove-generacije-poduzetnika-inovacije-i-reforme-kljuc-za-ekonomski-oporavak-od-pandemije
  - facebook.com/europa.ba (EU Delegation BiH)

(8) CONTACT / FOOTER
Email + LinkedIn (linkedin.com/in/kanitapolimac) + a low-key "Book a free consultation" CTA.
Footer line: "Open to senior product design, design lead, and AI product roles."

═══════════════════════════════════════════
INDIVIDUAL CASE STUDY PAGES
═══════════════════════════════════════════

For each of the 5 case studies, use the corresponding HTML file as the page content directly. The HTML files are complete, designed, and ready to use — they share the same design system (Fraunces serif for headers with italic accent words, Inter for body, off-white #FBFAF7 background, project-specific accent color, four-column meta row, pastel pillar grids, large impact numbers in the footer).

If Claude Design needs to convert them to React/components/another framework, preserve:
- Typography (Fraunces + Inter)
- Color system per project
- Layout structure (hero → meta row → narrative sections → visual blocks → impact metrics)
- Copy verbatim
- All metrics

═══════════════════════════════════════════
VISUAL & DESIGN DIRECTION FOR THE HOMEPAGE
═══════════════════════════════════════════

Match the design system already established in the 5 case study HTMLs:
- Background: warm off-white (#FBFAF7)
- Primary ink: near-black (#0F1115)
- Body text: soft ink (#4A4E57)
- Borders/lines: warm beige (#E7E4DC)
- Typography:
  - Display: Fraunces (Google Fonts) — used for headlines, with italic for emphasis words
  - Body: Inter (Google Fonts)
- Numbers: always Fraunces, large, with the accent color highlighting key digits
- Pastel pillar cards: each project has its own palette (see case study HTMLs)

Reference points for spirit only — do not copy:
- Linear.app — restraint, type, density
- Vercel.com — gradient as accent, generous whitespace
- Pentagram.com — editorial weight at case study scale

Motion: slow, intentional. Type fades up on scroll, no bouncy springs.
Mobile-first quality. Editorial typography should hold up on mobile.
Accessibility: WCAG AA minimum — this is a proof point given healthcare work.

═══════════════════════════════════════════
TONE & COPY RULES
═══════════════════════════════════════════

- First person, confident, never boastful
- Numbers carry the weight
- No jargon: avoid "leveraged synergies," "passionate about design," "I love crafting experiences"
- Every case study answers: What was the problem? What did I do? What changed?
- Short sentences. Short paragraphs. Whitespace does the work.

═══════════════════════════════════════════
WHAT MUST BE TRUE WHEN DONE
═══════════════════════════════════════════

A senior hiring manager at a Series B–C AI SaaS company should land on the site and within 30 seconds understand:
1. She designs AI products at a senior level
2. She has a Master's in IT and speaks engineering
3. She drives measurable business outcomes
4. She has built and led, not just contributed
5. She is the person you call when AI product UX is the bottleneck

Build it.
```

---

## Notes on iterating with Claude Design

Once the first build is up, you'll likely want to refine. Some good follow-up prompts:

**To adjust the hero:**
> "Make the hero headline larger and use italic only on 'hard problems at scale'. Make the stat badges feel more like editorial tags than buttons."

**To adjust the work grid:**
> "The Airdomo card needs to lean harder on the AirDX story — that's my strongest signal. Add a small ★ tag that says '3-day solo build' next to the metric."

**To adjust the case study pages:**
> "Use the same hero composition style as the Carea case study HTML across all the others — phone mock on a pastel gradient block."

**If Claude Design generates new placeholder case studies instead of using yours:**
> "Stop. The 5 case studies are fixed: Store Intelligence, Carea, Airdomo, System Akvile, TeleMeet. Use the HTML files I uploaded as the source of truth. Do not invent new projects."

---

## A note on the timeline I noticed

Your LinkedIn lists Carea as starting Feb 2026 and Airdomo Product AI Engineer as Apr–May 2026. The current date is May 2026, so those are present-tense roles. I framed them that way in the case studies and prompt. If anything was a typo, let me know and I'll regenerate the affected files.
