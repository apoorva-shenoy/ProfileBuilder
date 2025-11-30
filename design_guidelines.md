# Design Guidelines: Apoorva Shenoy Professional Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from LinkedIn's professional aesthetic and modern portfolio sites like Dribbble/Behance portfolios. Focus on clean, corporate professionalism with subtle personality touches that reflect technical expertise and career achievements.

## Typography System

**Font Families:**
- Primary: 'Inter' or 'Work Sans' (Google Fonts) - clean, professional sans-serif
- Accent: 'Space Grotesk' or 'Plus Jakarta Sans' for headers - modern, technical feel

**Hierarchy:**
- Hero Name/Title: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Subsection Titles: text-xl to text-2xl, font-medium
- Job Titles: text-lg, font-semibold
- Body Text: text-base, font-normal, leading-relaxed
- Metadata (dates, locations): text-sm, font-medium, slightly muted

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Container max-width: max-w-6xl
- Card padding: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8

**Grid Strategy:**
- Hero: Single column, centered
- Skills: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Experience Timeline: Single column with left-aligned cards
- Education/Certifications: 2-column grid on desktop

## Component Library

### Navigation
Fixed top navigation bar with smooth scroll anchors:
- Logo/Name (left)
- Nav links: About, Experience, Skills, Education, Contact (right)
- Hamburger menu for mobile
- Subtle shadow on scroll

### Hero Section
Full-width hero (min-h-screen) with:
- Professional headshot placeholder (rounded-full, w-32 h-32, border with subtle shadow)
- Name in large, bold typography
- Current role tagline: "Technical Specialist @ AT&T"
- Brief 2-line professional statement
- Primary CTA buttons: "View Work" and "Contact Me" with blurred backgrounds if over image
- Email and LinkedIn icons/links below
- Subtle scroll indicator at bottom

### About Section
Single column, max-w-4xl:
- Section header "About Me"
- 3-4 paragraph biography from resume summary
- Key stats in 3-column grid: "6+ Years Experience", "3 Major Companies", "8+ Certifications"

### Experience Timeline
Vertical timeline design:
- Company logo placeholder (left, circular, 60px)
- Vertical connecting line between entries
- Each role card contains:
  - Company name + role title
  - Duration and location (text-sm, muted)
  - Expandable bullet points with achievements
  - Tech stack tags (rounded pills with subtle background)
- Cards alternate subtle left/right offset for visual interest

### Skills Showcase
Grid layout organized by category cards:
- Frontend, Backend, Cloud & DevOps sections
- Each category as distinct card with:
  - Category icon (from Heroicons)
  - Category title
  - Skill items as tags/pills with proficiency indicators
  - No progress bars - use badge styling instead

### Education & Certifications
Two-column layout on desktop:
- Left: Education cards with degree, institution, duration
- Right: Certification badges in grid
- Each cert as card with icon, title, issuer

### Contact Section
Centered content with:
- Large "Let's Connect" header
- Email and LinkedIn as prominent links
- Optional contact form (Name, Email, Message fields)
- Footer with copyright and "Built with React"

## Images

**Hero Image:** Yes, use a professional workspace/technology-themed background image
- Placement: Full-width background for hero section
- Treatment: Subtle overlay (dark gradient or solid overlay at 40-60% opacity) for text readability
- Style: Modern tech aesthetic - clean desk setup, abstract tech patterns, or minimal geometric design

**Company Logos:** Placeholder circles for AT&T, Accenture, TCS in timeline

**Profile Photo:** Circular headshot in hero section, centered above name

## Interactions & Animations

**Minimal Animation Strategy:**
- Smooth scroll behavior for navigation
- Fade-in on scroll for section headers (subtle, one-time)
- Hover lift effect on cards (translate-y-1 + shadow increase)
- Timeline items fade in as they enter viewport
- No distracting parallax or continuous animations

## Responsive Behavior

**Breakpoints:**
- Mobile-first approach
- Stack all grids to single column below md breakpoint
- Hero text scales down appropriately
- Timeline simplifies to straight vertical on mobile
- Navigation collapses to hamburger menu

## Key Design Principles

1. **Professional First:** Clean, corporate aesthetic that builds credibility
2. **Scannable Content:** Clear hierarchy makes it easy to find information
3. **Achievement Focus:** Highlight career progression and technical breadth
4. **Subtle Personality:** Modern touches without sacrificing professionalism
5. **Performance-Minded:** Fast loading, minimal animation, optimized images