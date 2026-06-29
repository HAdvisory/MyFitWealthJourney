# MyFitWealthJourney

A static wellness and budget-eating publication covering **Mind · Body · Money**. No frameworks, no databases, no login required.

**Stack:** HTML · CSS · Vanilla JavaScript  
**Hosting:** Any static host (GitHub Pages, Netlify, Cloudflare Pages)

---

## Project Structure

```
/
├── index.html                    Homepage
├── healthy-living.html           Healthy Living hub
├── recipes.html                  Recipe index
├── meal-prep.html                Meal Prep hub
├── budget-grocery.html           Budget Grocery hub
├── tools.html                    Free Tools index
├── about.html / contact.html     Info pages
├── disclaimer.html / privacy.html  Legal pages
│
├── blog/                         Long-form articles (6)
├── recipes/                      Individual recipe pages (5)
├── tools/                        Interactive calculators (3)
│
├── assets/
│   ├── css/styles.css            All styles — design-token based
│   └── js/main.js                Navigation, FAQ accordion, newsletter
│
├── sitemap.xml                   All 25 pages
├── robots.txt                    Open to all crawlers
│
└── docs/                         Internal documentation
    ├── EDITORIAL_OPERATING_SYSTEM.md
    ├── ROADMAP.md
    └── PUBLISHING_WORKFLOW.md
```

## Pages (25 total)

| Type | Count | Location |
|---|---|---|
| Hub / root pages | 11 | `/` |
| Blog articles | 6 | `blog/` |
| Recipe pages | 5 | `recipes/` |
| Calculator tools | 3 | `tools/` |

## Free Tools

- **Grocery Budget Planner** — weekly budget by category and household size
- **Meal Cost Calculator** — exact cost per serving for any recipe
- **Protein Cost Calculator** — cost per gram of protein by food source

## Development

No build step. Open any `.html` file directly or serve with:

```bash
npx serve .
```

## Notes

- `blog/hydration-electrolytes-guide.html` uses Bootstrap 5 CDN — intentional structural exception for that single page
- AdSense publisher ID: `ca-pub-8978658918402683`
- All content is general wellness information only — see `disclaimer.html`
- Editorial strategy: see `docs/EDITORIAL_OPERATING_SYSTEM.md`
