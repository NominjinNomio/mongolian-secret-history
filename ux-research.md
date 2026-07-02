# UX Research Document — Mongolian Secret History

> **Version:** 1.0
> **Date:** 2026-07-01
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Define user-centered information architecture for a Mongolia tour booking site
- Identify key user tasks and decision factors for international travelers
- Establish responsive, accessible, and conversion-focused interaction patterns
- Guide the visual design of the homepage and section pages

### 1.2 Methodology
- Document analysis of the BRD
- Stakeholder interview (minimal)
- Competitive reference review of https://mongoliansecrethistory.mn

### 1.3 Scope
- Homepage and all selected section pages
- Multi-language UX (Mongolian default, English secondary)
- Mobile-first responsive design
- Inquiry-based booking flow (no payment checkout)

### 1.4 Key Findings Summary
1. **Mobile-first audience:** Most users browse on phones while planning at home in the evening; fast load and thumb-friendly navigation are critical.
2. **Visual inspiration drives decisions:** Large, authentic imagery of Mongolia's landscapes and nomadic culture is the primary trust and excitement driver.
3. **Transparent pricing reduces friction:** Users want clear starting prices and easy access to custom quotes.
4. **Simple inquiry flow:** The contact form and CTA placement must be obvious on every key section.

---

## 2. User Personas

### Persona 1: Cultural & Adventure Traveler

#### Demographics & Context
- **Age Range:** 28–55
- **Location:** Europe, North America, Asia
- **Occupation:** Professional, remote worker, or retiree
- **Tech Proficiency:** High
- **Primary Device:** Smartphone, sometimes desktop for deeper planning

#### Behavioral Patterns
- **Usage Frequency:** Visits 2–5 times before contacting
- **Task Priorities:** 1) See tour options, 2) Check prices, 3) Read about the company, 4) Submit inquiry
- **Decision Factors:** Authenticity, safety, local expertise, transparent pricing, vivid photography
- **Pain Points:** Unclear pricing, generic stock photos, long contact forms, slow mobile sites
- **Motivations:** Unique cultural experiences, connection with nature, adventure

#### Goals & Needs
- **Primary Goals:** Find and book an authentic Mongolia tour
- **Secondary Goals:** Customize itinerary, read travel stories, see gallery
- **Success Criteria:** Can understand offerings and request a quote within 5 minutes

#### Context of Use
- **Environment:** At home in the evening, relaxed browsing
- **Time Constraints:** Moderate — wants quick overview before deeper research
- **Distractions:** Family, notifications, other tabs

#### Quote
> "I want to feel the landscape before I even read the details."

### Persona 2: Independent Traveler or Small Group

#### Demographics & Context
- **Age Range:** 25–50
- **Location:** International couples, families, private groups
- **Occupation:** Varied
- **Tech Proficiency:** High
- **Primary Device:** Smartphone

#### Behavioral Patterns
- **Usage Frequency:** Visits site after social media or search discovery
- **Task Priorities:** 1) Compare tours, 2) Check customization options, 3) Contact for details
- **Decision Factors:** Flexibility, personalization, trustworthy guides, value
- **Pain Points:** Mass-tourism packages, lack of customization, hidden costs
- **Motivations:** Personal connection, avoiding crowds, memorable experiences

#### Goals & Needs
- **Primary Goals:** Build a tailor-made trip
- **Secondary Goals:** See past traveler reviews, browse gallery
- **Success Criteria:** Understand custom tour process and pricing quickly

#### Context of Use
- **Environment:** Evening planning, often on couch or bed
- **Time Constraints:** Wants to save options and return later
- **Distractions:** Multi-tasking, casual browsing

#### Quote
> "I don't want a package — I want someone to design the trip around us."

---

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery
- **Touchpoints:** Search engine, social media, travel forums, word of mouth
- **User Actions:** Sees photo or review → clicks to homepage
- **Emotions:** Curious, inspired
- **Pain Points:** Slow loading, unclear brand
- **Opportunities:** Hero image and headline immediately communicate Mongolia + tours

### Stage 2: Consideration
- **Touchpoints:** Homepage, portfolio/pricing pages, about section
- **User Actions:** Scrolls through tours, checks prices, reads about the company
- **Emotions:** Interested, evaluating
- **Pain Points:** Too much text, buried CTAs, missing trust signals
- **Opportunities:** Clear tour cards, transparent pricing, testimonials, team section

### Stage 3: Conversion
- **Touchpoints:** Contact form, WhatsApp/email, tour detail page
- **User Actions:** Fills inquiry form or sends message
- **Emotions:** Hopeful, decisive
- **Pain Points:** Long forms, no confirmation, unclear next steps
- **Opportunities:** Short form, clear success message, multiple contact options

