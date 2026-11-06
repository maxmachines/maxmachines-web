# SOP - maxmachines.in (single master file)

Version 4.3, 6 Nov 2026 (after the 5-6 Nov evening sitting: six bandsaws retrofitted and live, product page redesigned, redirect set; fortnightly visibility check and tomorrow's work list added). Sections 14 to 19 hold the knowledge, section 20 the decisions made on 5 Nov, section 21 the master status register (day 1 to date) and section 22 the single master to-do list. Owner: Jabs. Built from the project notes, CLAUDE.md and every chat summary from 17 Sep to 4 Nov 2026 plus the May/June press and marking chats.

READ THIS FILE FIRST in every new chat of the MaxMachines.in project. If anything here disagrees with CLAUDE.md, project notes or memory, THIS FILE WINS.

---

## ONE-PAGE SUMMARY (read this if nothing else)

1. One step at a time. Commands in code blocks, always starting with `cd ~/Desktop/maxmachines/maxmachines-web`.
2. The Google Sheet is the source for products. Sanity is filled by import. Categories and subcategories are filled by hand in Studio.
3. A product is DONE only when the checklist in section 8 is fully ticked, including its category and subcategory, and the live page is checked. SCOPE RULE: photos are the final step. Once a product has photos uploaded, EVERYTHING in section 8 must be done for it. Products without photos wait until their photos arrive.
4. Competitor brands: search first, Jabs approves by number, names appear on the website ONLY inside FAQ answers.
5. Photos: 1600 x 1600 on #F5F5F0, label "Model No: <model> <view>", colour check (brighten or darken), alt text on every picture.
6. Publish only after Jabs says "yes". Commit and push only when Jabs asks. Never overwrite CLAUDE.md (append only).
7. STATUS AND TO-DO live in sections 21 and 22 of this file. Update them the same day a task is done or added. Every decision Jabs finalises is added to THIS file the same day (section 13 log) and Claude says "added to SOP" in one line.
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
- ALL machines and products (Jabs, 4 Nov): spares are always available, and MMT gives a lifetime guarantee of spares supply even if the machine model changes (Highlight + FAQ). CONFIRMATION RULE (Jabs, 4 Nov evening): ask Jabs for each product before using this point, and the same for the point "every machine is tested before dispatch and a test video is recorded" (true for almost all machines). Never add either without his yes for that product. (5 Nov: the lifetime guarantee is never stated for items MMT only trades, such as resold brands; it is used only for what MMT makes.)
- Impact press advantages (Jabs, 4 Nov): the shaft is solid, not a pipe, so it is heavy and runs with less vibration; spring controlled load adjustment. Check with Jabs whether the same points apply to the toggle press.
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
- Impact press: Bradma, Hindustan, Ellora, Hammerknock, Benchmark. Toggle press (corrected 5 Nov): Precision Engineering Products (Exacta), Jeet Machine Tools, Bharat Machines Press, Balaji. Bradma and Hindustan make impact presses, not toggle, so they are removed from toggle FAQs and tags
- Bandsaw (horizontal, 19 names, final 5 Nov night): Indotech, Multicut, ITL, MEBA, Laxmi, Laxman, Laxson, Laxmen (Laxman, Laxson and Laxmen are three different brands), Vikrant, Vijay, Krishna, Sagar, Accucut, SPM Tools, MSC, Banka, Bhavya, Pathak, Premier. Vertical bandsaw (17 names): the same list without SPM Tools and MSC. PRG Eco vertical (soft material and wood) uses only Jai, Umiya, Mahavir and Sagar. VIKRANT RULE (Jabs, 5 Nov night): Vikrant Machinery is a supplier (internal information, never written on the site as a maker). The name Vikrant is used ONLY as a competitor brand name inside FAQ answers and keyword tags, like any other brand. Never write that any MMT machine is made by or sourced from Vikrant. Section 20 points 17 and 25
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

## 9. Retrofit to-do: products that already have photos (scope set by Jabs, 4 Nov 2026)

Only products with photos uploaded are retrofitted; run sections 4, 5 and 8 on each. Tick list (status as of 6 Nov: all ten ticked; the six bandsaws were done on the night of 5-6 Nov, Sheet counts in section 13):
- [x] PRG Mechanical Power Press: full method done; lifetime spares Highlight + FAQ written to Sheet 4 Nov (import pending)
- [x] PRG Impact Press Machine: advantages, spares FAQ and highlights written to Sheet 4 Nov (import pending)
- [x] PRG Toggle Press Machine: brands, accuracy and spares FAQ and highlights written to Sheet 4 Nov (import pending)
- [x] PRG Pillar Drilling Machine: written to Sheet 4 Nov (import pending; no video yet)
- [x] HABA Standard Series horizontal bandsaw - DONE 5-6 Nov 2026, imported, live
- [x] HABA R Series horizontal bandsaw - DONE 5-6 Nov 2026, imported, live
- [x] HABA Eco Series horizontal bandsaw (no video yet) - DONE 5-6 Nov 2026, imported, live
- [x] PRG Standard Series vertical metal cutting bandsaw - DONE 5-6 Nov 2026, imported, live
- [x] HABA R Series vertical metal cutting bandsaw - DONE 5-6 Nov 2026, imported, live
- [x] PRG Eco Series vertical metal cutting bandsaw (no video yet) - DONE 5-6 Nov 2026, imported, live
Check in Studio whether any other product already has pictures and add it here.
Everything else (radial drilling, other bandsaws, tapping, milling, multi drill head, automation, pneumatic and hydraulic press, lathes, marking) is done completely, in order, when its photos arrive. Radial Drilling already has competitor FAQs from 25 Oct.

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
- Brochure: the old PDF catalogue (thousands of copies) links to old /shop/... and /product-category/... URLs. The redirect to /products?utm_source=brochure&utm_medium=pdf is LIVE (confirmed by Jabs 5 Nov: old /shop links land on /products). CLAUDE.md wording corrected 5 Nov. A new catalogue will come later.
- Google Business Profile stays Chennai only; Ahmedabad is in the description only.

## 12. Business facts that appear on the site

Max Machine Tools (MMT), group since 1963, MMT since 2012, ISO 9001:2015, Chennai HQ (84 Armenian Street, Parrys) and Ahmedabad (Navrangpura). Sales WhatsApp 93828 61514 (floating button and site links). Export WhatsApp or call 99620 61514. Exports regularly by air and sea; IEC holder (never show the number); Certificate of Origin, commercial invoice, packing list. GST 33AAWFM0648L1ZS.

## 13. Open items and decision log

Open items: see section 22 (single master to-do list). Do not keep a second list here.

Decision log (newest at the bottom; Claude appends here the day a decision is made):
- 2026-09-17: Pages converted to server-rendered (SSG); security headers; rate limit; Open Graph; Blog and Our Clients hidden; no dark mode toggle.
- 2026-10-20: Model label SOP, file naming, view naming, single-product subcategories skip to the product, card image styles.
- 2026-10-22: Categories and subcategories filled by hand in Studio; watermark and right-click block; webhook plan.
- 2026-10-24: Impact and Toggle stay separate products; a product is not finished until its category and subcategory are done; webhook built, refresh 24 hours.
- 2026-10-25: Keyword SOP, SEO title/meta/geo SOP, brand rules, competitor-brand rules and lists, export page, WhatsApp message, structured data, llms.txt.
- 2026-10-28: Hostinger incident fix, brochure redirect, 404 diagnosis, Google Business Profile Chennai only.
- 2026-11-04: Scope rule: photos are the final step; a product with photos gets everything in section 8; products without photos wait. Lifetime spares guarantee point for ALL machines. Impact press advantages (solid shaft, spring controlled load adjustment).
- 2026-11-04: Mechanical Power Press done (11 pictures, 4 videos, subcategory, FAQs, highlights, keywords). Competitor method with numbered name lists and Jabs's approved 20 mechanical press brands. PRG mechanical press advantages as facts. Colour check added to photos. Retrofit of competitor FAQs and advantages to all live machines. One master SOP with three synced copies and a same-day decision log.
- 2026-11-04 (evening): Toggle press done in Sheet (brands Bradma, Hindustan, Precision Engineering Products/Exacta, Jeet, Bharat Machines Press, Balaji; only spares and accuracy). Impact press FAQs and highlights written. Pillar drilling done in Sheet (CI column from 25mm, MS pipe column below, belt and gear, rack and pinion, automation on request, 6 more brand tags, 5 new FAQs). NEW RULE: ask Jabs per product before using the lifetime spares point and the tested-and-test-video point.
- 2026-11-05 (end of session): import run 4 Nov night, Errors 0, 69 updated; live pages checked (pillar drilling 17 FAQs, mechanical 18, toggle 14, impact 15). Trigger phrases: "Add to SOP" = Claude adds the point to this SOP, the project copy and memory, and logs it; "End session" = Claude syncs all copies, gives the git commands, closes the browser tabs. NEXT SESSION: HABA Standard, R, Eco horizontal bandsaws, then PRG Standard, HABA R, PRG Eco vertical bandsaws (ask per product: advantages, spares point, tested-with-video point). Open: Mechanical Press accessories standard vs optional; brochure redirect status.
- 2026-11-05: Terminal commands rule (Jabs): every Terminal command goes in its own separate code block (one command per block, copy-paste ready), never several commands in one block or inside a sentence. Git push of the 5 Nov SOP done (commit 9338418).
- 2026-11-05 (14:00): Answers to the 18 questions recorded (section 20). Master status register (section 21) and single to-do list (section 22) created; tonight's plan added. Vikrant Machinery is a supplier, removed from competitor lists; Maldives to be added to the export list; P.R. Garg tribute unchanged; full width, language and design go on the to-do list.
- 2026-11-05 (later): SOP made complete as v3: sections 14 to 20 added (site foundation, technical lessons, Google plan, AI visibility, marketing, product-line rules, decisions to settle). Nothing important now lives only in old chats.
- 2026-11-05/06 (night sitting, SOP v4.2): 
  * Toggle Press fixed in the Sheet (Bradma and Hindustan out of the toggle FAQs and tags; 13 FAQs).
  * Vikrant clean-up done, then the rule refined: Vikrant is a competitor NAME only (section 20 points 17 and 25). Bandsaw lists finalised (section 5).
  * Six bandsaws retrofitted in the Sheet with Jabs's real advantages (Standard: heavy wheel, ELECON gearbox, hydraulic cylinder for longer blade life, heavy vice, special-casting wheel that does not wear; R series: German-style arm, safety, wider vice opening; Eco: economical basic model; PRG Standard vertical: proven, simple; HABA R vertical: safety; PRG Eco vertical: low budget, soft material and wood). Lifetime spares and tested-with-video points were confirmed per product. Counts (FAQs / highlights): HABA Standard horizontal row 3 (17 / 13); HABA R horizontal row 2 (16 / 15); HABA Eco horizontal row 4 (17 / 12); PRG Standard vertical row 6 (17 / 15); HABA R vertical row 5 (20 / 19); PRG Eco vertical row 7 (14 / 12). Toggle Press 13 FAQs.
  * Import run: 69 updated, Errors 0. All six checked live.
  * Gotcha: a hidden-row filter on the FAQs tab shifted a paste (it landed in B26 instead of B12). Always remove the filter BEFORE any paste or import, restore from the snapshot, re-paste and CSV-diff.
  * Bandsaw category meta description edited and published in Studio.
  * Code (all committed, pushed and verified live): 378f647 "More in" photos now object-contain on #f5f5f0 (no cropping); 3db4e6f product page reorder (section 20 point 27), Overview with Read more (components/OverviewToggle.tsx, text stays in server HTML, button only when text overflows), video thumbnails with click-to-play (components/VideoPlayer.tsx, Shorts in a 9:16 card, video links kept in the HTML for Google); de8e06c reply promise "within the hour".
  * Vercel: maxmachines.in to www set to 308.
  * Verification method: before and after snapshot of 113 pages (text hash, title, meta, FAQ count, link and image counts) kept in browser localStorage on the production site; after the deploy only /contact differed, as planned. Use it for every future code change ("always check the old and new page").
  * Known cosmetic points: the video row looks uneven when one wide video sits beside two tall Shorts; "More in" cards could go from 130 px to 160 px.

- 2026-11-06 (Jabs, 01:50, on mobile): visibility check every 15 days added at the end of section 16 (Search Console, own Google searches, AI tools, GA4, enquiries; first due 21 Nov 2026). The quarterly AI check in section 17 and section 22 now says every 15 days. Tomorrow's work list added at the top of section 22. SOP v4.3 saved to the Project copy; the Mac master and git copy need syncing at the next Mac sitting (Mac was not linked on mobile).


---

## 14. Site foundation (moved here from CLAUDE.md and the project notes so this file is complete)

- Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS, Sanity CMS (project p72ubifi, dataset production), Vercel (Hobby plan), GitHub maxmachines/maxmachines-web. Local folder `~/Desktop/maxmachines/maxmachines-web`. Domain on Hostinger (DNS only). Mac at home, Windows at office (code work Mac only).
- Design: page background #0f0f0f, second background #1a1a1a, gold #eab308, gold hover #facc15, white and grey text. Product photo panels and cards use #F5F5F0. Navbar and Footer on every page, floating WhatsApp button, social strip above the footer.
- Components: Navbar, Footer, WhatsAppButton, SocialStrip, BrandStrip, Contact, Hero, About, Products, Stats, ProductImageGallery, CategoryCard, ContactEnquiryCTA, EnquireButton, EnquiryForm, EnquiryModal, FaqAccordion, SchemaMarkup.
- Social strip order (Home and Contact): WhatsApp channel, YouTube, Instagram, Facebook, LinkedIn. Links: WhatsApp channel https://whatsapp.com/channel/0029Vb6Sttp1yT2HqDtufu2f, YouTube http://www.youtube.com/MaxMachineToolsModi, Instagram https://www.instagram.com/MaxMachineToolsModi/, Facebook http://www.facebook.com/MaxMachineToolsModi, LinkedIn https://linkedin.com/company/MaxMachineTools. Brand strip (brand names as pills, Home only) exists; real logos to replace the text later.
- Pages built: / , /contact, /about, /products, category, subcategory, product pages, /export-and-uae, /studio, /llms.txt, sitemap, robots. Placeholders hidden from menus: /blog, /our-clients.
- Contacts: Chennai HQ No 84 Armenian Street, Parrys, Chennai 600001, 044-42161514, 93828 61514, info@maxmachines.in. Ahmedabad: 3rd Floor, Chinubhai House, 7B Amrutbaug Colony, Navrangpura, Ahmedabad 380014, 93838 61514, sales@maxmachines.in. Business head Jabs 99620 61514, max@maxmachines.in. Accounts 99621 61514, accounts@maxmachines.in. Google Form for enquiries: https://forms.gle/TXjAGS67M1Nnb2Ye9.
- Secrets: Upstash keys live in `.env.local` (this Mac) and in Vercel environment variables. Never paste them in chat, never commit `.env.local`.
- Old WordPress site (5 years old, Hostinger, backup .wpress 839 MB) is retired. Do not reuse its URLs; the redirect in section 11 handles old links.
- Do not move the project folder into Dropbox (Dropbox can corrupt `.git` and syncs node_modules). Git on GitHub is the backup.

## 15. Technical lessons (why the rules exist)

- Server-rendered pages: until 17 Sep every product page was client-side (useEffect), so Google and all AI tools received an empty "Loading" page. Fixed with async server components, generateStaticParams, generateMetadata and canonical tags. Sanity client `useCdn` must stay false for this. Any new page that reads Sanity must be server-rendered the same way.
- 25 Oct: the site was ignoring every SEO field typed in Sanity. Fixed in generateMetadata at category, subcategory and product level. After any new page type, check that its title and meta come from Sanity.
- Verification of live pages: web fetch tools return stale cache. Ground truth is Jabs running `curl -s <url> | grep -o "<word>"` in Terminal. Cross-check big claims with ChatGPT, Grok and Gemini (this caught /products still client-side and missing og:image).
- Favicon set: icon.png (from Max_Logo_2026.png, 458x464), apple-touch-icon 180x180, manifest with icon-192 and icon-512. The wide public/logo.png (1920x1080, baked-in shadow) must never be used as an icon.
- GA4 script must sit inside the head in app/layout.tsx. Search Console is verified by a meta tag in app/layout.tsx: never remove it.
- Mac commands: `sips` does image resizing and cropping (`sips -c <height> <width>`). For patching a block in a TSX file, an inline `python3 -c` script is more reliable than `sed`. Pager stuck on `:` in Terminal: use `git --no-pager`. Heredoc pastes can drop `<a` tags: check with grep.
- Watermark removal (Gemini star): detect the star by brightness and size, never blank a fixed corner (that cut off machine bases). Remove stray specks by keeping only the largest connected component.
- Image processing tricks: match AI pictures to low-res originals by downscaled grayscale difference; contact-sheet grids to review many photos; `cp` then `md5sum` before deleting originals.
- Vercel: ISR Writes 200,000 a month (see section 7). Image optimisation was moved to Sanity's own image service to ease Vercel load. Re-check usage about 9 Nov 2026 (Vercel emails at 90%).
- Claude workspace limits: Claude cannot git commit or push (no identity), cannot pick files in Studio, cannot reach Sanity's API from its shell. Mac aliases cannot be granted as folders. Very long Dropbox paths: add the folder through "+" then Add folder in the desktop app.
- Dropbox photo path: `/Users/jabeshbagdy/Dropbox/01 Max Machine Tools - Shared/001 Sales Coordinator - Shared/0001 Machine Photos and Catalogue/001 Edited pic for Catalogue 2.0/www.maxmachines.in - Photo uploads and related/Ready for upload`.

## 16. Google: Search Console, Business Profile, Analytics (single plan)

Search Console
- DONE 25 Apr 2026: ownership verified by HTML meta tag; sitemap.xml submitted. (The earlier line in section 13 saying "add property, submit sitemap" is out of date.)
- TO DO: request indexing for /export-and-uae and the top product pages; check Pages (indexed vs not) and Performance (queries) monthly; look for "Crawled - currently not indexed".
- Why "power press manufacturers" did not show (25 Oct): site new to Google, no power press page then, term very competitive. Target buyer phrases (price, dealer, supplier, UAE). Health check still to be done and recorded: `site:maxmachines.in` in Google, sitemap status, robots/sitemap files, PageSpeed, SEO fields on key pages.

Google Business Profile (decided by Jabs 29 Oct)
- Chennai only. No second Ahmedabad listing. Ahmedabad, Gujarat appears only in the description as production, procurement and office.
- Steps, in order: open the profile directly from Google (not from email links) and confirm it exists, is verified and is Chennai only; compare name, address, phones, hours, categories, website with the site; website link `?utm_source=google&utm_medium=business_profile`; add machine and office photos and products; add the Ahmedabad line to the description; post once per new machine; review in Analytics. Owner account is probably max@maxmachines.in: confirm. Collect real customer reviews.

Google Analytics 4 (property 367500154)
- Baseline taken 28 Oct (project docs `ga-baseline-2026-10-28.md`, `ga-ai-traffic-2026-10-28.md`): 30 Sep to 27 Oct, 1,328 views, 820 users, 963 sessions; Direct 800 sessions (11.75% engaged), Organic Search 132 (57.58%), AI Assistant 12, Referral 11; 404 page 377 views (28%).
- Next review about 4 to 9 Nov 2026, same checklist: (1) 404 views fallen and "brochure / pdf" source visible; (2) Direct down, engagement up; (3) /products views up; (4) do brochure visitors reach product or contact pages; (5) who links to /blog and /our-clients; (6) key events; (7) new 404 addresses; (8) is the WhatsApp number in the old brochure answered.
- Key events to create: contact form submitted, WhatsApp click, call click, catalogue requested. Still not done, so enquiries are not measured in GA.
- Tag every link Jabs places outside the site with UTM (`utm_source`, `utm_medium`): brochure/pdf, google/business_profile, youtube/video, indiamart/listing, whatsapp/channel. Untagged clicks land in Direct and hide what works.
- In GA4 the 404 breakdown needs the Pages and screens report switched from "Page title and screen class" to "Page path and screen class".

FORTNIGHTLY VISIBILITY CHECK (every 15 days; decided by Jabs 6 Nov 2026; first check due 21 Nov 2026, then 6 Dec, 21 Dec and so on)
Purpose: see whether Google and the AI tools know our pages, show them, and send customers. Claude runs the steps it can; Jabs does the ones that need his Google login. Write the result as one dated line in section 13 and keep a small table (date, tool, question, result).
1. Search Console (Jabs logs in, Claude reads the screenshots): Pages report - are the new and changed product pages Indexed; "Crawled - currently not indexed" list; URL Inspection on 2 or 3 key product URLs and "Request indexing" if not indexed. Performance report - last 28 days vs the previous check: total impressions, clicks, average position; top queries; top pages; any query with "bandsaw", "Chennai", "Ahmedabad" or a competitor name; which of the six retrofitted bandsaw pages gained.
2. Own Google searches (private window): "horizontal bandsaw machine Chennai", "vertical bandsaw Ahmedabad", "bandsaw machine manufacturer India", "Made in India alternative to <approved competitor> bandsaw", "power press machine price India", "pillar drilling machine Chennai". Note: does maxmachines.in appear, which page, what position. Also `site:maxmachines.in bandsaw` to see what Google has stored.
3. Ask the AI tools (ChatGPT, Gemini, Perplexity, Claude), the same 5 buyer questions each time, e.g. "Who supplies bandsaw machines in Chennai?", "Best Made in India horizontal bandsaw manufacturer", "Which company exports power presses from India to UAE?". Note: is Max Machine Tools named, is maxmachines.in cited as a source, and what wrong facts they state (fix wrong facts at the source: site, IndiaMART, Business Profile). Perplexity shows sources most clearly.
4. Google Analytics 4: compare with the 28 Oct baseline (section 16) - Organic Search sessions, AI Assistant sessions (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai, copilot.microsoft.com), Direct share, 404 views, /products and bandsaw page views. Once the key events exist: contact form, WhatsApp click, call click.
5. Enquiries: count real enquiries since the last check (Sheet, WhatsApp, calls) and ask each new customer "How did you find us?"; note any that mention Google, ChatGPT or a competitor.
6. Reality check: Google needs 2 to 8 weeks to show changes on updated pages; AI tools are slower and less predictable. Keywords in the Sheet do not rank a page alone; titles, content, FAQs, structured data and links from other sites do. Do not judge a change before 4 weeks.

## 17. AI visibility (the golden rule in practice)

- Built: robots.txt allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended); llms.txt generated from Sanity; JSON-LD Organization, LocalBusiness, Product (areaServed, sku/model, category), FAQPage, BreadcrumbList; specs as text tables; consistent facts everywhere.
- Measuring: GA4 channel "AI Assistant". 28 Oct: 12 sessions, all chatgpt.com, landing on Home (5), PRG Impact Press (3), not set (2), Contact (1), Bradma Stamp Marks (1). Counts clicks only; mentions without a click and no-referrer visits are invisible (some sit in Direct). Next review: watch for perplexity.ai, gemini.google.com, claude.ai, copilot.microsoft.com.
- Every 15 days (was quarterly; Jabs 6 Nov) ask ChatGPT, Gemini, Perplexity and Claude the buyer questions in the FORTNIGHTLY VISIBILITY CHECK (end of section 16) and note whether Max Machine Tools is named. Fix the facts they get wrong at the source (site, IndiaMART, Business Profile).
- Every video needs a text summary and every picture alt text (video summaries still to do).
- The future MAXIMUS chatbot (WhatsApp) is expected to read these product pages; keep specs in plain text for it too.

