/* ============================================
   MyFitWealthJourney.com — calculators.js
   Three tools:
     1. Grocery Budget Planner
     2. Meal Cost Calculator
     3. Protein Cost Calculator
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initGroceryBudgetPlanner();
  initMealCostCalculator();
  initProteinCostCalculator();
});

/* ============================================
   1. GROCERY BUDGET PLANNER
   ============================================ */
function initGroceryBudgetPlanner() {
  const form = document.getElementById('groceryBudgetForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateGroceryBudget();
  });

  document.getElementById('groceryBudgetReset')?.addEventListener('click', () => {
    form.reset();
    hideResult('groceryBudgetResult');
  });
}

function calculateGroceryBudget() {
  const budget     = parseFloat(document.getElementById('weeklyBudget').value);
  const people     = parseInt(document.getElementById('householdSize').value, 10);
  const meals      = parseInt(document.getElementById('mealsPerWeek').value, 10);
  const preference = document.getElementById('dietPreference').value;

  if (!budget || budget <= 0 || !people || !meals) {
    alert('Please fill in all fields with valid numbers.');
    return;
  }

  const perPerson = budget / people;

  // Category allocation percentages by preference
  const allocations = {
    balanced: {
      'Proteins (meat, eggs, beans)': 0.30,
      'Fruits & Vegetables':          0.25,
      'Grains & Starches':            0.20,
      'Dairy & Alternatives':         0.12,
      'Pantry & Condiments':          0.08,
      'Snacks & Extras':              0.05,
    },
    'high-protein': {
      'Proteins (meat, eggs, beans)': 0.42,
      'Fruits & Vegetables':          0.20,
      'Grains & Starches':            0.15,
      'Dairy & Alternatives':         0.12,
      'Pantry & Condiments':          0.08,
      'Snacks & Extras':              0.03,
    },
    'plant-based': {
      'Proteins (legumes, tofu, nuts)': 0.28,
      'Fruits & Vegetables':            0.30,
      'Grains & Starches':              0.22,
      'Dairy Alternatives':             0.10,
      'Pantry & Condiments':            0.07,
      'Snacks & Extras':                0.03,
    },
    'budget-max': {
      'Proteins (eggs, beans, canned)': 0.28,
      'Fruits & Vegetables':            0.20,
      'Grains & Starches (bulk)':       0.28,
      'Dairy':                          0.10,
      'Pantry & Condiments':            0.10,
      'Snacks & Extras':                0.04,
    },
  };

  const cats = allocations[preference] || allocations['balanced'];
  const costPerMeal = budget / meals;

  // Build result HTML
  const resultEl = document.getElementById('groceryBudgetResult');
  const breakdown = document.getElementById('budgetBreakdown');
  const summaryEl = document.getElementById('budgetSummary');
  const tipsEl    = document.getElementById('budgetTips');

  // Summary metrics
  document.getElementById('result_perPerson').textContent = `$${perPerson.toFixed(2)}`;
  document.getElementById('result_perMeal').textContent   = `$${costPerMeal.toFixed(2)}`;
  document.getElementById('result_totalMeals').textContent = meals;

  // Category bars
  breakdown.innerHTML = '';
  Object.entries(cats).forEach(([name, pct]) => {
    const amount = budget * pct;
    breakdown.innerHTML += `
      <div class="breakdown-bar">
        <div class="breakdown-bar-header">
          <span class="breakdown-bar-label">${name}</span>
          <span class="breakdown-bar-value">$${amount.toFixed(2)} <span style="color:var(--color-text-muted);font-weight:400">(${Math.round(pct*100)}%)</span></span>
        </div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width:${pct*100}%"></div>
        </div>
      </div>`;
  });

  // Dynamic tips
  const tips = getGroceryTips(budget, people, preference);
  tipsEl.innerHTML = tips.map(t => `<li>${t}</li>`).join('');

  showResult('groceryBudgetResult');
}

