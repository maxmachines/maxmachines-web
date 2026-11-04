# SOP - maxmachines.in (single master file)

Version 2, 4 Nov 2026. Owner: Jabs. Built from the project notes, CLAUDE.md and every chat summary from 17 Sep to 4 Nov 2026 plus the May/June press and marking chats.

READ THIS FILE FIRST in every new chat of the MaxMachines.in project. If anything here disagrees with CLAUDE.md, project notes or memory, THIS FILE WINS.

---

## ONE-PAGE SUMMARY (read this if nothing else)

1. One step at a time. Commands in code blocks, always starting with `cd ~/Desktop/maxmachines/maxmachines-web`.
2. The Google Sheet is the source for products. Sanity is filled by import. Categories and subcategories are filled by hand in Studio.
3. A product is DONE only when the checklist in section 8 is fully ticked, including its category and subcategory, and the live page is checked.
4. Competitor brands: search first, Jabs approves by number, names appear on the website ONLY inside FAQ answers.
5. Photos: 1600 x 1600 on #F5F5F0, label "Model No: <model> <view>", colour check (brighten or darken), alt text on every picture.
6. Publish only after Jabs says "yes". Commit and push only when Jabs asks. Never overwrite CLAUDE.md (append only).
7. Every decision Jabs finalises is added to THIS file the same day (section 13 log) and Claude says "added to SOP" in one line.
8. End of session: sync the three copies (section 0).

---

## 0. The three copies and the update rule

- MASTER = `SOP-product-update.md` in the maxmachines-web folder, pushed to git.
- MIRROR 1 = same text saved in the claude.ai Project (`claude/SOP-product-update.md`).
- MIRROR 2 = project memory: only a short pointer plus the DONE checklist. No details there.
- Start of every chat: Claude reads all three, says in one line if they differ, uses the master.
- WHEN A DECISION IS FINALISED (Jabs says yes, approves a list, sets a rule): Claude adds it to the right section and to the section 13 log (date + decision) in the working copy before the session ends, and says "added to SOP". Nothing lives only in chat or memory.
- End of every session: (1) master updated, (2) same text saved to the project, (3) Claude gives Jabs the exact commit and push commands for the folder copy. Master first, mirrors after.
- Claude cannot commit or push from its workspace (no git identity). Jabs runs the git commands in Terminal. Use `git --no-pager diff --stat` so the pager does not get stuck.
- CLAUDE.md keeps tech and site-structure notes. It is APPEND ONLY (an overwrite on 22 Oct and again 25 Oct had to be restored from git with `git show HEAD:CLAUDE.md > CLAUDE.md`). An old 6 KB copy of CLAUDE.md exists in chat: never paste it over the real one.
- Writing files to the Mac: stage with device_stage_files, write with device_commit_files using expectedMtimeMs, then re-stage and compare size to confirm it really saved (once a write reported success but the Mac file was unchanged).

## 1. Working rules with Jabs

- Jabs is non-technical but fast. ONE step per message, maximum two. Simple words. Ask what he sees before moving on. Celebrate wins.
- Search first, ask second: Claude researches (brands, keywords, specs) and gives numbered lists; Jabs answers with numbers. A short question when it matters, never a long menu.
- Immediate fixes: when something breaks, fix it before moving on.
- Do not explain "the rest of the list" or ask again: one product at a time with its category and subcategory, then all existing products, then new products.
- Honest feedback over agreement. Say so when a claim is unprovable or a plan is wrong.
- No invented facts or statistics. Only facts from Jabs, the Sheet or the site. (Claude once quoted UAE market numbers that did not exist and Jabs corrected it.)
- No em dash in site text or Sheet data. Use a hyphen.
- Do not close browser tabs until the end of the session.
- Claude in Chrome: use the connected browser whose deviceId starts e0f32078 (Browser 1). Claude cannot pick files; Jabs drags files onto Studio.
- Photo work is done in Claude chat inside the project, not in Claude Code. Code work is Claude Code in Terminal on the Mac only (Windows setup not done).
- The Windows office computer and Mac home computer both used; git on GitHub keeps them in step.

## 2. "Let's update product" flow (trigger phrase)