## 18. Marketing and off-site (checklist; posting itself is in the separate marketing project)

- YouTube: title with machine + brand + price India, link back to the product page in the description, UTM tagged. Videos still missing on HABA Eco horizontal, PRG Eco vertical, PRG Pillar Drilling, PRG Toggle Press.
- Marketplaces and directories (IndiaMART, TradeIndia, Alibaba, JustDial): same name, address, phone and website link as the site; replies that share the catalogue use the tagged link.
- Backlinks from own brands and suppliers. Social profiles all link to the site. WhatsApp channel posts per new machine.
- Catalogue: old PDF stays in circulation (redirect covers it). A new catalogue with tagged links will be designed later (Adobe Express Premium via Airtel is available). Decide the one WhatsApp number it uses.
- Bradma: demand exists for the Label Marker (old link clicked 12 times) and it has no page yet. Bradma rules: approved resold brand, never "Made in India", meta ends "Supplied across India, UAE and export.", competitor names only in FAQs. Update Bradma Stamp Marks first (a ChatGPT visitor landed there), publish in batches (webhook and ISR limits).

## 19. Product-line rules (so no machine-type knowledge lives only in old chats)

- HABA N series (standard/budget): worm gear shaft gearbox instead of ELECON, enamel paint instead of powder coating, front screw cylinders, no ISI/IE2 motor marking, no degree cutting. R series = premium. Blade lengths 3000/3760/4100/4860 mm, blade widths 27 mm (8N, 12N) and 34 mm (14N, 20N); 20N 3 HP; coolant pump included on all.
- Lathes (HABA and MODI): Belt Drive (MBL/HBL) and All Geared (HAG, HABA only). Model code = prefix + centre height digits + bed width digits + bore digit (+ bed length suffix, e.g. MBL1233/7). Bore digits: 2=50, 3=79, 4=104, 5=115 or 129, 6=152, 7=178 mm. Extra Heavy Duty is MODI only and custom configurations must be mentioned in Highlights and FAQs; from bed 26 inch the bed is Planner Type Hardened. Name format: Brand + Duty Level + Belt/All Geared + Lathe Machine, bed size in brackets for HD and EHD all geared. Norton Gear Box range shown only as "With Full Norton Gear Box". Panel Board, Padel Stop and Electrical Third Shaft optional from Medium Duty.
- Velse (own brand): positioning is "better than Bradma on customer feedback", never presented as a budget alternative; D3 tool steel for stamp marks and most punches; holders carry V prefix (V8H20, V8M40). Three Bradma holder corrections applied (625H1500, added 250H2L1000 and 312M3000). VELSE Dot Pin Marking Machine still pending. VELSE Metal Label Marking Machine is not a Velse product.
- Press range (PRG, Made in India): nine types planned: Mechanical Power, Pneumatic Power, C Frame Ram Type, C Frame 4 Guide Plate, H Type Motorised, H Type Hand Operated, Fix Frame Ram Type, Fix Frame Piston Type, 4 Pillar Hydraulic; Impact (PIH11, PIH15, PIP25, PIP35) and Toggle (TPH9). Later: Die and Tools, Feeder, Automation subcategories; a Marking Machines category (needs the multi-subcategory schema upgrade).
- Cross-category products: one product record shown in several places through related-products sections (Option 3), never duplicated.
- Importer notes: subcategories must exist in Studio before import; display order is set by hand after loading; product names must not repeat (duplicates overwrite); Active must be Yes.

