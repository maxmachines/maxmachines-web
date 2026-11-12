# SOP - maxmachines.in (single master file)

Version 5.3, 12 Nov 2026 night (end of session 23:55 IST). Built on v5.2 (11 Nov night). v5.3 adds: GA4 review of 12 Nov (section 16, project file claude/ga-review-2026-11-12.md), indexing of 12 Nov (section 25.3), Home meta description fix LIVE (section 20 points 42 to 45, section 21B), Home title decision, homepage design decision, 15-day review of the Home meta (section 16 step 8), log entries of 12 Nov (section 13), tomorrow's plan (section 22A). Nothing from earlier versions was left out; where two versions said different things the later one wins and the difference is noted. Previous: v5.2 (11 Nov), v5.1 (10 Nov, complete merge), v5.0 (project only, 9 Nov), v4.8 (Mac only, 9 Nov), v4.5. Owner: Jabs.

READ THIS FILE FIRST in every new chat of the MaxMachines.in project. The addendum files (SOP-addendum-search-console-2026-11-09.md, SOP-addendum-indiamart-2026-11-09.md) and SOP-pending-notes-2026-11-09.md are SUPERSEDED by this file. If anything here disagrees with CLAUDE.md, project notes or memory, THIS FILE WINS.

COPY STATUS (13 Nov 00:10 IST): project copy and Mac folder copy are both v5.3 (Mac synced 13 Nov after the Mac was linked). Git commit of the Mac file is the only step left (Jabs, section 0). The code commits of 12 Nov (746db1c and a second commit for the twitter description) are already pushed to GitHub.

---

## ONE-PAGE SUMMARY (read this if nothing else)

1. One step at a time. Commands in code blocks (each in its own block), always starting with `cd ~/Desktop/maxmachines/maxmachines-web`.
2. The Google Sheet is the source for products. Sanity is filled by import. Categories and subcategories are filled by hand in Studio.
3. A product is DONE only when the checklist in section 8 is fully ticked, including its category and subcategory, and the live page is checked. SCOPE RULE: photos are the final step. Once a product has photos uploaded, EVERYTHING in section 8 must be done for it. Products without photos wait until their photos arrive.
4. Competitor brands: search first, Jabs approves by number, names appear on the website ONLY inside FAQ answers.
5. Photos: 1600 x 1600 on #F5F5F0, label "Model No: <model> <view>", colour check, alt text on every picture.
6. NO price, NO availability and NO pricing wording anywhere on the website (decision 9 Nov, whole site checked 10 Nov). Enquire buttons only.
7. WhatsApp chat number on the website is 99620 61514 everywhere (decision 9 Nov). Call numbers unchanged.
8. Publish only after Jabs says "yes". Commit and push only when Jabs asks. Never overwrite CLAUDE.md (append only). Do not start a task until Jabs says "go".
9. STATUS AND TO-DO live in sections 21 and 22. Update them the same day a task is done or added. Every decision Jabs finalises goes into section 13 (log) the same day and Claude says "added to SOP" in one line.
10. APPROVAL CHECK RULE: every change saved on Google Business Profile, IndiaMART, JustDial or any listing is checked 24 hours later at the START of the next session (table in section 23D).
11. Indexing rule: inspect a URL in Search Console first; click Request indexing ONLY if it says "URL is not on Google" (section 25).
12. COPIES RULE (Jabs, 10 Nov): ONE master. The PROJECT copy is always the latest. Work is saved there first. The Mac folder copy is overwritten from it at the END of the session, then git push. Never keep small later versions, addendum files or pending-notes files: everything goes straight into this one file (section 0).
13. SHARE IMAGE RULE: before a link is posted anywhere (WhatsApp channel, LinkedIn, Facebook, Instagram, IndiaMART replies) run the og:image check (section 27). Every blog post needs a cover picture uploaded in Studio first.
14. BLOG RULE: Sanity is the truth for a live post; scripts/blog-posts.json is the import source and must be kept in step. After ANY blog edit check the live page (section 27).
15. GOOGLE PROFILE RULE: ONE photo per machine on Google, added in the same sitting as the website update; never delete a product entry without asking Jabs (section 16).
16. FINISH WHAT IS STARTED: once a work item is started, finish it before moving on; do not ask "shall we jump to the next thing" mid-task. Never write anything negative about any machine anywhere.
17. MONTHLY LIMITS CHECK (Jabs, 11 Nov): once a month check usage and limits on Vercel, Sanity, Upstash and GitHub (section 16, last block). First due about 11 Dec 2026.
18. HOME META RULE (Jabs, 12 Nov): review the Home page meta description (and title) every 15 days as part of the fortnightly check (section 16 step 8). Name only categories that are live; when a new category (Blades, Chucks, Automation and so on) goes live, add it to the list in the Home meta description the same day. The wording uses "including", so it never claims to be the full list.

---

## 0. The copies and the update rule (READ CAREFULLY - fixed 10 Nov after a mix-up)

WHAT WENT WRONG: on 8 Nov the project copy would not save (file too large) and v4.8 lived only on the Mac. On 9 Nov a new project copy (v5.0) was built from an older project text, so the Mac and project versions each held content the other did not. Fixed on 10 Nov by a full merge (this file). It must never happen again.

THE RULE (Jabs, 10 Nov):
1. ONE master file. It is `claude/SOP-product-update.md` in the claude.ai Project. The PROJECT COPY IS ALWAYS THE LATEST.
2. During a session Claude updates ONLY the project copy: add the point to the right section and to the section 13 log, and say "added to SOP". No separate addendum files, no pending-notes files, no small "v5.2, v5.3" files. One file, edited in place.
3. At the END of the session ("End session"), Claude copies the project copy to the Mac folder (`SOP-product-update.md` in maxmachines-web), overwriting it, and then Jabs runs the git commands. Order: project first, folder second, git last.
4. BEFORE overwriting the Mac copy, Claude stages the Mac file and checks its Version line. If the Mac version is NEWER than the project version, STOP and merge first. Never overwrite blindly.
5. If the project copy fails to save because of size: split the content, do not leave the Mac as the only newest copy. Tell Jabs at once.
6. How to write to the Mac: stage with device_stage_files, save the final file under /mnt/user-data/outputs, write with device_commit_files using expectedMtimeMs, then re-stage and compare the byte size to confirm it really saved (once a write reported success but the Mac file was unchanged). If no folder is connected, call device_request_folder_access for ~/Desktop/maxmachines/maxmachines-web first (Jabs approves).
7. Memory mirror = project memory has only a short pointer plus the DONE checklist (topics/sop-pointer). No details there.
8. Start of every chat: Claude reads this file, says in one line if the Mac copy differs (when the Mac is linked), uses this file. Handoff message for Jabs to type in a new chat: "Read claude/SOP-product-update.md first. Then tell me in one line what is pending."
9. Claude cannot commit or push from its workspace (no git identity). Jabs runs git in Terminal (or tells Claude Code to commit and push after his "go"). Use `git --no-pager diff --stat` so the pager does not get stuck. Claude gives the exact commands, one per code block.
10. CLAUDE.md keeps tech and site-structure notes. It is APPEND ONLY (overwrites on 22 and 25 Oct had to be restored with `git show HEAD:CLAUDE.md > CLAUDE.md`). An old 6 KB copy exists in chat: never paste it over the real one. The correcting note about Next.js 16.2.4, /about and /blog was appended on 10 Nov (commit b473740).
11. Trigger phrases: "let's update product" (section 2), "Add to SOP", "End session".
12. Do not update the SOP in the middle of work unless a decision is finalised or Jabs asks; the full tidy-up (status, to-do, copies) happens at "End session".
13. Writing the project copy: `project_write` with local_path is refused for this large file; send the full text as inline content (the project doc must have been read or written earlier in the same chat).
14. If the Mac folder is not linked at "End session" (11 and 12 Nov cases): update the project copy only, write the COPY STATUS note at the top, and sync the Mac at the next session with the Mac linked. (Note: the 11 Nov sitting did reach the Mac, so the Mac copy found on 13 Nov was v5.2, not v5.1.)

## 1. Working rules with Jabs

