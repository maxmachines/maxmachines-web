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

## Categories and Subcategories - fill in Sanity Studio (added 22 Oct 2026)
- The Google Sheet and importer are for PRODUCTS only. They never create or fill Categories or Subcategories; they only look them up by name and skip the product with an error if missing. Create and fill Categories and Subcategories by hand in Sanity Studio, before importing products
- Fields to fill for every Category and Subcategory (do all of them, not only the name):
  - Image (Category field is called "Icon / Image"): category = pencil sketch card 1600x900; subcategory = tight-cropped machine card 1600x1600 (see photo standards)
  - Description: one short line, shown under the card name and used as the fallback search description. Use only facts already on the site (brand, capacity range, number of models, Made in India)
  - Display Order: a number; lower appears first. Check the other records before choosing
  - SEO Meta: SEO Title (max 60 characters, ends with "| Max Machine Tools"), Meta Description (max 160, mentions Made in India and Chennai, Ahmedabad, Pan-India and export), Keywords as tags (machine type, brand + machine type, Chennai, Ahmedabad, Pan-India, export)
- Publish the record, then check the live page. Pages refresh from Sanity at most once an hour (revalidate = 3600); to see a change at once, Redeploy on Vercel
- Done so far: Subcategory Pillar Drilling and Category Drilling Machine are filled and published. Other categories and subcategories still need the same treatment

## PRG Pillar Drilling Machine page - what was done (22 Oct 2026)
- Product Images order: group photo first (PPD12RS scaled to 70 percent; PPD25R label reads "PPD25R & PPD32R" because one picture covers both), then left and right views for PPD12RS, PPD20R, PPD25R/PPD32R, PPD40MR, PPD40R, PPD40HR, small to large. Front views are not used on this page
- PPD12RS pictures carry two small inset close-ups (PPD12RC Chuck, PPD12RC Spindle) at the right side
- Alt text pattern: "<model> pillar drilling machine, left view" or "right view"
- When a photo is changed, the old file is kept in the Ready for upload folder with "-old" added to its name
- Planned, not built yet: a revalidate API route plus a Sanity webhook so a publish refreshes the live page at once, then raise the normal revalidate time (24 hours, or 2 hours if preferred)

## Next Session To-Do (noted 22 Oct 2026)
1. Re-check live /products/drilling-machine and /products: card pictures and descriptions for Pillar Drilling and Drilling Machine should show after a redeploy (they were still empty at last check)
2. Update bandsaw pictures in Sanity (product pages and card pictures), then fill details for those categories/subcategories
3. Fill the remaining Drilling subcategories (6) and the other 5 categories using the rule above
4. Check the Vertical Bandsaw product pages for the extra-click problem
5. Build the revalidate API route plus Sanity webhook (plan first, change nothing until Jabs confirms), then raise the normal revalidate time (24 hours, or 2 hours)
6. Jabs makes card pictures ready for Lathe, Press Machines and Marking Solutions
7. Then "let's update product" for the next product
8. (added 22 Oct, late) Descriptions are missing on both bandsaw categories and their subcategories; fill them as per the Categories and Subcategories rule above
9. (added 22 Oct, late) Card pictures show a grey gradient at the bottom that makes them look dull; Jabs is fine with removing it. Find the card component (CategoryCard.tsx / category and subcategory pages), show Jabs the change first, no commit unless he asks

## Update 24 Oct 2026 (newer than the notes above; where they differ, this section wins)
Site code (already committed in git; last commit "Studio without watermark, page refresh 24h"):
- The Sanity webhook is BUILT: app/api/revalidate/route.ts. Publishing in Studio refreshes / , /about and everything under /products within about a minute, no redeploy needed (checked live on 24 Oct with the press pages). The normal page refresh time is now 24 hours. This replaces the older "revalidate 3600", "up to 1 hour", "Redeploy on Vercel" and "Planned, not built yet" lines above
- Done since 22 Oct: dark gradient removed from card pictures; picture watermark and right-click block on site pictures (not in Studio); pictures resized by the Sanity image service. So to-do items 5 and 9 of the 22 Oct list are finished

