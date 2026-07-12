export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "State Management",
    items: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "React Native Paper",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    category: "Performance",
    items: [
      "Lazy Loading",
      "Code Splitting",
      "Bundle Size Reduction",
      "Memoization",
    ],
  },
  {
    category: "Testing",
    items: [
      "React Testing Library (RTL)",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "SQLite",
      "REST API Integration",
      "Firebase (FCM, Auth, Firestore)",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Agile/Scrum",
      "VS Code",
      "Android Studio",
      "Google OAuth",
    ],
  },
];
