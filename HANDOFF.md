# Design Handoff — Mongolian Secret History

## 0. Approval Record

- **Homepage options shown:** Option A (Faithful), Option B (Improved), Option C (Bold Editorial)
- **Selected option:** Option B — Improved
- **Preview artifact file paths:**
  - `output/mongolian-secret-history/designs/homepage-option-a.png`
  - `output/mongolian-secret-history/designs/homepage-option-b.png`
  - `output/mongolian-secret-history/designs/homepage-option-c.png`
- **Final design file path:** `output/mongolian-secret-history/designs/design.pen`
- **Final design export:** `output/mongolian-secret-history/designs/design.png`
- **Pencil project paths used:**
  - `output/mongolian-secret-history/designs/homepage-directions.pen`
  - `output/mongolian-secret-history/designs/design.pen`
- **Confirmation:** Homepage previews covered the full homepage section flow including Header, Hero, About, Services, Portfolio, Pricing, Team, Gallery, Testimonials, FAQ, Contact, and Footer.
- **Confirmation:** `design.pen` and `design.png` came from the approved Option B direction.
- **Locked constraints:**
  - Primary color must remain royal blue `#123FAE`
  - Dark blue accent `#0A2C7A`
  - Light blue background tint `#EAF1FF`
  - Accent color must remain gold `#C8A24A`
  - Background `#FAFAF8`
  - Text `#111827`, muted text `#6B7280`
  - Display font must be League Spartan for headings
  - Body font must be Inter
  - Rounded pill buttons for primary CTAs
  - Section padding rhythm of 120px vertical on desktop
  - Mobile-first responsive approach

---

## 1. Design Summary

Mongolian Secret History is a premium Mongolian heritage brand with a refined restaurant-inspired identity. The approved direction uses a light, elegant layout with large photography, generous whitespace, royal blue primary actions, and gold accents. The design establishes a timeless, museum-quality aesthetic while keeping the existing travel/tour content and site structure intact.

---

## 2. Visual Direction

- **Direction name:** Mongolian Restaurant Luxury
- **Mood:** Premium, timeless, culturally authentic, elegant
- **Color energy:** Royal blue and gold with warm cream backgrounds
- **Typography approach:** Bold geometric display font (League Spartan) for headings paired with clean sans-serif (Inter) for body
- **Layout feel:** Spacious, centered, image-forward, museum-quality
- **Animation signature:** Smooth scroll-triggered fade-ins, subtle card lifts, gentle button scaling
- **Complexity:** Medium — polished but performant for mobile

---

## 3. Motion Level

**Motion Level 2 — Alive**

- Smooth scroll behavior
- Fade-in-up reveals for sections on scroll
- Card hover lift with shadow increase
- Button hover scale 1.02
- Link color transitions
- Accordion expand/collapse
- Respect `prefers-reduced-motion`

---

## 4. Fonts

- **Display:** League Spartan — used for headings, logo, and quotes
- **Body:** Inter — used for navigation, body text, labels, and CTAs
- **Mono:** JetBrains Mono — optional for small technical details

Both fonts support Latin characters. For Mongolian Cyrillic, ensure the deployed site loads a Cyrillic-compatible fallback or subset of Inter/League Spartan.

---

## 5. Libraries

- **framer-motion** — scroll reveals, hover states, page transitions, accordion
- **lenis** — smooth scroll
- **clsx + tailwind-merge** — conditional class handling
- **lucide-react** — icons
- **next-themes** — theme switching if dark mode is added later

No GSAP, Three.js, or heavy animation libraries are required for this motion level.

---

## 6. Setup Commands

```bash
cd output/mongolian-secret-history
pnpm add framer-motion clsx tailwind-merge lucide-react next-themes lenis
```

If shadcn is not initialized in the starter:
```bash
npx shadcn@latest init
npx shadcn@latest add accordion button card input textarea
```

---

## 7. Frontend Build Map

### Global Components
- **Header:** Logo left, nav center-right, language switcher, Book Now CTA
- **Footer:** Logo, nav links, legal links, copyright on dark background
- **Page Hero:** Full-width colored banner with centered page title and subtitle

### Homepage Section Sequence
1. Header
2. Hero — full-width background image, centered headline, CTAs
3. About — two-column image + text
4. Services — 3x2 grid of service cards
5. Portfolio — 3-column tour cards
6. Pricing — 3 pricing tiers + custom quote banner
7. Team — 4-column team member cards
8. Gallery — image grid
9. Testimonials — 3-column quote cards
10. FAQ — accordion list
11. Contact — two-column form + contact info
12. Footer

### Standalone Pages
- `/about` — About Page with hero, story, values
- `/services` — Services Page with 6 service cards
- `/portfolio` — Portfolio Page with 5 tour cards
- `/pricing` — Pricing Page with tiers and custom quote CTA
- `/team` — Team Page with 4 member cards
- `/testimonials` — Testimonials Page with quote cards
- `/faq` — FAQ Page with accordion
- `/blog` — Blog Page with 6 post cards
- `/contact` — Contact Page with form and info
- `/gallery` — Gallery Page with image grid

### Dynamic Templates
- Blog listing page
- Blog detail page (reuse blog card styling)
- CMS-driven generic page template

---

## 8. Section-by-Section Layout Guidance

### Hero
- Full-width, 800px height desktop
- Background image with subtle dark overlay
- Centered content
- Label uppercase, letter-spacing 4px
- Title 72px League Spartan
- Two CTAs: primary pill (blue) + secondary outline (white)

