import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const facts: [string, string][] = [
  ["Location", "Hyderabad, Telangana"],
  ["Experience", "3+ years"],
  ["Availability", "Immediate · onsite / hybrid / remote"],
  ["Focus", "Offline-first, performant, accessible apps"],
];

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel label="ABOUT" />
        </Reveal>

        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-text sm:text-4xl">
            About
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <p className="text-base leading-8 text-text-muted sm:text-lg">
              I&apos;m a results-driven frontend developer building
              production-grade, accessible applications with{" "}
              <span className="text-text">React.js</span>,{" "}
              <span className="text-text">React Native</span> and{" "}
              <span className="text-text">Next.js</span>. Over the last three
              years I&apos;ve shipped three cross-platform applications used
              by 50,000+ people across EdTech and ecommerce — architecting
              offline-first sync layers, real-time analytics dashboards, and
              CI/CD pipelines that shortened release cycles by 40%.
            </p>
            <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
              I was promoted within nine months at WML IT Solutions for
              technical leadership and code quality, mentoring junior
              developers and driving a 40% lift in platform engagement. I care
              about performance budgets, test coverage, and interfaces that
              hold up in low-connectivity, real-world conditions — not just on
              a fast office Wi-Fi.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="panel divide-y divide-border p-5">
              <dl>
                {facts.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="text-xs text-text-muted">{key}</dt>
                    <dd className="text-sm text-text sm:text-base">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