## 20. Decisions made 5 Nov 2026 (Jabs's answers; these override older notes)

1. Brochure redirect is LIVE. Old links land on /products.
2. WhatsApp numbers: website floating button and links 93828 61514 (sales); export page and brochure 99620 61514. 91760 61514 is live on the CRM but not yet on MAXIMUS (the auto-reply chatbot): show it on the Contact page only, as "coming soon", not as a working button.
3. Reply promise is "within the hour" everywhere. DONE 5 Nov night (commit de8e06c): the four "4 business hours" lines in app/contact/page.tsx, components/EnquiryForm.tsx (2) and components/ContactEnquiryCTA.tsx now say "the hour". The enquiry-form success message (after submit) was not tested live, to avoid triggering real automation; check it the next time Jabs sends a test enquiry.
4. 25 Oct rules win for SEO title, meta (no city names) and geo tags. "Government Supply" stays on products that already have it.
5. Keywords: buyer-search phrases plus Chennai and Ahmedabad (two tags). "Export" appears inside phrases such as "exporter India".
6. Google Business Profile: Chennai only, final. A profile exists; updating it is on the to-do list.
7. MODI is both a brand name and the group's company name ("MODI Machines Group").
8. Kopis = blade brand. Airdas = air compressor brand. They attach to the Cutting Blades and Air Compressor categories when built.
9. Lifetime spares guarantee: ask per product; never for traded items.
10. About page: remove Laser Unlimited (closed, same machines are sold under Max). Add JB Service Solutions (India) as the group's IT services offered to customers (can be marketed). Kerdoss Trade India: one plain factual line in the group list, no marketing; if shown, include the SEBI registration number and have the compliance officer approve the exact wording. Still to confirm with Jabs: shortening the Late Mr. P.R. Garg biography and the "10+ export countries" count (Dubai and UAE counted twice).
11. Display Order is still broken: check and fix (per subcategory).
12. The multi-subcategory schema upgrade is dropped; Impact and Toggle appear in Marking through related products.
13. Planned categories: more than the list (Laser Marking, Shearing, Press Brake, Cutting Blades, Pneumatic Fittings, Small Automation, Vices, Chucks). Jabs will give the full list.
14. Toggle press brands corrected (see section 5).
15. Our Clients page stays hidden. New customers and their logos will be added later (to-do).
16. Main web address is www.maxmachines.in (people type www). On 5 Nov `maxmachines.in` did NOT redirect (address bar unchanged), so both versions are live. DONE 5 Nov night: in Vercel (Settings, Domains) maxmachines.in now redirects to www.maxmachines.in with a permanent 308 (it was 307) and was verified. Do not touch Hostinger DNS (see section 11).
17. Vikrant Machinery (vikrantmachinery.com, Ahmedabad) is a SUPPLIER: MMT gets some machines from them, but sells them under MMT's own brand (HABA, PRG), never under Vikrant's brand. Earlier decision (Jabs 5 Nov, morning): remove "Vikranth" (the old, wrong spelling). REVERSED in part the same night, see point 25. Nobody writes that a machine is made by Vikrant on the website. Their site is a good reference for ideas only (never copy text or pictures).
18. Full-width layout: planned for the next sitting (the site now uses a centred 1280 px box, `max-w-7xl mx-auto`, while Vikrant-style sites run edge to edge with left-aligned text).
19. Language and design: added to the to-do list to decide later (see section 22). Jabs has no homepage design yet: next sitting Claude proposes 2 or 3 homepage design options (or template sites to learn from) and one redesign is done in a single go, so the site does not look like a generic AI-built site. Adobe Express Premium is available for design assets.
20. Small clean-ups done by Claude: CLAUDE.md revalidate wording and redirect status corrected by an appended note; Studio address is www.maxmachines.in/studio (not localhost); April colours blue steel and orange are superseded by black and gold.
21. Late Mr. P.R. Garg tribute on the About page: leave as it is (decided 5 Nov).
22. Export countries on the About page: add Maldives. More countries are added when the customer list is updated. With Maldives the list has 11 countries (Dubai and UAE are the same country), so "10+" is true. Tidy the Dubai/UAE duplicate when the customer list is done.
23. Leadership line for Jabs: as decided in point 10 (Laser Unlimited out, JB Service Solutions in, Kerdoss one factual line, compliance officer approves the wording).
24. Tonight's work (5 Nov evening) was planned in section 22, "TONIGHT'S PLAN" and is done (see the 5-6 Nov log in section 13).
25. (Jabs, 5 Nov night) VIKRANT final: "Vikrant" (correct spelling) is a bandsaw brand that buyers search, so it IS a competitor name, added to the bandsaw lists (horizontal and vertical) together with Accucut. SPM Tools and MSC are added to horizontal only. This is allowed only inside FAQ answers and keyword tags. The fact that MMT gets some machines from Vikrant Machinery stays internal and is never written on the site. MSC is a manufacturer name.
26. (Jabs, 5 Nov night) Comparison FAQs: vary the question wording from product to product so the 'I am comparing' opening does not repeat. Where the same wording would repeat, change it.
27. (Jabs, 5 Nov night) Product page section order (same template for every product): photos, Specifications, Overview (short with Read more), Videos, Accessories, More in, Compare All Models, Variants and Pricing, PDF Downloads, FAQs last (FAQs are for Google and AI tools, not for customers). Customers (MSME) look at pictures and videos first; corporates read the detail.

