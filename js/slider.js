/**
 * ==========================================================================
 * NAFA TEKNOLOGI - PRICING SLIDER MODULE
 * Handles smooth scrolling, arrow buttons, and drag-to-scroll interaction
 * ==========================================================================
 */

const PricingSliderModule = (function () {
  let sliderEl;
  let prevBtn;
  let nextBtn;

  function init() {
    sliderEl = document.getElementById('pricing-slider');
    prevBtn = document.getElementById('pricing-prev-btn');
    nextBtn = document.getElementById('pricing-next-btn');

    if (!sliderEl) return;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollSlider(-1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollSlider(1));
    }

    // Touch/drag gestures
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderEl.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - sliderEl.offsetLeft;
      scrollLeft = sliderEl.scrollLeft;
      sliderEl.style.cursor = 'grabbing';
    });

    sliderEl.addEventListener('mouseleave', () => {
      isDown = false;
      sliderEl.style.cursor = 'default';
    });

    sliderEl.addEventListener('mouseup', () => {
      isDown = false;
      sliderEl.style.cursor = 'default';
    });

    sliderEl.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderEl.offsetLeft;
      const walk = (x - startX) * 1.5;
      sliderEl.scrollLeft = scrollLeft - walk;
    });

    // Handle "Konsultasi" buttons inside cards to pre-select package in contact form
    const consultButtons = sliderEl.querySelectorAll('.pricing-consult-btn');
    consultButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        const packageId = this.getAttribute('data-package');
        if (packageId && window.ContactModule) {
          window.ContactModule.selectPackage(packageId);
        }
      });
    });
  }

  function scrollSlider(direction) {
    if (!sliderEl) return;
    const card = sliderEl.querySelector('.pricing-card');
    const scrollAmount = card ? card.offsetWidth + 24 : sliderEl.clientWidth * 0.75;
    sliderEl.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  return {
    init: init,
    scrollSlider: scrollSlider
  };
})();

window.PricingSliderModule = PricingSliderModule;
