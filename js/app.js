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

  // 4. Initialize Portfolio Showcase (Filters & architecture drawer)
  if (window.PortfolioModule) {
    window.PortfolioModule.init();
  }

  // 5. Initialize Pricing Slider (Touch & navigation controls)
  if (window.PricingSliderModule) {
    window.PricingSliderModule.init();
  }

  // 6. Initialize Engineering Team Showcase & Category Filters
  if (window.TeamModule) {
    window.TeamModule.init();
  }

  // 7. Initialize Consultation & Contact Form Validation
  if (window.ContactModule) {
    window.ContactModule.init();
  }

  // 8. Initialize FAQ Accordion Module
  if (window.FAQModule) {
    window.FAQModule.init();
  }

  console.log('✅ PT Nafa Teknologi Indonesia web application initialized successfully.');
});
