export const profile = {
  name: "Mack Daniel C. Duromal",
  shortName: "Mack Duromal",
  title: "Junior Frontend Developer",
  tagline: "React.js · Next.js · Astro + Payload CMS",
  location: "Davao City, Philippines · Open to remote",
  email: "mack.duromal09@gmail.com",
  github: "https://github.com/Mack-Daniel-Duromal",
  linkedin: "https://www.linkedin.com/in/mack-daniel-duromal-277b64233/",
  cv: "/Mack-Duromal-CV.pdf",
  summary:
    "Junior Frontend Developer building modern, responsive web applications with React, Next.js, TypeScript, Astro, and Payload CMS.",
  about: [
    "I'm a Junior Frontend Developer with 1 year of professional experience building modern, responsive web applications. I work mainly with React, Next.js, and TypeScript, and I also build content-managed websites with Astro and Payload CMS.",
    "I enjoy turning designs and requirements into clean, reusable components, and I care about performance, accessibility, and how a site feels on every device. I've worked on marketing websites, customer and admin portals, and real-time web apps.",
    "I also spent two years in live chat support, which taught me to think about the user first and to communicate clearly. I learn fast, take feedback well, and use AI tools like Claude to understand code and debug faster, always reviewing what it suggests.",
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router)",
      "Vite",
      "React Router",
      "TanStack Query & Table",
      "React Hook Form + Zod",
    ],
  },
  {
    title: "Astro + Payload",
    items: [
      "Astro",
      "Payload CMS (collections, blocks, globals)",
      "Lexical rich text",
    ],
  },
  {
    title: "Styling & UI",
    items: [
      "Tailwind CSS",
      "shadcn/ui (Radix)",
      "Material-UI",
      "Responsive design",
      "Accessibility basics",
    ],
  },
  {
    title: "Backend (basic)",
    items: [
      "Node.js",
      "Express.js",
      "Firebase (Auth, Firestore, Functions)",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "pnpm / npm", "Vercel", "Claude (AI assistant)"],
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
    company: "Webee Ltd.",
    role: "Web Developer",
    period: "2025 – 2026",
    points: [
      "Developed responsive and interactive web applications using React.js, Next.js, and TypeScript.",
      "Translated UI/UX designs into polished, mobile-friendly interfaces that work across browsers and devices.",
      "Built content-managed websites with Astro and Payload CMS, including reusable content blocks and SEO features.",
      "Improved website performance, loading speed, and SEO for a better user experience.",
    ],
  },
  {
    company: "Nadela Business Center",
    role: "Live Chat Support",
    period: "2023 – 2025",
    points: [
      "Handled about 100 customer chats per day with a 95% satisfaction rate, including Nike customers.",
      "Worked with cross-functional teams to improve support scripts and fix recurring issues.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2022 – 2023",
    points: [
      "Built responsive UI components for small client projects with React, TypeScript, and Material-UI.",
      "Applied mobile-first, responsive design so pages work well on desktop, tablet, and mobile.",
      "Created reusable components that sped up work on later client projects.",
    ],
  },
];

export const education = {
  degree: "Associate of Computer Technology",
  school: "STI College of Davao",
  period: "2019 – 2021",
};
