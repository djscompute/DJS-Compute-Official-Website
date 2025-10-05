export const projects = [
  {
    id: 1,
    title: "SVKM Hall Booking System",
    description:
      "Engineered a scalable multi-tenant SaaS deployed across SVKM institutes in Maharashtra, handling complex hall/resource allocation with automated conflict resolution and hierarchical RBAC. Includes real-time sync and BI dashboards for operational visibility.",
    link: "https://halls.svkm.ac.in/",
    images: ["/projects/svkmhall1.png", "/projects/svkmhall2.png"],
    bullets: [
      "Multi-tenant architecture with institute-level isolation",
      "Automated conflict resolution for overlapping schedules",
      "Hierarchical RBAC: admins, managers, staff, end-users",
      "BI dashboards with Excel-like dynamic filtering",
      "Automated tax workflows and edge-case validations",
      "Real-time synchronization across campuses",
    ],
  },
  {
    id: 2,
    title: "Recrutr: The AI Recruiting Copilot",
    description:
      "AI copilot for hiring: conversational workflows, semantic candidate sourcing with pgvector + embeddings, transparent rankings with evidence, automated pipeline nudges, and full auditability.",
    link: "https://recrutr.aryanrajpurkar.tech",
    images: ["/projects/recrutr1.png", "/projects/recrutr2.png"],
    bullets: [
      "Conversational AI interface for end-to-end hiring",
      "Semantic search powered by pgvector + OpenAI embeddings",
      "Evidence-backed candidate explanations and pipeline automation",
      "Complete audit trail with PII redaction",
      "Next.js 14, Supabase (pgvector), Vercel AI SDK",
      "Configurable GPT-4 models and guardrails",
    ],
  },
  {
    id: 3,
    title: "Scholr: AI Financial Aid Discovery",
    description:
      "Personalized financial aid discovery: ML-driven matches with probability scores, AI application support and advising, smart docs, interview prep, and Stripe-powered subscriptions.",
    link: "https://scholr.aryanrajpurkar.tech",
    images: ["/projects/scholr1.png", "/projects/scholr2.png"],
    bullets: [
      "ML-driven matches with probability scores and prioritization",
      "AI essay review, smart doc generator, and interview prep",
      "Freemium to premium with Stripe subscriptions",
      "Vite + React, TypeScript, Tailwind + shadcn-ui",
      "Actionable dashboard with deadlines intelligence",
      "Exportable application tracker and document vault",
    ],
  },
];
