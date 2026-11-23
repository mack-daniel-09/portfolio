// ---------------------------------------------------------------------------
// Portfolio projects
//
// These are placeholder (mock) projects. Replace each entry with a real project
// when it's built:
//   1. Update name, description, features, and stack.
//   2. Change status to "Live" (or remove the badge by setting it to undefined).
//   3. Add liveUrl / repoUrl so the buttons appear.
//   4. Optional: add a screenshot to /public/projects/ and set `image`
//      (e.g. image: "/projects/job-tracker.png") to replace the gradient tile.
// ---------------------------------------------------------------------------

export type ProjectStatus = "Live" | "In progress" | "Planned";

export type Project = {
  name: string;
  description: string;
  features: string[];
  stack: string[];
  status?: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  /** Tailwind gradient classes used for the tile when there's no image. */
  accent: string;
  /** Short label shown on the gradient tile. */
  icon: string;
};

export const projects: Project[] = [
  {
    name: "Job Application Tracker",
    description:
      "A personal job-hunt dashboard to track every application from wishlist to offer, with interview notes and progress stats.",
    features: [
      "Kanban board: Wishlist, Applied, Interview, Offer, Rejected",
      "Search, filters, and a statistics dashboard",
      "Interview schedules, notes, and resume uploads",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Auth.js"],
    status: "In progress",
    accent: "from-indigo-500 to-blue-700",
    icon: "JT",
  },
  {
    name: "E-Commerce Store + Admin",
    description:
      "An online store with a customer storefront and an admin dashboard for products, orders, and sales.",
    features: [
      "Product search, filters, cart, wishlist, and checkout",
      "Stripe payments in test mode and order history",
      "Admin: manage products, categories, orders, and sales stats",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe", "Cloudinary"],
    status: "In progress",
    accent: "from-emerald-500 to-teal-700",
    icon: "EC",
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance app to log income and expenses, set monthly budgets, and see where the money goes.",
    features: [
      "Categories, monthly budgets, and date filters",
      "Charts and monthly spending reports",
      "Export transactions to CSV",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Prisma", "PostgreSQL"],
    status: "In progress",
    accent: "from-amber-500 to-orange-600",
    icon: "$",
  },
  {
    name: "Headless CMS Blog",
    description:
      "A fast blog where editors write and publish articles in Payload CMS and the site updates automatically.",
    features: [
      "Featured posts, categories, tags, and search",
      "Drafts, previews, and a rich text editor",
      "SEO metadata, Open Graph images, and sitemap",
    ],
    stack: ["Next.js", "Payload CMS", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    status: "In progress",
    accent: "from-rose-500 to-pink-700",
    icon: "CMS",
  },
  {
    name: "Live Chat Support Widget",
    description:
      "A chat bubble customers use on any website, plus a dashboard where support agents reply in real time.",
    features: [
      "Real-time messages and typing indicator",
      "Agent queue, saved quick replies, and chat ratings",
      "Agent stats: chats handled and average rating",
    ],
    stack: ["Next.js", "TypeScript", "Supabase Realtime", "Zustand", "Tailwind CSS"],
    status: "In progress",
    accent: "from-sky-500 to-cyan-700",
    icon: "Chat",
  },
  {
    name: "AI Reply Assistant",
    description:
      "A helper for support agents: paste a customer message and get a polite draft reply in the tone you choose.",
    features: [
      "Tone options: friendly, formal, or apology",
      "Streaming AI responses with one-click copy",
      "History of recent drafts",
    ],
    stack: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS"],
    status: "In progress",
    accent: "from-violet-500 to-purple-700",
    icon: "AI",
  },
];
