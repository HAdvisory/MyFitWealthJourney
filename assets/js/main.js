/* ============================================
   MyFitWealthJourney.com — main.js
   Mobile nav, active links, UI helpers
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  highlightActiveNavLink();
  initFAQ();
});

/* --- Navigation ---
   Toggles mobile menu open/closed.
   Closes when a link is clicked or user taps outside. */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on outside tap
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* --- Active Nav Link ---
   Marks the current page's nav link as active
   by comparing href against the current URL path. */
function highlightActiveNavLink() {
  const path = window.location.pathname;

  // Normalise: strip trailing slash, lowercase
  const normalize = (href) => {
    try {
      const url = new URL(href, window.location.origin);
      return url.pathname.replace(/\/$/, '').toLowerCase();
    } catch {
      return href;
    }
  };

  const current = normalize(path) || '/index.html';

  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
    const linkPath = normalize(link.getAttribute('href'));
    const isHome = (linkPath.endsWith('/index.html') || linkPath === '/') &&
                   (current.endsWith('/index.html') || current === '/');
    if (linkPath === current || isHome) {
      link.classList.add('active');
    }
  });
}

/* --- FAQ Accordion ---
   Clicking a question toggles its answer. */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      // Open clicked (if it was closed)
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* --- Utility: Format currency ---
   formatUSD(1.5) → "$1.50" */
function formatUSD(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/* --- Utility: Animate number counters ---
   Call on result elements to count up from 0 to target. */
function animateCounter(el, target, duration = 600) {
  const start = performance.now();
  const isFloat = !Number.isInteger(target);
  const decimals = isFloat ? 2 : 0;

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = (target * eased).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Export for use in calculators.js
window.MyFit = { formatUSD, animateCounter };
