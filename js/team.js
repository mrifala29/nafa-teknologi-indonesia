/**
 * ==========================================================================
 * NAFA TEKNOLOGI - TEAM SLIDER MODULE (team.js)
 * Handles horizontal carousel, prev/next arrows, and drag/touch navigation
 * ==========================================================================
 */

const TeamModule = (function () {
  let sliderEl;
  let prevBtn;
  let nextBtn;

  function init() {
    sliderEl = document.getElementById('team-slider');
    prevBtn = document.getElementById('team-prev-btn');
    nextBtn = document.getElementById('team-next-btn');

    if (!sliderEl) return;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollSlider(-1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollSlider(1));
    }

    // Touch & Mouse Drag to Scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderEl.addEventListener('mousedown', (e) => {
      isDown = true;
      sliderEl.classList.add('active');
      startX = e.pageX - sliderEl.offsetLeft;
      scrollLeft = sliderEl.scrollLeft;
    });

    sliderEl.addEventListener('mouseleave', () => {
      isDown = false;
      sliderEl.classList.remove('active');
    });

    sliderEl.addEventListener('mouseup', () => {
      isDown = false;
      sliderEl.classList.remove('active');
    });

    sliderEl.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderEl.offsetLeft;
      const walk = (x - startX) * 1.5;
      sliderEl.scrollLeft = scrollLeft - walk;
    });
  }

  function scrollSlider(direction) {
    if (!sliderEl) return;
    const card = sliderEl.querySelector('.team-card');
    const gap = parseFloat(getComputedStyle(sliderEl).gap) || 20;
    const scrollAmount = card ? card.offsetWidth + gap : 230;
    sliderEl.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  return { init, scrollSlider };
})();

if (typeof window !== 'undefined') {
  window.TeamModule = TeamModule;
}
