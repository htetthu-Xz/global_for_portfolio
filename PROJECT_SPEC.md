# Global F.O.R Co., Ltd - Portfolio Website

## Project Status

Planning approved. This document is the confirmed baseline for future implementation instructions.

Application code should follow the decisions and constraints recorded here.

## Confirmed Project Decisions

- Primary language: English
- Japanese source content: displayed alongside relevant English sections
- Burmese translation: not included in the first release
- Visual direction: professional corporate with restrained Japanese-inspired details
- Responsive support: mobile, tablet, laptop, and wide desktop
- Hosting target: VPS running Ubuntu with Nginx
- Domain: to be decided later
- Contact method: phone and email only; no contact form in the first release
- Content management: no admin panel; content is maintained in code
- Existing logo and collected media: approved for reuse
- Minor interface typo corrections: allowed
- Company facts, claims, names, roles, and contact details: must remain unchanged
- Core company positioning: Japanese language training and employment agency services
- Site structure: separate routes for Home, About, Services, Our Members, and Contact
- Homepage emphasis: Japanese language training and employment agency services presented equally
- Logo treatment: use the existing approved company logo exactly
- Homepage hero: professional photo-led hero using approved company imagery
- Content presentation: concise readable sections followed by complete source content where appropriate
- Language presentation: English navigation/content with Japanese sections shown alongside relevant content
- Services scope: feature training and employment first, while retaining all existing business activities

## Objective

Create a modern portfolio website for Global F.O.R Co., Ltd that presents the company's existing information in a polished, trustworthy, and easy-to-navigate experience.

The primary business story should clearly communicate the company's role in Japanese language training, overseas employment preparation, and employment agency services, supported by the existing human-resource, training, and Japan-focused source content.

The visual direction combines:

- Professional corporate design
- Japanese-inspired business presentation
- Clear, restrained layouts with strong attention to trust and precision

## Content Rule

The existing company content and facts must not be changed. The redesign may:

- Reorganize content for clearer presentation
- Correct obvious interface labels or typographical errors when approved
- Improve headings, spacing, hierarchy, and readability
- Reuse existing photos, member information, contact details, and map

The redesign must not invent services, certifications, statistics, partnerships, testimonials, or company history.

## Information Architecture

### Home

- Clear company introduction
- Equal emphasis on Japanese language training and employment agency services
- Short value proposition based on existing company messaging
- Professional photo-led hero using approved company imagery
- Primary calls to action for viewing services and contacting the company
- Trust-oriented highlights using only existing facts
- Preview links to About, Services, Members, and Contact

### About

- Company introduction
- Professionalism, accountability, quality, teamwork, and integrity
- Existing business activities:
  - Resource extraction, milling, manufacturing, and preservation with relevant authority permission
  - Exploration, exploitation, production, processing, and marketing of mineral resources with government permission
  - Human-resource support, career-change training, personnel management, and management consulting

### Services

- Japanese language training and preparation for overseas employment
- Overseas employment and human-resource placement
- Japanese and Singapore employment focus
- Skills development and specialized knowledge support
- Foreign worker technical intern and specified skilled worker pathways
- Support for employer needs through partner supervising organizations
- Long-term goal of supporting Myanmar's development through returning workers
- Existing mineral-resource and general consulting activities remain represented, with training and employment prioritized visually

### Our Members

- Managing Director
- Directors
- Assistant Accountant
- Office/Admin Executive
- Senior Coordinator
- Coordinators
- School/Admin Executive
- Existing member photos and group photo gallery

### Contact

- Office hours and appointment information
- Address and Google Map
- Phone number
- Email address
- Direct contact call-to-action

## Visual Direction

### Brand Character

The interface should feel dependable, structured, calm, and internationally oriented. It should communicate the care and precision associated with Japanese business websites without presenting the company as Japanese-owned or changing its identity.

### Design Language

- White and warm off-white surfaces
- Deep navy, charcoal, and muted blue as primary corporate colors
- Restrained red accent inspired by Japanese visual culture, used sparingly
- Thin rules, clean grids, generous whitespace, and disciplined alignment
- Subtle Japanese-inspired geometric or line patterns as background details only
- High-quality typography with strong support for English and Japanese text if needed later
- Avoid excessive gradients, loud animations, cluttered cards, and decorative effects that reduce trust

### Layout

- Responsive desktop-first corporate layout that remains fully usable on mobile
- Design and test all pages at mobile, tablet, laptop, and wide desktop breakpoints
- Collapse navigation, multi-column sections, member grids, galleries, and map layouts gracefully on small screens
- Keep tap targets, contact actions, readable line lengths, and spacing comfortable on touch devices
- Persistent header with logo, navigation, and prominent contact action
- Strong page title sections with breadcrumbs or clear location context
- Section-based storytelling with alternating content and image treatments
- Consistent footer containing contact details and navigation
- Use the approved company logo without creating a replacement logo

