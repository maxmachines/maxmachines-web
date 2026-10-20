# Max Machine Tools — Project Guide for Claude

## About This Project
This is the official website for Max Machine Tools (maxmachines.in) — an industrial machinery company established in 1963, based in Chennai and Ahmedabad, India.

## Tech Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Sanity CMS (Project ID: p72ubifi, Dataset: production)
- Deployed on Vercel
- GitHub: github.com/maxmachines/maxmachines-web
- Local path: ~/Desktop/maxmachines/maxmachines-web

## The Person You Are Working With
- Name: Jabesh (Jabs)
- Non-technical background but learns fast and ships fast
- Has already built: Quote Pro, Magic CRM, Kerdoss Scrapper
- Works from Mac at home, Windows at office
- Prefers: step by step guidance, one thing at a time, no dumping

## How To Guide Jabs — VERY IMPORTANT
- Always go ONE step at a time
- Wait for confirmation before next step
- If something breaks, fix it immediately before moving on
- Never give 10 steps at once — maximum 1-2 steps per message
- Use simple language, no jargon
- When running commands, tell him exactly what to type
- Always ask him what he sees before proceeding
- Be patient — he may ask basic questions, answer them warmly
- Celebrate wins — he has built something impressive

## Design System
- Primary background: #0f0f0f (black)
- Secondary background: #1a1a1a
- Gold accent: #eab308
- Gold hover: #facc15
- Text: white and grey
- Product photo panels use #F5F5F0 (off-white) — not the site's black background
- All pages use Navbar and Footer components
- WhatsApp floating button on all pages
- Social strip above footer

## Project Structure
- app/ — Next.js pages
- components/ — Reusable components (Navbar, Footer, WhatsAppButton, SocialStrip, BrandStrip, Contact, Hero, About, Products, Stats, ProductImageGallery, CategoryCard, ContactEnquiryCTA, EnquireButton, EnquiryForm, EnquiryModal, FaqAccordion, SchemaMarkup)
- sanity/ — Sanity CMS schema and config
- public/ — Static assets including logo.png

## Pages Built So Far
- / — Homepage (fully complete)
- /contact — Contact page (complete)
- /products — Product catalog (connected to Sanity)
- /products/[slug] — Category page (connected to Sanity)
- /products/[slug]/[subcategorySlug] — Subcategory page (connected to Sanity)
- /products/[slug]/[subcategorySlug]/[productSlug] — Individual product page (connected to Sanity)
- /about — About page (complete)
- /studio — Sanity Studio (CMS dashboard)

## Pages Needing Content
- /blog — Exists as a placeholder; hidden from Navbar and Footer until it has real content
- /our-clients — Exists as a placeholder; hidden from Navbar and Footer until it has real content

## Sanity & Revalidation
- All Sanity-driven pages use `export const revalidate = 3600` (1 hour)
- Published Sanity changes can take up to 1 hour to show on the live site, with no redeploy needed
- Changed from 60 to 3600 on 9 Oct 2026 to save Vercel ISR Writes (see Vercel Usage Notes below)
- Do NOT set revalidate back to 60 on any page

## Vercel Usage Notes
- Vercel free tier: ISR Writes limit is 200,000 per month. If exceeded, projects get paused (site goes offline).
- 9 Oct 2026: ISR Writes reached 153,518 (77%) because all 5 Sanity pages had revalidate = 60.
- Fix applied 9 Oct 2026: revalidate = 3600 in app/page.tsx, app/products/page.tsx, app/products/[slug]/page.tsx, app/products/[slug]/[subcategorySlug]/page.tsx and app/products/[slug]/[subcategorySlug]/[productSlug]/page.tsx.
- Keep revalidate at 3600 or higher on every new page that reads from Sanity (e.g. /blog, /our-clients once built).
- Next step if usage still climbs: add a Sanity webhook for instant updates, then raise revalidate even higher.
- Jabs is checking Vercel usage again in 2 to 3 days (around 12 Oct 2026). Last reading: 153,518 on 9 Oct 2026.

## Product Image Gallery
- `components/ProductImageGallery.tsx` renders a square frame with a `#F5F5F0` (off-white) background and `object-contain` so images are never cropped
- Product photos should be shot or exported with a flat `#F5F5F0` background to match the gallery frame

## Key Business Info
- Company: Max Machine Tools (MMT)
- Group established: 1963
- MMT established: 2012
- Locations: Chennai HQ + Ahmedabad Hub
- GST: 33AAWFM0648L1ZS
- Key contact: Jabesh Bagdy — +91 99620 61514 / max@maxmachines.in
- Supply: Pan-India and Export
- Google Form: https://forms.gle/TXjAGS67M1Nnb2Ye9
- WhatsApp Channel: https://whatsapp.com/channel/0029Vb6Sttp1yT2HqDtufu2f

