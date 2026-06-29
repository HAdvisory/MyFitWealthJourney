# MyFitWealthJourney — Roadmap

**Status: Production v1.0 — June 2026**  
One commit. 25 pages. Clean tree. Synced with origin/main.

---

## Near Term — Weeks 1–4

**Articles**
- [ ] The Complete Budget Pantry Staples Guide
- [ ] How to Build a Weekly Meal Plan on a Budget

**Recipes**
- [ ] Budget Lentil Soup (~$0.85/serving)
- [ ] Simple Vegetable Stir Fry (~$1.25/serving)

**Technical**
- [ ] Add Recipe JSON-LD schema to all 5 recipe pages
- [ ] Add FAQPage JSON-LD to all 5 article pages (cornerstone already done)
- [ ] Add `dateModified` to all BlogPosting pages

---

## Month 2

**Articles (Mind pillar — currently empty)**
- [ ] Sleep Basics for Everyday Health
- [ ] Stress Eating — Why It Happens
- [ ] How to Drink More Water Every Day (bridge to hydration guide)

**Recipes**
- [ ] Black Bean Tacos (~$1.30/serving)
- [ ] Budget Chili (~$1.40/serving)
- [ ] Overnight Oats 3 Ways (~$0.80/serving)

**Content**
- [ ] Author attribution on all articles: "MyFitWealthJourney Editorial Team. Last reviewed: [date]"

---

## Month 3

**Articles (Money pillar — currently underdeveloped)**
- [ ] How to Eat Well When Money Is Tight
- [ ] What Is a Food Budget? How to Set One
- [ ] The Real Cost of Convenience Food vs. Cooking at Home

**New hub pages**
- [ ] `mind.html` — Mind pillar hub
- [ ] `money.html` — Financial Wellness Through Food hub

**Recipes**
- [ ] Budget Vegetable Soup (~$0.70/serving)
- [ ] Budget Tuna Pasta (~$1.50/serving)

---

## Tool Improvements

- [ ] Weekly Meal Planner (static JS, no backend)
- [ ] Food Waste Cost Calculator
- [ ] Daily Water Calculator (ties to hydration guide)
- [ ] Unit Price Comparison Calculator

---

## Known Technical Debt

| Item | Priority | Notes |
|---|---|---|
| `blog/hydration-electrolytes-guide.html` missing AdSense | Medium | Bootstrap structure — requires Bootstrap-compatible integration |
| Recipe pages missing Recipe JSON-LD | High | Enables rich recipe cards in Google Search |
| Google Fonts loaded via `@import` | Low | Render-blocking — migrate to `<link rel="preconnect">` |
| No favicon | Low | Add `favicon.svg` |
| OG images are placeholders | Medium | Need real WebP images per page |
| No real article photography | Medium | Emoji placeholders only — affects CTR from social |

---

## Cornerstone Pages (10 planned)

| # | Status | Page |
|---|---|---|
| 1 | ✅ Built | `blog/affordable-healthy-eating.html` |
| 2 | ✅ Built | `blog/meal-prep-on-a-budget.html` |
| 3 | ✅ Built | `blog/grocery-savings-for-beginners.html` |
| 4 | ✅ Built | `blog/beginner-fitness-habits.html` |
| 5 | ✅ Built | `blog/hydration-electrolytes-guide.html` |
| 6 | ✅ Built | `recipes.html` |
| 7 | ✅ Built | `blog/healthy-foods-in-moderation.html` |
| 8 | ✅ Built | `budget-grocery.html` |
| 9 | ⬜ Planned | `mind.html` — Mind Over Meals hub |
| 10 | ⬜ Planned | `money.html` — Financial Wellness hub |
