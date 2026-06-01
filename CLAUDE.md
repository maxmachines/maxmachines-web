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
- Do NOT repeat or re-generate data that has already been accepted
- Ask clarifying questions before formatting new product data

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
- /products — Product catalog (connected to Sanity)
- /products/[slug] — Category page (connected to Sanity)
- /studio — Sanity Studio (CMS dashboard)

## Pages Still To Build
- /products/[slug]/[subcategorySlug] — Subcategory page
- /products/[slug]/[subcategorySlug]/[productSlug] — Individual product page
- /about — About page
- /blog — Blog page
- /our-clients — Clients page

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

## Product Categories — Completed So Far

### Vertical Bandsaw Machine (Category)
- Metal Cutting Vertical Bandsaw — HABA R Series (VMCB16RSE, VMCB20RSE)
- Metal Cutting Vertical Bandsaw — PRG Standard Series (VMCB18, VMCB24, VMCB30, VMCB18S, VMCB24S)
- Metal Cutting Vertical Bandsaw — PRG Eco Series (VMCB18E)
- AAC Block Cutting Machine — HABA (VMCB16RSE-AAC)
- Special Application Vertical Bandsaw — PRG (honeycomb, carburettor, fan rod, plastic roll cutting)
- Wood Cutting Vertical Bandsaw — PRG (WCB16RSE, WCB18)

### Horizontal Bandsaw Machine (Category)
- Metal Cutting Horizontal Bandsaw — HABA HMM Series R (HMM9R, HMM12R, HMM13R)
- Metal Cutting Horizontal Bandsaw — HABA HMM Series N (HMM8N, HMM12N, HMM14N)

### Drilling Machine (Category) — 7 subcategories
- Pillar Drilling
- Drilling cum Tapping
- Pure Tapping
- Drilling cum Milling Machine
- Radial Drilling
- Multi Drill Heads (custom made-to-order, no fixed models)
- Automation in Drilling (placeholder only)
All: PRG brand, Made in India, headline spec = Drilling Capacity

### Press Machines (Category) — 5 subcategories
- Mechanical Power Press — PRG (PMC5 to PMC100)
- Pneumatic Power Press — PRG (PPC20 to PPC100)
- C Frame Ram Type Hydraulic Press — PRG (PHCR/3 to PHCR/200)
- C Frame 4 Guide Plate Hydraulic Press — PRG (PHCGP/20 to PHCGP/300)
- H Type Hydraulic Press Motorised — PRG (PHHM/5 to PHHM/500)
- H Type Hydraulic Press Hand Operated — PRG (PHHH/5 to PHHH/150)
- Fix Frame Ram Type Hydraulic Press — PRG (PHFR/20 to PHFR/500)
- Fix Frame Piston Type Hydraulic Press — PRG (PHRP/5 to PHRP/300)
- 4 Pillar Hydraulic Press — PRG (PH4P/5 to PH4P/300)
- Impact Press Machine — PRG (PIH11, PIH15, PIP25, PIP35)
- Toggle Press Machine — PRG (TPH6, TPH9, TPP6)
All: PRG brand, Made in India, headline spec = Capacity in Tons