## Workflow
1. Jabs runs commands in Terminal
2. Claude Code writes all code
3. Check on localhost:3000 first
4. Then git add . && git commit && git push
5. Vercel auto deploys in 2 minutes
6. Check live on www.maxmachines.in

---
PRODUCT UPDATE WORKFLOW FOR MMT

When Jabs says "let's update product" or pastes raw machine specs:

When Jabs says "let's update product":
Before formatting any product data, first do the following:

Ask Jabs: "Should I check recent chats and update CLAUDE.md first, or are we jumping straight into formatting a new product?"
If updating CLAUDE.md — do this in order:

Ask Jabs to either paste the current CLAUDE.md content, OR ask him to open the project folder in Terminal so Claude Code can read it directly from disk
Search recent chats automatically for any product, pipeline, or format changes not yet in the file
Present a clear summary of proposed changes to Jabs: what is being added, what is being corrected, what is being removed — and wait for his confirmation before writing anything
Only after confirmation: produce the updated CLAUDE.md file ready to download and replace

If jumping straight into product formatting — proceed with the 5 headline questions as normal.

STEP 1 — Ask Jabs these 5 headline details FIRST (constant per machine, ask once):
1. Product Name
2. Brand (HABA is MMT's own brand, never third party)
3. Category (e.g. Vertical Bandsaw Machine, Lathe Machine)
4. Subcategory (e.g. Metal Cutting Vertical Bandsaw)
5. Country (Made in India / Imported from...)

Also ask the HEADLINE SPEC by which this machine type is recognised:
- Vertical Bandsaw: Wheel Diameter (e.g. 400mm)
- Horizontal Bandsaw: Cutting Capacity
- Lathe: Chuck Size or Bed Length
- Air Compressor: CFM or Tank Size
- Drilling Machine: Drilling Capacity
- Ask Jabs if unsure for any other machine type

Keep these 5 details + headline spec constant for all related models until Jabs says "next machine".

STEP 2 — Format raw spec content into 4 tab-separated outputs ready for MMT Google Sheet:

TAB 1 — Products
Columns: Product Name | Brand | Category | Subcategory | Country | Short Description | Full Description | Featured | Active | SEO Title | Meta Description | Keywords | Geo Tags | YouTube URLs | PDF Labels | PDF URLs

TAB 2 — Variants & Specs (key:value structure, flexible for any machine)
Columns: Product Name | Model Number | Size | Price | Availability | Spec Name | Spec Value
- Each spec = one row
- Row order on sheet = display order on site (top row appears first)
- ALWAYS put the headline spec (wheel diameter / chuck size / CFM etc.) as the FIRST row so it appears on top of site spec table
- For one model with 15 specs = 15 rows (Product Name + Model + Size + Price + Availability stay same; only Spec Name + Spec Value change per row)

TAB 3 — Highlights & Accessories
Columns: Product Name | Type | Name/Text | Description | Price | Link
- Highlights: short punchy single line in Name/Text column, Description column LEFT BLANK
- Accessories: Name in Name/Text column + full Description in Description column (since accessories will be displayed in detail on the site later)

TAB 4 — FAQs
Columns: Product Name | Question | Answer

GENERAL RULES:
- Tab-separated values only (paste-ready for Google Sheets)
- No em dash — use hyphen (-) only
- Keywords MUST include: Chennai, Ahmedabad, Pan-India, export
- Geo Tags always: Chennai,Ahmedabad,Gujarat,Pan-India,Export
- Minimum 5 highlights, 5 FAQs (more is always better)
- FAQs buyer-focused — NO contact details (no phone, no email) in answers
- HABA is MMT's own brand — never refer to as third party or external
- N series = standard/budget range, R series = premium range
- Featured: Yes/No, Active: Yes/No (NOT TRUE/FALSE)

OUTPUT FORMAT FOR EVERY MESSAGE:
Before each tab's data block, show the column header row as reference so Jabs knows what each cell is.

IF UNSURE — ask Jabs before formatting. Do not assume.

---
WEBSITE IMPROVEMENT PLAN (started 18 Oct 2026)

## GOLDEN RULE - AI READABILITY (never forget)
The site must be readable and reachable by every AI tool, and everything we do should help AI tools recommend Max Machine Tools. Nobody can guarantee an AI will suggest us, so the aim is to remove every blocker and give clear, consistent facts to quote.
Ask for every change: "Does this help AI tools find and trust us?"
- Do not block AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google) in robots.txt or Vercel bot protection
- Content (names, specs, FAQs) must be plain text in the page, not only loaded by JavaScript, not only in images or PDFs
- Specs as real text tables
- Keep sitemap.xml complete and URLs clean; no dead links
- Add structured data (JSON-LD): Organization (Chennai + Ahmedabad), Product, FAQ, Breadcrumbs (SchemaMarkup component already exists - check and extend it)
- One set of facts everywhere (address, since 1963, MMT since 2012, response time, WhatsApp number) on the site, IndiaMART, JustDial, YouTube and Google Business Profile
- Meta descriptions and page text must match what is really listed
- Optional: add a short llms.txt describing the business
- Later: alt text for every photo and a text summary for every video

