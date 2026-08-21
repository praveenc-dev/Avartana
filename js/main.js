// Mobile nav toggle (stacked panel)
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#FBF9F5';
      nav.style.padding = '20px 24px';
      nav.style.borderBottom = '1px solid #E4D8C4';
      nav.style.gap = '18px';
      nav.style.zIndex = '150';
    });
    // Close menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          nav.style.display = 'none';
        }
      });
    });
  }
});

// Scroll-reveal animations — fade + rise into view as user scrolls
document.addEventListener('DOMContentLoaded', function () {
  // Mark sections/cards for animation (no HTML changes needed)
  document.querySelectorAll(
    '.section-head, .about-portrait, .about-copy, .credential-row, ' +
    '.free-strip, .cta-band, .testi-card, .news-card, .course-card'
  ).forEach(function (el) {
    el.classList.add('reveal');
  });

  // Group grids so their cards stagger in together
  document.querySelectorAll('.course-grid, .news-grid').forEach(function (grid) {
    grid.classList.add('reveal-group');
    // Cards already get .reveal via selector above; grid handles stagger delay
  });

  const targets = document.querySelectorAll('.reveal, .reveal-group');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
});
