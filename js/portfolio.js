/**
 * ==========================================================================
 * NAFA TEKNOLOGI - PORTFOLIO MODULE (portfolio.js)
 * Handles horizontal slider, prev/next arrows, drag/touch, and category tabs
 * ==========================================================================
 */

const PortfolioModule = (function () {
  let sliderEl;
  let prevBtn;
  let nextBtn;

  function init() {
    sliderEl = document.getElementById('portofolio-slider');
    prevBtn = document.getElementById('portofolio-prev-btn');
    nextBtn = document.getElementById('portofolio-next-btn');

    if (!sliderEl) return;

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollSlider(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollSlider(1));
    }

    // Touch & mouse drag gestures
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

    // Handle Demo buttons inside cards to pre-select service in contact form
    const demoButtons = sliderEl.querySelectorAll('.portofolio-demo-btn, .portofolio-consult-btn');
    demoButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const serviceId = this.getAttribute('data-service');
        const serviceSelect = document.getElementById('contact-service');
        if (serviceId && serviceSelect) {
          serviceSelect.value = serviceId;
        }
      });
    });

    // Setup Category Tabs
    setupCategoryTabs();
  }

  function scrollSlider(direction) {
    if (!sliderEl) return;
    const firstVisibleCard = sliderEl.querySelector('.portofolio-card:not([style*="display: none"])');
    const scrollAmount = firstVisibleCard ? firstVisibleCard.offsetWidth + 20 : sliderEl.clientWidth * 0.8;
    sliderEl.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  function setupCategoryTabs() {
    const tabButtons = document.querySelectorAll('.portofolio-filter-btn');
    const cards = sliderEl.querySelectorAll('.portofolio-card');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active tab buttons
        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        // Filter cards in slider
        cards.forEach(card => {
          const categories = (card.getAttribute('data-category') || '').split(' ');
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        // Smooth scroll slider track back to 0
        sliderEl.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      });
    });
  }

  return {
    init: init,
    scrollSlider: scrollSlider
  };
})();

window.PortfolioModule = PortfolioModule;