## Working Rule For This Plan
- Plan and discuss first. Make NO changes until Jabs confirms each one.
- One confirmed action at a time, simple words.
- Do not git commit or push without Jabs asking.

## Decisions Already Made (do not change)
- Site deliberately lists only fast-moving machines (hundreds exist). Add specifications first; photos and videos later (photos need background cleaning first).
- Client logos on the site are all real customers. Keep them.
- Contact form looks direct but writes into a Google Form, then a Google Sheet, which sends an instant email and WhatsApp to the customer. The same sheet feeds Magic CRM (tenant MMT_001) and the IndiaMART automation. DO NOT BREAK THIS.
- Social media is handled in a separate marketing project. This project is website only.

## Google Analytics Findings (GA4, 18 Sep to 15 Oct 2026)
- About 1.1K users, 10s average engagement
- "404: This page could not be found" had 561 views and 558 users (99.28% bounce), more than the home page (638 views, 463 users, 71.46% bounce). About half of all users hit a 404.
- Catalogue page: 113 views, 69 users, 17.39% bounce. Individual machine pages only 11 to 26 views each.
- No key events set up, so enquiries are not measured.

## Work Order
Step 0. Read-only AI-readiness check: robots.txt, sitemap, whether pages show content as plain text, Vercel bot settings
1. Find the cause of 404 traffic (which URLs, which referrers: old YouTube links, IndiaMART, JustDial, Google results, bots) using GA4 and Google Search Console. Then fix with redirects from old URLs to correct new pages, plus a helpful custom 404 page with links to Products and a WhatsApp button.
2. GA4 key events: contact form submitted, WhatsApp button clicked, call button clicked, catalogue requested. Add a "how did you find us" source field to the form only if it does not break the Sheet flow.
3. WhatsApp wa.me buttons: add pre-filled message e.g. "Hi, I saw your website and I am interested in [machine name]". Keep a YouTube version "I saw your video on YouTube" for links used there. ASK Jabs which number each button uses (currently +91 93828 61514 National Sales; automated number 91760 61514 is "Coming soon").
4. Check that "Fill Form" buttons on product pages (forms.gle link) feed the same Google Sheet as the Contact form. REPORT ONLY, change nothing without asking.
5. Align meta descriptions with what is actually listed. Home and About say Milling and Laser, which are not categories on the site.
6. Plan phased category additions: Laser Marking Machines, Shearing, Press Brake, Cutting Blades, Metal Pneumatic Fittings, Small Automation, Vices, Chucks, and others Jabs will list. Full product list will come separately. Add "Don't see your machine? Ask us" call to action on category pages.
7. About page edits (confirm each with Jabs): remove Kerdoss Trade India (SEBI RA) and Laser Unlimited (closed) from leadership section; shorten ministry biography of Late Mr. P.R. Garg to a short respectful tribute; "10+ export countries" lists Dubai and UAE separately (same country), so fix the count or the list.
8. Conflicting promises: Home says "we respond within the hour", Contact says "calls within 4 business hours". ASK Jabs which to keep and make them match everywhere.
9. Navigation differs between pages (About shows Blog and Our Clients, Home does not). Note: /blog and /our-clients are placeholders deliberately hidden from Navbar and Footer until they have real content (see above), so the About page showing them may be the bug. Check and make consistent.
10. Product page template for later: one video, 3 photos, key specs, "Get quote on WhatsApp" button.

## Needed From Jabs (to start)
- Google Search Console login for maxmachines.in and GA4 access
- WhatsApp number for each button
- Choice: "within the hour" or "4 business hours"
- Full product list
- First step when ready: GA4, Reports, Engagement, Pages and screens, click the "404" row, report the broken URLs and referrers

## Product Photo and Card Image Standards
- All product photos: 1600x1600 PNG, machine centred on exactly #F5F5F0, with a label "Model No: <model> <view>" (Inter SemiBold ~64px, #1F1F1F, short gold #EAB308 line above). File names lowercase-hyphenated: model-machinetype-view.png
- Views: Left = motor on left of picture, Right = motor on right, Front
- Product page with many models: group photo as photo 2 (1600x1600, two rows of three, equal height, small to large, right view, model label under each). Photo 1 stays a single machine
- Subcategory and product card images: 1600x1600, one machine cropped tight, no label. Card box on the site is 220px tall, object-contain, on #f5f5f0
- /products category cards: pencil-sketch drawings (made in Gemini from a photo), 1600x900 on exactly #F5F5F0, machine about 800px tall, centred
- A subcategory with exactly one product skips its own page and links straight to the product (app/products/[slug]/page.tsx). The subcategory page stays live for Google
- Photo work itself is done in Claude chat inside the MaxMachines.in 2.0 project, not in Claude Code