PRG Impact Press Machine and PRG Toggle Press Machine (published 24 Oct 2026, pictures live):
- Kept as two separate products. Impact Press = PIH11, PIH15, PIP25, PIP35. Toggle Press = TPH9 (not "TOH9")
- Product Images order on Impact: all-models collage, 4 actual-scale group photos, one collage per model (PIH11, PIH15, PIP25, PIP35), then the single views of each model. On Toggle (Jabs's choice): TPH9 collage, TPH9 singles (back, front, left, left 2, right), then the all-models collage and the 4 actual-scale photos. This overrides the "group photo as photo 2" line in Product Photo and Card Image Standards for these two pages
- Alt text on every picture. Singles: "PRG <MODEL> impact press machine, <view> view" (Toggle: "PRG TPH9 toggle press machine, <view> view"; "view 2/3" for the -2/-3 files). Group photos: "PRG impact press and toggle press machines, all models: PIH11, PIH15, PIP25, PIP35 and TPH9" and "... at actual scale, front view / angled view 1 / 2 / 3: PIP35, PIP25, PIH15 and TPH9". Both products use identical wording for the group photos
- YouTube link for Impact Press: https://youtu.be/lQ-R4lGM-1g, in the Google Sheet Products tab, row 27, column O (YouTube URLs) and in Studio. The sheet is the permanent source because the importer overwrites Studio-only edits
- How pictures were uploaded: Jabs drags several files from Finder onto the Product Images list in Studio (not onto "Add item"); Claude in Chrome then reads each picture's label, types the alt text and fixes the order by dragging the row handles one row at a time (long drags do not register). Claude in Chrome cannot pick files itself
- Still missing: card pictures for Press Machines (category), Impact Press and Toggle Press (subcategory), and for Lathe and Marking

## Next Session To-Do (updated 24 Oct 2026)
Done: items 5 and 9 of the 22 Oct list (webhook, gradient); press pictures.
Tomorrow's order (Jabs, 24 Oct): first the card pictures for Press Machines (category) and the Impact Press and Toggle Press subcategory cards, which still show no images; then item 2 (update the bandsaw pictures in Sanity, product pages and card pictures, then fill details for those categories/subcategories); then everything else on this list.
Still open from the 22 Oct list: 1 (re-check /products card pictures and descriptions), 3 (remaining Drilling subcategories and other categories), 4 (Vertical Bandsaw extra-click check), 6 (card pictures for Lathe, Press Machines, Marking), 7 ("let's update product"), 8 (bandsaw category and subcategory descriptions).

## STANDING RULE - a product is not finished until its Category and Subcategory are done (added 24 Oct 2026)
- Updating a product is the final stage of the work on it, so every time a product is updated, its Category and Subcategory are updated in the same session, using the "Categories and Subcategories - fill in Sanity Studio" rule above: card picture (category = pencil sketch 1600x900, subcategory = tight card photo 1600x1600), Description, Display Order, SEO Meta; then publish and check the live page
- This is why we do the product first and only then touch the other items: the Category and Subcategory step is part of every "let's update product" run and every picture update, not a separate job for later
- Check list at the end of every product update: 1 product pictures and alt text, 2 YouTube link in the Google Sheet, 3 subcategory card picture and details, 4 category card picture and details, 5 publish and check the live pages. Claude must ask Jabs for any missing card picture before closing the product
- Applies to the open items too: Press Machines (Impact Press, Toggle Press) and bandsaw are the next ones to close this way

## SEO / GEO rules (added 2026-10-25)

### Keywords (categories, subcategories, products - existing and future)
Tags must be phrases buyers search: "<machine> machine", "<machine> machine
price", "<machine> manufacturer India", "<machine> supplier India", "buy
<machine> online India", brand + machine, model numbers, "<machine> exporter
India", "<machine> machine UAE", "industrial <type> dealer India". Chennai and
Ahmedabad stay as two tags. No "near me".

### SEO title, meta description, geo tags
- SEO Title: max 60 chars, ends " | Max Machine Tools".
- Meta Description: max 160 chars; own brands end "Made in India, supplied
  across India, UAE and export."; other brands (e.g. BRADMA) end "Supplied
  across India, UAE and export."; no city names in title or meta.
- Geo Tags: Chennai,Ahmedabad,Gujarat,Tamil Nadu,Pan-India,UAE,Middle
  East,Africa,South Asia,Export (+ Government Supply where already present).
- The site now outputs these Sanity SEO fields (seo.title, seo.description,
  seo.keywords on categories/subcategories; products use seoTitle,
  metaDescription, keywords, geoTags).

### Brands
Own brands: HABA, PRG, Kopis, Airdas, Velse, Modi. Also approved for use:
Bradma, Morse, Bahco, Lenox. Any other brand: search, then ask Jabs to confirm
before using it anywhere.

### Markets
All India and global; extra focus on UAE, Middle East, Africa, South Asia.

### Built so far
- "Supplied to:" line and areaServed JSON-LD on product pages (from geoTags)
- FAQPage + BreadcrumbList JSON-LD; Product JSON-LD with areaServed
- /llms.txt, /robots.txt (allow all, block /studio/ and /api/), sitemap
- /export-and-uae page. Facts: exports regularly by air and sea, IEC holder
  (never show the IEC number), Certificate of Origin, commercial invoice,
  packing list, export contact +91 99620 61514, "we respond within the hour",
  brands HABA, PRG, Kopis, Airdas, Velse, Modi
- Floating WhatsApp button and site links use Sales 93828 61514; the export
  page uses 99620 61514
- Every WhatsApp link uses waLink() in lib/whatsapp.ts with the message "Hi Max
  Machine Tools, I saw your website maxmachines.in and ..." so website leads
  are identifiable. Never add a bare wa.me link.

### Rules for Claude Code
- Show the diff and wait for "go" before every commit or push.
- Append to CLAUDE.md only; never replace it.

## Competitor brand mentions (added 2026-10-25)
- Competitor brand names (e.g. Eifco, ITCO, Parmar, Bradma, Hindustan) may appear
  on the website ONLY inside FAQ answers. Never in titles, meta descriptions,
  descriptions, headings, or any visible line outside FAQs.
- Backend only (sheet keyword column M, Sanity keywords) they may appear as
  "<brand> <machine> alternative" tags.
- Wording: "comparable Made in India alternative to X" or "same capacity, ISO
  certified". Never claim we are their dealer, never use their logos, photos or
  model names, never claim "better than" without proof. 3-5 brands per FAQ,
  never long lists.
- Approved lists live in the project memory (ways-of-working). Any brand not on
  an approved list needs Jabs's yes first.
- Each product type gets 2 comparison FAQs, added in the FAQs tab of the MMT
  sheet. Before adding, find the real last row using the CSV export (the FAQs
  tab has a filter that hides rows), then paste below it.

## Update 28 Oct 2026 (newer than the notes above; where they differ, this section wins)
- Jabs reports more WhatsApp enquiries after the recent SEO / GEO updates (waLink() pre-filled messages, export page, schema, llms.txt). The updates are working; keep going in the same direction.
- Google Analytics monthly email (18 Sep to 15 Oct 2026), same period as the GA4 findings above: active users up 17.76%, new users up 18.56%, events up 19.31%, average engagement time up 22.98% (still only 10s). About 1.1K active and new users, 4.2K events.
- The 404 problem is still the biggest open issue: "404: This page could not be found" had 561 views and 558 users (99.28% bounce) versus the home page at 638 views and 463 users. Work Order step 1 (find which URLs and referrers cause it, then add redirects and a helpful custom 404 page) has NOT been started yet.
- Next step for step 1: Jabs opens GA4, Reports, Engagement, Pages and screens, changes "Page title and screen class" to "Page path and screen class", finds the 404 row and reports the top paths and referrers. Likely causes to check: old WordPress URLs (the old site was 5 years old), old YouTube / IndiaMART / JustDial links, bots, and links in the site pointing to pages that do not exist.
- Jabs wants this 404 check done BEFORE the next press-page update.
- Reminder: an older CLAUDE.md copy (the short version from the first project instructions, about 6 KB) exists in Claude chat. Never paste it over this file.

## INCIDENT 28 Oct 2026 - certificate error caused by Hostinger (fixed) - READ THIS
- About 23:00 IST both maxmachines.in and www.maxmachines.in showed "Your connection is not private" (ERR_CERT_DATE_INVALID). Vercel Domains showed "Invalid Configuration" on both.
- Cause: Hostinger rolled out automatic CDN ("Hosting CDN enabled - made automatically by Hostinger", DNS history 2026-10-28). It changed the www CNAME to www.maxmachines.in.cdn.hstgr.net, deleted the A record @ 216.198.79.1 and added an ALIAS @ maxmachines.in.cdn.hstgr.net. This pulled the domain away from Vercel. Not caused by our code or the redirect.
- Fix done: Hostinger hPanel > Domains > maxmachines.in > DNS / Nameservers > DNS history > Restore on the 2026-10-28 entry. Correct DNS now: A @ 216.198.79.1 and CNAME www dc344377a2c35a6b.vercel-dns-017.com (legacy 76.76.21.21 / cname.vercel-dns.com also work). Vercel shows Valid Configuration. Site checked working on desktop and phone.
- Prevention done: hPanel > Websites > maxmachines.in (old WordPress site on Hostinger) > Performance > CDN > "Opt out of automatic CDN" > ticked maxmachines.in only (1 of 9 opted out). Other 8 hosted sites left as they are.
- NEVER click "Connect domain" on the Hostinger dashboard for the old maxmachines.in WordPress site, and never press the CDN "Disable" link without checking DNS first. They can repoint the domain to Hostinger and break the live site. Ignore the "SSL failed to install" tip there.
- If the warning ever returns: check Vercel > maxmachines-web > Settings > Domains first, then Hostinger DNS history for an automatic change, then use Restore.
- Hostinger DNS only holds email and verification records besides the two Vercel records (Google Workspace MX, Brevo, Resend, Amazon SES). Do not use "Reset DNS records".

## Brochure redirect (28 Oct 2026, not yet live)
- The 404 traffic is old WordPress links /shop/... and /product-category/... from the old one-page PDF catalogue (about 25 links, all using maxmachines.in; thousands of copies in use). The PDF is not being re-issued; a new catalogue will come later with real new links plus ?utm_source=brochure.
- next.config.ts now has redirects() sending /shop/:path* and /product-category/:path* to /products?utm_source=brochure&utm_medium=pdf, temporary (permanent: false). Tested on localhost:3000 (both patterns work). NOT committed or pushed yet - waiting for Jabs's go. Show git status and diff first.
- Old PDF WhatsApp links go to 99620 61514, 93828 61514, 91760 61514 and 99621 61514 with the text "Hi, i got your reference from Digital Brochure." These cannot be redirected from the website. 91760 61514 was noted as "Coming soon" - make sure it is answered or has an auto-reply. A test copy 2023_MAX_Digital_Catalogue_new-links.pdf (all WhatsApp to 99620 61514) exists in the maxmachines folder but is not being used.
- Claude in Chrome for this project: use the browser starting e0f32078 (Browser 1).