1. Ask: check recent chats and update CLAUDE.md first, or go straight to the product?
2. Ask the 5 headline details once per machine: Product Name, Brand, Category, Subcategory, Country. Also the headline spec by machine type: vertical bandsaw = wheel diameter; horizontal bandsaw = cutting capacity; lathe = chuck size or bed length; air compressor = CFM or tank size; drilling = drilling capacity; press = tonnage; others ask.
3. Keep those details fixed for all related models until Jabs says "next machine".
4. Produce 4 tab-separated outputs, each with its header row shown first: Products, Variants & Specs, Highlights & Accessories, FAQs. If unsure, ask. Do not assume. Never re-format already imported data unless asked (Jabs objected to this on 28 May).
5. Row order on the Sheet = display order on the site. Headline spec is the FIRST row of each model.
6. N series = standard/budget range, R series = premium range (HABA).

## 3. The Sheet (Google Sheet "MMT Product Catalog")

ID 1PymyVSGmjSvRgyg5n9wXyZNKgVExpHJ4T_XvyCanDWY. Tabs and GIDs: Products=0, Variants & Specs=1924145122, Highlights & Accessories=1811493441, FAQs=872074886.

Products columns: A Name, B Brand, C Category, D Subcategory, E Country, F Display Order, G Short Description, H Full Description, I Featured, J Active, K SEO Title, L Meta Description, M Keywords, N Geo Tags, O YouTube URLs (comma separated), P PDF Labels, Q PDF URLs. Never type in row 1 (the importer reads the headers; B1 was once overwritten and restored).
Variants & Specs: Product Name | Model | Size | Price (always "Request Quote") | Availability (always "In Stock") | Spec Name | Spec Value, one spec per row.
Highlights & Accessories: Product Name | Type (Highlight or Accessory) | Name/Text | Description | Price | Link.
FAQs: Product Name | Question | Answer.

READ: in a Sheet tab run fetch of `.../export?format=csv&gid=<GID>` (never the gviz endpoint, it mangles data). The FAQs tab has a filter that hides rows so screen counts are wrong. If it returns an HTML page or "Failed to fetch", wait and retry. Print only what you need (long output is cut).
WRITE: build text in page JavaScript, `navigator.clipboard.writeText`, click the Name Box (about x=40, y=84), press cmd+a, type the cell (for example M18), Enter, zoom to confirm the cell, then cmd+v. Triple-click on the Name Box does not select it ("A1M18" appears). Never click a cell and type to search. If a Drive dialog opens, press Escape and check nothing changed. Click the right sheet tab before pasting.
Appending rows: first empty row = last non-empty row + 1; paste tab-separated rows; no double quotes in the text.
VERIFY every write: fetch the CSV again and diff against the copy taken before. Only the intended cells may differ; header row unchanged.
Importer: clear all Sheet filters first. It cannot create Categories or Subcategories: create them in Studio before importing. It matches names with normalizeName (em dash vs hyphen). It patches the published documents, so there is no draft to publish, but always check for an old stale draft in Studio and discard it. Run `npm run import-products`. Good result: "Errors : 0".

## 4. Content rules for every product

