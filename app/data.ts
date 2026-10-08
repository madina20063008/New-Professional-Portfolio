export type Project = {
  slug: string;
  title: string;
  label: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  role: string;
  stack: string[];
  features: string[];
  images?: string[];
  live?: string;
  secondaryLive?: { label: string; url: string };
  featured?: boolean;
  tone: "coral" | "sage" | "blue" | "sand" | "plum";
};

export const projects: Project[] = [
  {
    slug: "timepro-faceid",
    title: "TimePro FaceID",
    label: "Attendance CRM & marketing platform",
    year: "2026",
    summary: "A connected workforce product that turns FaceID events into clear attendance, shift, branch, and absence workflows.",
    challenge: "Attendance data spans physical devices, employees, branches, schedules, breaks, and exceptions. The interface had to make that operational complexity understandable without slowing daily work.",
    solution: "I delivered the CRM and multilingual public website as one coherent product system, using reusable React patterns, protected routes, clear information hierarchy, analytics, and responsive states for operational teams.",
    impact: "The finished product gives managers one place to monitor attendance, manage people and devices, export reports, and connect Telegram notifications while presenting the product clearly to prospective customers.",
    role: "Frontend development · product UI · API integration",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI", "Radix UI", "Recharts", "React DnD", "i18next"],
    features: ["Protected CRM routes", "Live attendance analytics", "Branch and device management", "Four-language website", "Excel reporting", "Light and dark modes"],
    images: ["/projects/timepro-01.jpg", "/projects/timepro-02.jpg"],
    live: "https://faceid.timepro.uz",
    secondaryLive: { label: "Admin platform", url: "https://my.timepro.uz" },
    featured: true,
    tone: "coral",
  },
  {
    slug: "fayzli-xonadonlar",
    title: "Fayzli Xonadonlar",
    label: "Real-estate sales CRM & property website",
    year: "2026",
    summary: "An end-to-end real-estate platform connecting a sales pipeline, property inventory, contracts, analytics, and public listings.",
    challenge: "Sales teams needed to coordinate leads, clients, apartments, payments, projects, and contracts while buyers needed a simple way to explore available homes.",
    solution: "I built a role-aware CRM with drag-and-drop sales pipelines, dashboards, contract printing, mortgage calculations, and a public property site with filters, interactive maps, and detailed listing pages.",
    impact: "The two connected interfaces support the entire sales journey—from discovery and lead management through apartment selection, contracting, and payment planning.",
    role: "Frontend development · CRM architecture · product delivery",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI", "Radix UI", "Recharts", "React DnD", "Leaflet", "Axios"],
    features: ["Sales pipeline", "Property inventory", "Contract generation", "Map-based search", "Mortgage calculator", "Role-based access"],
    images: ["/projects/fayzli-01.jpg", "/projects/fayzli-02.jpg"],
    live: "https://fayzlixonadonlar.uz/",
    featured: true,
    tone: "sage",
  },
  {
    slug: "profmedmax",
    title: "ProfMedMax",
    label: "Multilingual medical clinic website",
    year: "2026",
    summary: "A calm, accessible clinic platform for discovering services, specialists, and requesting an appointment in five languages.",
    challenge: "Medical content needed to remain trustworthy and easy to navigate across different languages, scripts, screen sizes, and patient needs.",
    solution: "I created reusable accessible components, API-driven doctor and service content, intelligent search, reviews, statistics, and a waitlist flow with complete RTL support for Arabic.",
    impact: "Patients can understand the clinic, find relevant care, and request an appointment through a responsive experience available in English, Russian, Uzbek, Chinese, and Arabic.",
    role: "Frontend development · internationalization · API integration",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "i18next", "Axios", "Lottie", "Recharts"],
    features: ["Five languages", "Arabic RTL", "Service search", "Appointment requests", "API-driven content", "Accessible UI"],
    images: ["/projects/profmedmax-01.jpg", "/projects/profmedmax-02.jpg"],
    live: "https://profmedmax.uz",
    featured: true,
    tone: "blue",
  },
  {
    slug: "ykii",
    title: "YKII",
    label: "Work & study abroad platform with CMS",
    year: "2026",
    summary: "A multilingual agency platform combining international program discovery, a guided application journey, and a flexible admin CMS.",
    challenge: "A complex set of destinations, programs, careers, articles, testimonials, FAQs, and inquiries had to stay approachable for applicants and manageable for staff.",
    solution: "I used Next.js App Router and a resource-based admin pattern to create responsive program pages, a step-by-step application wizard, editable content, theme support, and five-language routing including RTL.",
    impact: "The platform supports the complete discovery-to-inquiry journey while giving the internal team a structured way to maintain content without developer involvement.",
    role: "Frontend software engineering · CMS design · internationalization",
    stack: ["Next.js", "TypeScript", "App Router", "Tailwind CSS", "i18next"],
    features: ["Application wizard", "Resource-based CMS", "Five languages", "Arabic RTL", "Dark and light themes", "Responsive content pages"],
    images: ["/projects/ykii-01.jpg", "/projects/ykii-02.jpg"],
    live: "https://ykii.uz",
    tone: "sand",
  },
  {
    slug: "ferums",
    title: "FERUMS",
    label: "Industrial engineering website & CMS",
    year: "2026",
    summary: "An SEO-first corporate platform for an industrial engineering company, backed by a bilingual, configuration-driven CMS.",
    challenge: "A broad corporate content system—products, projects, industries, services, careers, news, and sustainability—needed high search visibility and consistent bilingual presentation.",
    solution: "I built statically generated Next.js routes, locale-aware navigation, per-page metadata, structured data, sitemap and canonical support, plus a reusable CMS for managing the content model.",
    impact: "The result combines a polished public experience with durable content operations and technical SEO across every shareable page.",
    role: "Frontend software engineering · SEO architecture · CMS development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "JWT", "PostgreSQL", "JSON-LD"],
    features: ["Static generation", "Bilingual routing", "Structured data", "Config-driven CMS", "REST API", "Per-page social metadata"],
    images: ["/projects/ferums-01.jpg", "/projects/ferums-02.jpg"],
    live: "https://ferums.com",
    tone: "plum",
  },
  {
    slug: "invest-qashqadaryo",
    title: "INVEST Qashqadaryo",
    label: "Full-stack investment portal",
    year: "2026",
    summary: "A five-language investment platform with a complete CMS, secure REST backend, media handling, and full Arabic RTL support.",
    challenge: "Regional projects, sectors, incentives, economic zones, news, and investor inquiries required a reliable multilingual publishing workflow.",
    solution: "I rebuilt the platform with Next.js, Prisma, authenticated admin workflows, reusable CRUD resources, localized data models, media uploads, and responsive theme-aware UI.",
    impact: "Public information and internal publishing now live in one maintainable system that supports five markets and many independent content types.",
    role: "Full-stack product engineering",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT", "Zod"],
    features: ["Five languages", "Arabic RTL", "Admin CMS", "Secure REST API", "Media uploads", "Theme system"],
    images: ["/projects/invest-01.jpg", "/projects/invest-02.jpg"],
    live: "https://investinkashkadarya.uz/",
    tone: "sage",
  },
  {
    slug: "dmx",
    title: "DMX",
    label: "Commerce storefront & operations admin",
    year: "2026",
    summary: "A connected sales platform with a product-rich storefront and an admin system for orders, suppliers, retailers, returns, reporting, and content.",
    challenge: "Customers needed a fast catalog and ordering journey while the operations team needed one clear workspace for complex supplier, stock, order, return, wallet, and delivery workflows.",
    solution: "I built the React storefront and a separate protected admin application with reusable product tools, dashboards, reporting, role-aware workflows, localization, image uploads, and map-based order handling.",
    impact: "The two connected products support the complete sales lifecycle—from product discovery and checkout to supplier coordination, fulfillment, returns, and operational reporting.",
    role: "Frontend development · admin product design · API integration",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Ant Design", "Radix UI", "TanStack Query", "Recharts", "i18next"],
    features: ["Product catalog", "Cart and checkout", "Supplier workflows", "Order and return operations", "Admin analytics", "Multilingual content"],
    images: ["/projects/dmx-01.jpg", "/projects/dmx-02.jpg"],
    live: "https://sotuv.dmx-group.uz/",
    secondaryLive: { label: "Admin platform", url: "https://admin.dmx-group.uz/" },
    tone: "coral",
  },
  {
    slug: "byd-karshi",
    title: "BYD Karshi",
    label: "Automotive dealership website",
    year: "2026",
    summary: "A polished automotive landing experience that presents BYD models, specifications, advantages, and dealership contact journeys across devices.",
    challenge: "Detailed vehicle information and campaign content needed to feel premium, remain easy to compare, and guide visitors naturally toward a dealership inquiry.",
    solution: "I built a responsive React experience with reusable model sections, smooth content navigation, localized copy, interactive galleries, validated inquiry forms, and API integration.",
    impact: "The dealership can showcase its vehicle range through a fast, focused product story that turns model interest into qualified customer contact.",
    role: "Frontend development · product presentation · localization",
    stack: ["React", "Vite", "Tailwind CSS", "Radix UI", "React Hook Form", "i18next", "Zod", "Swiper"],
    features: ["Vehicle showcase", "Model specifications", "Localized content", "Inquiry forms", "Responsive galleries", "Dealership contact"],
    images: ["/projects/byd-01.jpg", "/projects/byd-02.jpg"],
    live: "https://byd-karshi.uz/",
    tone: "blue",
  },
  {
    slug: "wooden-saas",
    title: "WOODEN",
    label: "Business management SaaS platform",
    year: "2026",
    summary: "A production-oriented SaaS marketing platform paired with a database-backed admin CMS for industries, plans, integrations, and inquiries.",
    challenge: "The original product design had to be preserved while its static content became editable, authenticated, and deployment-ready.",
    solution: "I rebuilt the experience in Next.js and added modular API routes, Prisma models, JWT sessions, reusable editors, uploads, and trilingual content management.",
    impact: "The platform now works as both a polished product story and a maintainable business system for content and incoming requests.",
    role: "Full-stack product engineering",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT", "Zod"],
    features: ["SaaS content model", "Admin CMS", "Trilingual UI", "REST backend", "Secure sessions", "Demo requests"],
    images: ["/projects/wooden-01.jpg", "/projects/wooden-02.jpg"],
    live: "https://wooden.uz/",
    tone: "sand",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const skillGroups = [
  { title: "Core", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS / SCSS"] },
  { title: "Product engineering", items: ["React", "Next.js", "App Router", "Redux Toolkit", "RTK Query", "Zustand", "React Hook Form"] },
  { title: "Interface systems", items: ["Tailwind CSS", "Material UI", "Radix UI", "shadcn/ui", "Ant Design", "Framer Motion", "Recharts", "Leaflet"] },
  { title: "Platform", items: ["REST APIs", "Axios", "Firebase", "i18next", "SSR / SSG", "SEO", "Git", "GitHub", "Vercel", "Postman", "Swagger"] },
];

export const experience = [
  {
    period: "May 2026 — Aug 2026",
    role: "Frontend Software Engineer",
    company: "Automatic Technology Solutions LLC",
    location: "Karshi, Uzbekistan · Hybrid",
    points: [
      "Architected and shipped production web applications with React, Next.js, and TypeScript.",
      "Led key features end-to-end and managed complex server state with Redux and RTK Query.",
      "Partnered with backend engineers and designers to deliver responsive, accessible API-driven interfaces.",
      "Championed reusable component patterns, maintainable code, and consistent interface quality.",
    ],
  },
  {
    period: "May 2025 — May 2026",
    role: "Frontend Web Developer",
    company: "Automatic Technology Solutions LLC",
    location: "Karshi, Uzbekistan · Hybrid",
    points: [
      "Built and maintained responsive cross-browser applications with React and TypeScript.",
      "Integrated REST APIs and third-party services for dynamic product functionality.",
      "Translated Figma designs into precise, mobile-friendly interfaces.",
      "Worked in an agile team using Git and GitHub for collaborative delivery.",
    ],
  },
  {
    period: "Sep 2024 — May 2025",
    role: "Frontend Web Development",
    company: "Najot Ta'lim",
    location: "Tashkent, Uzbekistan · On-site",
    points: [
      "Built responsive and accessible interfaces with React, TypeScript, JavaScript, CSS, SASS, and Tailwind CSS.",
      "Integrated REST APIs and Firebase authentication in data-driven projects.",
      "Collaborated with backend developers, designers, and project stakeholders.",
    ],
  },
];

export const certifications = [
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Coursera · Meta", date: "May 2026", url: "https://www.coursera.org/account/accomplishments/professional-cert/0U071BZMU6LE" },
  { title: "Frontend ReactJS (Standard)", issuer: "Najot Ta'lim", date: "June 2025" },
  { title: "IELTS Academic · Overall Band 7.0 (CEFR C1)", issuer: "British Council / IDP", date: "July 2023" },
  { title: "Five Million AI Leaders", issuer: "Dubai Future Foundation × Ministry of Digital Technologies of Uzbekistan", date: "March 2026", url: "https://omp.aistudy.uz/certificate?id=e091401b-4486-47f1-3657-08de85ba2bc4" },
];