## 21. MASTER STATUS REGISTER (day 1 to 5 Nov 2026)

Status key: DONE = built and live. PARTLY = started, something left. PENDING = not started. CHECK = needs verifying. Conflicts raised on 5 Nov were all answered (section 20).
Sources: project memory, every chat summary from 22 Apr to 4 Nov 2026, CLAUDE.md (391 lines, read in full), SOP v2, project docs. Chats from April to early June were read as summaries only.

### 21A. Timeline (what happened, in order)

| When | What |
|---|---|
| About 20 Apr 2026 | Project folder created (Next.js 15, Tailwind, Vercel, GitHub maxmachines/maxmachines-web). WordPress rejected for a custom build. Old WordPress site (5 years old, Hostinger) retired. |
| 22 Apr | Sanity CMS designed: Category > Subcategory > Product > Variants. Schemas, Studio at /studio, webhook route drafted. |
| 22-25 Apr | Homepage, Contact (form + Google Maps + Ahmedabad card), Products, Category, Subcategory and Product pages, About page, Blog placeholder, Our Clients page (200+ named clients). Enquiry modal: silently posts to the Google Form and sends a backup email by Resend. Social strip and brand strip. Google Sheet importer built (4 tabs). Sitemap, robots, JSON-LD (Organization, LocalBusiness, Product). Search Console verified and sitemap submitted. GA4 moved into head. DNS on Hostinger set for Vercel, Resend and Brevo. First CLAUDE.md. |
| 2 May | Backup explained: GitHub (code), Vercel (deploy history, rollback), Sanity (content). |
| 13 May | HABA HMM9R/12R/13R bandsaw data formatted; N-series PDF received. |
| 21 May | Sanity trial email: free Starter plan is enough, public dataset is read-only, no action. |
| 26 May | Importer overhaul: new 4-tab structure, Yes/No flags, displayOrder, native CSV export fix (gviz endpoint was mangling data). Vertical Bandsaw category imported (HABA R, PRG Standard, Eco, Special Application, Wood, AAC block). Trigger phrase "let's update product" created. |
| 27 May | Drilling range: 7 subcategories (Pillar, Drilling cum Tapping, Pure Tapping, Drilling cum Milling, Radial, Multi Drill Heads, Automation). Spec table redesigned as one comparison table. |
| 28 May | Press range: nine press types plus Impact (PIH11, PIH15, PIP25, PIP35) and Toggle (TPH6, TPH9, TPP6) started. |
| 29 May | Lathe range complete: Belt Drive and All Geared (MODI and HABA). |
| 3 Jun | Marking Solutions: Bradma full range, Velse range, PRG Hydro Pneumatic Marking Press. |
| 16 Jun | HABA HMM8/N series bandsaws formatted; the import workflow debugged step by step. |
| 16-17 Sep | Full audit: all product pages were client-side (empty to Google and AI tools). Session 1 server-rendering, Session 2 security (headers, Upstash rate limit), Session 3 Open Graph, Blog and Our Clients hidden, homepage products from Sanity. Cross-checked with ChatGPT, Grok, Gemini; /products and og:image gaps fixed. |
| 18-19 Sep | Card images object-contain on #F5F5F0. Favicon set rebuilt. VMCB16RSE photos. Page refresh 60 s. Gallery made square. |
| 9 Oct | Vercel ISR Writes at 77%: refresh raised to 3600. |
| 17-18 Oct | Audit plan; GOLDEN RULE (AI readability) set; GA4 found 404 = half of visits. |
| 20-21 Oct | Photo SOP (label, naming, views, group photo), single-product subcategory skip, drilling photos. |
| 22 Oct | Categories/subcategories filled by hand rule; all 6 bandsaw products pictured and published; bandsaw cards; gradient removed. |
| 23 Oct | Picture protection (watermark + right-click block); Sanity image service; webhook; refresh 24 h. Press pictures finished. |
| 24 Oct | Impact and Toggle press pictures published. Standing rule: product + category + subcategory finish together. |
| 25 Oct | Keyword SOP; SEO title/meta/geo SOP; brands; competitor-brand rules; 69 products rewritten and imported; site now outputs the Sanity SEO fields; FAQ/breadcrumb data, llms.txt, robots, /export-and-uae, WhatsApp pre-filled messages; Press Machines, Impact, Toggle published; 9 products audited. |
| 28 Oct | GA4 review (404 = 28% of views). Brochure redirect. Hostinger CDN incident fixed. AI traffic baseline. |
| 29 Oct | Google Business Profile decided: Chennai only. Plan for Bradma and power press. |
| 3-4 Nov | Mechanical Power Press done (11 pictures, 4 videos, subcategory, FAQs). Competitor method. Retrofit of Impact, Toggle, Pillar Drilling. Master SOP created. |
| 5 Nov | Import run (69 updated, 0 errors), live pages checked. SOP final pushed (commit 5987daf). This register drafted. |
| 5-6 Nov (night) | Toggle fix, Vikrant clean-up, six bandsaws retrofitted and imported (0 errors), "More in" photo fix, product page reorder, Read more, video thumbnails, "within the hour", maxmachines.in 308 redirect. SOP v4.2. |