### Stage 4: Retention
- **Touchpoints:** Email follow-up, blog, social media
- **User Actions:** Reads blog posts, shares trip, returns for future trips
- **Emotions:** Satisfied, loyal
- **Pain Points:** Lack of post-trip engagement
- **Opportunities:** Blog subscription, social links, trip photos

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy
```text
Home
├── Hero
├── About
├── Services
├── Portfolio (Featured Tours)
├── Pricing
├── Gallery
├── Team
├── Testimonials
├── FAQ
├── Blog
└── Contact
```

### 4.2 Navigation Design
- **Primary Navigation:** Home, About, Services, Portfolio, Blog, Contact
- **Secondary Navigation:** Language switcher (MN/EN), phone/email quick links
- **Footer Navigation:** About, Services, FAQ, Blog, Contact, Privacy, Terms
- **Mobile Navigation:** Hamburger menu with primary links + phone/email CTA

### 4.3 Content Organization Principles
- Prioritize visual storytelling over dense text
- Group related sections logically on the homepage
- Every major section has a clear next step CTA
- Keep language switcher accessible at all times

### 4.4 Search & Filter Strategy
- **Search Scope:** Blog posts and tour portfolio (optional)
- **Filter Categories:** Tour duration, region, activity type
- **Search Results Display:** Card grid with image, title, duration, price

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Logo left, nav center/right, language switcher, CTA button
- **Footer:** Logo, quick links, contact info, social links, legal links
- **Content Width:** Max 1280px centered, full-bleed sections for hero/gallery
- **Grid System:** 12-column grid on desktop, single column on mobile

### 5.2 Section Layouts

#### Hero
- **Layout Type:** Full-width image/video background with centered or left-aligned text
- **Content Priority:** Headline, subheadline, primary CTA
- **Component Types:** Background image, heading, body text, button
- **White Space:** Generous padding top/bottom
- **Responsive Behavior:** Maintain full bleed; stack text on mobile

#### About
- **Layout Type:** Two-column (image + text)
- **Content Priority:** Company mission and trust-building copy
- **Component Types:** Image, heading, paragraph, CTA link
- **White Space:** Large vertical rhythm
- **Responsive Behavior:** Stack image above text on mobile

#### Services
- **Layout Type:** 3-column card grid
- **Content Priority:** Six service types
- **Component Types:** Icon, heading, description
- **White Space:** Consistent card padding
- **Responsive Behavior:** 1 column mobile, 2 tablet, 3 desktop

#### Portfolio
- **Layout Type:** Card grid with hover overlay
- **Content Priority:** Featured tours
- **Component Types:** Image card, title, duration, price, CTA
- **White Space:** Grid gap consistent
- **Responsive Behavior:** 1 column mobile, 2 tablet, 3 desktop

#### Pricing
- **Layout Type:** Pricing cards or table
- **Content Priority:** Tour length tiers and custom quote
- **Component Types:** Card, price, inclusions, CTA
- **White Space:** Clear separation between tiers
- **Responsive Behavior:** Stack cards vertically on mobile

#### Gallery
- **Layout Type:** Masonry or uniform grid
- **Content Priority:** High-quality imagery
- **Component Types:** Image thumbnails, lightbox
- **White Space:** Small gaps, full-bleed possible
- **Responsive Behavior:** Fewer columns on smaller screens

#### Team
- **Layout Type:** Portrait cards in grid
- **Content Priority:** Guide/driver/founder photos and bios
- **Component Types:** Avatar, name, role, short bio
- **White Space:** Comfortable card spacing
- **Responsive Behavior:** 2 columns mobile, 4 desktop

#### Testimonials
- **Layout Type:** Carousel or quote grid
- **Content Priority:** Traveler quotes and names
- **Component Types:** Quote, avatar, name, country
- **White Space:** Breathing room around quotes
- **Responsive Behavior:** Single testimonial on mobile

#### FAQ
- **Layout Type:** Accordion list
- **Content Priority:** Common questions
- **Component Types:** Question, answer, expand icon
- **White Space:** Padding between items
- **Responsive Behavior:** Full-width accordion

#### Blog
- **Layout Type:** Article card grid
- **Content Priority:** Recent posts
- **Component Types:** Thumbnail, category, title, excerpt, date
- **White Space:** Card padding and grid gaps
- **Responsive Behavior:** 1 column mobile, 2–3 desktop

#### Contact
- **Layout Type:** Two-column (form + contact info)
- **Content Priority:** Form, map, email, phone, address
- **Component Types:** Form fields, button, map embed, contact cards
- **White Space:** Clear section separation
- **Responsive Behavior:** Stack form and info on mobile

### 5.3 Content Priority
1. **Homepage:** Hero → Portfolio → About → Services → Pricing → Testimonials → FAQ → Blog → Contact

### 5.4 Component Patterns
- **Cards:** Rounded corners, subtle shadow, hover lift
- **Lists:** Clean bullet lists and accordions
- **Forms:** Labeled inputs, inline validation, clear submit button
- **Media:** Full-width images, object-fit cover, lazy loading

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|-------------|---------------|----------|
| Keyboard Navigation | All interactive elements accessible via keyboard | High |
| Screen Reader Support | ARIA labels, landmarks, skip links | High |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text | High |
| Focus Indicators | Visible focus states on all interactive elements | High |
| Alt Text | Descriptive alt text for all images | High |
| Form Labels | All form inputs have associated labels | High |
| Text Resizing | Support 200% zoom without loss of function | Medium |
| Motion Sensitivity | Respect `prefers-reduced-motion` | Medium |