## User Experience

- Visitors should understand the company's role within the first screen.
- Homepage visitors should see both core business areas without one being hidden behind a language switcher.
- Contact actions should be available from every major page.
- Navigation should remain simple: Home, About, Services, Our Members, Contact.
- Important information must be scannable before reading full paragraphs.
- Forms are not required unless later approved; phone and email remain the primary appointment channels.
- Links, buttons, map, email, and phone actions must be clearly identifiable.

## Functional Requirements

- Responsive navigation with an accessible mobile menu
- Working internal page navigation
- Click-to-call phone link on supported devices
- Click-to-email email link
- Embedded or linked map for the existing office location
- Image gallery for existing member and group photos
- Keyboard-accessible interactive elements
- Visible focus states
- Descriptive alternative text for meaningful images
- Reduced-motion-friendly transitions

## Content Presentation Requirements

- Preserve names, roles, address, phone number, email, hours, and existing company claims.
- Do not alter numerical claims such as the reported number of workers or years of operation without source approval.
- Keep permission and authorization wording careful and faithful to the source content.
- Use consistent English spelling and capitalization in the interface.
- Any proposed copy edit must be documented and approved before implementation.

## Quality Requirements

- Fast loading on mobile networks
- Optimized images without visible quality loss
- Semantic HTML and accessible color contrast
- Page titles and descriptions for each route
- Open Graph metadata for sharing
- Clean URL structure
- No console errors in the finished experience
- Verification on current desktop and mobile viewport sizes

## Confirmed Implementation Plan and Tech Stack

### Confirmed stack

- Vue 3 with JavaScript and the Composition API for the interface
- Vite for development and production bundling
- Vue Router for page routes
- Tailwind CSS for layout, responsive breakpoints, spacing, colors, typography, and states
- Local static assets stored in the project rather than remote Google Sites URLs
- Nginx serving the built static files on the Ubuntu VPS
- No application database, CMS, or backend service required for the first release

### Recommended supporting tools

- ESLint for Vue and JavaScript code quality
- Prettier for consistent formatting
- Lucide Vue for a small, consistent icon set if icons are needed
- No Pinia initially because the site has no complex shared application state

### Why this stack

This is a content-focused portfolio with no account system, database, or form-processing requirement. A Vue static build using JavaScript keeps the site maintainable, fast, and straightforward to deploy on the existing VPS while allowing reusable page sections, responsive layouts, and a future path to additional features.

### Deployment outline

1. Build and validate the production bundle locally.
2. Upload the generated static output to the VPS.
3. Configure Nginx to serve the output directory and route application paths correctly.
4. Add the final domain when it is decided.
5. Enable HTTPS after the domain is connected.
6. Verify all routes, assets, phone/email actions, map link, and responsive layouts in production.

### Implementation boundaries

- Use reusable components for the shared header, mobile navigation, footer, page headings, content sections, member cards, galleries, and contact actions.
- Keep company content in centralized JavaScript content data where practical so copy remains easy to audit.
- Use the collected local assets and the asset manifest; do not depend on Google Sites URLs at runtime.
- Keep Japanese text in the relevant content sections rather than treating it as a separate application language.
- Do not add a language toggle in the first release; use English navigation with Japanese content alongside relevant sections.
- Do not add a backend, database, CMS, authentication, analytics, or contact form unless separately approved.

## Out of Scope for the First Build

- Changing company facts or rewriting the company's positioning
- Adding ecommerce, online payments, accounts, or dashboards
- Adding a CMS or content-management workflow
- Adding a contact form and backend email handling
- Translating the site unless separately requested
- Creating new photography, illustrations, certifications, or testimonials
- Launching or configuring production hosting

## Implementation Sequence

1. Confirm the existing project stack and available assets.
2. Inventory the source site's content, images, links, and page structure.
3. Establish the corporate/Japanese-inspired visual system.
4. Build the shared shell: header, navigation, footer, typography, colors, and responsive layout.
5. Implement Home and About pages.
6. Implement Services and Our Members pages.
7. Implement Contact page and contact actions.
8. Add metadata, accessibility details, performance optimizations, and responsive polish.
9. Validate content fidelity against the existing site.
10. Review the finished site on desktop and mobile before launch.

## Acceptance Criteria

- The website looks modern and professional while retaining Global F.O.R Co., Ltd's identity.
- All existing core content is represented without unsupported additions.
- The confirmed corporate and Japanese-inspired visual direction is evident but restrained.
- Visitors can reach contact information from every major page.
- The site works responsively and is keyboard accessible.
- Existing images and member information are presented clearly.
- Japanese source content appears alongside the relevant English content.
- The static build can be deployed behind Nginx on the Ubuntu VPS.
- No implementation begins outside this confirmed specification without an explicit scope decision.
