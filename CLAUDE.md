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
