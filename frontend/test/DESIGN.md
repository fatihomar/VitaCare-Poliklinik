---
name: Luxurious Healthcare UI
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e5e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#46464c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76767d'
  outline-variant: '#c6c6cd'
  surface-tint: '#585e73'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#151b2d'
  on-primary-container: '#7d839a'
  inverse-primary: '#c0c6de'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1fb'
  primary-fixed-dim: '#c0c6de'
  on-primary-fixed: '#151b2d'
  on-primary-fixed-variant: '#40465a'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e5e2e3'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 32px
  gutter: 24px
  section-gap: 64px
  element-gap: 16px
---

## Brand & Style

The design system is anchored in a philosophy of "Prestige Wellness." It balances the clinical authority required for healthcare with the warmth and exclusivity of a high-end concierge service. The brand personality is professional and trustworthy, yet feels lively and healthy rather than sterile.

The design style is **Modern Corporate with Tactile Sophistication**. It utilizes a "light and heavy" contrast—pairing deep, saturated structural elements with airy, expansive work areas. This approach evokes a sense of security (Midnight Blue) and vitality (Emerald), supported by a bedrock of luxurious comfort (Stone). The interface favors generous whitespace to reduce cognitive load and convey a sense of calm and precision.

## Colors

The palette is designed to create a clear visual hierarchy through high-contrast zoning.

- **Foundational Neutrals:** The canvas uses a warm off-white (Stone-50) to avoid the harshness of pure white, creating a more inviting, "clinical-luxury" atmosphere. Text is rendered in Slate-800 for optimal legibility without the jarring contrast of pure black.
- **Structural Depth:** Deep Midnight Blue (Blue-950) is reserved for persistent structural elements like sidebars and headers, providing a "moat" of professional stability.
- **Vibrant Actions:** Emerald-600 serves as the primary driver for progress, health, and positive outcomes. It is used exclusively for primary calls to action.
- **Elegant Accents:** Warm Gold (Amber-500) provides a sophisticated highlight for premium statuses, notifications, or interactive badges, adding a layer of "concierge" quality to the experience.

## Typography

This design system utilizes **Manrope** across all levels to maintain a modern, refined, and balanced appearance. Manrope’s geometric qualities feel technical and precise for data, while its open apertures remain friendly and legible for long-form patient information.

Headlines use tighter letter spacing and heavier weights to command attention against the generous whitespace. Body text is set with comfortable line heights (1.6) to ensure accessibility for a wide range of users. Small labels and metadata utilize an uppercase tracking to add a layer of sophisticated organization.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop dashboards to ensure data density remains manageable, transitioning to a fluid model for mobile views. 

The rhythm is based on an 8px scale. To achieve the "Luxurious" feel, the design system employs "oversized" padding (32px+) for main containers and significant gaps (64px) between major sections. This intentional use of "empty" space prevents the UI from feeling cluttered, reinforcing the brand's calm and professional personality. Elements within cards or modules follow a tighter 16px or 24px rhythm to maintain visual grouping.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering. 

- **Surface Layer:** The background is Stone-50.
- **Card Layer:** Interactive or content modules are pure white (#FFFFFF).
- **Shadow Profile:** Elements use "Soft Drop-Shadows"—highly diffused, low-opacity shadows (e.g., `0 10px 25px -5px rgba(15, 23, 42, 0.08)`). These shadows should feel like natural light, not digital effects.
- **Active State:** When a user interacts with a card, the shadow should slightly deepen and expand, creating a subtle "lift" effect. 
- **Z-Index:** Sidebars (Midnight Blue) are treated as the lowest structural layer, while modal overlays and dropdowns occupy the highest elevation with more pronounced shadows.

## Shapes

The shape language is defined by **rounded-xl (1.5rem / 24px)** corner radii. This creates a soft, organic feel that aligns with the "Healthy" brand attribute, moving away from the "sharp" and "cold" corners often associated with traditional medical software.

Small components like checkboxes or mini-tags use a scaled-down 8px radius, while main dashboard cards and the primary sidebar navigation utilize the signature 24px radius to define the overall aesthetic.

## Components

- **Primary Buttons:** High-gloss Emerald-600 background with white text. They use a 1.5rem corner radius and a subtle inner-glow to appear slightly tactile.
- **Sidebars:** Deep Midnight Blue background. Navigation items use a semi-transparent white hover state, with the active state marked by a vertical Emerald-600 indicator.
- **Input Fields:** Stone-100 backgrounds with a Slate-200 border. On focus, the border transitions to Emerald-600 with a soft glow effect.
- **Badges/Chips:** Used for status. "Premium" or "Urgent" badges use the Warm Gold (Amber-500) with dark text to stand out elegantly against the Stone/White backgrounds.
- **Cards:** Pure white base, 24px rounded corners, and soft ambient shadows. Internal padding should never drop below 24px.
- **Specialized Health Components:** 
    - **Progress Rings:** Utilize Emerald-600 for positive health metrics.
    - **Vital Sign Monitors:** Use thin, elegant line charts with Emerald for stable data and Amber for data requiring attention.