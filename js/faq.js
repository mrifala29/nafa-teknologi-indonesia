/**
 * ==========================================================================
 * NAFA TEKNOLOGI - FAQ ACCORDION MODULE (faq.js)
 * Implements accessible, smooth interactive accordion for FAQ section
 * ==========================================================================
 */

const FAQModule = (function () {
  function init() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        const isCurrentlyActive = item.classList.contains('active');

        // Close other FAQ items for clean single-view accordion
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle clicked item
        if (isCurrentlyActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  return {
    init: init
  };
})();

// Export to window global
window.FAQModule = FAQModule;
