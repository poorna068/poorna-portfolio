export interface Project {
  title: string;
  stack: string[];
  description: string[];
  status: "shipped" | "in-progress";
}

export const projects: Project[] = [
  {
    title: "Mera Lunch Box — Delivery Platform",
    stack: ["React Native", "Expo", "TypeScript", "Google Maps", "REST API"],
    description: [
      "Subscription meal platform running 200+ daily school deliveries with live Google Maps tracking.",
      "Route-optimized delivery workflow with live status updates cut missed deliveries by 45%.",
      "Unit-tested delivery logic at 75%+ coverage.",
    ],
    status: "shipped",
  },
  {
    title: "Expo Application Size Analyzer",
    stack: ["Expo", "JavaScript", "AI Integration", "Node.js"],
    description: [
      "Custom Expo dev package with AI-assisted bundle analysis, cutting manual audit time by 80%.",
      "Dependency breakdown surfaces unused packages, unlocking up to 30% bundle size reduction per project.",
    ],
    status: "shipped",
  },
  {
    title: "Lepakshi — Ecommerce Application",
    stack: ["React", "Next.js", "React Native", "TypeScript", "Redux", "FCM", "REST API"],
    description: [
      "Cross-platform commerce app covering 20,000+ SKUs with real-time inventory sync and accessibility compliance.",
      "Google OAuth sign-in with domain-restricted access, blocking 100% of unauthorized account creation.",
      "FCM push notifications with deep-link routing (35%+ engagement); 500+ daily transactions through a secure payment gateway.",
      "90+ performance score via lazy loading, image optimization and code splitting; shipped through CI/CD with automated test gates.",
    ],
    status: "shipped",
  },
  {
    title: "Early Digital — Programming Learning App",
    stack: ["React Native", "Expo", "Redux", "SQLite", "Node.js", "Cypress", "REST API"],
    description: [
      "Structured subject modules and assessments for 10,000+ students, lifting course completion by 25%.",
      "Real-time analytics dashboard across 15+ metrics, tuned with memoization for a <300ms load time.",
      "Offline-first content access via SQLite with background sync — zero-downtime learning in low connectivity.",
      "AI chatbot for student-teacher communication and an auto-submission engine with 100% timeout reliability, backed by 80%+ test coverage.",
    ],
    status: "shipped",
  }
];