- Name starts with the brand ("PRG Impact Press Machine"). Own brands: HABA, PRG, Kopis, Airdas, Velse, Modi (never described as third party). Resold: Bradma (say supplier/dealer, not manufacturer). Other approved brands for use: Morse, Bahco, Lenox. Any other brand: search, ask Jabs first. Existing "IST" names for Bradma/Velse stay as they are.
- MMT is manufacturer, SPM (special purpose machine) builder, dealer, distributor, importer and exporter, not only a dealer. Copy, SEO titles and keywords must reflect the right role for each brand.
- Featured and Active are Yes/No. Country e.g. "Made in India".
- SEO Title max 60 characters ending " | Max Machine Tools". Meta Description max 160: what it is + key specs + "Made in India, supplied across India, UAE and export." (own brands) or "Supplied across India, UAE and export." (other brands). No city names in title or meta.
- Geo Tags: Chennai,Ahmedabad,Gujarat,Tamil Nadu,Pan-India,UAE,Middle East,Africa,South Asia,Export (+ Government Supply where present).
- Keywords (column M) are phrases buyers search: machine type, price India, manufacturer/exporter India (supplier/dealer for resold brands), buy online India, UAE, Chennai and Ahmedabad (two separate tags), brand + machine, model numbers, tonnage/size phrases, type phrases only if the machine really is that type (confirm with Jabs; PMC = C frame), plus competitor tags "<brand> <machine> alternative". Never "near me" (Google location + Business Profile handle that).
- Highlights: short single line, Description blank, minimum 5. Standard accessories appear in the Full Description and as ONE Highlight line. Optional extras get individual Accessory rows with a description. An item shown as a standard Highlight must not also be an Accessory (check each time).
- FAQs: minimum 5, target 8 to 17, buyer-focused, NO phone or email in answers. Say "supplied across India and exported worldwide, including UAE" (UAE is preferred, not the only export market). Never type the brand twice ("PRG PRG").
- Real advantages are stated as facts, never "better than" a named brand. Absolute claims are softened ("vibration free" becomes "stable, low-vibration running"; "long tool life" becomes "helps extend tool life").
- Mechanical power press advantages (Jabs 4 Nov, all PMC models; ask about pneumatic; impact and hydraulic differ and Jabs gives theirs when each is updated): body from virgin steel plate, a single plate head to toe; one-piece main shaft, not two pieces; heavy back gear and DP gears; safety locks (keyed and bolted collars) stop the gears moving against the direction of force and protect them from damage; precise movement helps extend tool life.
- Press accessories rules (May): Safety Sensor Curtain and PLC Control Panel are optional for all motorised hydraulic and pneumatic presses (PLC also to be added to C Frame Ram Type and C Frame 4 Guide Plate). Gun Metal Bush Movement on the 4 Pillar Press is a Highlight, not an Accessory. Air Line Pressure spec rows still to be standardised across Impact Press models.
- Marking (June): subcategory names "Marking Impact Press", "Hydro Pneumatic Marking Presses", "VELSE Laser & Pin Marking Machines"; VELSE Fiber Laser Marking Machine models VELSE-FLMM-TABLE-20W and VELSE-FLMM-DESK-20W, standard marking range 110x110 mm (200x200 optional), MAX laser source standard (Raycus on request), PC and UPS not included.
- One product can appear in several places through related-products sections on the page. Do not duplicate product records.

## 5. Competitor brand method (EVERY machine type)

1. Claude searches the internet and IndiaMART, Tradeindia and Aajjo category pages. Collect brand names AND company names (do not use only "Brand" fields: Harihar, Digvijay and Vivek were missed that way).
2. Claude gives a numbered list of names only, plus the buyer-search keyword phrases for that machine type.
3. Jabs replies with the numbers to keep. An unapproved brand is never used.
4. Claude writes: competitor tags in column M and comparison FAQs, 3 to 5 brands per FAQ (20 brands = 5 FAQs), plus 1 or 2 FAQs on the construction advantages where Jabs gave them.
5. Rules: competitor names appear on the website ONLY inside FAQ answers. Never in titles, meta, descriptions, highlights, headings or any visible line. Backend tags may hold them. Wording "comparable Made in India alternative to X". Never claim to be their dealer, never use their logos, photos or model names, never "better than" without proof. No contact details.
6. Where a type has many products (bandsaws) put the comparison FAQs on one horizontal and one vertical product, or vary the wording, so text is not identical on many pages.
7. Draft shown to Jabs before it goes into the Sheet.

Approved lists (Jabs):
- Pillar drilling: Eifco, ITCO, Parmar, JMTC, Prakash, Siddhapura, UNI-TECH, LION, Dalip, KPT
- Radial drilling: Eifco, Parmar, Prakash, YOGI, ASHU MAKE, Hi-Power, HPSM, Batliboi, PANCHAL
- Impact press: Bradma, Hindustan, Ellora, Hammerknock, Benchmark. Toggle press: Bradma, Hindustan
- Bandsaw and vertical bandsaw: Multicut, Indotech, ITL, MEBA, Sagar, Laxmi, Laxman, Laxmen (two different brands), Vikranth, Vijay, Laxson, Krishna
- Banka, Bhavya, Pathak, Premier: drilling, radial and bandsaw
- Mechanical power press (4 Nov): Omkar, Jayshree, Jay Shakti, Accumax, Bhavya, Pathak, Harihar, Digvijay, Vivek, Mayank, Foreman, Shailesh, Sagar, Jayson, Acme, Everest, Mayur, Jekson, Rajesh, Raviraj. Pneumatic power press: confirm when we reach it (extra names seen: Orbital, Hammer Knock, Mercury Pneumatics, National Pneumatic, Sharma Presses, Eminence)
- Other types: run the method first.

## 6. Photos

