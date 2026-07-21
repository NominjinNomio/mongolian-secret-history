# Business Requirements Document — Mongolian Secret History

> **Version:** 1.0
> **Date:** 2026-07-01
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

Mongolian Secret History is a modern, multilingual tour website built for an international audience seeking authentic cultural and adventure travel experiences in Mongolia. The site promotes and sells guided tours, showcases Mongolia's unique history, landscapes, and nomadic culture, and generates customer inquiries and bookings through clear calls-to-action and contact forms. The website will support Mongolian and English, with a modern, inspirational visual style that evokes adventure, peace, and excitement.

---

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|---|---|---|
| 1 | Promote and sell tours | Tour page views + booking button clicks | +20% month-over-month in first quarter |
| 2 | Showcase Mongolia's unique attractions | Time on page for gallery and portfolio sections | Avg. > 2 minutes |
| 3 | Generate inquiries and bookings | Contact form submissions + booking requests | ≥ 15 per month in first quarter |

---

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|------|----------------|---------------|
| Project owner | Student / learner | Define direction, approve design and content |
| Content manager | erxes CMS admin | Add/update tours, blog posts, and pages |
| Developer | erxes web agent | Build, connect, and deploy the site |
| End users | International travelers | Browse, inquire, and book tours |

---

## 4. Scope

### 4.1 In-scope
- Multilingual homepage with hero, about, services, portfolio, gallery, pricing, team, testimonials, FAQ, blog, and contact sections
- Dedicated CMS-driven pages for each selected section
- Blog for travel stories, tips, and tour updates
- Contact form and inquiry flow
- Online tour and accommodation booking calls-to-action
- Responsive design for mobile, tablet, and desktop
- erxes CMS integration for content management
- Deployment to GitHub

### 4.2 Out-of-scope
- Full e-commerce checkout with payment processing
- User account registration and login
- Real-time availability and booking engine
- Custom booking calendar tied to live inventory
- Third-party CRM or email marketing automation beyond basic contact capture

---

## 5. Target Audience & User Personas

### Primary Persona: Cultural & Adventure Traveler
- **Demographics:** 28–55 years old, from Europe, North America, or Asia, middle to upper income
- **Goals:** Discover authentic Mongolian experiences, plan a tailored itinerary, book with a trusted local operator
- **Pain Points:** Hard to find reliable local tour operators, unclear pricing, difficulty customizing trips
- **Tech Proficiency:** Comfortable researching and booking travel online, uses mobile and desktop

### Secondary Persona: Independent Traveler or Small Group
- **Demographics:** Couples, families, or small private groups aged 25–50
- **Goals:** Avoid mass tourism, experience nomadic lifestyle and nature in a personal way
- **Pain Points:** Pre-packaged tours don't match interests, language barriers with local providers
- **Tech Proficiency:** High; expects smooth mobile browsing and quick inquiry options

---

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy
```text
Home
├── About
├── Services
│   ├── Group Tours
│   ├── Private Tours
│   └── Customized Itineraries
├── Portfolio
├── Gallery
├── Pricing
├── Team
├── Testimonials
├── FAQ
├── Blog
├── Contact
└── Legal
    ├── Privacy Policy
    └── Terms of Service
```

### 6.2 Navigation Structure
- **Header:** Home, About, Services, Portfolio, Blog, Contact
- **Footer:** About, Services, FAQ, Blog, Contact, Privacy Policy, Terms of Service
- **Mobile:** Hamburger menu with same primary links; phone/email quick actions visible

---

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Hero
- **Purpose:** Capture attention and establish the brand immediately
- **Content:** Full-width Mongolia landscape or cultural imagery, headline, subheadline, primary CTA
- **CTA:** "Explore Tours" → /services
- **Interactions:** Subtle scroll indicator or motion cue

#### About
- **Purpose:** Introduce Mongolian Secret History and build trust
- **Content:** 
  - We are a Mongolia-based travel company specializing in authentic, immersive journeys across the country’s most iconic and remote destinations. Our mission is to share the beauty of Mongolia’s vast landscapes, nomadic culture, and rich history with travelers from around the world.
  - Whether you are seeking cultural encounters, adventure in the open steppe, or peaceful moments in nature, we design experiences that go beyond standard tourism. Every journey is guided by local experts who ensure safety, comfort, and meaningful connections along the way.
