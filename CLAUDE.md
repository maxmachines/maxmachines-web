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
- All pages use Navbar and Footer components
- WhatsApp floating button on all pages
- Social strip above footer

## Project Structure
- app/ — Next.js pages
- components/ — Reusable components (Navbar, Footer, WhatsAppButton, SocialStrip, BrandStrip, Contact, Hero, About, Products, Stats)
- sanity/ — Sanity CMS schema and config
- public/ — Static assets including logo.png

## Pages Built So Far
- / — Homepage (fully complete)
- /contact — Contact page (complete)
- /about — About page (complete)
- /products — Product catalog (connected to Sanity)
- /products/[slug] — Category page (connected to Sanity)
- /studio — Sanity Studio (CMS dashboard)

## Pages Still To Build
- /products/[slug]/[subcategorySlug] — Subcategory page
- /products/[slug]/[subcategorySlug]/[productSlug] — Individual product page
- /blog — Blog page
- /our-clients — Clients page

## Key Business Info
- Company: Max Machine Tools (MMT)
- Group: MODI Machines Group (established 1963)
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

## PRODUCT CATEGORIES COMPLETED (imported and live)

### Vertical Bandsaw Machine
Subcategories: Metal Cutting Vertical Bandsaw, Wood Cutting Vertical Bandsaw, AAC Block Cutting Machine, Special Application Vertical Bandsaw
Brands: HABA (R Series premium), PRG (Standard, Eco Series)
Headline spec: Wheel Diameter
Models include: VMCB16RSE, VMCB20RSE, VMCB18, VMCB24, VMCB30, VMCB18S, VMCB24S, VMCB18E, VMCB16RSE-AAC, WCB16RSE, WCB18 + Special Application variants

### Drilling Machine
Subcategories (in display order): Pillar Drilling, Drilling cum Tapping, Pure Tapping, Drilling cum Milling Machine, Radial Drilling, Multi Drill Heads, Automation in Drilling
Brand: PRG | Country: Made in India | Headline spec: Drilling Capacity
Note: Multi Spindle Drill Head is custom made-to-order with no fixed models. Automation in Drilling is a placeholder only.

### Press Machines
Subcategories: Mechanical Power Press, Pneumatic Power Press, Hydraulic Press, Impact Press, Toggle Press
Brand: PRG | Country: Made in India | Headline spec: Capacity (Tons)
Models include:
- Mechanical Power Press: PMC5 to PMC100
- Pneumatic Power Press: PPC20 to PPC100
- C Frame Ram Type Hydraulic Press: PHCR/3 to PHCR/200
- C Frame 4 Guide Plate Hydraulic Press: PHCGP/20 to PHCGP/300
- H Type Hydraulic Press Motorised: PHHM/5 to PHHM/500
- H Type Hydraulic Press Hand Operated: PHHH/5 to PHHH/150
- Fix Frame Ram Type Hydraulic Press: PHFR/20 to PHFR/500
- Fix Frame Piston Type Hydraulic Press: PHRP/5 to PHRP/300
- 4 Pillar Hydraulic Press: PH4P/5 to PH4P/300
- Impact Press Machine: PIH11, PIH15, PIP25, PIP35
- Toggle Press Machine: TPH6, TPH9, TPP6
Note: Impact Press and Toggle Press also belong under a future Marking Machines category (deferred — schema only supports single subcategory per product currently).