### About
- Two-column: text left / image right on homepage
- Image with 24px border radius
- Section label uppercase, primary color
- Title 44px
- Body 17px, line-height 1.7

### Services
- 3x2 grid on desktop
- White or off-white cards
- Outline icon in primary blue
- Title 22px League Spartan
- Description 15px Inter

### Portfolio
- 3-column cards
- Image top, info below
- Border 1px
- Price in primary blue
- "View Details →" in accent gold

### Pricing
- 3 cards horizontally
- Large price 44px
- Pill CTA
- Custom quote banner below in dark blue

### Team
- 4-column cards
- Circular avatar 120px
- Name + role + short bio
- Cards on off-white background

### Gallery
- Mixed grid: 3 small + 2 large + 3 small
- 16px gaps
- 12px border radius

### Testimonials
- 3-column quote cards
- Quote in League Spartan 20px
- Author in Inter 14px
- Border cards

### FAQ
- Single column accordion
- White cards with border
- Question + plus icon
- Expandable answer

### Contact
- Two-column: form left, info right
- Inputs with border and 12px radius
- Pill submit button
- Contact info stacked

---

## 9. Component Inventory

- Header
- Footer
- Hero
- PageHero
- SectionHeader
- ServiceCard
- TourCard
- PricingCard
- TeamMemberCard
- TestimonialCard
- BlogCard
- FAQAccordion
- GalleryGrid
- ContactForm
- LanguageSwitcher
- Button (primary, secondary, outline)

---

## 10. Animation Rules

- Sections fade in and translate up 24px when entering viewport
- Stagger children by 0.1s within grids
- Card hover: translateY -4px, shadow lg
- Button hover: scale 1.02, duration 200ms
- Link hover: color transition 150ms
- Accordion: height animation 250ms
- Smooth scroll for anchor links
- Respect `prefers-reduced-motion`

---

## 11. Interaction Rules

- Primary CTA always visible in header
- Header becomes sticky on scroll (optional glassmorphism)
- Language switcher opens dropdown
- Mobile menu is hamburger with full-screen overlay
- Contact form validates inline
- Tour cards link to detail pages
- Blog cards link to blog detail

---

## 12. Responsive Behavior

### Desktop (1280px+)
- Full multi-column layouts
- 120px section vertical padding
- 80px horizontal page padding

### Tablet (768px–1279px)
- 2-column grids
- 80px vertical padding
- 40px horizontal padding

### Mobile (<768px)
- Single column
- Hamburger navigation
- Hero title reduces to 40px
- 60px vertical padding
- 24px horizontal padding
- Cards stack vertically

---

## 13. Accessibility Notes

- WCAG 2.1 AA target
- Primary blue `#123FAE` on white passes contrast
- Gold accent `#C8A24A` only used for non-essential text or decorative lines
- All interactive elements keyboard accessible
- Focus rings using primary color
- Descriptive alt text for all images
- Form labels associated with inputs
- Touch targets minimum 44x44px

---

## 14. Content Tone Guidance

### Mongolian (default)
- Warm, welcoming, culturally proud
- Use traditional terms like "ger" and "steppe"
- Clear, action-oriented CTAs

### English
- Inspiring but professional
- Keep translations concise to avoid layout overflow
- Preserve key terminology consistency

---

## 15. erxes CMS Field Map

### Homepage Sections (in order)
1. hero
2. about
3. services
4. portfolio
5. pricing
6. team
7. gallery
8. testimonials
9. faq
10. contact

### CMS Pages (slugs)
- `/` (homepage)
- `/about`
- `/services`
- `/portfolio`
- `/pricing`
- `/team`
- `/testimonials`
- `/faq`
- `/blog`
- `/contact`
- `/gallery`

### Menu Structure
**Header:**
- Home → /
- About → /about
- Services → /services
- Tours → /portfolio
- Blog → /blog
- Contact → /contact

**Footer:**
- About → /about
- Services → /services
- Tours → /portfolio
- Testimonials → /testimonials
- Contact → /contact
- Privacy Policy → /privacy
- Terms & Conditions → /terms

### Blog
- Required: yes (`has_blog: true`)
- Categories: Travel Tips, Culture, Adventure, Events, Wildlife, Practical
- Tags: Mongolia, Gobi, Terelj, Khustai, Nomadic, Festival

### Translations
- Primary language: Mongolian (mn)
- Secondary language: English (en)
- Slugs remain identical across languages

---

## 16. Source Audit Reference

- **Source website:** https://mongoliansecrethistory.mn/en/tour/bestSellingTours/23U-B5ZZ6rMkOn_LOt2pF
- **Audit file:** `output/mongolian-secret-history/source-audit.json`
- **Audited pages:** About us, Testimonials, Contact us, Terms, Book online, Tour, Accommodation, and individual tour pages
- **Strategy:** improve-site — preserve core content and purpose while upgrading layout, spacing, hierarchy, and CTAs

---

## 17. Items That Must Not Change During Implementation

- Primary royal blue `#123FAE`
- Dark blue `#0A2C7A`
- Light blue tint `#EAF1FF`
- Accent gold `#C8A24A`
- Background `#FAFAF8`
- Text `#111827`, muted `#6B7280`
- League Spartan + Inter font pairing
- Pill-shaped primary CTAs
- 120px desktop section vertical rhythm
- Homepage section order
- Standalone page coverage for every selected section
- Mongolian as default locale
- Mobile-first responsive behavior
- Motion level 2 — no heavy cinematic animations