---

### 21B. Status by area

#### B1. Website build (pages and code)
| Item | Status |
|---|---|
| Home, Contact, About, Products, Category, Subcategory, Product pages | DONE |
| Enquiry modal (Google Form + Resend backup, honeypot, phone clean-up) | DONE (do not break) |
| Server-rendered pages, canonical, generateMetadata, JSON-LD | DONE |
| Sanity SEO fields output on all page levels | DONE (25 Oct) |
| FAQPage, BreadcrumbList, Product JSON-LD with areaServed | DONE |
| llms.txt, robots.txt (allow AI crawlers), sitemap | DONE |
| /export-and-uae page | DONE |
| WhatsApp pre-filled messages (waLink) | DONE |
| Security headers, rate limit 5/min on /api/enquiry | DONE |
| Open Graph / Twitter tags with logo fallback | DONE |
| Favicon / apple icon / manifest | DONE |
| Picture watermark + right-click block | DONE (revert with git revert 28a1fcd) |
| Sanity webhook instant refresh, refresh 24 h | DONE |
| Single-product subcategory skips to the product | DONE |
| Brochure redirect /shop and /product-category to /products | DONE (confirmed by Jabs 5 Nov) |
| Hostinger CDN incident | DONE; rules in SOP section 11 |
| Custom helpful 404 page with links and WhatsApp | CHECK: Sept audit said 404 handling fine; plan asked for a helpful one |
| Homepage LocalBusiness JSON-LD | CHECK: memory says "later"; Sept audit says already in layout |
| GA4 key events (form, WhatsApp click, call click, catalogue) | PENDING |
| Check "Fill Form" buttons feed the same Sheet (report only) | PENDING |
| Meta descriptions on Home/About mention Milling and Laser (not categories) | PENDING |
| About page edits (Kerdoss, Laser Unlimited, P.R. Garg bio, export count) | PENDING: decided 5 Nov, see section 20 |
| Response-time wording made the same everywhere | PENDING: decided "within the hour" everywhere; Contact page wording still to change |
| Navigation consistency | PENDING (likely fixed by hiding Blog/Clients; recheck) |
| Product page template (one video, 3 photos, key specs, WhatsApp quote) | PENDING |
| Text summary for every video; alt text on all pictures | PARTLY (alt text done on published; video summaries pending) |
| "Don't see your machine? Ask us" button on category pages | PENDING |
| /blog, /our-clients real content (page exists) | PENDING; hidden from menus |
| Display Order fix per subcategory | PENDING: Jabs confirmed still broken 5 Nov; check and fix |
| Multi-subcategory schema upgrade (Impact/Toggle in Marking) | DROPPED 5 Nov: related products method used instead |
| Windows office setup for code work | PENDING (Mac only) |
| Dedicated page per brand (HABA, PRG, Kopis, Airdas, Velse, Modi, Bradma...) | PENDING (in 25 Oct SEO plan) |
| Area pages (e.g. bandsaw in Chennai/Ahmedabad hubs) | PENDING (in 25 Oct SEO plan) |
| Export-country pages | PENDING |