### 6.2 Multi-language Accessibility
- Allow text expansion for English translations
- Mongolian Cyrillic font rendering must be tested
- Language switcher visible on all pages

### 6.3 Mobile Accessibility
- Touch targets at least 44x44px
- Clear tap states for buttons and links
- Allow pinch zoom

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|-----------|-------|---------------|----------------|
| Mobile | 375px | Smartphones | Single column, stacked sections |
| Tablet | 768px | Tablets | Two columns, adjusted spacing |
| Desktop | 1280px | Laptops, desktops | Full multi-column layout |

### 7.2 Mobile-first Approach
Design for mobile first, then expand to larger screens. Prioritize thumb-friendly navigation, readable text, and fast loading.

### 7.3 Content Adaptation
- Reduce hero text length on mobile
- Convert multi-column grids to single column
- Hide decorative elements if needed
- Maintain CTA visibility above the fold

### 7.4 Performance Budget
- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

---

## 8. Interaction & Motion Design

### 8.1 Animation Principles
- Subtle, purposeful motion that supports storytelling
- Avoid distracting or heavy animations
- Respect reduced-motion preferences

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Buttons | Hover | Scale 1.02, shadow increase | 200ms |
| Cards | Hover | Lift, shadow | 250ms |
| Links | Hover | Color transition, underline | 150ms |
| Form Inputs | Focus | Border color, shadow | 200ms |
| Accordion | Click | Height expand/collapse | 250ms |

### 8.3 Page Transitions
- Optional fade between pages
- Keep transitions under 300ms

### 8.4 Scroll Behaviors
- Smooth scroll for anchor links
- Scroll-triggered fade-in for section content
- Sticky header on scroll

---

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice
Modern, warm, inspiring, and trustworthy. Use inviting language that sparks wanderlust while maintaining professionalism.

### 9.2 Terminology

| Term | Usage | Avoid |
|------|-------|-------|
| Tour | General travel product | Trip (ambiguous) |
| Ger | Traditional Mongolian dwelling | Yurt (less authentic) |
| Custom tour | Tailor-made itinerary | Bespoke (overused) |
| Quote | Price estimate | Estimate (less actionable) |
| Steppe | Grassland region | Plains (less evocative) |

### 9.3 CTA Copy Guidelines
- Use action verbs: Explore, Request, Discover, Book
- Keep CTAs short and clear
- Avoid generic "Submit" — use "Send Inquiry", "Request Quote"

### 9.4 Multi-language UX Writing
- Primary copy in Mongolian, English translations provided
- Keep English translations concise to prevent layout overflow
- Maintain consistent terminology across languages

### 9.5 Error Messages
- Clear, helpful, and polite
- Example: "Please enter a valid email address."
- Example: "All fields are required."

---

## 10. Usability Testing Plan

### 10.1 Test Scenarios
- Can users find tour pricing within 30 seconds?
- Can users complete the contact form?
- Can users switch languages easily?
- Can users understand the services offered?

### 10.2 Testing Methods
- Task-based moderated testing
- Heatmap/session recording after launch
- Mobile device testing

### 10.3 Success Metrics
- Task completion rate > 80%
- Time on task < 2 minutes for key flows
- Zero critical usability issues

---

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|-----------|-----------|------------|---------------|
| Mongolian Secret History (reference) | Authentic tour focus, cultural depth | CTA visibility, mobile spacing, pricing clarity | Improve CTAs, cleaner mobile layout, more visual hierarchy |

---

## 12. Success Metrics & KPIs

### 12.1 UX Metrics
- Mobile bounce rate < 50%
- Average session duration > 2 minutes
- Contact form completion rate > 60%

### 12.2 Business Metrics
- Contact form submissions ≥ 15/month
- Portfolio/pricing page views ≥ 40% of sessions
- Custom tour inquiries growth

### 12.3 Technical Metrics
- Mobile page load < 3s
- Lighthouse accessibility score ≥ 90
- Lighthouse performance score ≥ 75

---

## 13. Design Agent Collaboration

Specialized design direction may be useful for:
- Photo selection and visual storytelling
- Motion design for hero and gallery
- Mongolian cultural motif integration

---

## 14. Assumptions & Constraints

### Assumptions
- Users have stable mobile internet
- Tour content and images will be available for seeding
- erxes CMS will support all required content types

### Constraints
- No live payment/checkout in this phase
- No custom booking engine
- GitHub-only deployment

---

## 15. Next Steps

1. Review and approve this UX research document
2. Proceed to Step 3.5 — design homepage directions in Pencil
3. Create 2–3 homepage options based on this research and the BRD
4. After user selects a direction, expand into full design package