- Standard: 1600 x 1600 PNG, machine centred on exactly #F5F5F0, label "Model No: <model> <view>" (Inter SemiBold about 64 px, #1F1F1F, short gold #EAB308 line above; DejaVu Sans Bold is used in the cloud workspace because Inter is not installed). Ask Jabs for the model number if missing.
- COLOUR CHECK (4 Nov): before finishing, look at the machine colour and decide whether to brighten or darken it so it matches the other machines; say in one line what was done.
- Background: plain backgrounds are swapped by code; busy or dark ones go through Gemini first. Gemini tips: open with "Edit this image. Enhance this photo and return the edited image", one photo at a time, short prompt (a long prompt makes it answer in text). ChatGPT gave clearer close-ups than Gemini. Gemini adds a small star watermark bottom right: remove it without clipping the machine base. Garbled nameplate text from Gemini is left as is.
- AI pictures "scaled up" from a smaller machine to show a bigger tonnage must be labelled "Representative image"; ask Jabs for a real photo first.
- Upload the large original (up to 5 MB). Visitors never download originals: Sanity resizes and the site serves small files. Pictures carry a CSS watermark "www.maxmachines.in" and right-click/drag block on the site (not inside Studio).
- Views: Left = motor or pillar on the left of the picture, Right = on the right, Front = end-on, Back; extra angles -2, -3. Front views are dropped on drilling pages and not used on press cards (they look flat).
- File names lowercase with hyphens: `model-machinetype-view.png`. Redone picture: old file renamed "-old", new one keeps the name. Files for a Finder drop carry 01-, 02- prefixes so they arrive in order.
- Product page order: all-models group photo first (two rows of three, equal height, small to large, right view, label under each machine, real size feel where machines differ), then model collages, then singles small to large. Per-product exceptions allowed when Jabs chooses (Toggle Press starts with the TPH9 pictures). Close-ups of parts go in the same set with alt text saying what they show.
- Cards: subcategory/product card = 1600 x 1600, one machine cropped tight (about 92 percent of height), no label, no watermark. A multi-machine collage card carries "Model No: <model>" under each machine, no view in the text (short "PMC10 Left" style if the long label overlaps). Category card = dark bold pencil sketch from Gemini, 1600 x 900, paper white set to #F5F5F0, machine about 800 px tall. Card box on the site is 220 px tall, object-contain.
- A subcategory with exactly one product skips its own page and links to the product (page stays live for Google).
- Folders in Dropbox "Ready for upload": USABLE (Jabs renames with model and view), NOT USABLE (flat), READY TO UPLOAD (numbered files). Claude cannot delete from the Mac shell: unused items go to "_to_delete" (or Jabs approves a delete request). Use cp then md5sum comparison before advising Jabs to delete originals. Contact-sheet grids (PIL) are the quick way to review many photos.
- Alt text on every picture: "PRG <MODEL> <machine type> machine, <view> view" (view 2/3 for -2/-3). Group photos: "PRG <machine> machines: <models>"; the same group photo on two products uses identical wording.
- Press subcategory display order: Hydraulic 1, Mechanical Power 2, Pneumatic Power 3, Impact 4, Toggle 5.

## 7. Sanity Studio routine

- Studio: www.maxmachines.in/studio (Jabs signed in). Project p72ubifi, dataset production.
- Pictures: Jabs drags the files onto the Product Images list (not "Add item", not inside a picture dialog). Claude reads each label (zoom [808,125,1298,365]), types alt text (box about 1047,438), closes with X (1278,142), and reorders by dragging row handles (x=835) one row at a time (long drags fail). Finder drops arrive alphabetical, so reorder after. Pictures stay drafts until Jabs says "yes". Draft pictures cannot be previewed on localhost (it shows published content only): publish, then check live.
- YouTube links go in the Sheet column O, then import. Studio-only edits are overwritten by the importer.
- Category and Subcategory (never done by the importer): Image (category field "Icon / Image"), Description (one short line, facts already on the site only), Display Order (check the others first; lower shows first), SEO Meta (title max 60, meta max 160, Keywords as tags). Studio gotcha: the first tag typed in an empty box often vanishes: type all, screenshot, re-add. SEO title above 60 characters shows a warning.
- Webhook: a publish shows live in about a minute (app/api/revalidate/route.ts; normal page refresh 24 hours). Vercel Redeploy only if it does not. Bulk imports can fire many webhook calls.
- Vercel free tier: ISR Writes limit 200,000 a month (153,518 reached on 9 Oct with 60 second refresh; fixed). Every new Sanity page must keep revalidate at 3600 or higher. Check usage around 9 Nov.

