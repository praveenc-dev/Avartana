// Hero banner slider — two slides, auto-rotate + dot navigation
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0;
  let timer;

  function goTo(index) {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    current = index;
  }

  function nextSlide() {
    goTo((current + 1) % slides.length);
  }

  function startAutoplay() {
    timer = setInterval(nextSlide, 6000);
  }

  if (slides.length > 1) {
    dots.forEach((dot) => {
      dot.addEventListener('click', function () {
        clearInterval(timer);
        goTo(parseInt(dot.dataset.goto, 10));
        startAutoplay();
      });
    });
    startAutoplay();
  }
});

// Video swiper — simple horizontal scroll controls
document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('videoTrack');
  const prev = document.getElementById('videoPrev');
  const next = document.getElementById('videoNext');

  if (track && prev && next) {
    const scrollAmount = 366; // slide width + gap

    next.addEventListener('click', function () {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prev.addEventListener('click', function () {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  // Mobile nav toggle (simple show/hide of main-nav as a stacked panel)
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
    });
  }
});
