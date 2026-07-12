import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

const channels = [
  {
    label: "Email",
    value: "vpoorna068@gmail.com",
    href: "mailto:vpoorna068@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 63046 40044",
    href: "tel:+916304640044",
  },
  {
    label: "LinkedIn",
    value: "poorna-chandrika-velikinti",
    href: "http://www.linkedin.com/in/poorna-chandrika-velikinti-599125223",
  },
  {
    label: "GitHub",
    value: "github.com/poorna068",
    href: "https://github.com/poorna068/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel label="CONTACT" />
        </Reveal>
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-text sm:text-4xl">
            Let&apos;s work together
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
            Available for immediate joining — open to hybrid and remote
            roles. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="panel flex items-center justify-between gap-4 p-5 transition hover:border-accent-blue"
              >
                <div>
                  <p className="text-xs text-text-muted">{c.label}</p>
                  <p className="mt-1 truncate text-sm text-text sm:text-base">
                    {c.value}
                  </p>
                </div>
                <span className="text-text-muted">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