## 8. DONE means all of these are ticked (per product)

1. Sheet Products row: descriptions, SEO title, meta, geo, keywords with buyer phrases and competitor tags, YouTube links
2. Sheet Specs: models and specs, headline spec first
3. Highlights (5+) and Accessories (standard vs optional checked)
4. FAQs 8+ including comparison FAQs with approved brands and construction FAQs; no "PRG PRG"; no contact details
5. `npm run import-products` run, Errors 0; stale draft discarded
6. Pictures: labels, colour check, alt text, order; card picture; published
7. Category and Subcategory done (card, description, display order, SEO, keywords) and published
8. Live page checked: title, FAQ count in the page data, highlights, pictures, videos, no competitor names outside FAQs. Ground truth if AI fetches disagree: Jabs runs `curl -s <url> | grep -o "<word>"` (web fetch returns stale cache)
9. This SOP, CLAUDE.md status line and the log (section 13) updated; copies synced; commit and push when Jabs asks

## 9. Retrofit to-do: run sections 4, 5 and 8 on every machine already live

Done with the full method: PRG Mechanical Power Press (4 Nov 2026).
Competitor FAQs exist from 25 Oct but re-check against this SOP (advantages, keyword phrases, brand coverage): PRG Impact Press, PRG Pillar Drilling, PRG Radial Drilling, HABA Standard Series horizontal bandsaw, PRG Standard Series vertical bandsaw, PRG Toggle Press.
Need the full method: HABA R and Eco horizontal bandsaws, HABA R and PRG Eco vertical bandsaws, PRG Multi Spindle Drill Head, drilling cum milling, other drilling, all Marking products (Bradma, Velse), lathes, every other product in the Sheet.
Order: one product at a time with its category and subcategory, then the rest, then new products.

## 10. Code changes (Claude Code in Terminal)

- Plan and discuss first. Show the diff and WAIT for "go" before any commit or push (Claude Code has pushed early). Check on localhost:3000, then `git add . && git commit && git push`; Vercel deploys in about 2 minutes.
- If Claude Code asks to log in, type `/login`, authorise in the browser, then resend the message. Option "Yes, allow all edits during this session" helps for a batch of edits.
- Large pasted code can silently drop `<a` tags (heredoc). Patch with a python3 script or `grep` then `sed -i ''` on exact lines.
- Revalidate must never go back to 60.
- Site rules already built: SSG pages with generateMetadata and canonical tags, JSON-LD (Organization, Product, FAQPage, BreadcrumbList), sitemap, robots (allow all AI crawlers, block /studio/ and /api/), llms.txt, security headers (vercel.json), Upstash rate limit 5 requests a minute on /api/enquiry, Open Graph tags, /export-and-uae page, WhatsApp links only through waLink() in lib/whatsapp.ts (never a bare wa.me link).

## 11. Never change or break (decisions already made)

- GOLDEN RULE: everything must help AI tools find and trust us. Never block AI crawlers. Content is plain text in the page (specs as text tables, not images or PDFs). One set of facts everywhere (address, since 1963, MMT since 2012, response time, WhatsApp number).
- The contact form writes to a Google Form, then a Google Sheet, which sends an instant email and WhatsApp to the customer; the same Sheet feeds Magic CRM (tenant MMT_001) and the IndiaMART automation. DO NOT BREAK.
- The site lists only fast-moving machines (hundreds exist): specs first, photos and videos later. Client logos are all real customers: keep them. Social media is handled in the separate marketing project. No dark/light mode toggle, ever.
- /blog and /our-clients stay hidden from Navbar and Footer until they have real content.
- Hostinger incident 28 Oct: never click "Connect domain" for the old WordPress maxmachines.in on Hostinger; never press the CDN "Disable" link or "Reset DNS records" without checking DNS first. Correct DNS: A @ 216.198.79.1 and CNAME www dc344377a2c35a6b.vercel-dns-017.com. If the "not private" warning returns: Vercel Settings > Domains, then Hostinger DNS history, then Restore.
- Brochure: the old PDF catalogue (thousands of copies) links to old /shop/... and /product-category/... URLs. The redirect to /products?utm_source=brochure&utm_medium=pdf was added and pushed on 28 Oct (per the chat summary; CLAUDE.md still says "not committed": verify on the live site). A new catalogue will come later.
- Google Business Profile stays Chennai only; Ahmedabad is in the description only.

