# Pending notes for SOP v5.1 (merge into SOP-product-update.md at the next sitting, then delete this file)

Written 9 Nov 2026, night (End session). The master SOP-product-update.md is still v5.0 in the Project and v4.5 on the Mac. If this file disagrees with the master, THIS FILE WINS for items below.

## Blog (built on Sanity, LIVE 9 Nov night, commit a16c2f0)
- Document type blogPost (Studio > Blog Posts). Pages /blog and /blog/[slug]. Navbar and Footer now carry a Blog link (the old "hidden until content" rule is replaced: blog is visible, /our-clients stays hidden). Sitemap and llms.txt include posts. Share buttons, category filter, More guides strip. Posts are form-based (sections, bullets, steps, FAQs, related machines), not rich text.
- First post LIVE: how-to-cut-graphite-on-a-vertical-bandsaw, with cover picture (uploaded in Studio). Recommends KOPIS Pluto Pro (carbide, first choice) and KOPIS Fighter (bi-metal, budget). Pitch said as 2/3 or 3/4 TPI depending on block size (Jabs). No speeds stated (KOPIS catalogue has none). Sections added: clean-up and support, which bandsaw (HABA VMCB16RSE with link). Related box links the VMCB16RSE page.
- Import: `npm run import-blog` reads scripts/blog-posts.json and now KEEPS an existing cover image (fixed 9 Nov). Safe to re-run. Text edits can also be made in Studio, but then scripts/blog-posts.json drifts from Sanity: Sanity is the truth once a post is live.
- Watermark rule: globals.css puts the www.maxmachines.in watermark on the parent of every Sanity picture, so the picture's parent must be position relative. Blog cover is wrapped in a relative div (fixed).
- Caching gotcha found 9 Nov: after Studio edits and the import, the LIVE page still showed the older text (saved page copy up to 1 hour; or the Sanity webhook does not cover blogPost). To check: in Studio re-publish the post and see if the live page updates within 2 minutes. If not, add blogPost to the webhook filter in Sanity (manage.sanity.io > API > Webhooks) and confirm app/api/revalidate/route.ts handles it (it revalidates /blog layout, sitemap, llms.txt).
- RULE (Jabs): the blog names the HABA VMCB16RSE bandsaw with a link to its page (/products/vertical-bandsaw-machine/metal-cutting-vertical-bandsaw/haba-r-series-vertical-metal-cutting-bandsaw). KOPIS blades are not on the site yet. WHEN A KOPIS BLADE PRODUCT PAGE IS ADDED, UPDATE THE BLADE LINK IN THE GRAPHITE POST (and any other post naming KOPIS blades). Re-check blog links whenever a linked product is added, renamed or removed.
- RULE (Jabs): when a video of the machine cutting graphite (or any how-to) is on YouTube, add the YouTube link to that post. The blog has no video field yet: add one, or put the link in the text.
- VMCB16RSE facts (product page): wheel 400mm, throat 350mm, blade speed 700/1100/1700 m/min (3 speeds), 2 HP 3-phase, VFD optional add-on; maximum cutting size NOT listed. TO CONFIRM with factory: maximum cutting size and the blade width a 400mm wheel takes. Graphite dust damages VFD and electrical cabinet: seal them.
- Still to write: how to select a lathe; how to measure marking punch height (Jabs supplies old text or rough points). Then the lathe and marking posts link to HABA and MODI lathes and Bradma/Velse marking products.
- Request indexing for /blog and the graphite post in Search Console on 10 Nov (quota resets). Inspect first.
- Google and AI: the post is in the sitemap and llms.txt with Article, Breadcrumb and FAQ structured data; ranking takes weeks, AI tools slower; judge at the 21 Nov check.

## Other decisions and notes
- Full-width layout stays a separate sitting (2 or 3 design options first, then a 113-page before/after check). The blog will widen with the rest of the site.
- New workstreams from 9 Nov (section 26 of the master): add "informative videos and audio made with NotebookLM and similar AI tools" under 26.2. Customer list refresh is for LATER (names, logos, Hyundai Wia, Gabriel; update 2023 to Nov 2026; add audio and video).
- Graphite advisory circular dated 27 Feb 2026 used M.K. Morse blades; the blog now recommends KOPIS (Pluto and Fighter). KOPIS catalogue says: bi-metal and carbide stock from USA and Europe, welded to size in India, sold exclusively at Max Machine Tools. Pluto Pro is the series listed for titanium, graphite and abrasive alloys.
- CLAUDE.md: append a note (Next.js 16.2.4; /about, /blog exist; /our-clients hidden; no price display; WhatsApp 99620 61514; blog on Sanity). Append only, never overwrite.

## Next sitting checklist
1. Check the live graphite post shows the latest text (clean-up section, 2/3 or 3/4 TPI, VMCB16RSE link). Fix the webhook if not.
2. Merge this file into the master as v5.1 (section 26.1 status, section 22 to-do, section 13 log, section 11 blog rule) and sync the three places (project, Mac folder, git).
3. Lathe and marking punch posts. Photo or video for the graphite post.
4. Search Console: inspect then request indexing for /blog and the graphite post; the two pneumatic press URLs; then 8 to 10 a day.
5. 10 Nov IndiaMART 24-hour approval check; about 13 Nov GBP extra phone; about 16 Nov re-check 9 Nov pages; 21 Nov canonical validation and first fortnightly visibility check.
6. Factory: VMCB16RSE maximum cutting size and blade width.
