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
        let visibleCount = 0;
        cards.forEach(card => {
          const categories = (card.getAttribute('data-category') || '').split(' ');
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Show/hide empty state message
        let emptyState = sliderEl.querySelector('.portofolio-empty-state');
        if (visibleCount === 0) {
          if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.className = 'portofolio-empty-state';
            sliderEl.appendChild(emptyState);
          }
          emptyState.innerHTML = `
            <div style="padding:2.5rem 1.5rem; text-align:center; width:100%; border:1px dashed var(--color-border); border-radius:var(--radius-xl); background:var(--color-surface-alt); margin:auto;">
              <span class="material-symbols-outlined" style="font-size:36px; color:var(--color-primary); margin-bottom:0.5rem; display:block;">construction</span>
              <h4 style="font-size:1rem; font-weight:600; color:var(--color-text-headline); margin-bottom:0.25rem;">Proyek Sedang Disiapkan</h4>
              <p style="font-size:0.875rem; color:var(--color-text-body); max-width:420px; margin:0 auto;">
                Studi kasus real project untuk kategori ini sedang dalam tahap kurasi dan segera ditampilkan.
              </p>
            </div>
          `;
          emptyState.style.display = 'flex';
        } else if (emptyState) {
          emptyState.style.display = 'none';
        }

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
