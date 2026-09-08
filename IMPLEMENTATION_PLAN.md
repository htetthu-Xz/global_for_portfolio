# Global F.O.R Co., Ltd - Portfolio Implementation Plan

This plan follows the confirmed decisions in [PROJECT_SPEC.md](./PROJECT_SPEC.md).

## Phase 1: Project Foundation

- Initialize a Vue 3 + JavaScript + Vite application.
- Establish the source directory structure.
- Add reusable layout, route, and content conventions.
- Move approved local media into the application asset structure.
- Confirm the asset manifest and preserve source attribution/reference data.

## Phase 2: Visual System

- Define corporate colors, typography, spacing, container widths, borders, shadows, and responsive breakpoints.
- Create restrained Japanese-inspired pattern details without changing company identity.
- Define accessible states for links, buttons, navigation, focus, and reduced motion.
- Establish image treatments that work across portrait, landscape, and group photography.
- Configure Tailwind CSS with the approved corporate design tokens and responsive breakpoints.

## Phase 3: Shared Interface

- Build the responsive site header and desktop navigation.
- Build the mobile navigation with keyboard and touch support.
- Build reusable page title and breadcrumb treatments.
- Build the footer with phone, email, navigation, and appointment messaging.
- Add global metadata defaults and route-level page metadata.

## Phase 4: Page Implementation

1. Home: photo-led hero, equal Japanese language training and employment agency positioning, company introduction, Japanese companion content, company structure links, and contact prompt.
2. About: values, vision, mission, business activities, Japanese companion content, and location prompt.
3. Services: Japanese language training first, overseas employment content, Japanese source content, registration/certificate media, and the remaining existing business activities.
4. Our Members: member roles, portraits, group photo gallery, and responsive grid.
5. Contact: hours, address, map link/embed, phone, email, and appointment call-to-action.

## Phase 5: Content and Media Verification

- Compare every displayed fact against [CONTENT_INVENTORY.md](./CONTENT_INVENTORY.md).
- Confirm names, roles, address, phone, email, hours, dates, and numerical claims.
- Use approved local assets rather than remote source URLs.
- Confirm the Japanese Home content that is truncated in the source before publishing a continuation.
- Apply only approved minor interface corrections such as `Vist us` to `Visit us`.

## Phase 6: Responsive and Accessibility Validation

- Test mobile layouts and touch interactions.
- Test tablet layouts and intermediate grid behavior.
- Test laptop and wide desktop layouts.
- Verify no horizontal overflow at supported widths.
- Verify readable line lengths, image cropping, tap targets, focus states, keyboard navigation, and reduced-motion behavior.
- Verify meaningful image alternative text and semantic heading order.

## Phase 7: Production Readiness

- Run the existing project checks and production build.
- Check for broken routes, missing assets, console errors, and failed network requests.
- Configure Nginx fallback behavior for client-side routes.
- Deploy the static build to the Ubuntu VPS.
- Connect the domain when selected and enable HTTPS.
- Perform a final production review on desktop and mobile.

## First Release Exclusions

- No CMS or admin panel
- No database or authentication
- No contact form or server-side email handling
- No Burmese translation
- No analytics unless separately approved
- No new company claims, testimonials, certifications, or invented content