#### B2. Catalogue (products in the Google Sheet and Sanity)
| Category | Data in Sheet/Sanity | Pictures | Category and subcategory cards |
|---|---|---|---|
| Horizontal bandsaw (HABA Standard, R, Eco) | DONE | DONE | DONE |
| Vertical bandsaw (HABA R, PRG Standard, Eco) | DONE | DONE | DONE |
| Vertical bandsaw: Special Application, Wood Cutting, AAC Block | DONE (data) | PENDING | PENDING |
| Drilling: Pillar | DONE | DONE | DONE |
| Drilling: Drilling cum Tapping, Pure Tapping, Drilling cum Milling, Radial, Multi Drill Heads, Automation | DONE (data) | PENDING | PENDING |
| Press: Impact, Toggle | DONE | DONE | DONE |
| Press: Mechanical Power | DONE (4 models pictured: PMC10/20/30/50) | PARTLY: PMC5, PMC80, PMC100 missing | DONE |
| Press: Pneumatic Power, Hydraulic (7 types) | Data from May | PENDING | PENDING |
| Press: Die and Tools, Feeder, Automation | NOT STARTED | n/a | n/a |
| Lathe: Belt Drive, All Geared | DONE (data) | PENDING | PENDING (no card) |
| Marking Solutions: Bradma, Velse, PRG Hydro Pneumatic | DONE (data) | PENDING | PENDING (no card) |
| VELSE Dot Pin Marking Machine | PENDING | | |
| Bradma Label Marker page (old link clicked 12 times) | PENDING | | |
| Air Compressor category | PENDING | | |
| Die Tools for Press | PENDING | | |
| Future categories listed 18 Oct: Laser Marking, Shearing, Press Brake, Cutting Blades, Metal Pneumatic Fittings, Small Automation, Vices, Chucks | PENDING (in plan, more categories than listed; Jabs will list them) |

