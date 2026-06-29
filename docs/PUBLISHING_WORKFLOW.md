# MyFitWealthJourney — Publishing Workflow

A checklist-based workflow for every new page published on the site.

---

## Step 1: Before Writing

- [ ] Check `docs/ROADMAP.md` for the next priority piece
- [ ] Confirm at least 2 existing pages will link to the new page
- [ ] Choose the correct template (article / recipe / tool / hub)
- [ ] Confirm the target keyword matches informational or navigational intent
- [ ] Confirm the new page strengthens at least 2 of the 3 pillars (Mind/Body/Money)

---

## Step 2: Writing

Follow the EOS templates. Key rules:

**All pages:**
- Grade 7–8 reading level
- H2s in sentence case, descriptive, no keyword stuffing
- Paragraphs: 2–4 sentences max
- Dollar amounts marked with `~` (approximate)
- No unsupported medical claims

**Articles add:**
- Key Takeaways (3–5 bullets)
- Tip box (budget-specific, 1 per article)
- FAQ (3–6 questions)
- References (3–5 sources)
- Disclaimer box
- Author attribution + last reviewed date
- Next Reading (2 articles + 1 recipe or tool)

**Recipes add:**
- Budget Tip box
- Nutrition estimate table (marked "Estimated")
- Substitution options
- Meal prep notes
- Related article link (not just other recipes)

---

## Step 3: Pre-Publish Checklist

### SEO
- [ ] Title: 30–65 characters, contains primary keyword
- [ ] Meta description: 50–160 characters, reads as a sentence
- [ ] H1 matches or closely mirrors the title tag
- [ ] Canonical URL matches the page URL exactly
- [ ] OG title, description, image, url all present
- [ ] Twitter card present
- [ ] JSON-LD schema correct for page type
- [ ] `datePublished` and `dateModified` set (articles)

### Structure
- [ ] `<a class="skip-link" href="#main-content">` present
- [ ] `id="main-content"` appears exactly once
- [ ] All internal links point to files that exist
- [ ] Breadcrumb present with correct path (articles and recipes)
- [ ] Author + "Last reviewed: [Month Year]" present (articles)

### Internal links (minimum)
- [ ] Article links to: 1 cornerstone + 1 recipe + 1 calculator + 2 articles
- [ ] Recipe links to: 1 article + 1 calculator + 2 recipes
- [ ] Tool links to: 1 article + 2 other tools

### Content quality
- [ ] Disclaimer box present on all content pages
- [ ] Nutrition disclaimer present on all recipe pages
- [ ] No "treats," "cures," "prevents," or "heals" language
- [ ] FAQ section has 3–6 questions (articles)
- [ ] References include 3–5 authoritative sources (articles)

### Ads and assets
- [ ] Max 3 ad slots on articles, 1 on recipes, 1 on tools
- [ ] No ad appears within first 400px of page
- [ ] Publisher ID is `ca-pub-8978658918402683`
- [ ] CSS path correct: `assets/css/styles.css` (root) or `../assets/css/styles.css` (subdir)
- [ ] JS path correct: `assets/js/main.js` (root) or `../assets/js/main.js` (subdir)

### Mobile
- [ ] Page renders cleanly at 375px viewport width
- [ ] No horizontal scroll
- [ ] All tap targets at least 44×44px

---

## Step 4: Publish

1. Save the file to the correct directory
2. Update `sitemap.xml` — add the new URL with `<lastmod>` date
3. Update at least 2 existing pages to link to the new content
4. Update homepage Editor's Pick section if appropriate

---

## Step 5: Git Commit

```bash
git add <new-file.html>
git add sitemap.xml
git add <any-updated-files>
git commit -m "Add [page title] — [cluster] cluster"
git push origin main
```

---

## Monthly Maintenance (first week of each month)

- [ ] Rotate homepage featured article (update pub-hero section)
- [ ] Rotate Editor's Pick card
- [ ] Add 1 new FAQ item to highest-traffic article
- [ ] Update "Last reviewed" date on any article edited this month
- [ ] Check sitemap `lastmod` dates match actual edit dates

---

## Quarterly Review

- [ ] Full internal link audit — every page has 5+ incoming links
- [ ] Check for any broken links (renamed files)
- [ ] Update grocery prices and cost estimates for inflation
- [ ] Review pillar balance (Mind/Body/Money) — adjust next quarter's calendar
- [ ] Identify 3 weakest pages — expand or consolidate

---

## Known Structural Exception

`blog/hydration-electrolytes-guide.html` uses Bootstrap 5 CDN instead of `styles.css`.  
It has no AdSense and does not load `main.js`. This is intentional.  
When adding AdSense to this page, use Bootstrap-compatible placement only.
