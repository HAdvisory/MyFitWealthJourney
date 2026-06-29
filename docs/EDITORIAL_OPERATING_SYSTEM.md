# MyFitWealthJourney — Editorial Operating System v1.0

June 2026 · Governing document for all content decisions

---

## Three Pillars

Every page must strengthen at least two pillars.

| Pillar | Topics |
|---|---|
| **Mind** | Habits, stress, planning, motivation, decision fatigue, sleep, routines |
| **Body** | Nutrition, meal prep, hydration, recipes, fitness basics, healthy habits |
| **Money** | Grocery budgeting, meal costs, food waste, shopping smarter, cost-per-serving |

Current content split: ~85% Body, ~15% Money, ~0% Mind. Target: 25%+ per pillar by end of Year 1.

---

## 10 Cornerstone Pages

These pages are the site's most important URLs. Never deleted — only expanded.

1. How to Eat Healthy on a Budget — `blog/affordable-healthy-eating.html`
2. Budget Meal Prep System — `blog/meal-prep-on-a-budget.html`
3. Grocery Savings Guide — `blog/grocery-savings-for-beginners.html`
4. Healthy Habits for Beginners — `blog/beginner-fitness-habits.html`
5. Complete Hydration Guide — `blog/hydration-electrolytes-guide.html`
6. Budget Recipes Hub — `recipes.html`
7. Nutrition Primer — `blog/healthy-foods-in-moderation.html`
8. Food Budget Mastery — `budget-grocery.html`
9. Mind Over Meals *(planned)* — `mind.html`
10. Financial Wellness Through Food *(planned)* — `money.html`

---

## Internal Linking Rules

- **Article** → 1 cornerstone + 1 recipe + 1 calculator (minimum)
- **Recipe** → 1 article + 1 calculator + 2 related recipes
- **Tool** → 1 article + 2 other tools
- **Hub page** → links to all articles and recipes in cluster
- No orphan pages — every new page is linked from at least 1 existing page on launch day

---

## Editorial Style

**Voice:** Direct. Warm. Honest. Budget-aware.  
**Reading level:** Grade 7–8 (Flesch-Kincaid). No sentence over 35 words.  
**Paragraphs:** 2–4 sentences. Never more than 5.

**Tone rules:**
- Dollar amounts are specific and marked approximate: `~$1.80`
- Food has no moral value — nothing is "clean," "dirty," or "cheat"
- Never promise health outcomes. Use: "may support," "generally associated with"
- Never shame readers for current habits or budget

---

## Required Page Elements

| Element | Articles | Recipes | Tools | Hubs |
|---|---|---|---|---|
| skip-link | ✅ | ✅ | ✅ | ✅ |
| id="main-content" (exactly 1) | ✅ | ✅ | ✅ | ✅ |
| Breadcrumb | ✅ | ✅ | — | — |
| Key Takeaways box | ✅ | — | — | — |
| Tip box | ✅ | ✅ | — | — |
| FAQ section | ✅ (3–6 Qs) | — | ✅ (optional) | ✅ |
| Disclaimer box | ✅ | ✅ | ✅ | ✅ |
| Next Reading | ✅ | — | — | — |
| Author attribution | ✅ | — | — | — |
| References (3–5 sources) | ✅ | — | — | — |
| Recipe CTA in body | ✅ | — | — | — |
| Tool CTA in body | ✅ | ✅ | — | — |

---

## Schema Markup by Page Type

| Page Type | Required Schema |
|---|---|
| Article | BlogPosting (with datePublished, dateModified) + FAQPage + BreadcrumbList |
| Recipe | Recipe (ingredients, instructions, nutrition, times) + BreadcrumbList |
| Tool | SoftwareApplication + FAQPage (if FAQ present) |
| Hub | CollectionPage |
| About | AboutPage |
| Contact | ContactPage |

---

## Publishing Cadence

- **Weekly:** 1 new article or recipe
- **Monthly:** Rotate homepage featured content; expand 1 cornerstone
- **Quarterly:** Full internal link audit; refresh cost estimates
- **Annually:** Full content review; update `dateModified` on all pages; pillar balance check

---

## Pillar Balance Rule

No cluster may exceed 60% of total content. Each quarter, the editorial calendar must include at least one primary Mind article and one primary Money article until both pillars reach 25%+ of total pages.
