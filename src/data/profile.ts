export const profile = {
  name: "Mack Daniel C. Duromal",
  shortName: "Mack Duromal",
  title: "Web Developer",
  tagline: "React.js · Next.js · TypeScript · Tailwind CSS",
  location: "Davao City, Philippines · Open to remote",
  email: "mack.duromal09@gmail.com",
  github: "https://github.com/Mack-Daniel-Duromal",
  linkedin: "https://www.linkedin.com/in/mack-daniel-duromal-277b64233/",
  cv: "/Mack-Duromal-CV.pdf",
  summary:
    "Web Developer with 2+ years of experience building responsive, component-based web applications with React.js, Next.js, TypeScript, and Tailwind CSS.",
  about: [
    "I'm a Web Developer with 2+ years of experience building responsive, component-based web applications with React.js, Next.js, TypeScript, and Tailwind CSS. At Born Digital, I've worked on 8 client projects in banking, payments, fintech, and public voucher schemes.",
    "I integrate REST APIs, build reusable UI with Material UI and shadcn/ui, work with Astro and Payload CMS, and improve technical SEO and page performance. My backend experience includes REST APIs built with Node.js, Express.js, and Firebase, including the full API for an online auction platform.",
    "I also spent time in live chat support, which taught me to think about the user first and to communicate clearly. I use Claude to speed up drafting, debugging, and documentation, and I always review and test the code before it ships.",
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Proficient",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Firebase (Firestore, Cloud Functions)"],
  },
  {
    title: "Familiar",
    items: ["PostgreSQL", "Docker", "Vercel"],
  },
  {
    title: "Data & Forms",
    items: ["TanStack Query", "TanStack Table", "React Hook Form", "Zod"],
  },
  {
    title: "Technical SEO",
    items: ["Structured data", "Sitemaps", "Open Graph", "Canonical tags"],
  },
  {
    title: "UI Libraries",
    items: ["Material UI (MUI)", "shadcn/ui"],
  },
  {
    title: "Astro & CMS",
    items: ["Astro", "Payload CMS"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "pnpm",
      "npm",
      "Chrome DevTools",
      "Postman",
      "Jira",
      "Claude",
    ],
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Born Digital",
    role: "Web Developer",
    period: "May 2025 – November 2026",
    points: [
      "Developed and maintained frontends for 8 client projects in banking, payments, fintech, and public voucher schemes using React.js, Next.js, TypeScript, and Tailwind CSS, including CMS-driven page templates and a live share price component for a bank's public website.",
      "Built the bidder portal for an online auction platform, with live countdowns, reserve-price status, bid validation, and a secure JWT refresh flow with server-side rendering.",
      "Implemented the auction platform's REST API with Node.js and Express.js on Firebase Cloud Functions, covering auction creation, bidding, scheduled winner selection, PDF bid-history reports, and CMS webhook sync.",
      "Served as sole frontend developer for a tree-planting voucher scheme's customer, merchant, and admin apps, delivering QR voucher scanning, role-based admin access, audit trails, and Excel and CSV exports; also added invoicing with PDF export to a gym voucher scheme's apps.",
      "Delivered admin features for a tournament app, such as drag-and-drop matchups and kiosk mode, running its frontend, backend, and database with Docker Compose.",
      "Improved a fintech site's technical SEO and performance with breadcrumb structured data, heading hierarchy fixes, sitemap updates, and forced-reflow and image fixes.",
      "Refined the UI and tested the same site's 300+ page Astro and Payload CMS rebuild, including a Maltese version and CMS-managed Open Graph and canonical tags.",
      "Deployed an app to Vercel via GitHub integration and monitored deployment logs.",
      "Used Claude to speed up code drafting, debugging, and documentation, including migrating an internal app to PostgreSQL, then reviewed and tested the generated code. Reviewed pull requests and followed team coding standards.",
    ],
  },
  {
    company: "Nadela Business Center",
    role: "Live Chat Support",
    period: "November 2023 – May 2025",
    points: [
      "Handled approximately 100 customer inquiries daily through live chat, maintaining a 95% satisfaction rate while managing multiple conversations at once.",
      "Explained technical and account issues in clear terms to non-technical users.",
      "Partnered with other teams to improve support scripts and resolve recurring issues.",
    ],
  },
  {
    company: "Freelance – ASTC Dubai",
    role: "Frontend Developer",
    period: "October 2022 – November 2023",
    points: [
      "Built the ASTC Dubai website using React.js, TypeScript, and Material UI.",
      "Designed and implemented responsive layouts for desktop, tablet, and mobile.",
      "Organized the code into modular, reusable components for easier updates.",
      "Tested the site across screen sizes and resolved layout and responsiveness issues.",
    ],
  },
];

export const education = {
  degree: "Associate of Computer Technology",
  school: "STI College of Davao",
  period: "June 2019 – August 2021",
};

export const languages = ["English", "Filipino"];
