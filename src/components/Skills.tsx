import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel label="SKILLS" />
        </Reveal>
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-text sm:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="panel h-full p-5">
                <p className="mb-3 font-mono text-xs text-accent-blue">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
