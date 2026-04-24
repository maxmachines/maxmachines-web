# Max Machine Tools — Google Sheet Setup Guide

Sheet ID: `1PymyVSGmjSvRgyg5n9wXyZNKgVExpHJ4T_XvyCanDWY`

Make the sheet **publicly viewable** (Share → Anyone with the link → Viewer).

---

## TAB 1 — "Products"

| Col | Header | Notes |
|-----|--------|-------|
| A | Product Name | Required. Must be unique. Used to link all other tabs. |
| B | Brand | e.g. HABA, Bhavya, Cosen |
| C | Category | Must match Sanity category name **exactly** (case-sensitive) |
| D | Subcategory | Must match Sanity subcategory name **exactly** (case-sensitive) |
| E | Country | One of: `India` / `Taiwan` / `Japan` / `Italy` / `USA` |
| F | Short Description | Max 300 characters. Shown on product cards. |
| G | Full Description | Plain text. Newlines become paragraphs. |
| H | Featured | `Yes` or `No` |
| I | Active | `Yes` or `No` |
| J | SEO Title | Max 60 characters |
| K | Meta Description | Max 160 characters |
| L | Keywords | Comma separated — e.g. `lathe machine,metal lathe,CNC lathe` |
| M | Geo Tags | Comma separated — e.g. `Chennai,Ahmedabad,Gujarat,Pan-India` |
| N | YouTube URLs | Comma separated YouTube links |
| O | PDF Labels | Comma separated — e.g. `Brochure,Datasheet,Manual` |
| P | PDF URLs | Comma separated — must match order of PDF Labels |

**Row 1 = headers. Data starts at Row 2.**

---

## TAB 2 — "Variants & Specs"

| Col | Header | Notes |
|-----|--------|-------|
| A | Product Name | Must match Tab 1 exactly |
| B | Model Number | e.g. `HMM9R`, `HMM12R` |
| C | Size | e.g. `225mm`, `300mm`, `6ft` |
| D | Price | e.g. `₹1,25,000` — leave empty for "Request Quote" |
| E | Availability | One of: `In Stock` / `Out of Stock` / `On Order` |
| F+ | Spec Columns | **Each column header = spec name** (e.g. `Motor Power`, `Blade Size`, `Weight`) — value = spec value for that model |

**The spec columns (F onwards) are dynamic — add as many as needed.**
**Every row is one variant of a product. A product can have multiple rows.**

Example:

| Product Name | Model Number | Size | Price | Availability | Motor Power | Blade Size | Weight |
|---|---|---|---|---|---|---|---|
| HABA R Series | HMM9R | 225mm | ₹95,000 | In Stock | 1.5 HP | 225mm | 85kg |
| HABA R Series | HMM12R | 300mm | ₹1,25,000 | In Stock | 2 HP | 300mm | 110kg |

---

## TAB 3 — "Highlights & Accessories"

| Col | Header | Notes |
|-----|--------|-------|
| A | Product Name | Must match Tab 1 exactly |
| B | Type | Either `Highlight` or `Accessory` |
| C | Name/Text | For Highlight: the feature text. For Accessory: accessory name. |
| D | Description | For accessories only — short description |
| E | Price | For accessories only — e.g. `₹2,500` or `Request Quote` |
| F | Link | For accessories only — URL to linked product page (optional) |

Example:

| Product Name | Type | Name/Text | Description | Price | Link |
|---|---|---|---|---|---|
| HABA R Series | Highlight | Variable speed control | | | |
| HABA R Series | Highlight | Heavy duty cast iron frame | | | |
| HABA R Series | Accessory | Coolant Pump | Automatic coolant system | ₹3,500 | |

---

## TAB 4 — "FAQs"

| Col | Header | Notes |
|-----|--------|-------|
| A | Product Name | Must match Tab 1 exactly |
| B | Question | The FAQ question |
| C | Answer | The FAQ answer |

Example:

| Product Name | Question | Answer |
|---|---|---|
| HABA R Series | What is the warranty period? | All HABA machines come with 1 year on-site warranty. |
| HABA R Series | Do you provide installation? | Yes, we provide free installation within Chennai and Ahmedabad. |

---

## Important Rules

1. **Tab names must be exactly:** `Products`, `Variants & Specs`, `Highlights & Accessories`, `FAQs`
2. **Row 1 in every tab = column headers** (exactly as shown above)
3. **Product Name must be identical** across all tabs — spelling, spacing, capitalisation
4. Category and Subcategory must exist in Sanity before importing
5. The sheet must be **publicly viewable** for the import script to work
