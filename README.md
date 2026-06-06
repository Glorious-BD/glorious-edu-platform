# Glorious Edu BD — Premium Academic & Admission Care Platform

An elite, high-performance educational institution web application and enterprise portal suite designed for Glorious Edu BD. 

The architecture is built on Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion, and is optimized for deployment via Docker, virtual private servers (VPS), and Cloudflare CDN networks.

---

## Key Platform Features

* **Multi-Portal Workspace Modules**:
  * **Student Portal**: Course progress indicators, weekly class routines, and interactive practice exam consoles.
  * **Parent Portal**: Attendance logs, exam grade updates, and invoice/tuition management.
  * **Teacher Portal**: Class management tools, attendance logging, and exam score entry.
  * **Admin Command Console**: Analytics panels for revenue, registrations, and attendance, plus administrative audit logs.
* **Interactive Public Hubs**:
  * **Dynamic Programs Explorer**: Filters for Academic, Admission, and Skill Development courses.
  * **Alumni Hall of Fame**: Showcases high-performing student achievements.
  * **Fees Guide & Scholarship Calculator**: Computes tuition fees and eligible scholarship waivers.
  * **Resource Center**: Searchable repository for lecture slides, notes, and official announcements.
  * **Branch Locator**: Regional maps, contact details, and facility lists.
* **SEO & Performance Optimization**:
  * **JSON-LD Schema Automation**: Generates validated schema markup for search engines.
  * **Search Engine Directives**: Managed via custom sitemaps and indexing rules.
  * **Cross-Browser Styling**: Tailored CSS resets for smooth layouts on Webkit/Safari browsers.

---

## Architectural Footprint

```text
glorious-edu-platform/
├── public/                    # Static brand logos, optimized vectors, and fallback assets
├── src/
│   ├── app/                   # App Router pages and layouts
│   ├── components/            # Reusable layout and marketing components
│   │   ├── ui/                # Base UI atoms (Button, Input, Dialog, etc.)
│   ├── features/              # Feature-specific logic & business components
│   ├── hooks/                 # Custom React Hooks
│   ├── services/              # API and database service layers
│   ├── types/                 # Shared TypeScript interfaces
│   ├── utils/                 # Class helpers and metadata generators
│   └── styles/                # Tailwind CSS and browser compatibility rules
├── tailwind.config.ts         # Tailwind CSS theme settings
├── tsconfig.json              # TypeScript compilation rules
├── Dockerfile                 # Multi-stage production container build rules
└── package.json               # Application dependencies and execution scripts