- **CTA:** "Learn More" → /about
- **Interactions:** Scroll-triggered fade-in text and image reveal

#### Services
- **Purpose:** Present the main travel services and tour types
- **Content:** 
  - Group Tours – Pre-designed itineraries covering top destinations in Mongolia
  - Private & Custom Tours – Tailor-made travel experiences based on your interests and schedule
  - Cultural Experiences – Nomadic homestays, traditional meals, and local lifestyle immersion
  - Adventure Activities – Horse riding, camel trekking, hiking, and national park exploration
  - Transportation & Guides – Professional English-speaking guides and experienced drivers
  - Accommodation Arrangement – From hotels in Ulaanbaatar to ger camps in remote regions
- **CTA:** "View All Services" → /services
- **Interactions:** Cards lift on hover

#### Portfolio
- **Purpose:** Showcase featured tours and experiences across Mongolia
- **Content:** 
  - Gobi Desert Adventure – Discover dunes, canyons, and camel herder communities
  - Central Mongolia Heritage Tour – Visit ancient capitals, monasteries, and UNESCO sites
  - Khustai & Terelj National Parks – Wildlife, scenic mountains, and nomadic culture
  - Nomadic Lifestyle Experience – Stay with local herder families in traditional gers
  - 10-Day Highlights of Mongolia – A complete journey covering deserts, steppe, and cultural landmarks
  - Each tour is designed to provide a balance of adventure, culture, and relaxation.
- **CTA:** "View Details" → /portfolio/[slug]
- **Interactions:** Hover overlay with quick summary

#### Gallery
- **Purpose:** Inspire visitors through visual storytelling
- **Content:** Grid of high-quality images from tours and destinations
- **CTA:** "View Gallery" → /gallery
- **Interactions:** Lightbox or modal image viewer

#### Pricing
- **Purpose:** Provide transparent and flexible starting prices for tours
- **Content:** 
  - Short tours (2–5 days): starting from $700–$900
  - Mid-length tours (6–9 days): starting from $900–$1,300
  - Extended tours (10+ days): starting from $1,500+
  - Final pricing depends on chosen itinerary, accommodation type, and additional services. Custom tour packages tailored to budget and travel preferences are also available.
- **CTA:** "Request a Quote" → /contact
- **Interactions:** Pricing cards highlight on hover

#### Team
- **Purpose:** Humanize the brand and build credibility
- **Content:** Professional guides, drivers, founders with photos and short bios
- **CTA:** "Meet the Team" → /team
- **Interactions:** Staggered reveal on scroll

#### Testimonials
- **Purpose:** Build social proof
- **Content:** Quotes from past travelers with names and countries
- **CTA:** "Read More Reviews" → /testimonials
- **Interactions:** Carousel or slider on mobile

#### FAQ
- **Purpose:** Answer common pre-booking questions
- **Content:** Best time to visit, packing tips, visas, food, accommodations, physical difficulty
- **CTA:** "Still have questions? Contact us" → /contact
- **Interactions:** Accordion expand/collapse

#### Blog
- **Purpose:** Improve SEO and engage visitors with travel content
- **Content:** Articles about destinations, culture, travel tips, and tour updates
- **CTA:** "Read More" → blog post detail
- **Interactions:** Category filtering if multiple categories exist

#### Contact
- **Purpose:** Generate inquiries and booking requests
- **Content:** Contact form (name, email, tour interest, message), company email, phone, address, map
- **CTA:** "Send Inquiry" form submit
- **Interactions:** Form validation and success message

### 7.2 E-commerce Requirements
- Not applicable for this build. Booking is inquiry-based; no payment checkout is required.

### 7.3 Content Management Requirements
- All pages, posts, menus, and homepage section content managed through erxes CMS
- Easy update of tour listings, prices, team members, and testimonials
- Multi-language content for Mongolian and English

### 7.4 Multi-language Requirements
- Default language: Mongolian (mn)
- Secondary language: English (en)
- All CMS pages, posts, and menu items must support translations
- Slugs remain consistent across languages (e.g., /mn/about and /en/about)

### 7.5 User Account & Authentication
- Not required.

