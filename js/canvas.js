/**
 * ==========================================================================
 * NAFA TEKNOLOGI - CANVAS & HERO INTERACTION MODULE
 * Handles floating node clicks and interactive service navigation
 * ==========================================================================
 */

const CanvasModule = (function () {
  function init() {
    // Floating Nodes & Mobile Chips Click -> seamlessly jump to and activate Layanan tab
    const nodes = document.querySelectorAll('.canvas-node, .mobile-node-chip');
    nodes.forEach(node => {
      node.addEventListener('click', function () {
        const serviceKey = this.getAttribute('data-target-service');
        if (serviceKey && window.ServicesModule) {
          window.ServicesModule.switchService(serviceKey);

          // Smooth scroll to services section with header offset
          const servicesSection = document.getElementById('layanan');
          if (servicesSection) {
            const headerHeight = 80;
            const targetPosition = servicesSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  return {
    init: init
  };
})();

window.CanvasModule = CanvasModule;
