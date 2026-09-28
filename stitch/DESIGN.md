---
name: Precision Engineering
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4943'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7a73'
  outline-variant: '#bdc9c1'
  surface-tint: '#006c4e'
  primary: '#005d42'
  on-primary: '#ffffff'
  primary-container: '#047857'
  on-primary-container: '#9ffdd3'
  inverse-primary: '#7bd8b1'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#005d3e'
  on-tertiary: '#ffffff'
  tertiary-container: '#007852'
  on-tertiary-container: '#8fffc9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#97f5cc'
  primary-fixed-dim: '#7bd8b1'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#00513a'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-interactive:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies high-conviction engineering, architectural clarity, and institutional reliability for an elite enterprise technology house. The aesthetic departs entirely from generic modern SaaS tropes—rejecting aggressive neon glows, heavy glassmorphism, and playful bubble shapes. Instead, it employs an editorial, technical aesthetic inspired by blueprint precision, industrial design documentation, and modern computational workbenches.

The visual tone relies on crisp, high-contrast surfaces, meticulous 1px structural gridlines, and restrained emerald highlights. The user experience conveys stability, surgical precision, and senior engineering competence, instilling deep confidence in enterprise clients and technical stakeholders.

## Colors

The color palette centers on high-order optical contrast and deliberate functional restraint:

- **Primary Canvas & Backgrounds:** Crisp Stark White (`#ffffff`) serves as the dominant canvas layer, paired with Slate Canvas (`#f8fafc`) for structural containers and alternating bands.
- **Brand Primary (Deep Emerald):** `#047857` (with `#059669` as the interactive hover state) acts as the decisive brand identifier, signaling stability, growth, and precision. It is applied exclusively to critical calls-to-action, active indicators, and high-priority states.
- **Tertiary Accent (Tech Mint):** `#10b981` is reserved for subtle indicators, data visualizations, live status pings, and code syntax highlights.
- **Deep Neutral / Typography:** `#0f172a` (Slate 900) anchors all primary headers and functional typography, delivering crisp contrast without the harshness of pure black. Secondary text utilizes `#475569` (Slate 600) and muted metadata uses `#64748b` (Slate 500).
- **Structural Outlines & Grids:** `#e2e8f0` (Slate 200) defines every card boundary, divider, and interactive field border. Technical graph backgrounds utilize subtle 1px gridline meshes tinted at `#f1f5f9` or `#e2e8f0` with 40% opacity.

## Typography

The type system balances commanding editorial hierarchy with microscopic technical clarity:

- **Display & Headlines (Hanken Grotesk):** Engineered geometry with sharp terminals and tight negative tracking (`-0.02em` to `-0.03em`). Headline treatments project decisive technical authority.
- **Body & Continuous Reading (Inter):** Highly legible, neutral workhorse that maintains pristine readability across complex specifications, architecture breakdowns, and enterprise dashboards.
- **Labels, Specs & Data (JetBrains Mono):** Injected for technical accents, status chips, version tags, telemetry metrics, and uppercase eyebrow badges (`label-caps`). This reinforces the software engineering foundation of the brand.

## Layout & Spacing

The spatial engine utilizes a mathematical 8pt linear cadence. The page composition is structured around an explicit 12-column responsive grid underpinned by an optional technical graph pattern (24px by 24px grid cells with `#e2e8f0` lines rendered at low opacity).

- **Breakpoints & Layout:**
  - **Desktop (≥ 1280px):** 12-column layout with max-width capped at `1400px`, centered with `margin-desktop` (3rem) safe padding and `gutter-lg` (2rem) intra-column gutters.
  - **Tablet (768px – 1279px):** 8-column layout with `gutter` (1.5rem) and fluid scaling.
  - **Mobile (< 768px):** 4-column layout with `gutter-sm` (1rem) and `margin-mobile` (1.25rem).

Section transitions rely on structural hair-line borders (`1px solid #e2e8f0`) rather than arbitrary negative vertical gulfs, preserving the dense, informative layout of engineering schematics.