#### B3. Retrofit of competitor FAQs, advantages, spares, keywords (products with photos)
DONE in Sheet 4 Nov and imported 5 Nov: PRG Mechanical Power Press, Impact Press, Toggle Press, Pillar Drilling.
DONE 5-6 Nov and imported (0 errors, live): HABA Standard, R and Eco horizontal; PRG Standard, HABA R and PRG Eco vertical bandsaws. Nothing pending in this retrofit. Rule for future machines: ask per product about advantages, lifetime spares point, tested-with-video point.
Videos missing: HABA Eco horizontal, PRG Eco vertical, PRG Pillar Drilling, PRG Toggle Press.
Mechanical Press: which accessories are standard and which optional is open.

#### B4. SEO, Google, AI
| Item | Status |
|---|---|
| Keyword SOP, SEO title/meta/geo SOP | DONE on all 69 products and all published categories |
| Competitor FAQs + tags | DONE for bandsaws (2 products), pillar, radial, impact, toggle, mechanical; other types pending |
| Search Console verified, sitemap submitted (25 Apr) | DONE |
| Request indexing for /export-and-uae and top products | PENDING |
| Search Console monthly check; "site:" health check; PageSpeed | PENDING |
| Google Business Profile (Chennai only) | PENDING: 6 steps, not started; whether a verified profile exists is unconfirmed |
| Customer Google reviews | PENDING |
| GA4 baseline 28 Oct, AI traffic baseline | DONE (review due now, 4-9 Nov) |
| GA4 key events | PENDING |
| UTM tags on all outside links | PARTLY (brochure only) |
| "Ask the AI tools" check (now every 15 days, see end of section 16) | PENDING: first due 21 Nov 2026 |

#### B5. Marketing and off-site (posting itself is in the separate marketing project)
YouTube product videos with link back; IndiaMART/TradeIndia/Alibaba/JustDial listings; backlinks; social profile links; new catalogue with tagged links (Adobe Express Premium); IndiaMART reply PDF stays old until then. All PENDING, Jabs does slowly.

#### B6. Connected systems (must not break; separate projects)
Contact form > Google Form > Sheet > instant email + WhatsApp > Magic CRM (tenant MMT_001) > IndiaMART automation. MAXIMUS WhatsApp chatbot (WABA number 91760 61514, architecture decision open). Zoho Books/Flow automation. Quotation Pro. Not part of the website work but affected by number and form changes.

#### B7. Infrastructure and housekeeping
Sanity free plan (22 MB of 100 GB used); Vercel Hobby (ISR Writes 72% on 28 Oct, recheck about 9 Nov); Upstash free; Brevo and Resend DNS in place; GitHub backup. Housekeeping: empty folders in "Mechanical Press - NOT USABLE"; files in "_to_delete" for Jabs to bin; CLAUDE.md is append-only and never pasted over; the 6 KB old CLAUDE.md copy exists in chat.

---


## 22. MASTER TO-DO LIST (single list; tick and date items here)

### TONIGHT'S PLAN (5 Nov 2026 evening, product update sitting) - DONE except items 7 (Display Order) and 8 (full width and design), which move to the open list below
Rules for the sitting: one step at a time, every Terminal command in its own code box, Claude in Chrome on Browser 1 (e0f3...), nothing published, committed or pushed without Jabs's yes.
1. Start: Claude reads all three copies of this SOP (folder, project, git). They were identical at 14:00 IST (git commit 747e089 plus the 4.1 edits).
2. Toggle Press fix: remove Bradma and Hindustan from the toggle FAQs and the toggle keyword tags in the Sheet; keep Precision Engineering (Exacta), Jeet, Bharat Machines Press, Balaji. Read the Sheet by CSV first, show Jabs the exact rows to change, write, verify by CSV diff.
3. Vikrant clean-up: search the Sheet CSV (Products column M and the FAQs tab) for "Vikranth" and "Vikrant". Remove those names from tags and from the comparison FAQs of the HABA Standard horizontal and PRG Standard vertical bandsaw (rows listed in the 25 Oct notes). Show the rows, wait for yes, write, verify.
4. Bandsaw retrofit, ONE product at a time, in this order: HABA Standard horizontal, HABA R horizontal, HABA Eco horizontal, PRG Standard vertical, HABA R vertical, PRG Eco vertical. For each product Claude asks Jabs, one question at a time: (a) the real advantages of this machine, (b) may the lifetime spares point be used (never for traded items), (c) may the tested-before-dispatch and test-video point be used. Competitor names: use the approved bandsaw list (section 5); Claude may offer a quick search for missed company names, Jabs decides. Then write highlights, FAQs (8 or more), keyword tags and competitor tags to the Sheet, show the draft first, verify by CSV.
5. After all six: Jabs clears Sheet filters and runs `npm run import-products` (Errors 0). Claude checks stale drafts in Studio, checks the live pages (FAQ count, highlights, no competitor names outside FAQs, no "Vikrant" anywhere) and ticks section 9.
6. Category and subcategory check for the bandsaw products (section 8 point 7).
7. If time is left: Contact page wording "within the hour" and "coming soon" number (short Claude Code prompt, diff first, wait for go); www redirect in Vercel (Jabs clicks, Claude guides); Display Order check.
8. Full-width layout and design: Claude shows 2 or 3 homepage design options first; no code until Jabs picks one. Tonight if time allows, otherwise the next sitting.
9. End: say "End session": Claude updates sections 21 and 22 and the log, syncs the three copies, gives the git commands (one per box).

