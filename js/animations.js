/* ==============================
   ANIMATIONS — js/animations.js
   ============================== */

(function () {

  /* ── Reveal on scroll ── */
  const reveals = document.querySelectorAll('.reveal-up');

  // Skip hero elements — they use CSS animations on load
  const nonHeroReveals = [...reveals].filter(el => !el.closest('.hero'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  nonHeroReveals.forEach(el => revealObserver.observe(el));

  /* ── Skill pills stagger on hover ── */
  document.querySelectorAll('.skill-card').forEach(card => {
    const pills = card.querySelectorAll('.skill-pills span');
    card.addEventListener('mouseenter', () => {
      pills.forEach((pill, i) => {
        pill.style.transitionDelay = `${i * 0.03}s`;
      });
    });
    card.addEventListener('mouseleave', () => {
      pills.forEach(pill => { pill.style.transitionDelay = '0s'; });
    });
  });

  /* ── Animated counter for stat numbers ── */
  function animateCounter(el, target, suffix = '') {
    const duration = 1500;
    const start    = performance.now();
    const isFloat  = target % 1 !== 0;

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      el.textContent = (isFloat ? value.toFixed(2) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statEls = entry.target.querySelectorAll('.stat-num');
        statEls.forEach(el => {
          const raw = el.textContent.trim();
          const suffix  = raw.replace(/[\d.]/g, '');   // e.g. '%' or '+'
          const numeric = parseFloat(raw);
          if (!isNaN(numeric)) {
            animateCounter(el, numeric, suffix);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