## Elevation & Depth

This system avoids ambient blur gradients, diffuse heavy drop shadows, and glassmorphic blurs. Depth is conveyed strictly through structural containment and tonal hierarchy:

1. **Surface Layers:**
   - **Level 0 (Canvas):** Pure `#ffffff` or engineered `#f8fafc` backdrop with technical graph lines.
   - **Level 1 (Card & Module Layer):** Solid `#ffffff` resting over `#f8fafc`, bounded by a crisp `1px solid #e2e8f0` perimeter.
   - **Level 2 (Dropdowns, Flyouts & Modals):** Crisp white surface framed with a 1px border (`#cbd5e1`) and an ultra-subtle directional architectural shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.03)`.

2. **Interactive States:**
   - Hovering over interactive cards or interactive panels does not lift them via vertical translation. Instead, the border sharpens from `#e2e8f0` to `#047857` or `#0f172a`, complemented by a faint 1px inset outline.

## Shapes

The design system employs a soft, precision-cut radius model (`level 1`):

- **Default Element Radius:** `0.25rem` (4px). Standard across buttons, inputs, pill badges, and compact data tables.
- **Card & Surface Container Radius:** `0.5rem` (8px). Used for cards, dialog windows, and modular blocks.
- **Sheet & Large Modals:** `0.75rem` (12px). Maximum allowed radius across the entire system.

Curvatures are intentionally restrained to maintain an architectural, technical silhouette reminiscent of high-end hardware, developer terminals, and engineering blueprints. Fully circular pills (`9999px`) are forbidden with the sole exception of dynamic status indicator dots.

## Components

### Buttons
- **Primary:** Solid `#047857` background, `#ffffff` label (`label-interactive`), 4px border radius. Padding: `10px 18px`. Hover: `#059669`. Focus: 2px offset ring in `#10b981`.
- **Secondary (Outline):** Pure `#ffffff` background, 1px border in `#e2e8f0`, text in `#0f172a`. Hover: border shifts to `#0f172a` with background tint `#f8fafc`.
- **Tertiary / Ghost:** No border or fill; `#475569` text. Hover: `#0f172a` with `#f1f5f9` background fill.

### Cards & Containers
- Built on `#ffffff` surfaces enveloped by a crisp `1px solid #e2e8f0` border and 8px border radius.
- Includes optional top status bars: a 2px top border in `#047857` to denote active, high-priority, or primary system flows.
- Inner padding strictly adheres to `space-lg` (24px) for desktop and `space-md` (16px) for mobile.

### Chips & Badges
- Set using `JetBrains Mono` at `label-caps` (uppercase).
- Structure: 4px border radius, `4px 8px` padding, 1px perimeter border.
- **Neutral Chip:** `#f8fafc` background, `#e2e8f0` border, `#475569` text.
- **Active / Emerald Chip:** `#ecfdf5` background, `#a7f3d0` border, `#047857` text, prepended by a 6px solid `#10b981` status dot.

### Form Inputs & Selects
- 1px border in `#cbd5e1`, 4px corner radius, background `#ffffff`, text in `#0f172a`.
- Height: 40px with `space-sm` horizontal interior padding.
- Focused state: Border transitions to `#047857` with a matching `0 0 0 1px #047857` ring. Never use generic blue browser rings.
- Error state: 1px border in `#dc2626` accompanied by helper text in `12px Inter`.

### Checkboxes & Radio Buttons
- Crisp 16px square (or circle for radios) with 1px border `#94a3b8` on `#ffffff`.
- Checked state: `#047857` solid fill with high-contrast `#ffffff` check icon.

### Data Tables & Lists
- Minimalist, high-density line tables. Table headers styled with `JetBrains Mono` uppercase labels (`label-caps`), slate `#64748b` text, and bottom border `1px solid #e2e8f0`.
- Rows feature alternating subtle hover tints (`#f8fafc`) and bottom hair-line dividers. Numeric values align right in monospace font.