# Apoorva Shenoy Professional Portfolio

## Overview

This is a professional portfolio website for Apoorva Shenoy, a Technical Specialist at AT&T with 6+ years of experience in full-stack development, microservices architecture, and cloud technologies. The portfolio showcases professional experience, technical skills, education, certifications, and contact information in a clean, modern single-page application format.

The application is built as a static portfolio site with no backend API requirements, focusing on presenting professional information in an elegant, recruiter-friendly interface inspired by LinkedIn's professional aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (only Home and NotFound routes)
- TanStack Query for state management (minimal usage, no API calls currently)

**UI Component System:**
- shadcn/ui component library (Radix UI primitives with Tailwind CSS styling)
- Custom-themed components following the "new-york" style variant
- Comprehensive design system defined in `design_guidelines.md` with professional, corporate aesthetic
- Responsive design with mobile-first approach using Tailwind's responsive utilities

**Styling Approach:**
- Tailwind CSS for utility-first styling with extensive customization
- CSS custom properties for theming (light/dark mode support)
- Professional color palette focused on blues and neutrals (LinkedIn-inspired)
- Custom font stack: Inter/Work Sans (primary), Space Grotesk/Plus Jakarta Sans (headers)
- Spacing system based on consistent 4px increments

**Page Structure:**
- Single-page application with smooth-scroll navigation
- Sections: Hero, About, Experience, Skills, Education, Contact
- Fixed navigation bar with hamburger menu for mobile
- Theme toggle for light/dark mode switching

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the Node.js server
- HTTP server creation using Node's built-in `http` module
- Static file serving for the built React application
- Fallback routing to index.html for client-side routing support

**Development vs Production:**
- Development: Vite middleware integration for HMR and fast refresh
- Production: Pre-built static assets served from `dist/public` directory
- Build script bundles both client (Vite) and server (esbuild) separately

**Current State:**
- No active API routes implemented (routes placeholder exists in `server/routes.ts`)
- In-memory storage interface defined but not utilized
- User schema exists but no authentication/user management implemented

### Data Storage Solutions

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- Database schema defines a basic users table with username/password
- No active database operations in current implementation
- Migration setup configured via `drizzle.config.ts`

**Current Storage:**
- MemStorage class provides in-memory user storage (not actively used)
- No persistent data storage for portfolio content
- All portfolio data (experience, skills, education) is hardcoded in React components

**Future Database Considerations:**
- Infrastructure ready for PostgreSQL integration when needed
- Potential use cases: contact form submissions, analytics, or CMS features

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives for accessible, unstyled components (@radix-ui/*)
- Lucide React for icon components
- React Icons (specifically SiReact for tech logos)
- embla-carousel-react for potential carousel functionality
- cmdk for command menu components (available but not used)

**Styling & Utilities:**
- Tailwind CSS with PostCSS for processing
- class-variance-authority (cva) for component variant management
- clsx and tailwind-merge for conditional className composition
- date-fns for date formatting

**Development Tools:**
- TypeScript for type safety across the entire stack
- ESBuild for server bundling in production
- Vite plugins for Replit integration (@replit/vite-plugin-*)

**Form & Validation:**
- React Hook Form with @hookform/resolvers (available but not actively used)
- Zod for schema validation
- drizzle-zod for database schema validation

**Session Management (Available but Unused):**
- express-session for session handling
- connect-pg-simple for PostgreSQL session storage
- No authentication currently implemented

**Asset Management:**
- Profile photo and hero background stored in `attached_assets` directory
- Images imported directly in React components
- Favicon configured in HTML

### Design System Characteristics

**Professional Recruiter-Focused Design:**
- Clean, corporate aesthetic inspired by LinkedIn
- Emphasis on readability and professional presentation
- Card-based layouts with subtle shadows and elevation
- Consistent spacing and typography hierarchy
- Professional color palette with blue primary accent (221 83% 53%)

**Responsive Breakpoints:**
- Mobile-first approach with progressive enhancement
- Grid systems adapt from single column to multi-column layouts
- Navigation collapses to hamburger menu on mobile devices

**Interactive Elements:**
- Smooth scroll navigation between sections
- Hover effects on cards and buttons with elevation changes
- Theme toggle for light/dark mode preferences
- Mobile-responsive navigation drawer