### Lathe Machine (Category) — 1 subcategory so far
- All Geared Lathe Machine — HABA, Made in India, headline spec = Chuck Size / Bed Length
  - HABA Light Duty All Geared Lathe Machine (HAG691)
  - HABA Medium Duty All Geared Lathe Machine (HAG812, HAG1013)
  - HABA Heavy Duty All Geared Lathe Machine (Bed: 13") — HAG1032 to HAG1234 (6 models)
  - HABA Heavy Duty All Geared Lathe Machine (Bed: 15") — HAG1253 to HAG1554 (6 models)
  - HABA Extra Heavy Duty All Geared Lathe Machine (Bed: 18") — HAG1684, HAG1884
  - HABA Extra Heavy Duty All Geared Lathe Machine (Bed: 22") — HAG20224
  - HABA Extra Heavy Duty All Geared Lathe Machine (Bed: 26") — HAG22265, HAG24265

---

## Pending TODO

### Schema & Importer
- [ ] Fix Display Order logic — currently works globally, not per subcategory
- [ ] Update Sanity schema — subcategory field from single to multi-reference (array)
- [ ] Update importer script to support comma-separated subcategories
- [ ] Update frontend to display products under multiple subcategories

### Products — Pending
- [ ] Rename existing press products to include PRG brand prefix (e.g. "PRG Mechanical Power Press")
- [ ] Clean up Air Line Pressure spec inconsistency across Impact Press models (different units)
- [ ] Add PLC Control Panel as optional accessory to C Frame Ram Type Hydraulic Press
- [ ] Add PLC Control Panel as optional accessory to C Frame 4 Guide Plate Hydraulic Press
- [ ] Air Compressor (new category — headline spec: CFM or Tank Size)
- [ ] Marking Machines (new category — Impact Press and Toggle Press to be cross-listed here after multi-subcategory schema upgrade)
- [ ] Photos for VMCB and all Drilling Machines — pending manual upload to Sanity

### Website Pages
- [ ] /products/[slug]/[subcategorySlug] — Subcategory page
- [ ] /products/[slug]/[subcategorySlug]/[productSlug] — Individual product page
- [ ] /blog — Blog page
- [ ] /our-clients — Clients page

---

## Import Pipeline — Critical Rules

### Before Every Import Run
1. Manually create any new Categories and Subcategories in Sanity Studio first — the importer does NOT auto-create them
2. Clear ALL Google Sheets filters before running npm run import-products — active filters hide rows from the importer

### CSV Export Endpoint
- ALWAYS use the native export endpoint: /export?format=csv&gid=NUMERIC_ID
- NEVER use the gviz/tq endpoint — it mangles data for tabs where content was pasted from external sources

### Known Sheet GIDs
- Products: 0
- Variants & Specs: 1924145122
- Highlights & Accessories: 1811493441
- FAQs: 872074886

### Stray Columns
- Delete all columns beyond the expected range (e.g. beyond column G in Variants & Specs) — stray data corrupts CSV export entirely

### Debugging Approach
- When persistent technical errors can't be resolved quickly, consult Gemini and Grok for additional diagnosis before continuing
- Team approach: Claude formats/builds; Gemini and Grok debug tricky infrastructure issues

---

## Tab 1 (Products) — Column Order
Product Name | Brand | Category | Subcategory | Country | Display Order | Short Description | Full Description | Featured | Active | SEO Title | Meta Description | Keywords | Geo Tags | YouTube URLs | PDF Labels | PDF URLs

## Tab 2 (Variants & Specs) — Column Order
Product Name | Model Number | Size | Price | Availability | Spec Name | Spec Value

## Tab 3 (Highlights & Accessories) — Column Order
Product Name | Type | Name/Text | Description | Price | Link

## Tab 4 (FAQs) — Column Order
Product Name | Question | Answer

---

## Claude in Chrome — Browser Automation Notes
- Requires per-domain permission grants — click extension icon while on target tab and enable site access
- After granting permission, refresh the page before automating
- Tab IDs change after any navigation or refresh — always call tabs_context_mcp again after refresh
- Batch actions (navigate, wait, type, click) work well inside a single browser_batch call

---

PRODUCT UPDATE WORKFLOW FOR MMT

When Jabs says "let's update product" or pastes raw machine specs:

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
- Press Machine: Capacity in Tons
- Ask Jabs if unsure for any other machine type

Keep these 5 details + headline spec constant for all related models until Jabs says "next machine".

STEP 2 — Format raw spec content into 4 tab-separated outputs ready for MMT Google Sheet:

TAB 1 — Products
Columns: Product Name | Brand | Category | Subcategory | Country | Display Order | Short Description | Full Description | Featured | Active | SEO Title | Meta Description | Keywords | Geo Tags | YouTube URLs | PDF Labels | PDF URLs

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
- Geo Tags always: Chennai,Tamil Nadu,Ahmedabad,Gujarat,Pan-India,Export,Government Supply
- Minimum 5 highlights, 5 FAQs (more is always better)
- FAQs buyer-focused — NO contact details (no phone, no email) in answers
- HABA is MMT's own brand — never refer to as third party or external
- PRG is also MMT's own brand — never refer to as third party or external
- N series = standard/budget range, R series = premium range
- Featured: Yes/No, Active: Yes/No (NOT TRUE/FALSE)
- Price always: Request Quote
- Availability always: In Stock
- Product names must always include brand prefix: "PRG [Product Name]" or "HABA [Product Name]"

OUTPUT FORMAT FOR EVERY MESSAGE:
Before each tab's data block, show the column header row as reference so Jabs knows what each cell is.

IF UNSURE — ask Jabs before formatting. Do not assume.