function getGroceryTips(budget, people, pref) {
  const tips = [];
  const perPerson = budget / people;

  if (perPerson < 50)
    tips.push('Canned beans, lentils, and oats are your best friends — they cost under $1/serving and pack solid protein and fiber.');
  if (perPerson < 75)
    tips.push('Eggs are one of the most budget-friendly proteins. A dozen eggs provides 72g of protein for around $3–4.');
  if (pref === 'high-protein')
    tips.push('Chicken thighs are typically 40–60% cheaper than chicken breasts with similar protein content. Consider buying in bulk.');
  if (pref === 'plant-based')
    tips.push('Dried lentils and chickpeas cost 3–5x less than canned — cook a big batch and freeze portions.');
  if (pref === 'budget-max')
    tips.push('Rice, oats, and dried beans bought in 5–10 lb bags can cut your grain and protein costs by half.');

  tips.push('Plan meals before shopping — households that plan waste an estimated 30% less food.');
  tips.push('Buy produce that's in season: it's cheaper, fresher, and often more nutritious.');
  tips.push('Frozen vegetables are nutritionally comparable to fresh and usually 20–50% cheaper.');

  return tips.slice(0, 5);
}

/* ============================================
   2. MEAL COST CALCULATOR
   ============================================ */
function initMealCostCalculator() {
  const form = document.getElementById('mealCostForm');
  if (!form) return;

  // Add ingredient row button
  document.getElementById('addIngredient')?.addEventListener('click', addIngredientRow);

  // Delete row (delegated)
  document.getElementById('ingredientRows')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-row') ||
        e.target.closest('.remove-row')) {
      const rows = document.querySelectorAll('.ingredient-row');
      if (rows.length > 1) e.target.closest('.ingredient-row').remove();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateMealCost();
  });

  document.getElementById('mealCostReset')?.addEventListener('click', () => {
    form.reset();
    // Reset to 1 ingredient row
    const container = document.getElementById('ingredientRows');
    if (container) {
      container.innerHTML = buildIngredientRow();
    }
    hideResult('mealCostResult');
  });
}

function buildIngredientRow() {
  return `
    <div class="ingredient-row">
      <input type="text"   placeholder="Ingredient name"  class="ing-name" aria-label="Ingredient name">
      <input type="number" placeholder="Cost ($)" step="0.01" min="0" class="ing-cost" style="width:90px" aria-label="Cost">
      <input type="number" placeholder="Servings" step="0.5"  min="0.5" class="ing-servings" style="width:80px" aria-label="Servings this makes">
      <button type="button" class="remove-row" aria-label="Remove row" title="Remove">✕</button>
    </div>`;
}

function addIngredientRow() {
  const container = document.getElementById('ingredientRows');
  if (!container) return;
  const div = document.createElement('div');
  div.innerHTML = buildIngredientRow();
  container.appendChild(div.firstElementChild);
}

function calculateMealCost() {
  const rows = document.querySelectorAll('.ingredient-row');
  const servings = parseFloat(document.getElementById('totalServings').value);
  const eatOutCost = parseFloat(document.getElementById('eatOutCost').value) || 15;

  if (!servings || servings <= 0) {
    alert('Please enter the number of servings this meal makes.');
    return;
  }

  let totalCost = 0;
  const ingredients = [];

  rows.forEach(row => {
    const name = row.querySelector('.ing-name')?.value.trim();
    const cost = parseFloat(row.querySelector('.ing-cost')?.value) || 0;
    const ingServings = parseFloat(row.querySelector('.ing-servings')?.value) || servings;

    if (name && cost > 0) {
      // Pro-rate the cost to the portion used for this recipe
      const portionCost = cost * (servings / ingServings);
      totalCost += portionCost;
      ingredients.push({ name, cost: portionCost });
    }
  });

  if (totalCost === 0) {
    alert('Please add at least one ingredient with a cost.');
    return;
  }

  const costPerServing = totalCost / servings;
  const savingsVsEatOut = Math.max(0, (eatOutCost - costPerServing) * servings);
  const savingsPct = Math.round((savingsVsEatOut / (eatOutCost * servings)) * 100);

  // Populate results
  document.getElementById('result_mealTotal').textContent = `$${totalCost.toFixed(2)}`;
  document.getElementById('result_costPerServing').textContent = `$${costPerServing.toFixed(2)}`;
  document.getElementById('result_savings').textContent = `$${savingsVsEatOut.toFixed(2)}`;

  // Ingredient cost breakdown
  const breakdownEl = document.getElementById('mealIngBreakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = ingredients.map(i =>
      `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:.875rem">
         <span>${i.name}</span>
         <span style="font-weight:600">$${i.cost.toFixed(2)}</span>
       </div>`
    ).join('');
  }

  // Savings label
  const savingLabel = document.getElementById('result_savingsLabel');
  if (savingLabel) {
    savingLabel.textContent = savingsVsEatOut > 0
      ? `You save ~${savingsPct}% vs eating out (est. $${eatOutCost.toFixed(2)}/person)`
      : `This meal costs more than our $${eatOutCost.toFixed(2)} restaurant estimate — review your inputs.`;
  }

  showResult('mealCostResult');
}

