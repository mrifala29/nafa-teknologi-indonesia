/**
 * ==========================================================================
 * NAFA TEKNOLOGI - SERVICES SHOWCASE MODULE
 * Handles interactive tabs and dynamic browser mockup updates
 * ==========================================================================
 */

const ServicesModule = (function () {
  let currentServiceKey = 'web-profile';

  function init() {
    const tabButtons = document.querySelectorAll('.service-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const key = this.getAttribute('data-service');
        if (key) {
          switchService(key);
        }
      });
    });

    // Initial render
    switchService(currentServiceKey);
  }

  function switchService(serviceKey) {
    if (!window.NafaData || !window.NafaData.services[serviceKey]) return;
    const data = window.NafaData.services[serviceKey];
    currentServiceKey = serviceKey;

    // Update active tab buttons
    const tabButtons = document.querySelectorAll('.service-tab-btn');
    tabButtons.forEach(btn => {
      const isCurrent = btn.getAttribute('data-service') === serviceKey;
      btn.classList.toggle('active', isCurrent);
    });

    // Update details with subtle fade
    const titleEl = document.getElementById('service-title');
    const descEl = document.getElementById('service-desc');
    const specsEl = document.getElementById('service-specs');
    const ctaTextEl = document.getElementById('service-cta-text');
    const urlEl = document.getElementById('preview-browser-url');
    const statusEl = document.getElementById('preview-status-pill');
    const mockupContainer = document.getElementById('service-mockup-container');

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (ctaTextEl) ctaTextEl.textContent = data.ctaText;
    if (urlEl) urlEl.textContent = data.url;
    if (statusEl) statusEl.textContent = data.status;

    if (specsEl) {
      specsEl.innerHTML = data.specs.map(item => `
        <span class="spec-chip">
          <span class="material-symbols-outlined spec-chip-icon">check_circle</span>
          ${item}
        </span>
      `).join('');
    }

    if (mockupContainer) {
      mockupContainer.innerHTML = data.mockup;
      mockupContainer.classList.remove('fade-in');
      void mockupContainer.offsetWidth; // Trigger reflow for animation
      mockupContainer.classList.add('fade-in');
    }
  }

  return {
    init: init,
    switchService: switchService
  };
})();

// Global accessibility
window.switchService = ServicesModule.switchService;
window.ServicesModule = ServicesModule;