- Jabs is non-technical but fast. ONE step per message, maximum two. Simple words. Ask what he sees before moving on. Celebrate wins.
- Search first, ask second: Claude researches (brands, keywords, specs) and gives numbered lists; Jabs answers with numbers. A short question when it matters, never a long menu.
- One confirmed decision at a time. Do not repeat a question. Once a job starts, finish it (Jabs, 8 Nov): do not ask whether to jump to another job halfway.
- Immediate fixes: when something breaks, fix it before moving on.
- Honest feedback over agreement. Say so when a claim is unprovable or a plan is wrong. Report your own mistakes plainly and fix them.
- Do not explain "the rest of the list" or ask again: one product at a time with its category and subcategory, then all existing products, then new products.
- No invented facts or statistics. Only facts from Jabs, the Sheet or the site. (Claude once quoted UAE market numbers that did not exist and Jabs corrected it.)
- No em dash in site text or Sheet data. Use a hyphen.
- Do not close browser tabs until the end of the session.
- Claude in Chrome: use the connected browser whose deviceId starts e0f32078 (Browser 1). Claude cannot pick files; Jabs drags files onto Studio. Chrome extension site access is per domain (search.google.com had to be allowed by Jabs in the extension's Site access).
- The workspace shell cannot reach maxmachines.in (proxy 403): page checks run by JavaScript fetch inside a Chrome tab on the site. Jabs's own Terminal curl always works.
- Photo work is done in Claude chat inside the project, not in Claude Code. Code work is Claude Code in Terminal on the Mac only (Windows setup not done).
- Windows office computer and Mac home computer both used; git on GitHub keeps them in step.
- Claude does not start a task until Jabs says go (handover rule, 9 Nov). Show the diff and wait for "go" before every commit and push, then verify live.
- Review requests: Claude writes only the REQUEST message, never review text (decision 29).

## 2. "Let's update product" flow (trigger phrase)

1. Ask: check recent chats and update CLAUDE.md first, or go straight to the product?
2. Ask the 5 headline details once per machine: Product Name, Brand, Category, Subcategory, Country. Also the headline spec by machine type: vertical bandsaw = wheel diameter; horizontal bandsaw = cutting capacity; lathe = chuck size or bed length; air compressor = CFM or tank size; drilling = drilling capacity; press = tonnage; others ask.
3. Keep those details fixed for all related models until Jabs says "next machine".
4. Produce 4 tab-separated outputs, each with its header row shown first: Products, Variants & Specs, Highlights & Accessories, FAQs. If unsure, ask. Never re-format already imported data unless asked.
5. Row order on the Sheet = display order on the site. Headline spec is the FIRST row of each model.
6. N series = standard/budget range, R series = premium range (HABA).
7. Price column stays blank and Availability stays blank (decision 9 Nov: not shown on the site).

## 3. The Sheet (Google Sheet "MMT Product Catalog")

ID 1PymyVSGmjSvRgyg5n9wXyZNKgVExpHJ4T_XvyCanDWY. Tabs and GIDs: Products=0, Variants & Specs=1924145122, Highlights & Accessories=1811493441, FAQs=872074886.

Products columns: A Name, B Brand, C Category, D Subcategory, E Country, F Display Order, G Short Description, H Full Description, I Featured, J Active, K SEO Title, L Meta Description, M Keywords, N Geo Tags, O YouTube URLs (comma separated), P PDF Labels, Q PDF URLs. Never type in row 1 (the importer reads the headers).
Variants & Specs: Product Name | Model | Size | Price | Availability | Spec Name | Spec Value, one spec per row. Price and Availability are no longer shown on the site: leave blank.
Highlights & Accessories: Product Name | Type (Highlight or Accessory) | Name/Text | Description | Price | Link.
FAQs: Product Name | Question | Answer.

READ: in a Sheet tab run fetch of `.../export?format=csv&gid=<GID>` (never the gviz endpoint). The FAQs tab has a filter that hides rows so screen counts are wrong. If it returns an HTML page or "Failed to fetch", wait and retry. Print only what you need.
WRITE: build text in page JavaScript, `navigator.clipboard.writeText`, click the Name Box (about x=40, y=84), press cmd+a, type the cell (for example M18), Enter, zoom to confirm the cell, then cmd+v. Triple-click on the Name Box does not select it. Never click a cell and type to search. If a Drive dialog opens, press Escape and check nothing changed. Click the right sheet tab before pasting.
Appending rows: first empty row = last non-empty row + 1; paste tab-separated rows; no double quotes in the text.
VERIFY every write: fetch the CSV again and diff against the copy taken before. Only the intended cells may differ; header row unchanged.
Importer: clear all Sheet filters first (a hidden-row filter once shifted a paste into B26 instead of B12; restore from the snapshot, re-paste and CSV-diff). It cannot create Categories or Subcategories: create them in Studio first. It matches names with normalizeName. It patches the published documents; always check for an old stale draft in Studio and discard it. Run `npm run import-products`. Good result: "Errors : 0".

## 4. Content rules for every product

- Name starts with the brand ("PRG Impact Press Machine"). Own brands: HABA, PRG, Kopis, Airdas, Velse, Modi (never described as third party). Resold: Bradma, Bonet, Zither, Sharp (say supplier/dealer, not manufacturer, never "Made in India"). Other approved brands for use: Morse, Bahco, Lenox. Any other brand: search, ask Jabs first. Existing "IST" names for Bradma/Velse stay as they are.
- MMT is manufacturer, SPM (special purpose machine) builder, dealer, distributor, importer and exporter, not only a dealer. Copy, SEO titles and keywords must reflect the right role for each brand.
- Featured and Active are Yes/No. Country e.g. "Made in India".
- NO price, NO availability, NO "In Stock" claim, NO pricing wording anywhere on the site (decision 9 Nov). Headings and helper text say "Models and Variants", "specifications and variants".
- SEO Title max 60 characters ending " | Max Machine Tools". Meta Description max 160: what it is + key specs + "Made in India, supplied across India, UAE and export." (own brands) or "Supplied across India, UAE and export." (other brands). No city names in title or meta.
- Geo Tags: Chennai,Ahmedabad,Gujarat,Tamil Nadu,Pan-India,UAE,Middle East,Africa,South Asia,Export (+ Government Supply where present).
- Keywords (column M): buyer phrases (machine type, price India, manufacturer/exporter India or supplier/dealer for resold brands, buy online India, UAE, Chennai and Ahmedabad as two separate tags, brand + machine, model numbers, tonnage/size phrases, type phrases only if the machine really is that type (confirm with Jabs; PMC = C frame)), plus competitor tags "<brand> <machine> alternative". Never "near me" (Google location + Business Profile handle that).
- Highlights: short single line, Description blank, minimum 5. Standard accessories appear in the Full Description and as ONE Highlight line. Optional extras get individual Accessory rows with a description. An item shown as a standard Highlight must not also be an Accessory (check each time).
- FAQs: minimum 5, target 8 to 17, buyer-focused, NO phone or email in answers. Say "supplied across India and exported worldwide, including UAE" (UAE is preferred, not the only export market). Never type the brand twice ("PRG PRG").
- Real advantages are stated as facts, never "better than" a named brand. Absolute claims are softened ("vibration free" becomes "stable, low-vibration running"; "long tool life" becomes "helps extend tool life").
- NEVER write anything negative about any machine, on the site, Google or IndiaMART (Jabs, 9 Nov). VMCB16RSE is sold in India (many sold, orders in hand) AND exported: never write "export-only" for it. The other two vertical models are simply not exported: give no reason, write nothing about it.
- Do not repeat the same sentence across product descriptions (Jabs, 8 Nov): vary the closing line of every description.
- Mechanical power press advantages (Jabs 4 Nov, all PMC models; ask about pneumatic; impact and hydraulic differ and Jabs gives theirs when each is updated): body from virgin steel plate, a single plate head to toe; one-piece main shaft, not two pieces; heavy back gear and DP gears; safety locks (keyed and bolted collars) stop the gears moving against the direction of force and protect them from damage; precise movement helps extend tool life.
- ALL machines and products (Jabs, 4 Nov): spares are always available, and MMT gives a lifetime guarantee of spares supply even if the machine model changes (Highlight + FAQ). CONFIRMATION RULE (Jabs, 4 Nov evening): ask Jabs for each product before using this point, and the same for the point "every machine is tested before dispatch and a test video is recorded" (true for almost all machines). Never add either without his yes for that product. The lifetime guarantee is never stated for items MMT only trades (resold brands); it is used only for what MMT makes.
- Impact press advantages (Jabs, 4 Nov): the shaft is solid, not a pipe, so it is heavy and runs with less vibration; spring controlled load adjustment. Check with Jabs whether the same points apply to the toggle press.
- Press accessories rules (May): Safety Sensor Curtain and PLC Control Panel are optional for all motorised hydraulic and pneumatic presses (PLC also on C Frame Ram Type and C Frame 4 Guide Plate). Gun Metal Bush Movement on the 4 Pillar Press is a Highlight, not an Accessory. Air Line Pressure spec rows still to be standardised across Impact Press models.
- Marking (June): subcategory names "Marking Impact Press", "Hydro Pneumatic Marking Presses", "VELSE Laser & Pin Marking Machines"; VELSE Fiber Laser Marking Machine models VELSE-FLMM-TABLE-20W and VELSE-FLMM-DESK-20W, standard marking range 110x110 mm (200x200 optional), MAX laser source standard (Raycus on request), PC and UPS not included.
- One product can appear in several places through related-products sections on the page. Do not duplicate product records.
- Brand facts across listings (Jabs, 9 Nov): HABA is MMT's own brand. Drilling machines are PRG. Bandsaw blades are KOPIS (exclusive to MMT). Machine vices: Unique. Marking: Bradma (roll marking, punches), VELSE (fiber laser). Air compressor and dryer: Airdas. Fittings: Cmatic (Italy). Roll Marking Machine belongs in group "marking machine", not Bandsaw. Chucks: see section 24.5 note.

## 5. Competitor brand method (EVERY machine type)

1. Claude searches the internet and IndiaMART, Tradeindia and Aajjo category pages. Collect brand names AND company names.
2. Claude gives a numbered list of names only, plus buyer-search keyword phrases.
3. Jabs replies with the numbers to keep. An unapproved brand is never used.
4. Claude writes competitor tags in column M and comparison FAQs, 3 to 5 brands per FAQ, plus 1 or 2 FAQs on construction advantages.
5. Rules: competitor names appear ONLY inside FAQ answers (and backend tags). Wording "comparable Made in India alternative to X". Never claim to be their dealer, never use their logos, photos or model names, never "better than" without proof. No contact details.
6. Where a type has many products put the comparison FAQs on one horizontal and one vertical product, or vary the wording. Vary the question wording from product to product (decision 26).
7. Draft shown to Jabs before it goes into the Sheet.

Approved lists (Jabs):
- Pillar drilling: Eifco, ITCO, Parmar, JMTC, Prakash, Siddhapura, UNI-TECH, LION, Dalip, KPT
- Radial drilling: Eifco, Parmar, Prakash, YOGI, ASHU MAKE, Hi-Power, HPSM, Batliboi, PANCHAL
- Impact press: Bradma, Hindustan, Ellora, Hammerknock, Benchmark. Toggle press: Precision Engineering Products (Exacta), Jeet Machine Tools, Bharat Machines Press, Balaji
- Horizontal bandsaw (19): Indotech, Multicut, ITL, MEBA, Laxmi, Laxman, Laxson, Laxmen (three different brands), Vikrant, Vijay, Krishna, Sagar, Accucut, SPM Tools, MSC, Banka, Bhavya, Pathak, Premier. Vertical bandsaw (17): same without SPM Tools and MSC. PRG Eco vertical (soft material and wood): only Jai, Umiya, Mahavir, Sagar. VIKRANT RULE: Vikrant Machinery is a supplier (internal only, never written on the site as a maker); the name Vikrant is used ONLY as a competitor name inside FAQ answers and tags.
- Banka, Bhavya, Pathak, Premier: drilling, radial and bandsaw
- Mechanical power press: Omkar, Jayshree, Jay Shakti, Accumax, Bhavya, Pathak, Harihar, Digvijay, Vivek, Mayank, Foreman, Shailesh, Sagar, Jayson, Acme, Everest, Mayur, Jekson, Rajesh, Raviraj. Pneumatic power press: confirm when reached (extra names seen: Orbital, Hammer Knock, Mercury Pneumatics, National Pneumatic, Sharma Presses, Eminence)
- Other types: run the method first.

## 6. Photos

- Standard: 1600 x 1600 PNG, machine centred on exactly #F5F5F0, label "Model No: <model> <view>" (Inter SemiBold about 64 px, #1F1F1F, short gold #EAB308 line above; DejaVu Sans Bold in the cloud workspace). Ask Jabs for the model number if missing.
- COLOUR CHECK: brighten or darken so machines match; say in one line what was done.
- Background: plain backgrounds swapped by code; busy or dark ones go through Gemini first ("Edit this image. Enhance this photo and return the edited image", one photo at a time, short prompt). Gemini adds a small star watermark bottom right: remove without clipping the machine base. Garbled nameplate text from Gemini is left as is.
- AI pictures "scaled up" to show a bigger tonnage must be labelled "Representative image"; ask Jabs for a real photo first.
- Upload the large original (up to 5 MB); Sanity resizes. Pictures carry a CSS watermark "www.maxmachines.in" and right-click/drag block on the site (not in Studio). The watermark sits on the PARENT of every Sanity picture, so that parent must be position relative (blog cover is wrapped in a relative div).
- Views: Left = motor or pillar on the left, Right = on the right, Front, Back; extra angles -2, -3. Front views dropped on drilling pages and not used on press cards.
- File names lowercase with hyphens: `model-machinetype-view.png`. Redone picture: old file renamed "-old". Files for a Finder drop carry 01-, 02- prefixes.
- Product page order: all-models group photo first (two rows of three, small to large, right view, label under each machine), then model collages, then singles small to large. Per-product exceptions when Jabs chooses.
- Cards: subcategory/product card = 1600 x 1600, one machine cropped tight (about 92 percent of height), no label, no watermark. Multi-machine collage card carries "Model No: <model>" under each machine. Category card = dark bold pencil sketch from Gemini, 1600 x 900, paper white set to #F5F5F0, machine about 800 px tall. Card box on the site is 220 px tall, object-contain.
- A subcategory with exactly one product skips its own page and links to the product.
- Dropbox folders in "Ready for upload": USABLE, NOT USABLE, READY TO UPLOAD. Claude cannot delete from the Mac shell: unused items go to "_to_delete". Use cp then md5sum before advising deletion. Contact-sheet grids (PIL) review many photos quickly.
- Alt text on every picture: "PRG <MODEL> <machine type> machine, <view> view". Group photos: "PRG <machine> machines: <models>".
- Press subcategory display order: Hydraulic 1, Mechanical Power 2, Pneumatic Power 3, Impact 4, Toggle 5.
- Google profile photos: ONE photo per machine on the product entry (group picture for a range); file examples: prg-impact-toggle-press-machines-all-models.png, horizontal-bandsaw-manual-card.png, vertical-bandsaw-metal-cutting-card.png, prg-pillar-drilling-machine-group.png, vmcb16rse-vertical-bandsaw-machine-front.png.

## 7. Sanity Studio routine

- Studio: www.maxmachines.in/studio (Jabs signed in). Project p72ubifi, dataset production.
- Pictures: Jabs drags the files onto the Product Images list (not "Add item", not inside a picture dialog). Claude reads each label (zoom [808,125,1298,365]), types alt text (box about 1047,438), closes with X (1278,142), and reorders by dragging row handles (x=835) one row at a time (long drags fail). Finder drops arrive alphabetical, so reorder after. Pictures stay drafts until Jabs says "yes". Draft pictures cannot be previewed on localhost (it shows published content only): publish, then check live.
- YouTube links go in Sheet column O, then import. Studio-only edits are overwritten by the importer.
- Category and Subcategory (never done by the importer): Image (category field "Icon / Image"), Description (one short line, facts already on the site only), Display Order (check the others first; lower shows first), SEO Meta (title max 60, meta max 160, Keywords as tags). Studio gotcha: the first tag typed in an empty box often vanishes: type all, screenshot, re-add. SEO title above 60 characters shows a warning.
- Studio Vision (raw perspective) shows the published and draft versions of any document: use it to see what is really live in Sanity (the Sanity API itself is blocked for Claude).
- Webhook "Refresh website on publish" (manage.sanity.io > API > Webhooks) posts to /api/revalidate. FILTER (fixed 10 Nov): `_type in ["category", "subcategory", "product", "blogPost"]`. The webhook description text still says category, subcategory or product: harmless. A publish shows live in about a minute. Vercel Redeploy only if it does not. Bulk imports fire many webhook calls. app/api/revalidate/route.ts revalidates /, /about, the /products layout, the /blog layout, /sitemap.xml and /llms.txt (no code change was needed for blogPost).
- Vercel free tier (Hobby): ISR Writes limit 200,000 a month (153,518 reached on 9 Oct with a 60 second refresh; fixed; 72% on 28 Oct). CHECKED 11 Nov 22:40 IST: 53,888 of 200,000 = 27% for 12 Oct to 11 Nov; daily writes peaked about 4,000 in mid-October and have mostly been 500 to 2,000 a day since early November (even with the 10 Nov imports and webhook calls); Reads 123,398 units, no limit concern. Vercel emails at 90%. Every new Sanity page must keep revalidate at 3600 or higher. Next check: the monthly limits check (section 16).
- Sanity plan: free. Usage seen so far is storage only (22 MB of 100 GB). The API request count against the free-plan limit has NOT been checked (the site reads with useCdn false, so reads count as API requests, but pages rebuild at most hourly). Jabs (11 Nov): no need to check now; covered by the monthly limits check.

## 8. DONE means all of these are ticked (per product)

1. Sheet Products row: descriptions, SEO title, meta, geo, keywords with buyer phrases and competitor tags, YouTube links
2. Sheet Specs: models and specs, headline spec first
3. Highlights (5+) and Accessories (standard vs optional checked)
4. FAQs 8+ including comparison FAQs with approved brands and construction FAQs; no "PRG PRG"; no contact details
5. `npm run import-products` run, Errors 0; stale draft discarded
6. Pictures: labels, colour check, alt text, order; card picture; published
7. Category and Subcategory done (card, description, display order, SEO, keywords) and published
8. Live page checked: title, FAQ count in the page data, highlights, pictures, videos, no competitor names outside FAQs. Ground truth if AI fetches disagree: Jabs runs `curl -s <url> | grep -o "<word>"` (web fetch returns stale cache)
9. Share image checked before the link is posted anywhere (section 27): og:image is the product picture, not logo.png
10. Google Business Profile: the machine has a product entry with ONE photo of that machine (our own photo, a group picture for a range), a description in its own words and a link to its page on the new site with `?utm_source=google&utm_medium=business_profile` (rule in section 16). Added at the same sitting as the website update.
11. This SOP, CLAUDE.md status line and the log (section 13) updated; copies synced (section 0); commit and push when Jabs asks

For a BLOG POST the same idea: cover picture uploaded in Studio first, facts from Jabs only, import run, live page checked (text, links, cover, og:image), blog-posts.json committed.

## 9. Retrofit status (products with photos)

Only products with photos uploaded are retrofitted; run sections 4, 5 and 8 on each. All ten are DONE, imported and live: PRG Mechanical Power Press, PRG Impact Press, PRG Toggle Press, PRG Pillar Drilling (written 4 Nov, imported 4-5 Nov); HABA Standard, R and Eco horizontal bandsaws (Eco no video yet); PRG Standard, HABA R and PRG Eco vertical bandsaws (Eco no video yet) (5-6 Nov). Sheet counts (FAQs / highlights) from the 5-6 Nov sitting: HABA Standard horizontal row 3 (17/13); HABA R horizontal row 2 (16/15); HABA Eco horizontal row 4 (17/12); PRG Standard vertical row 6 (17/15); HABA R vertical row 5 (20/19); PRG Eco vertical row 7 (14/12); Toggle 13 FAQs. Everything else (radial drilling [already has competitor FAQs from 25 Oct], other bandsaws, tapping, milling, multi drill head, automation, pneumatic and hydraulic press, lathes, marking) is done completely, in order, when its photos arrive. Check Studio for any other product that already has pictures.

## 10. Code changes (Claude Code in Terminal)

- Plan and discuss first. Show the diff and WAIT for "go" before any commit or push (Claude Code has pushed early). Check on localhost:3000 (second Terminal tab for git while `npm run dev` runs), then `git add . && git commit && git push`; Vercel deploys in about 2 minutes.
- If Claude Code asks to log in, type `/login`, authorise in the browser, resend the message. Option "Yes, allow all edits during this session" helps for a batch of edits.
- Large pasted code can silently drop `<a` tags (heredoc). Patch with a python3 script or `grep` then `sed -i ''` on exact lines.
- Revalidate must never go back to 60.
- Site rules already built: SSG pages with generateMetadata and canonical tags, JSON-LD (Organization, Product without offers, FAQPage, BreadcrumbList, Article for blog), sitemap, robots (allow all AI crawlers, block /studio/ and /api/), llms.txt, security headers (vercel.json), Upstash rate limit 5 requests a minute on /api/enquiry, Open Graph tags, /export-and-uae page, WhatsApp links only through waLink() in lib/whatsapp.ts (never a bare wa.me link).
- Any new static page must carry alternates.canonical (rule from 9 Nov).
- Any new Sanity page type must set openGraph images from its own picture in generateMetadata (section 27).
- Verification method for code changes: before and after snapshot of the pages (text hash, title, meta, FAQ count, link and image counts) kept in browser localStorage on the production site (113 pages on 6 Nov; "always check the old and new page").
- Claude Code runs whatever is typed into it as a command or message (12 Nov: Jabs typed a curl line inside Claude Code by mistake and it simply ran it, harmless). Terminal commands for Jabs are typed in a normal Terminal tab, not inside Claude Code, unless the step says "paste into Claude Code".

## 11. Never change or break (decisions already made)

- GOLDEN RULE: everything must help AI tools find and trust us. Never block AI crawlers. Content is plain text in the page (specs as text tables, not images or PDFs). One set of facts everywhere (address, since 1963, MMT since 2012, response time, WhatsApp number).
- The contact form writes to a Google Form, then a Google Sheet, which sends an instant email and WhatsApp to the customer; the same Sheet feeds Magic CRM (tenant MMT_001) and the IndiaMART automation. DO NOT BREAK.
- The site lists only fast-moving machines (hundreds exist): specs first, photos and videos later. Client logos are all real customers: keep them. Social media is handled in the separate marketing project. No dark/light mode toggle, ever.
- /blog is VISIBLE (Navbar and Footer link, since 9 Nov, replacing the old "hidden until content" rule). /our-clients stays hidden from Navbar and Footer until it has real content.
- Blog rules: the blog names the HABA VMCB16RSE bandsaw with a link to its page (/products/vertical-bandsaw-machine/metal-cutting-vertical-bandsaw/haba-r-series-vertical-metal-cutting-bandsaw). KOPIS blades are not on the site yet: WHEN A KOPIS BLADE PRODUCT PAGE IS ADDED, UPDATE THE BLADE LINK IN THE GRAPHITE POST (and any other post naming KOPIS blades). Re-check blog links whenever a linked product is added, renamed or removed. When a YouTube video of a how-to exists, add its link to that post (the blog has no video field yet: add one, or put the link in the text).
- Hostinger incident 28 Oct: never click "Connect domain" for the old WordPress maxmachines.in on Hostinger; never press the CDN "Disable" link or "Reset DNS records" without checking DNS first. Correct DNS: A @ 216.198.79.1 and CNAME www dc344377a2c35a6b.vercel-dns-017.com. If the "not private" warning returns: Vercel Settings > Domains, then Hostinger DNS history, then Restore.
- Brochure: the old PDF catalogue (thousands of copies) links to old /shop/... and /product-category/... URLs. The redirect (307) to /products?utm_source=brochure&utm_medium=pdf is LIVE (confirmed 5 Nov; working per GA review 12 Nov). A new catalogue will come later (section 26).
- Google Business Profile stays Chennai only; Ahmedabad is in the description only.
- No price, no availability and no pricing wording on the site until online selling starts (9-10 Nov). Left on purpose: "pricing, or logistical support" on Home/Contact and the export quotation line.
- Brevo: the website does not use Brevo (only DNS records on the domain stay for it); never delete the Brevo DNS records. A Brevo notice of 12 Nov about the unused API key "Zoho WA email alert" belongs to the Zoho automation (it stopped earlier because of an issue; Jabs will check it), not to the website.

## 12. Business facts that appear on the site

Max Machine Tools (MMT), group since 1963, MMT since 2012, ISO 9001:2015, Chennai HQ (84 Armenian Street, Parrys) and Ahmedabad (Navrangpura). WhatsApp chat everywhere on the website: 99620 61514 (wa.me/919962061514) (decision 9 Nov; supersedes the earlier 93828 61514 on the floating button). Call numbers: Sales 93828 61514, Business Head and Technical 99620 61514, Accounts 99621 61514, Chennai landline 044-42161514, Ahmedabad 93838 61514. Exports regularly by air and sea; IEC holder (never show the number); Certificate of Origin, commercial invoice, packing list. GST 33AAWFM0648L1ZS. Hours everywhere: Monday to Saturday 10 AM to 7 PM, Sunday closed.

## 13. Decision log (newest at the bottom; Claude appends the day a decision is made)

- 2026-09-17: Pages converted to server-rendered (SSG); security headers; rate limit; Open Graph; Blog and Our Clients hidden; no dark mode toggle.
- 2026-10-20: Model label SOP, file naming, view naming, single-product subcategories skip to the product, card image styles.
- 2026-10-22: Categories and subcategories filled by hand in Studio; watermark and right-click block; webhook plan.
- 2026-10-24: Impact and Toggle stay separate products; a product is not finished until its category and subcategory are done; webhook built, refresh 24 hours.
- 2026-10-25: Keyword SOP, SEO title/meta/geo SOP, brand rules, competitor-brand rules and lists, export page, WhatsApp message, structured data, llms.txt.
- 2026-10-28: Hostinger incident fix, brochure redirect, 404 diagnosis, Google Business Profile Chennai only.
- 2026-11-04: Scope rule: photos are the final step; a product with photos gets everything in section 8; products without photos wait. Lifetime spares guarantee point for ALL machines. Impact press advantages (solid shaft, spring controlled load adjustment).
- 2026-11-04: Mechanical Power Press done (11 pictures, 4 videos, subcategory, FAQs, highlights, keywords). Competitor method with numbered name lists and Jabs's approved 20 mechanical press brands. PRG mechanical press advantages as facts. Colour check added to photos. Retrofit of competitor FAQs and advantages to all live machines. One master SOP.
- 2026-11-04 (evening): Toggle press done in Sheet (brands Bradma, Hindustan, Precision Engineering Products/Exacta, Jeet, Bharat Machines Press, Balaji; only spares and accuracy). Impact press FAQs and highlights written. Pillar drilling done in Sheet (CI column from 25mm, MS pipe column below, belt and gear, rack and pinion, automation on request, 6 more brand tags, 5 new FAQs). NEW RULE: ask Jabs per product before using the lifetime spares point and the tested-and-test-video point.
- 2026-11-05 (end of session): import run 4 Nov night, Errors 0, 69 updated; live pages checked (pillar drilling 17 FAQs, mechanical 18, toggle 14, impact 15). Trigger phrases: "Add to SOP" and "End session". Git push of the 5 Nov SOP done (commit 9338418).
- 2026-11-05: Terminal commands rule (Jabs): every Terminal command goes in its own separate code block (one command per block, copy-paste ready), never several commands in one block or inside a sentence.
- 2026-11-05 (14:00): Answers to the 18 questions recorded (section 20). Master status register (section 21) and single to-do list (section 22) created. Vikrant Machinery is a supplier, removed from competitor lists; Maldives to be added to the export list; P.R. Garg tribute unchanged; full width, language and design go on the to-do list.
- 2026-11-05 (later): SOP made complete as v3: sections 14 to 20 added (site foundation, technical lessons, Google plan, AI visibility, marketing, product-line rules, decisions). Nothing important lives only in old chats.
- 2026-11-05/06 (night sitting, SOP v4.2):
  * Toggle Press fixed in the Sheet (Bradma and Hindustan out of the toggle FAQs and tags; 13 FAQs).
  * Vikrant clean-up done, then the rule refined: Vikrant is a competitor NAME only (section 20 points 17 and 25). Bandsaw lists finalised (section 5).
  * Six bandsaws retrofitted in the Sheet with Jabs's real advantages (Standard: heavy wheel, ELECON gearbox, hydraulic cylinder for longer blade life, heavy vice, special-casting wheel that does not wear; R series: German-style arm, safety, wider vice opening; Eco: economical basic model; PRG Standard vertical: proven, simple; HABA R vertical: safety; PRG Eco vertical: low budget, soft material and wood). Lifetime spares and tested-with-video points were confirmed per product. Counts in section 9.
  * Import run: 69 updated, Errors 0. All six checked live.
  * Gotcha: a hidden-row filter on the FAQs tab shifted a paste (it landed in B26 instead of B12). Always remove the filter BEFORE any paste or import, restore from the snapshot, re-paste and CSV-diff.
  * Bandsaw category meta description edited and published in Studio.
  * Code (committed, pushed, verified live): 378f647 "More in" photos object-contain on #f5f5f0 (no cropping); 3db4e6f product page reorder (section 20 point 27), Overview with Read more (components/OverviewToggle.tsx, text stays in server HTML, button only when text overflows), video thumbnails with click-to-play (components/VideoPlayer.tsx, Shorts in a 9:16 card, video links kept in the HTML for Google); de8e06c reply promise "within the hour".
  * Vercel: maxmachines.in to www set to 308.
  * Known cosmetic points: the video row looks uneven when one wide video sits beside two tall Shorts; "More in" cards could go from 130 px to 160 px.
- 2026-11-06 (Jabs, 01:50, on mobile): visibility check every 15 days added at the end of section 16 (first due 21 Nov 2026). The quarterly AI check in section 17 now says every 15 days.
- 2026-11-06 (23:00 to 00:00, research): Google and AI check from Jabs's Chennai Chrome (details in section 23). Plan to get on top agreed in outline; Jabs asked that all plans go into the SOP first, then the Google profile audit. Modi Machines facts (section 20 point 28). Review rule (point 29).
- 2026-11-06/07: Google Business Profile category, description, hours, website link and phone changes saved (points 30 to 32). 24-hour approval check and 30-day review rules added.
- 2026-11-08 (evening, Jabs): GBP recheck in the owner account (max@maxmachines.in, Browser 1). Category, description, hours and website link are live. Extra phone 93828 61514 is STILL PENDING (Google: may take up to 7 days; recheck by 14 Nov). Short name "maxmachinetools" was NOT approved and the field cannot be edited: DROPPED, do not retry. Chat link kept as wa.me/919962061514: Google strips a ?text= pre-filled message on save, so "I found your profile on Google" cannot be set there; ask new customers how they found us instead (section 16 step 5).
- 2026-11-08 (late night, Jabs): GBP PRODUCTS and review approach (owner account max@maxmachines.in, Browser 1).
  * Mechanical Power Press product updated earlier today: APPROVED and live by 22:10 IST.
  * NEW product "PRG Impact and Toggle Press Machines" published (category Power Press): one all-models photo (PIH11, PIH15, PIP25, PIP35, TPH9), link to the PRG Impact Press page (toggle press has no page of its own yet, point the link there when it does). Approved by Google within about 15 minutes.
  * Updated with our own group photos, new descriptions and links to the NEW site category pages (the old links pointed to old WooCommerce /shop/ addresses): "Metal Cutting Bandsaw (Horizontal)" = HMM8, HMM8N, HMM9R photo; "Metal Cutting Bandsaw (Vertical)" = VMCB16RSE, VMCB18, VMCB18E photo; "Drilling Machine" = PRG pillar drilling group photo PPD12RS to PPD40HR. Horizontal and vertical approved; drilling machine pending at 22:30 IST.
  * The old "Special" Metal Cutting Bandsaw (orange machine with boxes behind it) was NOT deleted: Jabs said keep it. Renamed "VMCB16RSE Vertical Metal Cutting Bandsaw" with its own photo. Corrected 9 Nov 00:05 IST (see below): sold in India and exported.
  * RULE (Jabs): ONE photo per machine on Google. Each time a machine is updated on the website, its product entry and photo are added or updated on Google in the same sitting. When about 15 machines are updated, add more photos to each machine in the Google Photos section (batch upload). A product entry holds only one photo; extra photos go to the Photos section of the profile.
  * RULE (Jabs): do not repeat the same sentence in every product description. DONE 8 Nov 23:50 IST: endings reworded in all five entries. Gotcha: in the Google description box cmd+End does NOT jump to the end on a Mac; retype the whole description instead of editing the tail, and read the full text first.
  * Review link (g.page/r/CShu8ROgwJ_FEBM/review) and QR found. Review requests: Claude writes only the REQUEST message (with three prompts: what you bought, how was the service, which city) and the QR card text; Claude does NOT write sample reviews, and customers are not given text to copy and paste (fake or scripted reviews break Google's policy and can remove all reviews). Customers write in their own words; voice typing helps them.
  * Review replies: from now on reply to EVERY new review within 1 to 2 days. The ten old reviews without replies are skipped (too old), decided by Jabs.
  * 8 Nov 23:40 IST (Jabs): GOOGLE PROFILE CLOSED for now. QR card dropped (only the review link is shared when needed). Exterior photos on the profile (two shopfront photos 11 years old, Street View also present) accepted as enough; a fresh exterior and an interior photo can come later with other photo updates. Drilling cum Milling, the seven stock-photo entries and new entries (Pneumatic Press, Bradma/Velse marking, tapping) follow the website updates machine by machine under the one-photo rule. NEXT was P2 IndiaMART.
- 2026-11-09 00:05 IST (Jabs): VMCB16RSE is sold in India (many sold, orders in hand) and exported. It is NOT export-only. The other two vertical models are not exported (internal only; give no reason and write nothing negative about any machine on the site, Google or IndiaMART). GBP entry corrected the same night. IndiaMART P2 started (score-100 listings skipped).
- 2026-11-09 00:12 IST: IndiaMART score rule found (section 24.5).
- 2026-11-09 00:35 IST: IndiaMART P2 Batch 1 progress (text, specs, title done by Claude from website pages; Jabs approved the method: no per-product approval needed from here). Fully Auto bandsaw: the website page Horizontal Bandsaw Fully Auto is "Coming Soon" with no machines, so build the website page first, then update IndiaMART (HABA Automatic Bandsaw Rs 3,50,000 and HMA9RE).
- 2026-11-09 02:00 IST: P2 IndiaMART closed for the agreed scope (44 active listings, average 88, thirteen at 100). Record in section 24.5. Next was P3 JustDial.
- 2026-11-09 (Search Console and site fixes): Canonical tags on /, /products, /contact, /about (4eda460). Product JSON-LD offers removed (b9ff257). Price and Availability removed from all product pages (44dd51a). NO price and NO availability anywhere until we sell online; "1 invalid item" on Product snippets accepted. WhatsApp chat number 99620 61514 everywhere on the website, llms.txt one number (26d481e). Sitemap resubmitted. 11 indexing requests made, quota reached. Google Ads credit offer ignored for now. Details in section 25.
- 2026-11-09 (IndiaMART, later in the day): Add Product pipeline recorded; 13 listings created or changed (section 24.3). Jabs: further IndiaMART product updates happen AFTER a few updates on the website.
- 2026-11-09 (night, check): IndiaMART public company page has no WhatsApp link and no 93828 61514; the seller profile lists 9962061514 and 9382861514 as contact numbers (call fields, left as they are). The profile also lists sales@modimachines.in as a second email: kept on purpose as a backup (Jabs). MAXIMUS chatbot runs on a different number (91760 61514): nothing to change.
- 2026-11-09 (night): New workstreams of Jabs recorded in section 26: blog, social media and Instagram reels, PDF catalogue, one-page IndiaMART catalogue and WhatsApp template, customer list refresh to Nov 2026, Quotation Pro quotation PDF on WhatsApp.
- 2026-11-09 (night): Blog built on Sanity and LIVE (commit a16c2f0): document type blogPost, /blog and /blog/[slug], Blog link in Navbar and Footer, first post how-to-cut-graphite-on-a-vertical-bandsaw with cover picture. `npm run import-blog` keeps an existing cover image.
- 2026-11-10: Blog share image fixed (d7fbe0d): the post cover picture is the og:image (1200 x 630), logo only as fallback. Rule: check the share image of every page type before posting its link; add ?v=2 to refresh a cached WhatsApp preview.
- 2026-11-10 (IndiaMART check): 24-hour approval check PASSED for the new Bradma, Bonet, Sharp and Zither listings. Noted: the rotary numerator has an extra category added by IndiaMART; the chuck listings appear under "Independent Chuck" and "Self Centering Chuck". Steel Stamp Marks photo uploaded by Jabs. The other open IndiaMART items (section 24.4) were marked DONE by Jabs; no details needed.
- 2026-11-10: NO price and NO pricing wording anywhere on the full site (commit a8b21d3): 68 product-page headings changed from "Variants & Pricing" to "Models and Variants" and 28 subcategory texts changed to "...specifications and variants." Live check: 114 URLs, 0 offers, 0 price, 0 rupee. Left on purpose: Home/Contact "pricing, or logistical support" and the export quotation line.
- 2026-11-10: Sanity webhook filter now includes blogPost. Stale-structured-data emails (Product snippets and Merchant listings) need no action: old crawl, accepted.
- 2026-11-10: Graphite post source restored (868ac1e): scripts/blog-posts.json brought back in step with Sanity. Content now live: Pluto Pro pitch "coarse pitch such as 2/3 or 3/4 TPI depending on the block size"; FAQ on tooth pitch; section on clean-up and support (vacuum not compressed air); section "Which bandsaw can cut graphite?" naming HABA VMCB16RSE (three blade speeds, VFD optional, seal electricals) with link. No cutting size stated until the factory confirms it. RULE: after any blog edit the JSON and Sanity must match; the live page is checked every time.
- 2026-11-10: Search Console indexing continued (quota reached at the 12th request). Remaining list in section 25.3.
- 2026-11-10 (night): SOP FULL MERGE v5.1. Found that the Mac copy was v4.8 (Google profile products, IndiaMART P2 record) while the project copy was a separate v5.0; both merged into this file. COPIES RULE fixed by Jabs (section 0): project copy is always the latest; folder copy overwritten at the end of the session; then git; no addendum or pending-notes files.
- 2026-11-10 (end of session): SOP v5.1 synced to project, Mac and git (89f7d88); CLAUDE.md note pushed (b473740); old addendum files deleted; share image check finished (nothing to fix). Next: indexing resumes 11 Nov at the all-geared lathe subcategory.
- 2026-11-11: Product snippets structured data email repeated (WNC-10030322, "Either offers, review or aggregateRating should be specified"): NO ACTION, same old-crawl notice already accepted (section 25.4). Never add fake prices or copy the 43 business reviews onto products.
- 2026-11-11 (evening): Search Console indexing resumed (quota reset): 11 Indexing requests made, all showed "Indexing requested" (list in section 25.3). One page (HABA Extra Heavy Duty all-geared lathe bed 26) was already on Google and skipped. Stopped at 11 because the quota stopped the 12th request on 10 Nov.
- 2026-11-11 (22:40 IST): Vercel ISR Writes check DONE: 53,888 of 200,000 (27%), healthy (section 7). Sanity API usage not checked (Jabs: no need now).
- 2026-11-11 (Jabs): MONTHLY LIMITS CHECK added: once a month check usage and limits on Vercel, Sanity, Upstash and GitHub (section 16). Vercel emails at 90% (confirmed, it emailed at 77% earlier); email warnings from Sanity and Upstash are NOT confirmed, so do not rely on them alone; also make sure these emails do not land in spam. First check about 11 Dec 2026.
- 2026-11-11 (end of session): SOP v5.2 saved in the project (the Mac copy found on 13 Nov was also v5.2). Next: indexing resumes 12 Nov at the MODI Medium Duty belt lathe.
- 2026-11-12 (evening, GA4 review, DONE in Jabs's Chrome): post-redirect window 28 Oct - 12 Nov (16 days) compared with the 28 Oct baseline; full numbers in claude/ga-review-2026-11-12.md and a summary in section 16. Result: the brochure redirect works (404 views from 377 in the baseline window to about 4 old /shop addresses); Direct share 83% to 45%; overall engagement rate 19.1% to 41.6%; Organic Search steady (about 5.3 sessions a day, 68% engaged); brochure / pdf 69 sessions; Google Business Profile UTM link 10 sessions; AI Assistant 9 sessions (ChatGPT 5, Gemini 4). Google's own monthly email (16 Oct - 12 Nov) showed users -55%: that is the junk traffic leaving, not real visitors lost. Key events still 0.
- 2026-11-12: AI assistant detail (1 Oct - 12 Nov, 21 sessions): ChatGPT 17 (Home 10, PRG Impact Press 3, Contact 1, Bradma Stamp Marks 1, not set 2) spread over 11 different days; Gemini 4, all 30 Oct - 2 Nov (3 on /contact with 0 seconds, 1 on Home): GA cannot say whether these were Jabs's own tests. Jabs's 6 Nov Gemini research left no visit, so a visit only counts when a link in an AI answer is clicked. Possible Apps Script referral (26 sessions from a script.googleusercontent.com address) is probably the instant-reply email/WhatsApp link: NOT confirmed; if true, add UTM tags to that link.
- 2026-11-12 (Jabs): GA4 KEY EVENTS setup left for another day (explained to Jabs: key events = actions marked as wins, such as form submitted, WhatsApp click, call click, catalogue request).
- 2026-11-12: Brevo notice (API key "Zoho WA email alert" unused 3 months) belongs to the Zoho automation, not the website; Jabs says that automation stopped because of an issue and he will check it. Nothing to do on the site (section 11).
- 2026-11-12 (night): Search Console indexing resumed: 10 requests, all "Indexing requested": MODI Medium Duty belt lathe, MODI Heavy Duty belt bed 13-15, HABA Heavy Duty belt bed 13-15, MODI Extra Heavy Duty belt beds 20, 22, 24, 26, 30, marking-solutions/stamp-marks, marking-solutions/rotary-numerators. Skipped (already on Google): MODI EHD belt bed 18 ("on Google but has issues", the old Product snippets notice) and the lathe-machine category page. marking-solutions/hydro-pneumatic-marking-presses failed twice with "Oops: Something went wrong" (temporary Google error, not the quota message): retry next time. Lathe pages are now finished.
- 2026-11-12 (23:30 IST): HOME/ABOUT META FIX LIVE and checked by curl. Commit 746db1c changed the description and openGraph.description in app/layout.tsx; a second commit (hash not noted) changed twitter:description. Both old texts wrongly listed "Milling" and "Laser" as categories and said "Max Machines"; the old twitter line only said "Industrial machinery supplier based in Chennai and Ahmedabad since 1963." New text everywhere: "Max Machine Tools: manufacturer, supplier and exporter of industrial machines including Lathe, Drilling, Power Press, Bandsaw and Marking. Since 1963." About has no meta of its own, it inherits the root layout. Rule: only live categories are named; "including" keeps it from being a full list; review every 15 days and add new categories when they go live (summary point 18, section 16 step 8, decision 43).
- 2026-11-12 (Jabs, 23:53): HOME TITLE DECIDED: Option A "Max Machine Tools | Max Machines: Industrial Machinery" (54 characters), because many customers say or search "Max Machine" or "Max Machines" (domain maxmachines.in). Also: change the root openGraph title, give About its own title, add "Max Machines" as alternateName in the Organization JSON-LD. NOT BUILT YET: planned for 13 Nov (section 22A). Today the title and openGraph title still say "Max Machines — Legacy of Precision Since 1963" (old name, em dash).
- 2026-11-12 (Jabs): HOMEPAGE DESIGN DECISION: when the site width is changed and the new design is tried, on the Home page About Us moves below and Products comes above (section 20 point 42, section 22C).
- 2026-11-12 (end of session): SOP v5.3 saved in the project. Next, 13 Nov: Home title change and the Studio work for the bandsaw subcategories (section 22A).
- 2026-11-13 (00:10 IST, Jabs): Mac linked; Mac folder copy (found at v5.2, newer than nothing, older than the project) overwritten with v5.3. Both copies now v5.3. Git commit of the SOP file is the only step left. Jabs: "lets not keep SOP work pending, let it be up to date".

---

## 14. Site foundation

- Stack: Next.js (site runs 16.2.4; CLAUDE.md says 15), TypeScript, Tailwind CSS, Sanity CMS (project p72ubifi, dataset production), Vercel (Hobby plan), GitHub maxmachines/maxmachines-web. Local folder `~/Desktop/maxmachines/maxmachines-web`. Domain on Hostinger (DNS only). Mac at home, Windows at office (code work Mac only).
- Design: page background #0f0f0f, second background #1a1a1a, gold #eab308, gold hover #facc15, white and grey text. Product photo panels and cards use #F5F5F0. Navbar and Footer on every page, floating WhatsApp button, social strip above the footer.
- Components: Navbar, Footer, WhatsAppButton, SocialStrip, BrandStrip, Contact, Hero, About, Products, Stats, ProductImageGallery, CategoryCard, ContactEnquiryCTA, EnquireButton, EnquiryForm, EnquiryModal, FaqAccordion, SchemaMarkup, OverviewToggle, VideoPlayer.
- Social strip order (Home and Contact): WhatsApp channel https://whatsapp.com/channel/0029Vb6Sttp1yT2HqDtufu2f, YouTube http://www.youtube.com/MaxMachineToolsModi, Instagram https://www.instagram.com/MaxMachineToolsModi/, Facebook http://www.facebook.com/MaxMachineToolsModi, LinkedIn https://linkedin.com/company/MaxMachineTools. Brand strip (brand names as pills, Home only) exists; real logos to replace the text later.
- Pages built: / , /contact, /about, /products, category, subcategory, product pages, /blog and /blog/[slug] (Sanity, 9 Nov), /export-and-uae, /studio, /llms.txt, sitemap, robots. Hidden from menus: /our-clients (placeholder).
- Contacts: Chennai HQ No 84 Armenian Street, Parrys, Chennai 600001, 044-42161514, 93828 61514, info@maxmachines.in. Ahmedabad: 3rd Floor, Chinubhai House, 7B Amrutbaug Colony, Navrangpura, Ahmedabad 380014, 93838 61514, sales@maxmachines.in. Business head Jabs 99620 61514, max@maxmachines.in. Accounts 99621 61514, accounts@maxmachines.in. Google Form for enquiries: https://forms.gle/TXjAGS67M1Nnb2Ye9.
- Secrets: Upstash keys live in `.env.local` (this Mac) and in Vercel environment variables. Never paste them in chat, never commit `.env.local`.
- Old WordPress site (5 years old, Hostinger, backup .wpress 839 MB) is retired. Do not reuse its URLs; the redirect in section 11 handles old links.
- Do not move the project folder into Dropbox (Dropbox can corrupt `.git` and syncs node_modules). Git on GitHub is the backup.

## 15. Technical lessons (why the rules exist)

- Server-rendered pages: until 17 Sep every product page was client-side, so Google and AI tools got an empty "Loading" page. Fixed with async server components, generateStaticParams, generateMetadata and canonical tags. Sanity client `useCdn` must stay false. Any new page that reads Sanity must be server-rendered the same way.
- 25 Oct: the site was ignoring every SEO field typed in Sanity. Fixed in generateMetadata at category, subcategory and product level. After any new page type, check that its title and meta come from Sanity.
- Verification of live pages: web fetch tools return stale cache. Ground truth is `curl -s <url> | grep -o "<word>"` (Jabs's Terminal). Cross-check big claims with ChatGPT, Grok and Gemini (this caught /products still client-side and missing og:image).
- Favicon set: icon.png (from Max_Logo_2026.png, 458x464), apple-touch-icon 180x180, manifest with icon-192 and icon-512. The wide public/logo.png (1920x1080, baked-in shadow) must never be used as an icon.
- GA4 script must sit inside the head in app/layout.tsx. Search Console is verified by a meta tag in app/layout.tsx: never remove it.
- Mac commands: `sips` does image resizing and cropping (`sips -c <height> <width>`). For patching a block in a TSX file, an inline `python3 -c` script is more reliable than `sed`. Pager stuck on `:` in Terminal: use `git --no-pager`. Heredoc pastes can drop `<a` tags: check with grep.
- Watermark removal (Gemini star): detect the star by brightness and size, never blank a fixed corner (that cut off machine bases). Remove stray specks by keeping only the largest connected component.
- Image processing tricks: match AI pictures to low-res originals by downscaled grayscale difference; contact-sheet grids to review many photos; `cp` then `md5sum` before deleting originals.
- Vercel: ISR Writes 200,000 a month (see section 7). Image optimisation was moved to Sanity's own image service. Re-check usage (Vercel emails at 90%).
- Claude workspace limits: cannot git commit or push (no identity), cannot pick files in Studio, cannot reach Sanity's API from its shell, cannot reach maxmachines.in from its shell. Mac aliases cannot be granted as folders. Very long Dropbox paths: add the folder through "+" then Add folder in the desktop app. Mac folder edits: device_stage_files, edit a copy, device_commit_files with expectedMtimeMs (the file must be saved under /mnt/user-data/outputs first); device_bash may not mount the folder.
- Dropbox photo path: `/Users/jabeshbagdy/Dropbox/01 Max Machine Tools - Shared/001 Sales Coordinator - Shared/0001 Machine Photos and Catalogue/001 Edited pic for Catalogue 2.0/www.maxmachines.in - Photo uploads and related/Ready for upload`.
- Product JSON-LD: Google rejects offers.price = "Request Quote" and then asks for offers, review or aggregateRating; final decision is Product block with no offers (section 25).
- A page that is a client component cannot export metadata: use a layout.tsx next to it (done for /about).
- Page meta lives in THREE places in app/layout.tsx: description, openGraph.description and twitter.description (the third was found on 12 Nov by curl after the first two were fixed). When changing site-wide wording check all three, plus the title and openGraph title. The Home and About pages have no meta of their own: they inherit app/layout.tsx.
- Blog edits drift: a blog edit made in another chat never reached scripts/blog-posts.json (cause unknown), and the live page then looked stale because the webhook filter missed blogPost. Both fixed 10 Nov. Lesson: after a blog edit check the live page AND grep the JSON.
- SOP copies drift: see section 0 (the 10 Nov mix-up).
- Search Console inspection can show the PREVIOUS URL's result while a "Retrieving data from Google Index" box is still loading (11 Nov): wait until the box is gone and the address at the top matches the URL you typed before clicking Request indexing. Request indexing can take 20 to 40 seconds to show "Indexing requested". A request can also fail with "Oops: Something went wrong ... try again later" (12 Nov, one page twice): that is a temporary Google error, not the quota; do not keep retrying, leave the page for the next sitting.
- GA4 (12 Nov): the report URL date parameter that works is `...explorer?params=_u.date00%3D20261028%26_u.date01%3D20261112&r=<report>` (without dateOption). Session source / medium needs the Traffic acquisition table dimension changed by hand; the table search box only searches the first dimension. A channel called Unassigned is the "brochure / pdf" source.

## 16. Google: Search Console, Business Profile, Analytics (single plan)

Search Console
- Property to use: URL-prefix https://www.maxmachines.in/ (the domain property is not accessible to max@maxmachines.in). Verified by meta tag (25 Apr); sitemap submitted 25 Apr and resubmitted 9 Nov (113 URLs). Full status, indexing method and quota notes in section 25.
- October 2026 baseline (monthly email): 69 web clicks, 1.86K impressions, 3 pages with impressions (Home 56 clicks, /contact 5, /about 3); top query "max machine tools" 29 clicks, then "maxmachine" 2, "maxmachines" 1; India 63 clicks; 0 image and 0 video clicks. Almost all brand searches: we are found by name, not yet by machine type.
- Why "power press manufacturers" did not show (25 Oct): site new to Google, no power press page then, term very competitive. Target buyer phrases (price, dealer, supplier, UAE).

Google Business Profile (Chennai only, decided 29 Oct; owner account max@maxmachines.in)
- One business, 100% verified, Chennai address only; 5.0 stars, 43 reviews. Ahmedabad, Gujarat appears only in the description as production, procurement and office. No second Ahmedabad listing.
- Live and approved (checked 7, 8 and 9 Nov): primary category Industrial equipment supplier, additional Tools Wholesaler and Metal machinery supplier; description (612 characters); website link with `?utm_source=google&utm_medium=business_profile`; hours Monday to Saturday 10 to 7. Profile WhatsApp chat link uses 99620 61514 (Google strips a pre-filled ?text=). Extra phone 93828 61514 still pending (expect about 13 to 14 Nov; Google says up to 7 days). Short name dropped.
- GBP PHOTO AND PRODUCT RULE (Jabs, 8 Nov 2026): one product entry per machine with ONE photo of that machine (a group picture for a range), a description in its own words (never the same closing line twice) and a link to the page on the new site with the UTM link above. Added at the same sitting as the website update. After about 15 machines are updated, add more photos for each machine in the Photos section (several files at once). Do NOT delete a product entry without asking Jabs.
- Product entries DONE 8 Nov (one photo each, new-site links): Mechanical Power Press, Impact and Toggle Press (combined), Horizontal Bandsaw, Vertical Bandsaw, Drilling Machine, VMCB16RSE vertical bandsaw (renamed, own photo; corrected 9 Nov: sold in India and exported).
- STILL TO DO on the profile (machine by machine as each website page is updated): Drilling cum Milling entry (no group photo yet); replace stock photos on Jewellery Welding, Laser Marking, Roll Marking, Vices, Metal Punches, Hydraulic Press, Lathe; Pneumatic Press (only a sketch), Bradma/Velse marking, tapping when photos arrive; interior photo and fresh exterior photo with a later photo update (two 11-year-old shopfront photos and Street View are accepted for now); location notice check; reply to every NEW review within 1 to 2 days (the ten old ones are skipped).
- Review link: g.page/r/CShu8ROgwJ_FEBM/review (share it when needed; the QR card was dropped). Review requests per decision 29.
- October 2026 profile report (before the category change): 159 interactions; 5,326 profile views (+34%); 1,155 searches (+58%); 52 calls (+8%); 56 direction requests (-20%); 44 website visits (+2%); 7 chat clicks (-41%). Top searches: cutting machine 398, wood cutting machine 116, machine 105. November report (early Dec) is the first test of the new category.

Google Analytics 4 (property 367500154)
- Baseline taken 28 Oct (30 Sep to 27 Oct): 1,328 views, 820 users, 963 sessions; Direct 800 sessions (11.75% engaged), Organic Search 132 (57.58%), AI Assistant 12 (all chatgpt.com), Referral 11; 404 page 377 views (28%). The baseline files are `claude/ga-baseline-2026-10-28.md` and `claude/ga-ai-traffic-2026-10-28.md`.
- REVIEW DONE 12 Nov (28 Oct to 12 Nov, 16 days after the redirect; file `claude/ga-review-2026-11-12.md`, the new comparison point): 361 sessions (about 23 a day against about 34 a day in the baseline); Direct 164 (45%, was 83%); Organic Search 85 (about 5.3 a day, 68% engaged, was 57.6%); brochure / pdf 69 sessions (33% engaged, 55 s, about 4 a day); google / business_profile 10 sessions (60% engaged, 47 s); a script.googleusercontent.com referral 26 sessions (probably the instant-reply link, not confirmed); AI Assistant 9 (ChatGPT 5, Gemini 4). Overall engagement rate 41.55% (was 19.11%). 404: about 4 old /shop addresses in 16 days (was 377 in 28 days). Top pages: Home 167 views, /products 138, /contact 53, PRG Pillar Drilling 31 (2m 14s), graphite blog post 22, HABA R vertical 20. Jabs's own /studio visits (about 12 views) are counted in GA (an internal-traffic filter is optional). Key events 0.
- Open points from the review: (1) confirm what the script.googleusercontent.com referral is and tag that link with UTM; (2) /products has 138 views but 9 s average: do brochure visitors reach product pages? (not measured); (3) who links to /blog and /our-clients; (4) new 404 addresses; (5) Gemini and other AI sources after 2 Nov.
- Key events to create: contact form submitted, WhatsApp click, call click, catalogue requested. Not done (Jabs left it for another day, 12 Nov), so enquiries are not measured in GA.
- Tag every link placed outside the site with UTM (utm_source, utm_medium): brochure/pdf, google/business_profile, youtube/video, indiamart/listing, whatsapp/channel, instagram/reel, catalogue/pdf. Untagged clicks land in Direct and hide what works.
- In GA4 the 404 breakdown needs the Pages and screens report switched from "Page title and screen class" to "Page path and screen class".

FORTNIGHTLY VISIBILITY CHECK (every 15 days; decided by Jabs 6 Nov; first due 21 Nov 2026, then 6 Dec, 21 Dec). Claude runs the steps it can; Jabs does the ones that need his Google login. Write the result as one dated line in section 13 and keep a small table (date, tool, question, result).
1. Search Console: Pages report (new and changed pages Indexed; "Crawled - currently not indexed"); URL Inspection on 2 or 3 key URLs, Request indexing only if "not on Google"; Performance (impressions, clicks, average position, top queries and pages; any "bandsaw", "Chennai", "Ahmedabad" or competitor query; which of the retrofitted bandsaw pages gained).
2. Own Google searches (private window): "horizontal bandsaw machine Chennai", "vertical bandsaw Ahmedabad", "bandsaw machine manufacturer India", "Made in India alternative to <approved competitor> bandsaw", "power press machine price India", "pillar drilling machine Chennai", and `site:maxmachines.in bandsaw`. Note whether maxmachines.in appears, which page, what position.
3. Ask the AI tools (ChatGPT, Gemini, Perplexity, Claude) the same 5 buyer questions each time, e.g. "Who supplies bandsaw machines in Chennai?", "Best Made in India horizontal bandsaw manufacturer", "Which company exports power presses from India to UAE?". Note whether Max Machine Tools is named, whether maxmachines.in is cited, and any wrong facts (fix them at the source: site, IndiaMART, Business Profile). Perplexity shows sources most clearly.
4. GA4 against the 28 Oct baseline and the 12 Nov review (claude/ga-review-2026-11-12.md): Organic Search sessions, AI Assistant sessions (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai, copilot.microsoft.com), Direct share, 404 views, brochure / pdf sessions, /products and bandsaw page views; once key events exist: contact form, WhatsApp click, call click.
5. Enquiries: count real enquiries since the last check (Sheet, WhatsApp, calls) and ask each new customer "How did you find us?"; note any that mention Google, ChatGPT or a competitor.
6. Reality check: Google needs 2 to 8 weeks to show changes on updated pages; AI tools are slower and less predictable. Keywords in the Sheet do not rank a page alone; titles, content, FAQs, structured data and links from other sites do. Judge only after 4 weeks.
7. Share image test: run the og:image check (section 27) on 2 or 3 key links.
8. HOME META REVIEW (Jabs, 12 Nov): check the Home page title and meta description (curl: `curl -s https://www.maxmachines.in | grep -o '<meta [^>]*description[^>]*>'`). Does the list in the description match the categories that are live now? When a new category (Blades, Chucks, Automation and so on) has gone live, add it the same day through Claude Code (app/layout.tsx: description, openGraph.description and twitter.description; show the diff, wait for "go", curl check). Name only live categories.

MONTHLY LIMITS CHECK (Jabs, 11 Nov 2026; first due about 11 Dec 2026, then 11 Jan, 11 Feb). Claude opens each usage page in Jabs's logged-in Chrome (Browser 1) and writes one dated line in section 13 with the numbers and the percentage of the limit:
1. Vercel: team Usage page (vercel.com/maxmachines-6712s-projects/~/usage), Incremental Static Regeneration > Writes (limit 200,000 a month) and Reads; also Fast Data Transfer and Function usage on the same page. The Writes chart needs a few seconds to load. 11 Nov baseline: 53,888 of 200,000 (27%).
2. Sanity: manage.sanity.io usage page for project p72ubifi: API requests and API CDN requests against the free-plan limits, dataset size, assets and bandwidth. Not yet checked: the first check sets the baseline (storage was 22 MB of 100 GB).
3. Upstash (enquiry rate limit): commands per day and the monthly total against the free plan. (The Upstash newsletter of Nov 2026 needed no action: its new features are for paid plans and larger apps; it announced no change to free-plan limits.)
4. GitHub: normally nothing to check; just confirm no warning or billing email.
5. Also confirm the warning emails (Vercel, Sanity, Upstash, Google Search Console) are not landing in spam or promotions in max@maxmachines.in and the owner mailbox. Vercel emails at 90% (confirmed); Sanity and Upstash email warnings are NOT confirmed, so the monthly check is the safety net.

## 17. AI visibility (the golden rule in practice)

- Built: robots.txt allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended); llms.txt generated from Sanity (one phone/WhatsApp line since 9 Nov; blog posts included); JSON-LD Organization, LocalBusiness, Product (areaServed, sku/model, category, no offers), FAQPage, BreadcrumbList, Article (blog); specs as text tables; consistent facts everywhere.
- Measuring: GA4 channel "AI Assistant". 28 Oct baseline: 12 sessions, all chatgpt.com, landing on Home (5), PRG Impact Press (3), not set (2), Contact (1), Bradma Stamp Marks (1). 12 Nov review: 21 AI sessions from 1 Oct to 12 Nov (ChatGPT 17, Gemini 4); see section 13 for the detail. Counts clicks only; mentions without a click and no-referrer visits are invisible (some sit in Direct).
- Every 15 days ask ChatGPT, Gemini, Perplexity and Claude the buyer questions (section 16 step 3). Fix the facts they get wrong at the source.
- Every video needs a text summary and every picture alt text (video summaries still to do).
- The future MAXIMUS chatbot (WhatsApp, number 91760 61514) is expected to read these product pages; keep specs in plain text.
- Blog posts (section 26) are also AI food: plain text, clear question headings, real facts only.
- Names: customers say "Max Machine", "Max Machines" and "Max Machine Tools". Decided 12 Nov: the Home title carries both names, and "Max Machines" is added as alternateName in the Organization JSON-LD (to build 13 Nov, section 22A).

## 18. Marketing and off-site

- YouTube: title with machine + brand + price India (no price on the site, titles may still say "price" as a search phrase), link back to the product page in the description, UTM tagged. Videos still missing on HABA Eco horizontal, PRG Eco vertical, PRG Pillar Drilling, PRG Toggle Press. Old PRG mechanical press videos have 54K and 47K views: add the product link there first.
- Marketplaces and directories (IndiaMART, TradeIndia, Alibaba, JustDial): same name, address, phone and website link as the site; replies that share the catalogue use the tagged link.
- Backlinks from own brands and suppliers. Social profiles all link to the site. WhatsApp channel posts per new machine (check the share image first, section 27).
- Catalogue: the old PDF stays in circulation (redirect covers it). New PDF catalogue and one-page catalogue: section 26. Adobe Express Premium via Airtel is available.
- Bradma: demand exists for the Label Marker (old link clicked 12 times) and it has no page on the website yet; IndiaMART listing exists (section 24). Bradma rules: approved resold brand, never "Made in India", meta ends "Supplied across India, UAE and export.", competitor names only in FAQs. Update Bradma Stamp Marks first (a ChatGPT visitor landed there); publish in batches (webhook and ISR limits).

## 19. Product-line rules

- HABA N series (standard/budget): worm gear shaft gearbox instead of ELECON, enamel paint instead of powder coating, front screw cylinders, no ISI/IE2 motor marking, no degree cutting. R series = premium. Blade lengths 3000/3760/4100/4860 mm, blade widths 27 mm (8N, 12N) and 34 mm (14N, 20N); 20N 3 HP; coolant pump included on all.
- Lathes (HABA and MODI): Belt Drive (MBL/HBL) and All Geared (HAG, HABA only). Model code = prefix + centre height digits + bed width digits + bore digit (+ bed length suffix, e.g. MBL1233/7). Bore digits: 2=50, 3=79, 4=104, 5=115 or 129, 6=152, 7=178 mm. Extra Heavy Duty is MODI only; custom configurations must be in Highlights and FAQs; from bed 26 inch the bed is Planner Type Hardened. Name format: Brand + Duty Level + Belt/All Geared + Lathe Machine, bed size in brackets for HD and EHD all geared. Norton Gear Box range shown only as "With Full Norton Gear Box". Panel Board, Padel Stop and Electrical Third Shaft optional from Medium Duty.
- Velse (own brand): positioning "better than Bradma on customer feedback", never a budget alternative; D3 tool steel for stamp marks and most punches; holders carry V prefix (V8H20, V8M40). Three Bradma holder corrections applied (625H1500, added 250H2L1000 and 312M3000). VELSE Dot Pin Marking Machine pending. VELSE Metal Label Marking Machine is not a Velse product.
- Press range (PRG, Made in India): nine types planned: Mechanical Power, Pneumatic Power, C Frame Ram Type, C Frame 4 Guide Plate, H Type Motorised, H Type Hand Operated, Fix Frame Ram Type, Fix Frame Piston Type, 4 Pillar Hydraulic; Impact (PIH11, PIH15, PIP25, PIP35) and Toggle (TPH9). Later: Die and Tools, Feeder, Automation subcategories; a Marking Machines category.
- VMCB16RSE (HABA R vertical): wheel 400 mm, throat 350 mm, blade speed 700/1100/1700 m/min (3 speeds), 2 HP 3-phase, VFD optional; maximum cutting size NOT listed - to confirm with the factory, together with the blade width a 400 mm wheel takes. Sold in India and exported.
- KOPIS blades: bi-metal and carbide stock from USA and Europe, welded to size in India, sold exclusively at Max Machine Tools. Pluto Pro (carbide) is the series for titanium, graphite and abrasive alloys; Fighter is bi-metal (budget). The catalogue gives no cutting speeds: never state speeds.
- Cross-category products: one product record shown in several places through related-products sections, never duplicated.
- Importer notes: subcategories must exist in Studio before import; display order is set by hand after loading; product names must not repeat (duplicates overwrite); Active must be Yes.

## 20. Decisions (Jabs's answers; these override older notes)

1. Brochure redirect is LIVE. Old links land on /products.
2. WhatsApp numbers: SUPERSEDED 9 Nov: WhatsApp chat is 99620 61514 at all places on the website (point 33). 91760 61514 is live on the CRM but not yet on MAXIMUS (the auto-reply chatbot): show it on the Contact page only, as "coming soon", not as a working button.
3. Reply promise is "within the hour" everywhere (DONE 5 Nov night, de8e06c: the four "4 business hours" lines in app/contact/page.tsx, components/EnquiryForm.tsx (2) and components/ContactEnquiryCTA.tsx). The enquiry-form success message after submit is not yet tested live (to avoid triggering real automation); check it the next time Jabs sends a test enquiry.
4. 25 Oct rules win for SEO title, meta (no city names) and geo tags. "Government Supply" stays on products that already have it.
5. Keywords: buyer-search phrases plus Chennai and Ahmedabad (two tags). "Export" appears inside phrases such as "exporter India".
6. Google Business Profile: Chennai only, final.
7. MODI is both a brand name and the group's company name ("MODI Machines Group").
8. Kopis = blade brand. Airdas = air compressor brand. They attach to the Cutting Blades and Air Compressor categories when built.
9. Lifetime spares guarantee: ask per product; never for traded items.
10. About page: remove Laser Unlimited (closed, same machines are sold under Max). Add JB Service Solutions (India) as the group's IT services offered to customers (can be marketed). Kerdoss Trade India: one plain factual line in the group list, no marketing; if shown, include the SEBI registration number and have the compliance officer approve the exact wording. Still to confirm with Jabs: shortening the Late Mr. P.R. Garg biography (point 21: leave as it is) and the "10+ export countries" count (Dubai and UAE counted twice).
11. Display Order is still broken: check and fix per subcategory.
12. The multi-subcategory schema upgrade is dropped; Impact and Toggle appear in Marking through related products.
13. Planned categories (more than listed): Laser Marking, Shearing, Press Brake, Cutting Blades, Pneumatic Fittings, Small Automation, Vices, Chucks. Jabs will give the full list.
14. Toggle press brands corrected (section 5).
15. Our Clients page stays hidden until new customers and logos are added (section 26 customer list).
16. Main web address is www.maxmachines.in (people type www); maxmachines.in redirects with a permanent 308 (set in Vercel Settings, Domains, 5 Nov night). Do not touch Hostinger DNS (section 11).
17. Vikrant Machinery (vikrantmachinery.com, Ahmedabad) is a SUPPLIER: MMT gets some machines from them but sells them under MMT's own brand (HABA, PRG), never under Vikrant's brand. Nobody writes that a machine is made by Vikrant on the website. Their site is a reference for ideas only (never copy text or pictures). Refined by point 25.
18. Full-width layout planned (the site uses a centred 1280 px box, `max-w-7xl mx-auto`, while Vikrant-style sites run edge to edge with left-aligned text). Separate sitting: 2 or 3 design options first, then a 113-page before/after check. The blog widens with the rest of the site. See point 42 for the Home page section order in the new design.
19. Language and design: decide later; Claude proposes 2 or 3 homepage design options (or template sites to learn from) first; one redesign in a single go so the site does not look like a generic AI-built site. Adobe Express Premium available for design assets.
20. Studio address is www.maxmachines.in/studio; April colours blue steel and orange superseded by black and gold. CLAUDE.md revalidate wording and redirect status were corrected by an appended note.
21. Late Mr. P.R. Garg tribute on the About page: leave as it is.
22. Export countries: add Maldives (11 countries with Maldives, Dubai and UAE being the same country; "10+" is true). More countries are added when the customer list is updated. Tidy the Dubai/UAE duplicate then.
23. Leadership line for Jabs: as point 10.
25. Vikrant final (5 Nov night): "Vikrant" is a bandsaw brand that buyers search, so it IS a competitor name, added to the horizontal and vertical lists together with Accucut. SPM Tools and MSC horizontal only. Allowed only inside FAQ answers and keyword tags. MSC is a manufacturer name.
26. Comparison FAQs: vary the question wording from product to product so the 'I am comparing' opening does not repeat.
27. Product page section order (same template for every product): photos, Specifications, Overview (short with Read more), Videos, Accessories, More in, Compare All Models, Models and Variants, PDF Downloads, FAQs last (FAQs are for Google and AI tools, not for customers). Customers (MSME) look at pictures and videos first; corporates read the detail. (Price and Availability columns removed since 9 Nov; heading wording fixed 10 Nov.)
28. Modi Machines is the OLD concern (stopped 2012); www.modimachines.in is still maintained and says "now part of Max Machine Tools" but shows the old address 70 Armenian Street (Max is at 84 Armenian Street), Max phone numbers and a modi@ email. Directory listings "Modi Machine Tools" or "Modi Machine Impex" (Parrys) exist on ExportersIndia and TradeIndia (seen 6 Nov); AI tools (Gemini, Claude) flagged them as a naming risk. Rule: one identity for Max Machine Tools; each old listing is decided by Jabs (update to point to Max, or leave). Keep modimachines.in as a link source to maxmachines.in. Exception: sales@modimachines.in stays on IndiaMART as a backup email (9 Nov).
29. Customer reviews: Jabs collects them from real customers. Claude supplies only the request message (Google, and JustDial or IndiaMART), never sample reviews; customers write in their own words and only what is true; no payment or gifts.
30. Google Business Profile category: primary "Industrial equipment supplier"; additional "Metal machinery supplier" and "Tools Wholesaler"; "Machine shop" and "Machining manufacturer" removed because they brought machining job-work calls instead of machine buyers. Do NOT add any sentence about "no job work" in the description (it looks negative); the category fix is the cure.
31. Business hours everywhere (Google profile, website contact page, IndiaMART, JustDial): Monday to Saturday 10 AM to 7 PM, Sunday closed. Phone on Google: 99620 61514 primary, 044 4216 1514 and 93828 61514 additional.
32. Every listing change is re-checked after 24 hours for approval, and all profiles are reviewed every 30 days for the first few months (section 23D).
33. (9 Nov) WhatsApp chat = 99620 61514 at ALL places on the website, llms.txt included. Call (tel:) numbers on the contact page and team list stay as they are. IndiaMART has no WhatsApp link; MAXIMUS runs on a different number: nothing to change.
34. (9-10 Nov) No price, no availability and no pricing wording on the website; Enquire buttons only (and MAXIMUS later). Prices only for items orderable online, once online selling starts. No return policy for now. "1 invalid item" on Product snippets accepted.
35. (9 Nov) Google Ads credit offer ignored for now.
36. (9 Nov) IndiaMART: further product updates happen after a few updates on the website; IM Website Pages content is updated at the next IM sitting.
37. (9-10 Nov) Blog: built on Sanity, visible in menus, graphite post live. Blog posts recommend KOPIS blades (Pluto Pro first choice, Fighter budget) and name the HABA VMCB16RSE with a link. The earlier circular of 27 Feb 2026 used M.K. Morse blades: superseded.
38. (10 Nov) Share image rule (section 27).
39. (8-9 Nov, Jabs) Google profile: one photo per machine, same sitting as the website; reply to every new review within 1 to 2 days; never delete a product entry without asking; QR card dropped; VMCB16RSE sold in India and exported; nothing negative about any machine; do not repeat the same sentence across descriptions (section 4 and 16).
40. (10 Nov, Jabs) Copies rule: project copy is always the latest; folder copy overwritten at the end; then git; no addendum or pending-notes files (section 0).
41. (11 Nov, Jabs) Monthly limits check of Vercel, Sanity, Upstash and GitHub (section 16). Sanity API usage need not be checked right now.
42. (12 Nov, Jabs) HOMEPAGE DESIGN: when the site width is updated and the new design is tried, on the Home page the About Us section moves below and the Products section comes above it.
43. (12 Nov, Jabs) HOME META: description (and openGraph and twitter descriptions) = "Max Machine Tools: manufacturer, supplier and exporter of industrial machines including Lathe, Drilling, Power Press, Bandsaw and Marking. Since 1963." Only live categories are named; "including" keeps the list open; reviewed every 15 days (section 16 step 8); new categories (Blades, Chucks, Automation and so on) are added when they go live, not before. Live since 12 Nov.
44. (12 Nov, Jabs) HOME TITLE (decided, not yet built): "Max Machine Tools | Max Machines: Industrial Machinery" (Option A, 54 characters), because many customers use "Max Machine" or "Max Machines". Same for the root openGraph title; About gets its own title (for example "About Max Machine Tools | Industrial Machinery Since 1963", wording to confirm when built); "Max Machines" added as alternateName in the Organization JSON-LD. Risk noted: Google may show brand-name searches differently for a while after a title change; Google may also rewrite titles.
45. (12 Nov, Jabs) GA4 key events setup left for another day (section 16, section 22C).

---

## 21. MASTER STATUS REGISTER (condensed; updated 13 Nov 2026)

Status key: DONE = built and live. PARTLY = started. PENDING = not started. CHECK = needs verifying.

### 21A. Timeline (short)

| When | What |
|---|---|
| About 20 Apr 2026 | Project folder created (Next.js, Tailwind, Vercel, GitHub maxmachines/maxmachines-web). WordPress rejected for a custom build. Old WordPress site (5 years old, Hostinger) retired. |
| 22-25 Apr | Sanity CMS designed (Category > Subcategory > Product > Variants). Homepage, Contact (form + Google Maps + Ahmedabad card), Products, Category, Subcategory, Product, About pages; Blog placeholder; Our Clients page (200+ named clients). Enquiry modal (Google Form + Resend backup). Social strip and brand strip. Google Sheet importer (4 tabs). Sitemap, robots, JSON-LD. Search Console verified; GA4 moved into head. DNS on Hostinger for Vercel, Resend, Brevo. First CLAUDE.md. |
| 2 May | Backup explained: GitHub (code), Vercel (deploy history, rollback), Sanity (content). |
| 13 May | HABA HMM9R/12R/13R bandsaw data formatted; N-series PDF received. |
| 21 May | Sanity trial email: free Starter plan is enough, public dataset is read-only, no action. |
| 26 May | Importer overhaul: 4-tab structure, Yes/No flags, displayOrder, native CSV export fix. Vertical Bandsaw category imported. Trigger phrase "let's update product" created. |
| 27 May | Drilling range: 7 subcategories (Pillar, Drilling cum Tapping, Pure Tapping, Drilling cum Milling, Radial, Multi Drill Heads, Automation). Spec table redesigned as one comparison table. |
| 28 May | Press range: nine press types plus Impact (PIH11, PIH15, PIP25, PIP35) and Toggle (TPH6, TPH9, TPP6) started. |
| 29 May | Lathe range complete: Belt Drive and All Geared (MODI and HABA). |
| 3 Jun | Marking Solutions: Bradma full range, Velse range, PRG Hydro Pneumatic Marking Press. |
| 16 Jun | HABA HMM8/N series bandsaws formatted; import workflow debugged. |
| 16-19 Sep | Full audit: all product pages were client-side. Server-rendering, security (headers, Upstash rate limit), Open Graph, Blog and Our Clients hidden, homepage products from Sanity. Card images object-contain; favicon set; VMCB16RSE photos. |
| 9-18 Oct | ISR Writes at 77%: refresh raised to 3600; audit plan; GOLDEN RULE; GA4 found 404 = half of visits. |
| 20-25 Oct | Photo SOP; category/subcategory hand-fill rule; watermark and right-click block; webhook; keyword, SEO and competitor-brand SOPs; 69 products rewritten; SEO fields output; FAQ/breadcrumb data, llms.txt, /export-and-uae, WhatsApp pre-filled messages; Press, Impact, Toggle published. |
| 28-29 Oct | GA4 review (404 = 28% of views); brochure redirect; Hostinger CDN incident fixed; AI traffic baseline; GBP Chennai only. |
| 3-5 Nov | Mechanical Power Press done; competitor method; retrofit of Impact, Toggle, Pillar; master SOP; import (69 updated). |
| 5-6 Nov (night) | Toggle fix, Vikrant clean-up, six bandsaws retrofitted (0 errors), "More in" fix, product page reorder, Read more, video thumbnails, "within the hour", 308 redirect. SOP v4.2. |
| 6-7 Nov | Google and AI research; GET-TO-THE-TOP PLAN; GBP category, description, hours, link changed and approved. |
| 8 Nov | GBP products: six entries with own photos and new-site links; review approach; GBP closed for now. IndiaMART P2 on the 44 active listings (average 88). SOP v4.8 (Mac only). |
| 9 Nov | Canonical tags; offers and price display removed; WhatsApp number unified; Search Console work; 13 IndiaMART listings; blog built on Sanity and first post live; SOP v5.0 (project only). |
| 10 Nov | Blog share image fix; whole-site price wording removed; webhook covers blogPost; graphite post restored; IndiaMART 24-hour check passed; indexing continued; share image check finished; SOP full merge v5.1 and copies rule; CLAUDE.md note. |
| 11 Nov | Product snippets email repeat (no action); 11 indexing requests (lathes); Vercel ISR Writes 27%; monthly limits check added; SOP v5.2. |
| 12 Nov | GA4 review against the 28 Oct baseline (redirect works, engagement up, claude/ga-review-2026-11-12.md); 10 indexing requests (belt lathes, marking); Home/About meta description fixed and live (746db1c plus the twitter commit); Home title decided (Option A), homepage design decision; SOP v5.3. |
| 13 Nov (00:10) | Mac linked; Mac SOP copy overwritten with v5.3; project and Mac both v5.3. |

### 21B. Status by area

Website build
| Item | Status |
|---|---|
| Home, Contact, About, Products, Category, Subcategory, Product pages | DONE |
| Blog on Sanity (/blog, /blog/[slug], menu link, sitemap, llms.txt, share buttons, Article JSON-LD) | DONE 9 Nov; one post live |
| Enquiry modal (Google Form + Resend backup, honeypot, phone clean-up) | DONE (do not break) |
| Server-rendered pages, canonical on all page types, generateMetadata, JSON-LD | DONE (canonical on /, /products, /contact, /about added 9 Nov) |
| Sanity SEO fields output on all page levels | DONE (25 Oct) |
| FAQPage, BreadcrumbList, Product JSON-LD (no offers) | DONE |
| llms.txt, robots.txt, sitemap, /export-and-uae, waLink() WhatsApp messages | DONE |
| Security headers, rate limit, Open Graph, favicon set | DONE |
| Picture watermark + right-click block | DONE (revert with git revert 28a1fcd) |
| Webhook instant refresh (category, subcategory, product, blogPost) | DONE |
| Single-product subcategory skips to the product | DONE |
| Brochure redirect, Hostinger CDN fix | DONE (redirect confirmed working by the GA review of 12 Nov) |
| Price, availability and pricing wording removed (whole site) | DONE 9-10 Nov |
| WhatsApp chat number unified to 99620 61514 | DONE 9 Nov |
| Blog share image = cover picture | DONE 10 Nov (d7fbe0d) |
| Share image check on other page types | DONE 10 Nov: product, category, subcategory use own picture; /products uses logo (accepted); home, about, contact, export, blog list assumed logo (accepted, not curled) |
| Home and About meta DESCRIPTION (description, openGraph, twitter) | DONE 12 Nov (746db1c plus the twitter commit); curl check passed 23:33 IST |
| Home and About TITLE and openGraph title; own About title; alternateName "Max Machines" in Organization JSON-LD | PENDING (decided 12 Nov, point 44; build 13 Nov) |
| Custom helpful 404 page; homepage LocalBusiness JSON-LD | CHECK |
| GA4 key events | PENDING (left for another day, 12 Nov) |
| "Fill Form" buttons feed the same Sheet (report only) | PENDING |
| About page edits (Kerdoss, Laser Unlimited, Maldives) | PENDING (decided) |
| Contact page: 91760 61514 as "coming soon" | PENDING |
| Navigation consistency | CHECK |
| Product page template (one video, 3 photos, key specs, WhatsApp quote) | PENDING |
| Text summary for every video; alt text on all pictures | PARTLY (alt text done on published; video summaries pending) |
| Blog video field | PENDING |
| "Don't see your machine? Ask us" button on category pages | PENDING |
| /our-clients real content | PENDING (section 26) |
| Display Order fix per subcategory | PENDING |
| Privacy policy page (form collects names and phones) | PENDING, optional |
| Full-width layout and homepage redesign (Products above About Us, point 42) | PENDING (Claude proposes options first) |
| Brand pages, area pages, export-country pages | PENDING |
| Windows office setup for code work | PENDING |

Catalogue
| Category | Data | Pictures and cards |
|---|---|---|
| Horizontal bandsaw (HABA Standard, R, Eco) | DONE | DONE |
| Horizontal bandsaw: Fully Auto (page says Coming Soon, no machines), Semi Auto, Double Column | PENDING | PENDING |
| Vertical bandsaw (HABA R, PRG Standard, Eco) | DONE | DONE |
| Vertical: Special Application, Wood Cutting, AAC Block | DONE (data) | PENDING |
| Drilling: Pillar | DONE | DONE |
| Drilling: other subcategories (tapping, milling, radial, multi head, automation) | DONE (data) | PENDING |
| Press: Impact, Toggle | DONE | DONE |
| Press: Mechanical Power | DONE (PMC10/20/30/50 pictured) | PARTLY (PMC5, PMC80, PMC100 pictures missing) |
| Press: Pneumatic, Hydraulic (7 types) | Data from May | PENDING |
| Press: Die and Tools, Feeder, Automation | NOT STARTED | n/a |
| Lathe: Belt Drive, All Geared | DONE (data) | PENDING |
| Marking Solutions: Bradma, Velse, PRG Hydro Pneumatic | DONE (data) | PENDING |
| VELSE Dot Pin; Bradma Label Marker page; Air Compressor; Die Tools; KOPIS blades; further categories (decision 13) | PENDING | |

Retrofit of competitor FAQs, advantages, spares, keywords: DONE for all ten products with photos (section 9). Videos missing: HABA Eco horizontal, PRG Eco vertical, PRG Pillar Drilling, PRG Toggle Press. Mechanical Press accessories standard vs optional: open.

SEO, Google, AI
| Item | Status |
|---|---|
| Keyword, SEO title, meta, geo SOPs on all 69 products | DONE |
| Competitor FAQs + tags | DONE for bandsaws, pillar, radial, impact, toggle, mechanical; other types pending |
| Search Console verified, sitemap submitted and resubmitted | DONE |
| Indexing requests (11 on 9 Nov; more on 10 Nov until the quota; 11 on 11 Nov; 10 on 12 Nov; list in section 25.3) | PARTLY (all lathe pages and two marking pages requested; rest in section 25.3) |
| Duplicate canonical fix validated | STARTED 9 Nov, result about 21 Nov |
| Google Business Profile: category, description, hours, link | DONE and approved |
| GBP products: six entries with own photos and new-site links | DONE 8 Nov |
| GBP extra phone | PENDING (check about 13-14 Nov) |
| GBP: Drilling cum Milling entry, replace seven stock photos, Pneumatic/marking/tapping entries, interior photo | PENDING (follow website updates) |
| Customer Google reviews | PENDING (Jabs collects; review link g.page/r/CShu8ROgwJ_FEBM/review) |
| IndiaMART P2: 44 active listings, average score 88 | DONE 9 Nov (open items in 24.5); 13 new listings 9 Nov, check passed 10 Nov |
| JustDial, TradeIndia and other portals (P3, P4) | PENDING |
| GA4 baseline 28 Oct; GA4 review 12 Nov | DONE (review file claude/ga-review-2026-11-12.md); next comparison at the 21 Nov check |
| UTM tags on all outside links | PARTLY (check the script.googleusercontent.com referral link, section 16) |
| Fortnightly visibility check (now includes step 8, Home meta review) | first due 21 Nov |
| Monthly limits check (Vercel, Sanity, Upstash, GitHub) | first due about 11 Dec |

Marketing and off-site: YouTube links, IndiaMART/TradeIndia/Alibaba/JustDial listings, backlinks, new catalogues: see section 26. Posting itself lives in the separate marketing project.

Connected systems (must not break; separate projects): contact form > Google Form > Sheet > instant email + WhatsApp > Magic CRM (tenant MMT_001) > IndiaMART automation. MAXIMUS WhatsApp chatbot (number 91760 61514, architecture decision open). Zoho Books/Flow automation (one Zoho alert via Brevo stopped earlier; Jabs to check, section 11). Quotation Pro (section 26 point 6).

Infrastructure: Sanity free plan (storage 22 MB of 100 GB; API request count not yet checked); Vercel Hobby (ISR Writes 27% on 11 Nov, healthy; Vercel emails at 90%); Upstash free; Brevo and Resend DNS in place; GitHub backup. Usage of all of these is re-checked monthly (section 16).

---

## 22. MASTER TO-DO LIST (single list; tick and date items here; replaces all older lists)

### A. Date-locked (do on or after the date)
- TODAY 13 Nov (Jabs, 12 Nov): (1) Home title change, Option A (point 44): Claude Code edits app/layout.tsx (title and openGraph title), app/about/layout.tsx (own About title) and the Organization JSON-LD alternateName; show the diff, wait for "go", then curl check. (2) Studio work for the six bandsaw subcategories without card pictures (Horizontal Semi Auto, Fully Auto, Double Column, Special Application, Wood Cutting, AAC Block): Display Order, description, SEO fields done by Claude in Studio; Jabs supplies the card pictures (Special Application has no Display Order). (3) Search Console indexing resumes (about 10 a day, section 25.3).
- 13 Nov onward (quota reset): Search Console indexing, inspect first, 10 to 11 a day. Resume at marking-solutions/hydro-pneumatic-marking-presses (failed twice on 12 Nov), then the rest of section 25.3.
- About 13-14 Nov: Google profile extra phone 93828 61514 check (Google says up to 7 days); then follow the GBP list in section 16.
- About 16 Nov: re-check the pages requested on 9, 10, 11 and 12 Nov. Judge only after 4 weeks.
- 21 Nov: duplicate canonical validation result; FIRST fortnightly visibility check (section 16, now with step 8 Home meta review). Then 6 Dec (with the first 30-day review), 21 Dec.
- Early Dec: Google profile November report against October.
- About 11 Dec: FIRST monthly limits check (Vercel, Sanity, Upstash, GitHub; section 16). Then 11 Jan, 11 Feb.
- DONE 10 Nov: IndiaMART 24-hour approval check.
- DONE 11 Nov: Vercel ISR Writes check (27%).
- DONE 12 Nov: GA4 analytics review against the 28 Oct baseline; Home/About meta description fix.

### B. New workstreams (Jabs, 9 Nov; plan and order in section 26)
1. Blog: more posts (how to select a lathe, how to measure marking punch height, more). Jabs pastes text or rough points; each needs a cover picture first.
2. Social media update and YouTube videos posted on Instagram; informative videos and audio made with NotebookLM and similar AI tools.
3. PDF catalogue of all machines updated on the website.
4. One-page catalogue per machine type for IndiaMART enquiries.
5. New IndiaMART WhatsApp template (after item 4).
6. Customer list refresh from 2023 to Nov 2026 (include Hyundai Wia, Gabriel etc., even with billing due), with logos; LATER.
7. Quotation Pro: send the quotation PDF with the WhatsApp message.

### C. Website to build or fix (in suggested order)
1. SHARE IMAGE CHECK: DONE 10 Nov (section 27). Nothing to fix.
2. Studio: Display Order, card picture, description and SEO fields for bandsaw subcategories without pictures (Horizontal Semi Auto, Fully Auto, Double Column, Special Application, Wood Cutting, AAC Block); Special Application has no Display Order. Then Display Order on the other subcategories. Build the Horizontal Fully Auto page (HABA Automatic Bandsaw, HMA9RE) so IndiaMART and Google can be updated after it. (Planned for 13 Nov, see A.)
3. About page edits (decisions 10 and 22). Contact page "coming soon" number (decision 2).
4. GA4 key events (contact form, WhatsApp click, call click, catalogue request); left for another day by Jabs on 12 Nov. The analytics review against the 28 Oct baseline is DONE (12 Nov).
5. Full-width layout and homepage design: Claude proposes 2 or 3 options; no code until Jabs picks one; one build. In the new design About Us goes below and Products above on the Home page (point 42).
6. Test the enquiry-form success message with a test enquiry.
7. Optional polish: "More in" card box 130 to 160 px; uneven video row.
8. Header Products dropdown; Download Brochure link (after the new catalogue); Service page (installation, maintenance, spares, training: only what Jabs confirms is true); real machine photo in hero; "Talk to an engineer" button; language (Phase 1 Google Translate widget about 12 languages: Hindi, Tamil, Telugu, Gujarati, Marathi, Bengali, Arabic, French, Russian, Spanish, Portuguese, Swahili; check GA4 language and country reports first; Phase 2 real translated pages only if data supports it; note ISR limit and Arabic right-to-left; decide together later); "Don't see your machine? Ask us"; text summaries for videos; blog video field; brand pages, area pages, export-country pages; privacy policy page; Windows office setup.
9. Home and About meta DESCRIPTION: DONE 12 Nov (point 43). Home and About TITLE: build 13 Nov (point 44). Then the 15-day Home meta review (section 16 step 8) and adding each new category when it goes live.
10. Optional: internal-traffic filter in GA4 so Jabs's own /studio and site visits are not counted.
11. Find out what the script.googleusercontent.com referral is (probably the instant-reply link) and add UTM tags to that link.

### D. Catalogue
1. Next product when photos arrive: "let's update product" (then its Google profile entry in the same sitting).
2. Pictures and cards: Mechanical Press PMC5, PMC80, PMC100; Hydraulic and Pneumatic Power Press; Lathe and Marking cards; other Drilling subcategories; Special Application, Wood and AAC vertical bandsaws; four missing YouTube videos.
3. New products: VELSE Dot Pin Marking Machine, Bradma Label Marker page, Die Tools for Press, Feeder and Automation, Air Compressor (Airdas), cutting blades (Kopis; then update blog links and the Home meta list), further categories (decision 13).
4. Mechanical Press: which of the 10 accessories are standard and which optional.
5. Competitor FAQ method for the remaining machine types.
6. Factory: VMCB16RSE maximum cutting size and blade width for a 400 mm wheel (until confirmed no post states a cutting size).
7. Jabs to confirm the graphite FAQ wording "2/3 or 3/4 TPI depending on the block size" (written by Claude, live).

### E. Google, AI and off-site (Jabs does slowly)
- GET-TO-THE-TOP PLAN steps P3 to P8 (section 23C). P1 and P2 closed for their scope.
- Google profile: remaining items in section 16 (stock-photo entries, new entries, review replies within 1-2 days).
- IndiaMART open items: section 24.4 (marked done by Jabs 10 Nov) and 24.5 (photos of 1000 px or more, PDFs, Cmatic catalogue, stale titles, review replies).
- UTM tags on every outside link; YouTube videos with links back; backlinks; JustDial, TradeIndia and other portals.

### F. Housekeeping and SOP
- CLAUDE.md: DONE 10 Nov (commit b473740, appended corrections note). Append only, never overwrite.
- DONE 10 Nov: pending-notes and the two addendum files deleted from the project; pending-notes removed from the Mac folder and git (commit 89f7d88).
- DONE 13 Nov 00:10 IST: v5.3 synced to the Mac folder. ONLY LEFT: Jabs (or Claude Code after his "go") commits the SOP file in git (section 0).
- Empty folders in "Mechanical Press - NOT USABLE" and files in "_to_delete" for Jabs to bin. Project doc `plan-2026-10-29.md` is superseded by this file.
- Jabs to check the stopped Zoho alert that used the Brevo key (section 11); not a website task.

## 23. GET-TO-THE-TOP PLAN (research of 6 Nov 2026, about 23:00 IST; Jabs's Chennai Chrome; Claude web search)

PURPOSE: Max Machine Tools must show up when a buyer searches Google or asks an AI tool for power press, bandsaw and marking machine suppliers in Chennai. Jabs noticed small shops (Quality Machine Tools, Industrial Machine Tools, Orient Machine Tools, Techno Machine Tools, Premier Machine Tools) listed above us although they have little or no website.

### 23A. What we found (facts, 6 Nov 2026)
1. Google ranks PAGES, not business quality. Small shops appear through their IndiaMART, JustDial, TradeIndia, ExportersIndia, Aajjo and Yellow Pages pages, which sit on very strong domains. Some have an IndiaMART-managed website (premiermachinetools.net says "managed by IndiaMART") or their own (technomachinetools.co.in, gmtengineers.co.in).
2. By NAME we are fine: "Max Machine Tools Chennai" shows maxmachines.in first with sitelinks and an accurate AI Overview. About 40 pages indexed (`site:maxmachines.in`). The old WordPress address `maxmachines.in/shop/vices` was still listed.
3. By MACHINE TYPE we are not on page 1: "power press machine manufacturers in Chennai", "stamp marking machine dealers Chennai", "PRG mechanical power press Made in India". Page 1 is IndiaMART, JustDial, competitor sites, and our own YouTube and Facebook posts. For "horizontal bandsaw machine manufacturer Chennai" our Business Profile appears in the map list, and JustDial lists us at 4.9 (52 ratings).
4. Business Profile (6 Nov, before change): 5.0 stars, 43 reviews, category "Machine shop" (now changed). Map winners for power press were categorised "hydraulic equipment supplier" and "machining manufacturer"; for marking "laser equipment supplier". Google matches by category, review words (one review saying "PRG vertical bandsaw" helped) and website words.
5. JustDial 5.0 / 4.9 from about 51 to 52 ratings. IndiaMART 4.5 from 64 reviews, 16 years, GST and TrustSEAL. Premier Machine Tools: 17 years, 4.0 from 84 reviews, TrustSEAL, prices on every product, many wrong specs. Quality Machine Tools: 2.8 from 6 ratings, no badge.
6. Our IndiaMART page showed wrong prices that Google quotes: PRG Hydraulic Press 300 Ton at Rs 25,000; Power Press Machine Rs 50,000; Hydraulic Press Rs 25,000 per piece. Partly fixed in P2 (Jabs gave prices for hydraulic and power presses); check what remains. Our site shows no prices (decision 34); competitors show prices.
7. YouTube is a strong asset: PRG mechanical press videos with 54K and 47K views (2018, 2014) rank on Google. Channel 8.4K followers. Facebook page 5.4K followers.
8. Competitor Bhavya Machine Tools runs Google Ads (sponsored result on page 1).
9. AI tools (same question: best power press suppliers in Chennai): Premier Machine Tools and GMT Engineers appeared in all four; Presstech in three. Max Machine Tools named by none. Sources differ: Gemini = Google Maps data (Business Profile, stars, categories); ChatGPT = supplier websites and forUdyog; Perplexity = JustDial, TradeIndia, ExportersIndia (also Kompass); Claude = IndiaMART, TradeIndia, ExportersIndia, Aajjo. Asked by NAME, Perplexity found and read maxmachines.in and described us correctly but said proof is mostly company-provided and that Marking Solutions shows no brands or technologies.
10. Gemini's signals (asked 6 Nov): same name, address and phone on GBP, Bing Places, IndiaMART, JustDial, TradeIndia; crawlable product pages with explicit specs (tonnage, stroke, bed size; cutting capacity, blade speed); reviews that name the product, installation, delivery and service; verified badges and GST; GBP categories (industrial equipment supplier, machinery manufacturer) and Products tab with photos. It also flagged legacy "Modi Machine Tools" listings.
11. Techno Machine Tools did NOT appear on page 1 for generic power press searches; he appears for his own name and has his own website. Not every small shop ranks everywhere.
12. Caveats: WebSearch is not Google; Chrome results are for Jabs's Chennai browser on 6 Nov; ChatGPT was a guest session; AI answers change daily; one source on AI ranking factors has unverified numbers.

### 23B. The plan (layers, in order of effort and payoff)
LAYER 1 - ONE IDENTITY: name Max Machine Tools; address No 84, Armenian Street, Parrys, Chennai 600001; phone and email as in section 12. List EVERY listing (GBP, IndiaMART, JustDial, TradeIndia, ExportersIndia, Aajjo, Dial4Trade, IndiaTradeBird, Indian Yellow Pages, Kompass, Facebook, LinkedIn, YouTube, Bing Places) with link and status in a table; fix every mismatch. IndiaMART shows a virtual number (+91 80476 84394): normal, but keep the same business name and address. Old Modi listings: decision 28 (find each, record the address on it, decide with Jabs: update to "now part of Max Machine Tools, 84 Armenian Street" with a link to maxmachines.in, or leave).
LAYER 2 - GOOGLE BUSINESS PROFILE (Chennai only, decision 6): category, description with the three lines, website link with UTM, hours, Products and Services entries with photos (done 8 Nov for six; rest follows website updates), photos (machines, shop, team), a post for each new machine, answers to common questions. Jabs approves every edit.
LAYER 3 - DIRECTORIES (AI tools copy these): IndiaMART (fix wrong prices, complete every spec field, photos and videos, correct categories, response time and rate, reply to reviews, GST and TrustSEAL, link to maxmachines.in where allowed); JustDial (right categories for power press, bandsaw and marking machine dealers and manufacturers, photos, products with prices or ranges, reply to reviews, keep rating above 4.5); TradeIndia, ExportersIndia, Aajjo, Dial4Trade, IndiaTradeBird, Indian Yellow Pages, Kompass: claim or create, make them match, add the product list; TradeIndia is cited by Perplexity for bandsaws.
LAYER 4 - REVIEWS ENGINE: every delivered order gets a review request within 3 days (Google first, then JustDial or IndiaMART). Targets: Google 43 to 100 reviews; reviews that name the machine. Rules in decision 29. Track counts every 15 days.
LAYER 5 - OUR WEBSITE: pages "Power press machine in Chennai", "bandsaw machine in Chennai", "marking machines in Chennai" and the Ahmedabad versions, each with spec tables, models, photos, video, FAQs and proof; describe the Marking Solutions section (brands and technologies); proof on the site (review counts with links to Google, JustDial and IndiaMART, ISO 9001:2015, named clients with permission, years); buyer guides (now the blog, section 26); fix Home and About meta (DONE 12 Nov for the description; title 13 Nov); clean up old WordPress URLs still in Google (remove or redirect `maxmachines.in/shop/...`).
LAYER 6 - OFF-SITE LINKS AND VIDEO: YouTube descriptions and pinned comments link to the matching product page (UTM tagged), old high-view PRG videos first; ask brand suppliers (Bradma, Velse, Morse, Bahco, Lenox where applicable) to list us as a dealer with a link; link from www.modimachines.in to the relevant maxmachines.in pages; LinkedIn and Facebook post per new machine with the site link.
LAYER 7 - OPTIONAL ADS: a small Google Ads test for 2 or 3 high-intent searches with a monthly cap; only if Jabs decides (the credit offer is ignored for now).
LAYER 8 - MEASURE: the 15-day check (section 16) with this fixed query set. Google searches: power press machine manufacturers in Chennai; stamp marking machine dealers Chennai; horizontal bandsaw machine manufacturer Chennai; vertical bandsaw machine Chennai; PRG mechanical power press Made in India; impact marking machine Chennai; power press machine Ahmedabad; pneumatic power press price India; Max Machine Tools Chennai; site:maxmachines.in. AI questions (ChatGPT, Gemini, Perplexity, Claude): "Who are the best power press machine manufacturers and suppliers in Chennai? Give a short list with names, and cite sources." and the same for bandsaw and marking machines, plus "Is Max Machine Tools Chennai a good supplier?". Record position, whether we are named, sources used. Baseline = 23A. Expect changes in weeks; AI tools slower; judge only after 4 weeks.

### 23C. Execution checklist
- [x] P1 Google Business Profile (CLOSED 8 Nov 2026 23:40 IST by Jabs): DONE and approved: category, description, hours, website link with UTM; six product entries with own photos (8 Nov); QR card dropped; exterior photos accepted. Open Google items only: extra phone check by 14 Nov, new entries machine by machine after website updates, reply to every new review within 1-2 days (details in section 16).
- [x] P2 IndiaMART (CLOSED 9 Nov 2026 about 02:00 IST for the agreed scope: the 44 ACTIVE listings only, 59 inactive out of scope; record in section 24.5; 13 further listings added later on 9 Nov, check passed 10 Nov; still open: photos of 1000 px or more, PDFs, review replies, deferred items in 24.4)
- [ ] P3 JustDial: categories, photos, products, reply to reviews (NEXT)
- [ ] P4 Smaller portals and old Modi listings: table of all listings, mismatches fixed
- [ ] P5 Review requests sent to customers (2 message versions; saved in the project chat of 6 Nov); tracking sheet
- [ ] P6 Website pages: city pages, Marking Solutions text, proof section, guides (blog, 1 post live), old URL cleanup
- [ ] P7 YouTube links to product pages; supplier and Modi site links
- [ ] P8 First 15-day check on 21 Nov 2026 against 23A
- [ ] Optional: Google Ads test

### 23D. Approval checks and reviews (rule from Jabs, 6 Nov 2026)
RULE 1 - 24-HOUR APPROVAL CHECK: Google, IndiaMART, JustDial and other portals can reject, delay or revert an edit. 24 hours after any change, Claude opens the listing (Jabs's logged-in Chrome, Browser 1) and checks every changed field: approved, still pending, rejected or reverted. If rejected or reverted, Claude says why and proposes a fix. Claude does this as the FIRST step of the next session after a change, because Claude can only check while a session is open.
RULE 2 - 30-DAY REVIEW for the first few months: every 30 days review every profile and listing (Google Business Profile, IndiaMART, JustDial, TradeIndia, ExportersIndia and the rest in the P4 table) for correctness, new reviews to reply to, photos, and whether the fortnightly Google and AI checks (section 16) are improving. First 30-day review: 6 Dec 2026, together with the 15-day check; then 5 Jan 2027, 4 Feb 2027, 6 Mar 2027; after that decide with Jabs.

Approval checks (tick when verified):
| Changed on | What | Check on or after | Result |
|---|---|---|---|
| 6 Nov 2026 | GBP category (Industrial equipment supplier; Metal machinery supplier; Tools Wholesaler), description (612 characters), hours Mon-Sat 10 to 7, website link with UTM | 7 Nov | APPROVED and live (seen 7 Nov 00:05 IST; confirmed 8 and 9 Nov) |
| 6 Nov 2026 | GBP extra phone 93828 61514 | about 13-14 Nov | PENDING (Google: up to 7 days) |
| 6-7 Nov 2026 | GBP short name "maxmachinetools" | 8 Nov | NOT APPROVED; field not editable; DROPPED |
| 8 Nov 2026 | GBP products: Mechanical Power Press (updated), Impact and Toggle Press (new), Horizontal Bandsaw, Vertical Bandsaw | 9 Nov | APPROVED (seen 8 Nov 22:10-22:30 IST); confirm still live at next profile visit |
| 8 Nov 2026 | GBP product: Drilling Machine (photo, description, link) | 9 Nov | PENDING at 22:30 IST; confirm |
| 8-9 Nov 2026 | GBP product: VMCB16RSE bandsaw (renamed, new photo and description; corrected 9 Nov 00:05: sold in India AND exported) | 9 Nov | PENDING at 00:05 IST; confirm |
| 8 Nov 2026 23:50 | GBP descriptions reworded (endings in all five entries) | 9 Nov | PENDING; confirm |
| 9 Nov 2026 | IndiaMART P2: 44 active listings edited | 10 Nov | not separately re-checked; staff edits and stale titles listed in 24.5 |
| 9 Nov 2026 | IndiaMART category changes on the new Bradma listings | 10 Nov | PASSED 10 Nov (rotary numerator has an extra IndiaMART-added category; noted) |
| 9 Nov 2026 | IndiaMART new listings: Special Application Marking Machine and three chuck listings | 10 Nov | PASSED 10 Nov (chuck listings appear as "Independent Chuck" and "Self Centering Chuck") |

## 24. IndiaMART work

### 24.1 Add Product pipeline (repeatable)
1. Add Product, then name, price (REQUIRED, blank is rejected), description, Save and Continue. First click shows validation (for example the Piece-unit button); second proceeds.
2. Check the auto-assigned category. IM auto-categorisation is unreliable (it picked Ladies Designer Dress, Metal Stamping Parts and Roll Marking Machine for marking items). Fix with the pencil next to Categories: search, tick the right one, untick the wrong one, Save. Changed categories go for review.
3. Specification tab: required specs block Finish. Pick radio options; for "Other" type the value. Fill bottom to top because the layout shifts. Check the radio you clicked (Lever was picked instead of Other twice).
4. Additional Details (bottom of the View All specs dialog): Minimum Order Quantity 1, Delivery Time "Ready stock", Packaging Details "Box packing", Product/Service Code a made-up code (format MMT-xx-nnnn, unique per listing). Production Capacity blank. "Missing Specification" makes Save fail silently: fill the specs first.
5. Photos: upload to the library first (second type=file input, found with the find tool; the first input is hidden), reload, open the listing's Add Photo, tick the photos, Add Photos, then Upload Photos in the editor. Photos must be staged to the cloud workspace first (device_stage_files).
6. IM silently rejects small images (469x379 and 675x281 PNG failed). Use about 900 px or larger JPEG (937x758 and 1350x563 worked). For the score, the primary photo must be at least 1000 px.
7. Chrome downloads from a site the cloud shell cannot reach (forbes.co.in 403, bonetchucks.com): run JS fetch plus anchor download inside a Chrome tab on that site. Only the FIRST download per page load works; reload or open a fresh tab per file.
8. Catalogue pictures: render the Bradma catalogue PDF with pdftoppm at 300 dpi, crop with PIL (page 7 IST box, 9 special types, 11 holders), save as JPEG. Do not use Google Images for product photos.

### 24.2 Content rules
- No em dash. Own brands may say Made in India. Bradma, Bonet, Zither and Sharp are resold: never "Made in India", no competitor names; end with "Supplied by Max Machine Tools from Chennai and Ahmedabad across India and for export."
- No invented specs. If IM forces a required spec and the source has none, use a neutral placeholder ("As per order", "As per model", "As per chuck size", "On request") and list it as a gap.
- Jabs approves all prices. IM staff also edit the catalogue even with Catalog Modification Permission off (Jabs handles that by email; leave it).
- Prices on IndiaMART are placeholders and category prices chosen by Jabs; the website shows no price (decision 34).
- Never delete a product entry without asking Jabs. Never write anything negative about a machine.

### 24.3 Listings created or changed (9 Nov 2026, afternoon and evening)
| Listing | Price | Category | Photos |
|---|---|---|---|
| Bradma IST Loose Types and Font Sets | 100 | Metal Punch | 1 (catalogue) |
| Bradma IST Special Types Made to Order | 1,000 | Steel Stamps | 1 (catalogue) |
| Bradma IST Type Holders | 2,000 | Metal Punch | 1 (catalogue) |
| Bradma Steel Stamp Marks Composite Types | 2,000 | Steel Stamps | photo uploaded by Jabs 10 Nov |
| Bradma Handheld Rotary Type Numerator 6RTN2/3/4, 5RTN5 | 15,000 | Number Stamp | 2 |
| Bradma Automatic Rotary Numerator | 35,000 | Number Punching Machine | 2 |
| Bradma Metal Label Marker LM 40 | 50,000 | Metal Label Marking Machine | 4 |
| Bradma Impact Press IP28PN and IP28H | 50,000 | Impact Press | 2 |
| Bradma Roll Marking Machine RH 15, RP 30, RP 50, RH 200 | 30,000 | Roll Marking Machine | 4 |
| Bradma Automatic Special Application Marking Machine | 50,000 | Marking Machine | 2 |
| Bonet Independent Chuck Heavy Duty (standard and big bore) | 10,000 | Chucks | 1 |
| Bonet Independent Chuck Extra Light Duty (ELD) | 10,000 | Chucks | none |
| Sharp and Zither Self Centering Chuck, STC and BBC | 10,000 | Self Centering Chucks | none |
| Hand Held Punches (existing, "up to 25 mm" title) | 100 | Letter Punches | existing; NOT saved (blocked by 5 missing specs) |
Earlier: PRG Toggle Press 15,000 and PRG Multi Spindle Drill Head 50,000 (kept their own Additional Details); HABA AAC Block Cutting Vertical Bandsaw 1,00,000. Specs added from the Bradma catalogue: Impact Press Table Size 160 x 160 mm; Roll Marking Stroke length "10 to 125 mm (model wise)" and Suitable section Round. Sharp and Zither: Power Source "Key operated", Number of Jaws "3, 4 and 6 jaw". Chuck prices of 10,000 are placeholders.

### 24.4 Known gaps and open items
Status 10 Nov: Jabs marked these as DONE (no details needed) except the deferred revision. Kept as the reference of what they were.
- Photos: Bonet ELD chuck, Sharp and Zither chuck, Steel Stamp Marks (Steel Stamp Marks uploaded 10 Nov; the rest marked done).
- Hand Held Punches: title says up to 25 mm but the Forbes page lists 1.6 to 20 mm; correct title and description, fill the 5 missing specs, untick "Made in India" (Bradma is resold).
- Bonet Heavy Duty chuck brand shown as "Sharp / Zither": change to Bonet.
- Missing specs with no source data: Roll Marking roll width; Impact Press stroke length ("On request"); Special Application power supply and automation grade; IST Special Types and Steel Stamp Marks; chuck leftovers.
- IM changed group names and added a "Stamping" prefix to titles of the Automatic Rotary Numerator and Special Application listings (not done by us).
- IM Website Pages content: update at the next IM sitting.
- STILL DEFERRED: placeholder 25,000 prices (hydraulic press) where still present, hydraulic press listing split, 64 unanswered reviews, alerts, profile gaps. (The sales@modimachines.in backup email stays, Jabs 9 Nov.)
- Individual product listing descriptions have NOT been scanned for the old 93828 61514 number (company page and profile were checked 9 Nov).

### 24.5 P2 IndiaMART record: the 44 ACTIVE listings (8-9 Nov 2026; Jabs's Chrome, seller.indiamart.com/product/manageproducts/)
SCOPE: only the 44 ACTIVE listings. The 59 inactive are out of scope. Score-100 listings were skipped. Jabs said "rest all leave" at the end, so listings not touched below stay as they are.

RULES FROM JABS (apply to every portal): one confirmed decision at a time; do not repeat a question; once a job starts finish it; ONE photo per machine on Google, updated in the same sitting as the website; never delete a product entry without asking Jabs; never write anything negative about any machine (VMCB16RSE is sold in India and exported; the other two vertical models are simply not exported, give no reason); do not repeat the same sentence across descriptions; Claude writes only review-request messages, never review text.

BRAND FACTS (set on listings, use everywhere): HABA is MMT's own brand. Drilling machines are PRG. Bandsaw blades are KOPIS (exclusive to MMT). Chucks: the Power Chucks listing stays brand VELSE with spec data from Zither (MMT sells VELSE, Sharp and Zither); the later 9 Nov chuck listings (24.3) use Bonet for independent chucks and Sharp/Zither for self centering chucks - if the two ever conflict, ask Jabs. Machine vices: Unique. Marking: Bradma (roll marking and punches), VELSE (fiber laser). Air compressor and dryer: Airdas. Fittings: Cmatic (Italy). Roll Marking Machine belongs in group "marking machine", not Bandsaw.

IndiaMART SCORE (hover or click the Score circle): name 3+ words 10; primary photo at least 1000 px 10; 1 secondary photo 10; 2 or more photos 10; price with unit 15; description over 100 characters 5; video 10; PDF brochure 5; config specs 15; other specs 10. Photo, video and PDF uploads need Jabs.

EDIT MECHANICS: description editor needs a second Save click sometimes; mandatory specs use "As per model" when the source has no data; fill option dialogs bottom-up; group chip changes the group; the displayed title is auto-built from specs and brand, so a stale prefix or suffix can remain until the page is refreshed; after renaming, a category dialog opens: close it with X or Cancel to keep categories; Enter does not save a title, click Save; the list reorders after saves so find the pencil again each time.

WORK DONE (descriptions and specs written from maxmachines.in pages, uploaded catalogues and dealer pages): Laser Marking, Bradma punch set, Light, Medium and Heavy All Geared lathes, four presses (hand operated hydraulic 5 to 150 ton, 4 pillar 5 to 300 ton, C frame hydraulic 10 to 300 ton, mechanical clutch 10 to 300 ton) with corrections, 30 ft all geared lathe (centre height 406 to 558 mm, bed up to 6400 mm), Cut Off, Pillar Drilling (PRG), Radial Drilling, Power Chucks, Machine Vice, Roll Marking, Bimetal Blades (KOPIS, 6.4 to 80 mm), Airdas Air Compressor and Air Dryer (from the Airdas catalogue), Turret Milling (M4 and M5), Fully Automatic Bandsaw 7 inch specs (score 75 after Jabs filled them). Batch 1 (9 Nov): #1 HABA R VMCB16RSE (score 90, primary photo under 1000 px, left as is), #2 PRG Impact Press (95; needs PDF; stroke length "As per model"), #3 PRG Drilling Cum Milling PDM25/PDM40H/FDM40H (100), #4 PRG Drilling Cum Tapping PDT20R/25R/40R/40HR (specs saved, score 90). HABA Automatic Bandsaw (Rs 3,50,000) and HMA9RE NOT done: the website page Horizontal Bandsaw Fully Auto is "Coming Soon" with no machines, so build the website page first.

SCORES AT CLOSE (9 Nov 2026 about 02:00 IST), average 88, thirteen at 100:
100: Pneumatic Power Press; 7 Feet Belt Heavy Lathe; Vertical Band Saw (PRG); Pure Tapping; Drilling cum Milling PDM25/40H; Metal Band Saw; 30 Feet Belt Extra Heavy Lathe; Mechanical Clutch Press; Manual Metal Cutting Band Saw; KOPIS Bi Metal Blades; Light Duty Lathe Cone Pulley; Medium Duty Lathe; HABA Automatic Bandsaw Industrial.
95: PRG Impact Press; HMA9RE; Cut Off; 4 Pillar C/H Frame Press; 4 Pillar Gun Metal Press.
90: VMCB16RSE; Bradma Punch Set; VELSE Laser; Drilling cum Tapping; HABA Heavy Lathe; 30 Feet All Geared Lathe; Pillar Drilling; Medium All Geared Lathe; Hand Operated Press; Radial Drilling; PRG FDM40H.
85: Hydraulic Hacksaw; HABA Automatic Bandsaw; Roll Marking.
80: Light Duty All Geared Lathe; Air Dryer.
75: Power Chucks; Standard Fittings; Anti Spatter; Push in and Push On Fitting; Push-on Fittings; Brass and SS Push-in Fittings; Fully Automatic Bandsaw 7 inch.
70: Air Compressor.
60: Turret Milling; Machine Vice.

OPEN ITEMS (Jabs):
1. Photos of 1000 px or more and a second photo, plus PDF brochures: Turret Milling, Machine Vice, Air Compressor, Power Chucks, Fully Automatic Bandsaw 7 inch (needs primary photo, second photo and HMA9RE PDF), VMCB16RSE, Drilling cum Tapping.
2. Cmatic catalogue for the four fittings listings (4 to 6 specs missing each).
3. Left as they are by Jabs: Anti Spatter (6 specs), Hydraulic Hacksaw (5 specs), PRG FDM40H (6 specs), HABA Automatic Bandsaw (4 specs), Metal Band Saw type listings with missing specs but score 100.
4. Stale titles to recheck after a page refresh: Pillar Drilling still says "Ralliwolf"; Hand Operated Press says "5 to 100 tons"; 4 Pillar Press says "Capacity: 10 - 800Tons"; PRG Hydraulic says "Capacity: 300 Ton"; Roll Marking says "Pneumatic"; KOPIS blades title says "Size: 1150 mm to 15000 mm" (not in the catalogue). Fix only with Jabs's yes.
5. Unverified values: 4 Pillar Press Automation Grade "Fully Automatic"; Heavy Lathe Automation Grade set to Manual; Machine Vice brand "Unique" not read back; Air Dryer "Lubrication Style: Auto" field is nonsense, left.
6. 4 Pillar press range is 5 to 300 ton on the website (Jabs said 10 to 300); listing uses 5 to 300.
7. Reply to IndiaMART reviews (P5 later).

## 25. Search Console, indexing and structured data

### 25.1 Emails read 9-11 Nov (baselines for 21 Nov and 6 Dec)
Numbers are in section 16 (Search Console October and Business Profile October). The Search Console "Duplicate without user-selected canonical" email (WNC-20237597) led to section 25.2. The Product snippets (WNC-10030322) and Merchant listings emails of 10 Nov, and the Product snippets email again on 11 Nov, are stale-crawl notices: no action (25.4).

### 25.2 Duplicate canonical: cause and fix (DONE, live)
- The one affected URL: /products?utm_source=brochure&utm_medium=pdf (last crawled 31 Oct), the brochure redirect target.
- Cause: /, /products, /contact and /about sent NO canonical tag. Category, subcategory and product pages already did.
- Fix: commit 4eda460 (4 files, 20 lines): alternates.canonical in app/page.tsx, app/products/page.tsx, app/contact/page.tsx, and a new app/about/layout.tsx. revalidate unchanged. Pushed 9 Nov, checked live. "Validate fix" clicked 9 Nov (status Started); check about 21 Nov.
- Rule: any new static page must carry alternates.canonical.

### 25.3 Indexing status
- Report numbers (Pages report last updated 6 Nov, STALE): 27 indexed, 95 not indexed: 85 "Discovered - currently not indexed", 6 page with redirect (old /shop links, expected), 2 excluded by noindex (/products/power-press and /products/hydraulic-press: old addresses that no longer exist, no action), 1 duplicate canonical (validation started), 1 crawled - currently not indexed.
- Sitemap /sitemap.xml: 113 URLs, all www, fresh lastmod (10 Nov); also lists blog posts. RESUBMITTED 9 Nov (type just `sitemap.xml` in the Sitemaps box).
- The Pages report lags. Live inspection showed several pages the report calls "not indexed" are already indexed. RULE: inspect first; click Request indexing ONLY if the inspection says "URL is not on Google". Inspection has no tight limit; only Request indexing is capped.
- Request indexing quota: about 10 to 12 per day per property. "Quota exceeded" appeared on 9 Nov after 11 requests and on 10 Nov at the 12th request; it resets the next day. On 11 Nov 11 requests were made and Claude stopped (no quota message seen). On 12 Nov 10 requests were made (no quota message; one page failed with a temporary error). Not a site problem. The sitemap is the main route; manual requests only speed up priority pages.
- Requested 9 Nov (all showed "Indexing requested"): HABA Standard, R and Eco horizontal bandsaws; HABA R, PRG Standard and PRG Eco vertical bandsaws; PRG Impact Press; PRG Mechanical Power Press; PRG Pillar Drilling; Press Machines category; Toggle Press category.
- 10 Nov: indexing continued in Search Console (inspect first) until the quota stopped it at the 12th request, in the order of the list below (/blog, the graphite post and the pneumatic URLs first). Exact per-URL results are in Search Console URL Inspection; not copied here.
- REQUESTED 11 Nov (all "Indexing requested"; each said "URL is not on Google"): lathe-machine/all-geared-lathe-machine (subcategory); lathe-machine/belt-drive-lathe-machine (subcategory); haba-light-duty-all-geared-lathe-machine; haba-medium-duty-all-geared-lathe-machine; haba-heavy-duty-all-geared-lathe-machine-bed-13; haba-heavy-duty-all-geared-lathe-machine-bed-15; haba-extra-heavy-duty-all-geared-lathe-machine-bed-18; haba-extra-heavy-duty-all-geared-lathe-machine-bed-22; haba-light-duty-belt-lathe-machine; haba-medium-duty-belt-lathe-machine; modi-light-duty-belt-lathe-machine. SKIPPED 11 Nov (already on Google, "on Google but has issues" = the Product snippets notice): haba-extra-heavy-duty-all-geared-lathe-machine-bed-26.
- REQUESTED 12 Nov (all "Indexing requested"; each said "URL is not on Google"): modi-medium-duty-belt-lathe-machine; modi-heavy-duty-belt-lathe-machine-bed-13-15; haba-heavy-duty-belt-lathe-machine-bed-13-15; modi-extra-heavy-duty-belt-lathe-machine-bed-20, -22, -24, -26, -30 (all under /products/lathe-machine/belt-drive-lathe-machine/); /products/marking-solutions/stamp-marks; /products/marking-solutions/rotary-numerators. SKIPPED 12 Nov (already on Google): modi-extra-heavy-duty-belt-lathe-machine-bed-18 ("on Google but has issues") and /products/lathe-machine (category page, "URL is on Google"). FAILED 12 Nov (twice, "Oops: Something went wrong", a temporary Google error): /products/marking-solutions/hydro-pneumatic-marking-presses.
- Checked indexed on 9 Nov, no request needed: /export-and-uae, horizontal bandsaw subcategory, PRG toggle press product, hydraulic press category, drilling machine category.
- REMAINING TO INSPECT AND REQUEST (10 to 11 a day, resume 13 Nov at the hydro-pneumatic marking presses page): the rest of the marking solutions subcategories and products (Bradma/Velse; marking-solutions category itself, bradma-hydro-pneumatic-press, bradma-rotary-type-numerator, bradma-stamp-marks product pages and others in the sitemap); special application, wood and AAC vertical bandsaw subcategories; double column, fully auto and semi auto horizontal bandsaw subcategories; PRG drilling products under radial, tapping and multi-head; any hydraulic press products and pneumatic URLs not confirmed on 10 Nov (pneumatic-power-press/prg-pneumatic-power-press was seen in GA with a visit). Full list: https://www.maxmachines.in/sitemap.xml.
- Method: click the top inspection box (about [450, 19]), type the full URL, press Enter, wait about 8 to 10 seconds, take a screenshot; confirm the address shown at the top matches the URL typed and no "Retrieving data" box is showing (it can show the previous URL's result while loading; wait longer); if "URL is not on Google" click Request indexing (about [1110, 222]) and WAIT 25 to 40 seconds for "Indexing requested" before dismissing (dismiss button about [917, 330]; dismissing early cancels it). If it says "URL is on Google", do not request. Guessed deep-link inspect URLs give 404. Judge results only after 4 weeks (21 Nov check).
- Honest note: indexing requests are a minor lever (max about 10 minutes a day). The bigger levers are section 23 (profiles, directories, reviews) and real content (section 26 blog).

### 25.4 Price and availability decision and structured data (DONE, live)
- DECISION (Jabs, 9 Nov): NO price and NO availability anywhere on the site. The only route for buyers is Enquire Now / Enquire (instant reply system), later the MAXIMUS chatbot. Prices only for items that can be ordered online, once online selling starts. No return policy needed for now.
- History: (1) Product JSON-LD had offers.price = "Request Quote" (text), rejected by Google. Commit b9ff257 removed the offers block on all product pages. (2) Google then said "Either offers, review, or aggregateRating should be specified". Jabs first chose "starting from" prices, then reversed to no prices. FINAL: Product block with no offers. The "1 invalid item" label stays and is ACCEPTED (it only blocks the price rich snippet; no effect on indexing or ranking). Never use the 43 business reviews as product ratings.
- Display removed: commit 44dd51a (one file, product page): Price and Availability rows in the spec table, columns in the model table, the Price line in accessory cards, and the unused availabilityLabel map. Enquire buttons untouched.
- Wording removed 10 Nov: commit a8b21d3: product page heading "Models and Variants" (was "Variants & Pricing") and subcategory page text "Click a machine to view full specifications and variants." Live check of all 114 URLs: 0 offers, 0 price, 0 rupee.
- Left alone on purpose: Sanity fields price and availability, import script references, priceRange in LocalBusiness JSON-LD in app/layout.tsx, Home/Contact "pricing, or logistical support", the export quotation line. Sheet Price and Availability columns stay in the template, blank.
- When online selling starts: add offers (numeric price, INR, availability) for orderable items only, show the same price on the page, add return/shipping policy pages if Google Merchant listings are wanted.
- Old crawled copies in Google still show the original structured data error until Google recrawls; the emails of 10 and 11 Nov are about those. The email repeats whenever Google recrawls a page: IGNORE it (11 Nov, asked by Jabs).

### 25.5 WhatsApp number (DONE on website, live)
- Commit 26d481e (7 files, 7 insertions, 8 deletions): the 6 waLink() numbers in components/WhatsAppButton.tsx, components/Contact.tsx, app/products/page.tsx, app/products/[slug]/page.tsx, app/products/[slug]/[subcategorySlug]/page.tsx and the product page file; plus app/llms.txt/route.ts (one line "Phone / WhatsApp: +91 99620 61514"). Already correct: components/ContactEnquiryCTA.tsx and app/export-and-uae/page.tsx. Verified live on /products and /llms.txt.
- Checked 9 Nov: IndiaMART has no WhatsApp link (public page and profile); MAXIMUS uses a different number. Nothing to change.

---

## 26. NEW WORKSTREAMS (Jabs, 9 Nov 2026) - plan and status

Jabs's note: some of this is not website work, but it is recorded here so everything is in one place because all the work is interconnected. Jabs will add more points; the order below is Claude's proposal and is NOT final until Jabs approves it.

### 26.1 Blog - STATUS: BUILT AND LIVE (9 Nov), one post
- Built on Sanity: document type blogPost (Studio > Blog Posts). Pages /blog and /blog/[slug]. Navbar and Footer carry a Blog link. Sitemap and llms.txt include posts. Share buttons, category filter, More guides strip, Article/Breadcrumb/FAQ structured data. Posts are form-based (sections, bullets, steps, FAQs, related machines), not rich text. Commit a16c2f0.
- Post 1 LIVE: how-to-cut-graphite-on-a-vertical-bandsaw, with cover picture. Recommends KOPIS Pluto Pro (carbide, first choice) and KOPIS Fighter (bi-metal, budget). Pitch "2/3 or 3/4 TPI depending on block size". No speeds stated. Sections: clean-up and support, which bandsaw (HABA VMCB16RSE with link). Related box links the VMCB16RSE page. Updated 2026-11-10 (868ac1e). Graphite dust damages the VFD and electrical cabinet: seal them. 12 Nov GA: 22 views, 8 users, 55 s average.
- Import: `npm run import-blog` reads scripts/blog-posts.json (createOrReplace) and KEEPS an existing cover image. Safe to re-run. Sanity is the truth once a post is live; if text is edited in Studio the JSON must be updated to match (and vice versa), then the live page checked.
- Facts for each post come from Jabs (he has the knowledge) or from the Sheet and site; no invented numbers. Plain text with question-style headings, a short "Related machines" link block to our product pages, one Enquire button.
- STILL TO WRITE: how to select a lathe; how to measure marking punch height (Jabs supplies old text or rough points); they link to HABA and MODI lathes and Bradma/Velse marking products. Each new post: upload the cover picture in Studio FIRST (share image rule), draft in simple words, Jabs corrects facts, import, check live page and og:image, request indexing, share with UTM (whatsapp/channel) using a fresh ?v= link.
- Open: photo or video for the graphite post (blog has no video field yet); KOPIS blade page link when added; factory data for VMCB16RSE.

### 26.2 Social media update and YouTube videos on Instagram
- Social posting lives in the separate marketing project (areas/mmt-marketing). Here we only record the link-back rules: every post and reel links to the matching product or blog page with UTM (instagram/reel, youtube/video, whatsapp/channel) and passes the share image check (section 27).
- Plan: list which YouTube videos exist per product (and the four missing ones), pick the first 10 for Instagram reels (vertical crop or Shorts), caption with machine, brand and "Enquire on WhatsApp 99620 61514", link in bio to the page. Adobe Express Premium is available for covers and captions.
- Added 10 Nov: informative videos and audio made with NotebookLM and similar AI tools.
- Open question 2: who posts, and how often (suggest 3 reels a week).

### 26.3 PDF catalogue (all machines on the website)
- Some customers still want a PDF. Build from the live website data (Sanity/Sheet), same naming, specs, photos and no prices (decision 34). Design in Adobe Express Premium (Airtel offer), one section per category, page per product family, contact details and QR code to the website with UTM (catalogue/pdf).
- It replaces the old brochure over time. The old PDF stays covered by the redirect. WhatsApp number: 99620 61514.
- Open question 3: A4 portrait, about how many pages, and is a version without HABA/PRG split needed for export?

### 26.4 One-page catalogue per machine type (for IndiaMART enquiries) and WhatsApp template
- One page per machine type (bandsaw, press, drilling, lathe, marking), photo plus 6 to 8 key specs plus website link plus WhatsApp number, sent to a buyer who enquires on IndiaMART. JPEG or PDF under about 1 MB so it sends fast on WhatsApp.
- New IndiaMART WhatsApp reply template is written AFTER the one-page catalogue is ready (Jabs). It must use the tagged link (utm_source=indiamart&utm_medium=listing), 99620 61514, and "within the hour" promise. Message text is shown to Jabs first.
- Order: 26.4 pages first, then the template, then the full PDF catalogue (26.3).

### 26.5 Customer list refresh (2023 to Nov 2026) - LATER
- The list on the site was last updated in 2023. Update to Nov 2026, including Hyundai Wia, Gabriel and others even if billing is still due (Jabs); add audio and video later.
- Source: Jabs's Zoho Books customer list is connected (Zoho Books MCP). Claude can pull the customer names and totals and give a draft list for Jabs to approve. Only real customers; permission to show a name or logo is Jabs's decision per customer. Logos need real image files.
- It also feeds /our-clients (hidden until content is ready), the About page, the proof section on city pages (section 23 layer 5) and the export-country count (decision 22).
- Open question 4: show names only, or names plus logos? Any customer you do NOT want shown?

### 26.6 Quotation Pro: send the quotation PDF on WhatsApp
- Today Quotation Pro (QP, Google Apps Script, multi-tenant SaaS) sends only an intimation message. Change: send the quotation PDF with the WhatsApp message, or as a second message right after.
- This is code in the Quotation Pro project, not the website. Claude needs the QP script and the WhatsApp sending method in use (which API or provider) before proposing the change. Needs a decision on the PDF size and whether the template is "document" type (WhatsApp Business API requires an approved template for first messages).
- Open question 5: which provider sends the QP WhatsApp message today?

### 26.7 Suggested order (Claude's proposal; Jabs decides)
1. Blog: more posts (lathe, marking punch height) - biggest SEO and AI lever on this list, template already built.
2. One-page catalogue per machine type, then the IndiaMART WhatsApp template (26.4).
3. YouTube videos to Instagram (26.2): can run in parallel in the marketing project.
4. Full PDF catalogue (26.3), after the products pages are stable.
5. Customer list refresh (26.5), later (Jabs).
6. Quotation Pro PDF on WhatsApp (26.6): separate project, schedule when Jabs wants.

### 26.8 Open questions for Jabs
1. Blog: which topic next (lathe or marking punch height)?
2. Social: who posts and how often?
3. PDF catalogue: size, pages, export version?
4. Customer list: names only or names plus logos; any exclusions?
5. Quotation Pro: which provider sends the WhatsApp message today?

---

## 27. SHARE IMAGE RULE (WhatsApp, LinkedIn, Facebook previews) - added 10 Nov 2026

- PROBLEM (found 9 Nov night): sharing the graphite blog post on the WhatsApp channel showed the company logo, not the bandsaw picture. Cause: app/blog/[slug]/page.tsx had the logo hard-coded as the openGraph image for every post.
- FIX (LIVE 10 Nov, commit d7fbe0d, one line in generateMetadata of app/blog/[slug]/page.tsx): the share image is the post's cover picture from Sanity, sized `?w=1200&h=630&fit=crop&auto=format` (1200 x 630 is what WhatsApp likes), width 1200, height 630, alt = cover alt or post title. A post WITHOUT a cover falls back to https://www.maxmachines.in/logo.png.
- CHECK COMMAND (works from any folder; change the address to test any page; og:image must NOT be logo.png when the page has its own picture):
  `curl -s <page url> | grep -o '<meta property="og:image"[^>]*>'`
  Verified live 10 Nov: the blog post returns a cdn.sanity.io link.
- WHATSAPP CACHE: WhatsApp keeps the old preview for a link it has already seen. To test or re-share after a fix, add `?v=2` (then `?v=3`...) at the end of the link, for example `.../how-to-cut-graphite-on-a-vertical-bandsaw?v=2`. Jabs confirmed the picture shows with the fresh link. Post the `?v=2` link, not the old one.
- RULE FOR ALL FUTURE PAGES: every page type is checked for its share image BEFORE the link is posted anywhere (WhatsApp channel, LinkedIn, Facebook, Instagram bio, IndiaMART replies).
  - Blog posts: DONE (cover picture). Every blog post needs a cover picture uploaded in Studio before it is shared (no cover = logo preview).
  - CHECKED 10 Nov (curl, live): product page = own Sanity picture (1600x1600); category = own card picture (1600x900); subcategory = own picture (1600x700); /products = logo.png (accepted: nothing single fits). Home, /about, /contact, /export-and-uae and /blog list: not curled, logo assumed and accepted. No code change needed.
  - Any new Sanity page type (brand pages, area pages, KOPIS blade pages) must set openGraph images from its own picture, logo only as fallback.
- The fortnightly check (section 16 step 7) tests 2 or 3 key links.