/* ============================================
   3. PROTEIN COST CALCULATOR
   ============================================ */
function initProteinCostCalculator() {
  const form = document.getElementById('proteinCostForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateProteinCost();
  });

  document.getElementById('proteinCostReset')?.addEventListener('click', () => {
    form.reset();
    hideResult('proteinCostResult');
  });
}

function calculateProteinCost() {
  const foodName       = document.getElementById('foodName').value.trim() || 'This food';
  const packageCost    = parseFloat(document.getElementById('packageCost').value);
  const servingsPerPkg = parseFloat(document.getElementById('servingsPerPackage').value);
  const proteinPerServ = parseFloat(document.getElementById('proteinPerServing').value);
  const caloriesPerServ = parseFloat(document.getElementById('caloriesPerServing').value) || 0;

  if (!packageCost || !servingsPerPkg || !proteinPerServ) {
    alert('Please fill in package cost, servings per package, and protein per serving.');
    return;
  }

  const costPerServing    = packageCost / servingsPerPkg;
  const totalProtein      = servingsPerPkg * proteinPerServ;
  const costPerGramProtein = packageCost / totalProtein;
  const proteinCalPct = caloriesPerServ > 0
    ? Math.round((proteinPerServ * 4 / caloriesPerServ) * 100) : null;

  // Rating
  let rating, ratingColor;
  if (costPerGramProtein < 0.05) {
    rating = 'Excellent value'; ratingColor = '#16A34A';
  } else if (costPerGramProtein < 0.10) {
    rating = 'Good value'; ratingColor = '#2D6A4F';
  } else if (costPerGramProtein < 0.20) {
    rating = 'Fair value'; ratingColor = '#D97706';
  } else {
    rating = 'Expensive source'; ratingColor = '#DC2626';
  }

  // Populate results
  document.getElementById('result_costPerServ').textContent   = `$${costPerServing.toFixed(2)}`;
  document.getElementById('result_totalProtein').textContent  = `${totalProtein.toFixed(0)}g`;
  document.getElementById('result_proteinPerDollar').textContent = `${(1 / costPerGramProtein).toFixed(1)}g`;
  document.getElementById('result_costPerGram').textContent   = `$${costPerGramProtein.toFixed(3)}`;

  const ratingEl = document.getElementById('result_proteinRating');
  if (ratingEl) {
    ratingEl.textContent = rating;
    ratingEl.style.color = ratingColor;
  }

  const summaryEl = document.getElementById('proteinSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <strong>${foodName}</strong> costs <strong>$${costPerGramProtein.toFixed(3)} per gram of protein</strong>.
      ${proteinCalPct ? `Protein makes up <strong>${proteinCalPct}%</strong> of the calories per serving.` : ''}
      ${getProteinContextNote(costPerGramProtein, foodName)}
    `;
  }

  showResult('proteinCostResult');
}

function getProteinContextNote(cpg, name) {
  if (cpg < 0.04)
    return `<br><br>For reference, eggs typically cost $0.02–$0.04/g protein, making ${name} a comparable or better deal.`;
  if (cpg < 0.10)
    return `<br><br>Chicken breast typically runs $0.04–$0.08/g protein. ${name} is in a reasonable range.`;
  if (cpg < 0.20)
    return `<br><br>This is pricier per gram of protein than budget staples like eggs or lentils, but may still fit your preferences.`;
  return `<br><br>For a more budget-friendly protein source, consider eggs ($0.02–$0.04/g), canned tuna ($0.05–$0.09/g), or dried lentils ($0.03–$0.06/g).`;
}

/* --- Helpers --- */
function showResult(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('visible');
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideResult(id) {
  document.getElementById(id)?.classList.remove('visible');
}