### Lathe Machine
Subcategories: All Geared Lathe Machine (complete), others TBD
Brand: HABA | Country: Made in India | Headline spec: Bed Length (inches)
Models completed:
- Light Duty All Geared Lathe: HAG691
- Medium Duty All Geared Lathe: HAG812, HAG1013
- Heavy Duty All Geared Lathe (Bed 13"): HAG1032 to HAG1234 (6 models)
- Heavy Duty All Geared Lathe (Bed 15"): HAG1253 to HAG1554 (6 models)
- Extra Heavy Duty All Geared Lathe (Bed 18"): HAG1684, HAG1884
- Extra Heavy Duty All Geared Lathe (Bed 22"): HAG20224
- Extra Heavy Duty All Geared Lathe (Bed 26"): HAG22265, HAG24265

### Metal Cutting Bandsaw (Horizontal)
Subcategories: HMM Series
Brand: HABA | Headline spec: Cutting Capacity
Models: HMM9R (225mm), HMM12R (300mm), HMM13R (330mm), HMM8N, HMM12N, HMM14N
Note: R series = premium, N series = standard/budget

---

## ACTIVE ISSUES / DEFERRED WORK
- Display Order logic is broken — works globally, not per subcategory — deferred for later fix
- Sanity schema supports only single subcategory per product — multi-subcategory support planned (needed for Impact Press / Toggle Press under Marking Machines)
- Air Line Pressure spec inconsistency across Impact Press models (different units) — flagged for cleanup
- Existing press products need PRG brand prefix added to product names
- Photos for VMCB and all drilling machines pending manual upload to Sanity Studio

---

## ON THE HORIZON
- Add remaining machine categories: Air Compressor (new), Marking Machines (with Impact Press and Toggle Press cross-listed)
- Build remaining website pages: /subcategory, /product, /blog, /our-clients
- Fix Display Order logic per subcategory
- Update Sanity schema for multi-subcategory support; update importer and frontend
- Update CLAUDE.md and Project Instructions at end of each major session

---

## IMPORT PIPELINE — CRITICAL RULES

### Before every import run:
1. Manually create any new Categories and Subcategories in Sanity Studio FIRST — the importer does NOT auto-create them
2. Clear ALL Google Sheets filters before running `npm run import-products` — active filters hide rows from the importer

### CSV Export — use native endpoint only:
- Use: `/export?format=csv&gid=NUMERIC_ID`
- NEVER use: `/gviz/tq?tqx=out:csv&sheet=TAB_NAME` — this endpoint mangles data (columns merge together)

### Known Sheet GIDs:
- Products tab: 0
- Variants & Specs tab: 1924145122
- Highlights & Accessories tab: 1811493441
- FAQs tab: 872074886

### Stray data in extra columns:
- Stray data in columns beyond the expected range corrupts CSV export
- Fix: select from the first unused column to the end of the sheet and delete those columns entirely

### Debugging approach:
- When persistent technical errors can't be resolved quickly, consult Gemini and Grok for additional diagnosis before continuing
- Team approach: Claude formats/builds; Gemini and Grok debug tricky infrastructure issues

---

## GOOGLE SHEET COLUMN ORDER (EXACT)

**Tab 1 — Products:**
Product Name | Brand | Category | Subcategory | Country | Display Order | Short Description | Full Description | Featured | Active | SEO Title | Meta Description | Keywords | Geo Tags | YouTube URLs | PDF Labels | PDF URLs

**Tab 2 — Variants & Specs:**
Product Name | Model Number | Size | Price | Availability | Spec Name | Spec Value

**Tab 3 — Highlights & Accessories:**
Product Name | Type | Name/Text | Description | Price | Link

**Tab 4 — FAQs:**
Product Name | Question | Answer

---

## PRODUCT UPDATE WORKFLOW FOR MMT

When Jabs says "let's update product" or pastes raw machine specs:

### STEP 1 — Ask Jabs these 5 headline details FIRST (constant per machine, ask once):
1. Product Name
2. Brand (HABA is MMT's own brand, never third party)
3. Category (e.g. Vertical Bandsaw Machine, Lathe Machine)
4. Subcategory (e.g. Metal Cutting Vertical Bandsaw)
5. Country (Made in India / Imported from...)

Also ask the HEADLINE SPEC by which this machine type is recognised:
- Vertical Bandsaw: Wheel Diameter (e.g. 400mm)
- Horizontal Bandsaw: Cutting Capacity
- Lathe: Bed Length (inches)
- Air Compressor: CFM or Tank Size
- Drilling Machine: Drilling Capacity
- Press Machine: Capacity (Tons)
- Ask Jabs if unsure for any other machine type

Keep these 5 details + headline spec constant for all related models until Jabs says "next machine".

### STEP 2 — Format raw spec content into 4 tab-separated outputs ready for MMT Google Sheet:

**TAB 1 — Products**
Columns: Product Name | Brand | Category | Subcategory | Country | Display Order | Short Description | Full Description | Featured | Active | SEO Title | Meta Description | Keywords | Geo Tags | YouTube URLs | PDF Labels | PDF URLs

**TAB 2 — Variants & Specs** (key:value structure, flexible for any machine)
Columns: Product Name | Model Number | Size | Price | Availability | Spec Name | Spec Value
- Each spec = one row
- Row order on sheet = display order on site (top row appears first)
- ALWAYS put the headline spec (wheel diameter / chuck size / CFM / capacity etc.) as the FIRST row so it appears at top of site spec table
- For one model with 15 specs = 15 rows (Product Name + Model + Size + Price + Availability stay same; only Spec Name + Spec Value change per row)
- Price always: "Request Quote"
- Availability always: "In Stock"

**TAB 3 — Highlights & Accessories**
Columns: Product Name | Type | Name/Text | Description | Price | Link
- Highlights: short punchy single line in Name/Text column, Description column LEFT BLANK
- Accessories: Name in Name/Text column + full Description in Description column

**TAB 4 — FAQs**
Columns: Product Name | Question | Answer

### GENERAL RULES:
- Tab-separated values only (paste-ready for Google Sheets)
- No em dash — use hyphen (-) only
- Product names must always include brand prefix: "PRG [Product Name]" or "HABA [Product Name]"
- Keywords MUST include: Chennai, Ahmedabad, Pan-India, export
- Geo Tags always: Chennai,Tamil Nadu,Ahmedabad,Gujarat,Pan-India,Export,Government Supply
- Minimum 5 highlights, 5 FAQs (more is always better)
- FAQs buyer-focused — NO contact details (no phone, no email) in answers
- HABA is MMT's own designed and manufactured brand — never refer to as third party or external
- PRG is also MMT's own brand — never refer to as third party or external
- N series = standard/budget range, R series = premium range
- Featured: Yes/No | Active: Yes/No (NOT TRUE/FALSE)
- Do not repeat or re-generate data that has already been accepted
- Ask clarifying questions before formatting — do not assume

### OUTPUT FORMAT FOR EVERY MESSAGE:
Before each tab's data block, show the column header row as reference so Jabs knows what each cell is.

### IF UNSURE — ask Jabs before formatting. Do not assume.

---

## BROWSER AUTOMATION (Claude in Chrome)
- Requires per-domain permission grants — click the extension icon while on the target tab and enable site access
- After granting permission, refresh the page before the extension can interact
- Tab IDs change after any navigation or refresh — always call tabs_context_mcp again after refresh to get current tab ID
- For Sanity Studio subcategory creation: click name field → type → click slug generate button → click category reference field → type to trigger dropdown search → submit
- Batch actions combining navigate, wait, type, click in a single browser_batch call work well for multi-step form submissions
