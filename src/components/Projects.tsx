import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel label="PROJECTS" />
        </Reveal>
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-text sm:text-4xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70}>
              <article className="panel flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-text sm:text-xl">
                  {project.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {project.description.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-6 text-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