### TOMORROW'S WORK (Fri 6 Nov 2026 onward; one item at a time, in this order; Jabs on mobile tonight, the Mac copy of this SOP and the git commit are synced at the start of the next Mac sitting)
1. Studio: Display Order, card picture, description and SEO fields for the bandsaw subcategories without pictures (Horizontal Semi Auto, Fully Auto, Double Column, Special Application, Wood Cutting, AAC Block). Special Application has no Display Order. Then check Display Order on the other subcategories.
2. Full-width layout and homepage design: Claude proposes 2 or 3 options (or template sites to learn from); no code until Jabs picks one; one build in a single go.
3. About page edits (decisions 10 and 22): Laser Unlimited out, JB Service Solutions in, one factual Kerdoss line (compliance officer approves the wording), Maldives added to the export list.
4. Contact page: show 91760 61514 as "coming soon" (decision 2).
5. GA4 key events: contact form, WhatsApp click, call click, catalogue request.
6. Analytics review against the 28 Oct baseline (now due) and Vercel ISR Writes check about 9 Nov.
7. Search Console: request indexing for the six retrofitted bandsaw pages and /export-and-uae (starts the fortnightly check; section 16).
8. Test the enquiry-form success message with a test enquiry.
9. Optional polish: "More in" card box 130 to 160 px; uneven video row.
10. Next product when photos arrive: "let's update product".

### OPEN LIST AFTER THE 5-6 NOV SITTING (6 Nov 2026; items below marked DONE are finished, the rest are open)
Next sitting, in this order: (a) Studio: Display Order, card picture, description and SEO fields for the bandsaw subcategories without pictures (Horizontal Semi Auto, Fully Auto, Double Column, Special Application, Wood Cutting, AAC Block; Special Application has no Display Order); (b) full-width layout and homepage design: Claude proposes 2 or 3 options, no code until Jabs picks one; (c) About page edits; (d) GA4 key events; (e) analytics review and Vercel ISR Writes check about 9 Nov; (f) optional polish: "More in" card box 130 to 160 px, uneven video row; (g) test the enquiry-form success message with a test enquiry.

### Older list (kept for reference)
1. DONE 5-6 Nov: six bandsaws retrofitted (section 9).
2. DONE 5 Nov night: Toggle Press fixed, imported, live.
3. Full-width layout (left-aligned text, edge-to-edge sections), together with the design refresh: Claude proposes 2 or 3 homepage options first, Jabs chooses, then one build.
4. "Within the hour" DONE 5 Nov night (de8e06c). Still open: show 91760 61514 on the Contact page as "coming soon" (decision 2).
5. DONE 5 Nov night: maxmachines.in redirects to www with 308.
6. Display Order: check and fix per subcategory.

### Website to build or fix
7. About page edits: leadership line (decision 10), add Maldives to the export list (decision 22). P.R. Garg tribute stays as it is.
8. GA4 key events: contact form, WhatsApp click, call click, catalogue request.
9. Header Products dropdown with all categories; Download Brochure link (after the new catalogue); Service page (installation, maintenance, spares, training: only what Jabs confirms is true); real machine photo in the hero; "Talk to an engineer" button.
10. Language: Phase 1 Google Translate widget (about 12 languages: Hindi, Tamil, Telugu, Gujarati, Marathi, Bengali, Arabic, French, Russian, Spanish, Portuguese, Swahili). Check GA4 language and country reports first. Phase 2 real translated pages (/hi, /ar) only if the data supports it; note Vercel ISR Writes limit and Arabic right-to-left. Decide together, later.
11. Check "Fill Form" buttons feed the same Sheet (report only). Fix Home and About meta (mention Milling and Laser). Navigation consistency. Product page template. Video text summaries. "Don't see your machine? Ask us" button. Verify custom 404 page and homepage LocalBusiness data.
12. Brand pages and area pages (from the 25 Oct SEO plan); export-country pages.
13. /our-clients: add new customers and logos (page stays hidden until then). /blog content.
14. Windows office setup for code work (Mac only today).

### Catalogue
15. Pictures and cards: Mechanical Press models PMC5, PMC80, PMC100; Hydraulic and Pneumatic Power Press; Lathe and Marking cards; other Drilling subcategories; Special Application, Wood and AAC vertical bandsaws; four missing YouTube videos.
16. New products: VELSE Dot Pin Marking Machine, Bradma Label Marker page, Die Tools for Press, Feeder and Automation (press subcategories), Air Compressor (Airdas), cutting blades (Kopis), and the further categories Jabs will list.
17. Mechanical Press: which of the 10 accessories are standard and which optional.
18. Competitor FAQ method for the remaining machine types. Vikrant is already settled (decision 17).

### Google, AI and off-site (Jabs does slowly)
19. Analytics review now due (checklist in section 16, compare with the 28 Oct baseline). Vercel ISR Writes check about 9 Nov.
20. Google Business Profile update (Chennai only; six steps in section 16). Collect customer reviews.
21. Search Console: request indexing for /export-and-uae and top products; monthly check; PageSpeed.
22. UTM tags on every outside link. YouTube videos with link back. IndiaMART, TradeIndia, Alibaba, JustDial listings. Backlinks. New catalogue with tagged links.
23. FORTNIGHTLY VISIBILITY CHECK every 15 days (section 16): first due 21 Nov 2026, then 6 Dec, 21 Dec.

### Housekeeping
24. Empty folders in "Mechanical Press - NOT USABLE" and files in "_to_delete" for Jabs to bin. Project docs `plan-2026-10-29.md` is superseded by this file. CLAUDE.md stays append-only.