## 12. Business facts that appear on the site

Max Machine Tools (MMT), group since 1963, MMT since 2012, ISO 9001:2015, Chennai HQ (84 Armenian Street, Parrys) and Ahmedabad (Navrangpura). Sales WhatsApp 93828 61514 (floating button and site links). Export WhatsApp or call 99620 61514. Exports regularly by air and sea; IEC holder (never show the number); Certificate of Origin, commercial invoice, packing list. GST 33AAWFM0648L1ZS.

## 13. Open items and decision log

Open items (4 Nov 2026):
- PRG Mechanical Power Press: Jabs to say which of the 10 accessories are standard and which optional (knock-out system is both a Highlight and an Accessory today). Photos missing for PMC5, PMC80, PMC100.
- Pneumatic Power Press and Hydraulic Press: subcategories empty, products not started; pictures from Jabs; ask whether the PRG advantages apply to pneumatic. More press subcategories deferred: Die and Tools, Feeder, Automation.
- Bradma: Stamp Marks and the missing Label Marker page. Marking Machines, Air Compressor, Die Tools for Press categories to build.
- Card pictures missing for Lathe and Marking Solutions. Ask whether the subcategory bandsaw cards should be darkened.
- YouTube videos missing on HABA Eco horizontal, PRG Eco vertical, PRG Pillar Drilling, PRG Toggle Press.
- Display Order is broken globally (needs a per-subcategory fix) and a multi-subcategory schema upgrade is pending (Impact and Toggle press).
- Website plan items still open: GA4 key events (form submitted, WhatsApp click, call click, catalogue requested); check the "Fill Form" buttons feed the same Sheet (report only); About page edits (remove Kerdoss and Laser Unlimited from leadership, shorten the Late Mr. P.R. Garg biography, fix "10+ export countries" counting Dubai and UAE twice); "we respond within the hour" versus "calls within 4 business hours" must be made the same everywhere (Jabs to choose); navigation consistency; product page template (one video, 3 photos, key specs, WhatsApp quote button); alt text and a text summary for every video; /about, /blog, /our-clients content; meta descriptions on Home and About mention Milling and Laser which are not categories.
- Analytics: monthly GA4 review (the 404 problem is addressed by the redirect; recheck), AI traffic note (all 12 AI-assistant sessions came from ChatGPT), Vercel ISR check around 9 Nov.
- Off-site (Jabs, slowly): Google Business Profile (Chennai, with reviews), Search Console (add property, submit sitemap.xml, request indexing for /export-and-uae and top products), YouTube videos (title with machine + brand + price India, link back in the description), IndiaMART/TradeIndia/Alibaba listings, backlinks, LinkedIn/Facebook/Instagram/WhatsApp channel links, posting rhythm (marketing project), same name-address-phone everywhere, PageSpeed check.
- Housekeeping: empty subfolders in "Mechanical Press - NOT USABLE" and files in "_to_delete" for Jabs to bin.

Decision log (newest at the bottom; Claude appends here the day a decision is made):
- 2026-09-17: Pages converted to server-rendered (SSG); security headers; rate limit; Open Graph; Blog and Our Clients hidden; no dark mode toggle.
- 2026-10-20: Model label SOP, file naming, view naming, single-product subcategories skip to the product, card image styles.
- 2026-10-22: Categories and subcategories filled by hand in Studio; watermark and right-click block; webhook plan.
- 2026-10-24: Impact and Toggle stay separate products; a product is not finished until its category and subcategory are done; webhook built, refresh 24 hours.
- 2026-10-25: Keyword SOP, SEO title/meta/geo SOP, brand rules, competitor-brand rules and lists, export page, WhatsApp message, structured data, llms.txt.
- 2026-10-28: Hostinger incident fix, brochure redirect, 404 diagnosis, Google Business Profile Chennai only.
- 2026-11-04: Mechanical Power Press done (11 pictures, 4 videos, subcategory, FAQs, highlights, keywords). Competitor method with numbered name lists and Jabs's approved 20 mechanical press brands. PRG mechanical press advantages as facts. Colour check added to photos. Retrofit of competitor FAQs and advantages to all live machines. One master SOP with three synced copies and a same-day decision log.
