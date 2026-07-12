import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const roles = [
  {
    range: "Jan 2026 — Present",
    title: "Freelance Frontend Developer",
    org: "Independent",
    points: [
      "Working directly with clients to build responsive web and mobile apps with React.js, React Native and Next.js, delivering end-to-end solutions across domains.",
    ],
  },
  {
    range: "Sep 2023 — Jan 2026",
    title: "Software Engineer (promoted in 9 months)",
    org: "WML IT Solutions, Hyderabad",
    points: [
      "Led end-to-end development of 3 production apps serving 50,000+ active users across EdTech and ecommerce, contributing to 40% growth in engagement.",
      "Architected offline-first infrastructure with SQLite and background sync, cutting content-access failures by ~90% and lifting reliability to 99.5%.",
      "Shipped FCM push notifications with deep-link navigation (35%+ CTR) and Google OAuth for domain-restricted authentication.",
      "Built a multi-level real-time analytics dashboard across 15+ metrics using React Native and REST APIs.",
      "Improved First Contentful Paint by 30%+ and cut bundle size by 30% via Lighthouse audits, lazy loading and code splitting.",
      "Set up GitHub Actions CI/CD, reducing release cycle time by 40%; mentored 3 junior developers and cut PR review time by 30%.",
    ],
  },
  {
    range: "Sep 2021 — May 2022",
    title: "Design Engineer",
    org: "Eavetop Softtech, Bangalore",
    points: [
      "Transitioned from Xactimate construction estimation into frontend development, shipping production-ready HTML/CSS/JS components within the first month.",
      "Led internal training on web fundamentals and responsive design.",
    ],
  },
  {
    range: "Jun 2022 — Aug 2023",
    title: "Career Development Break",
    org: "Self-directed",
    points: [
      "Deepened expertise in modern frontend tooling at JSpiders, completed self-directed projects and contributed to open source ahead of a senior-track role.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel label="EXPERIENCE" />
        </Reveal>
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-text sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-10 border-l border-border pl-6">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 80}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent-blue" />
                <p className="font-mono text-xs text-text-muted">
                  {role.range}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text sm:text-xl">
                  {role.title}
                </h3>
                <p className="font-mono text-sm text-accent-blue">
                  {role.org}
                </p>
                <ul className="mt-3 space-y-2">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-6 text-text-muted sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
