/**
 * ==========================================================================
 * NAFA TEKNOLOGI - APPLICATION ENTRY POINT (app.js)
 * Bootstraps all modular features cleanly upon DOM readiness
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Navigation (Sticky header, mobile drawer, scroll spy)
  if (window.NavigationModule) {
    window.NavigationModule.init();
  }

  // 2. Initialize Services Showcase & Dynamic Mockups
  if (window.ServicesModule) {
    window.ServicesModule.init();
  }

  // 3. Initialize Hero Engineering Canvas (Interactive nodes & zoom)
  if (window.CanvasModule) {
    window.CanvasModule.init();
  }

  // 4. Initialize Pricing Slider (Touch & navigation controls)
  if (window.PricingSliderModule) {
    window.PricingSliderModule.init();
  }

  // 5. Initialize Consultation & Contact Form Validation
  if (window.ContactModule) {
    window.ContactModule.init();
  }

  console.log('✅ PT Nafa Teknologi Indonesia web application initialized successfully.');
});