### 7.6 Search & Filtering
- Optional search on blog and tour portfolio
- Basic category or region filtering for tours

---

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO
- Semantic HTML structure
- Meta titles and descriptions per page
- Alt text for all images
- Clean URLs and language subpaths (/mn/, /en/)
- XML sitemap generated at build time if possible

### 8.3 Accessibility
- WCAG 2.1 AA compliance target
- Keyboard-navigable menus and forms
- Sufficient color contrast
- Screen-reader friendly headings and landmarks

### 8.4 Security
- No sensitive payment data collected
- Contact form protected with basic anti-spam measures
- Environment variables kept out of source control

### 8.5 Browser & Device Support
- Latest Chrome, Firefox, Safari, Edge
- iOS Safari and Chrome Mobile
- Responsive breakpoints: mobile < 768px, tablet 768px–1024px, desktop > 1024px

---

## 9. Design Direction

### 9.1 Visual Style
Modern, clean, and immersive. Use large photography of Mongolian landscapes and culture as the hero element. Typography-driven hierarchy with generous whitespace. Subtle motion to create a sense of journey and discovery without distracting from content. Improve on the reference site's layout by making CTAs more prominent, spacing more breathable, and the booking flow more obvious.

### 9.2 Color Palette
- Primary: Royal blue `#123FAE`
- Primary Dark: `#0A2C7A`
- Primary Light: `#EAF1FF`
- Accent: Gold `#C8A24A`
- Background: `#FAFAF8`
- Text: `#111827`
- Muted Text: `#6B7280`

### 9.3 Typography
- Headings: Bold, modern sans-serif with strong presence
- Body: Clean, readable sans-serif
- Mongolian and Cyrillic script support essential

### 9.4 Imagery & Photography
- Full-width hero images of steppes, ger camps, nomadic life, horses, camels, national parks
- Authentic, documentary-style photography preferred over stock-looking images
- Gallery and portfolio should feature destination-specific imagery

---

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|----------|----------|------------|------|
| Hero | Explore Tours | /services | Drive tour discovery |
| Services | View All Services | /services | Increase services page visits |
| Portfolio | View Details | /portfolio/[slug] | Generate tour interest |
| Pricing | Request a Quote | /contact | Capture custom inquiries |
| Testimonials | Read More Reviews | /testimonials | Build trust |
| FAQ | Contact Us | /contact | Resolve doubts and convert |
| Blog | Read More | /blog/[slug] | Engage and improve SEO |
| Contact | Send Inquiry | Form submit | Capture lead |

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Contact form submissions: ≥ 15 per month
- Portfolio/pricing page views: ≥ 40% of total sessions
- Average session duration: > 2 minutes
- Bounce rate on homepage: < 50%

### 11.2 Qualitative Criteria
- Visitors describe the site as inspiring and trustworthy
- Content clearly communicates unique value of Mongolian Secret History
- Booking/inquiry flow feels simple and low-friction

---

## 12. Assumptions & Constraints

### Assumptions
- Tour content, images, and team bios will be provided or generated during content seeding
- erxes CMS remains accessible and credentials stay valid
- Reference website remains available for design audit during Step 3.5

### Constraints
- No live payment/checkout integration in this phase
- No custom booking engine or real-time availability
- Deployment target is GitHub only (no Vercel auto-deploy)

---

## 13. References & Appendices

### 13.1 Reference Documents
- Reference website: https://mongoliansecrethistory.mn/en/tour/bestSellingTours/23U-B5ZZ6rMkOn_LOt2pF
- site.config.json: /home/nominjin/intern/opencode/erxes-skills/content-plugin/headless/web/site.config.json

### 13.2 Competitor Analysis

| Competitor | URL | Strengths | Weaknesses |
|-----------|-----|-----------|------------|
| Mongolian Secret History (reference) | https://mongoliansecrethistory.mn | Authentic tour focus, cultural depth | CTA visibility and spacing can be improved |

### 13.3 Glossary

| Term | Definition |
|------|-----------|
| Ger | Traditional Mongolian round felt dwelling |
| Tailor-made tour | Custom itinerary built to traveler preferences |
| Steppe | Vast grassland ecosystem covering much of Mongolia |
| Nomadic lifestyle | Traditional mobile herding way of life |
