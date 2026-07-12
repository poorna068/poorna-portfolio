const stats = [
  { value: "50,000+", label: "active users served" },
  { value: "99.5%", label: "app reliability" },
  { value: "3+ yrs", label: "production experience" },
  { value: "40%", label: "faster release cycles" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center border-b border-border pt-20"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="font-mono text-sm text-accent-blue">
          Hi, I&apos;m Poorna Chandrika 👋
        </p>

        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] text-text sm:text-5xl lg:text-6xl">
          I build fast, accessible{" "}
          <span className="text-accent">apps that hold up</span> in the real
          world.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
          Frontend Developer specializing in{" "}
          <span className="text-text">React.js</span>,{" "}
          <span className="text-text">React Native</span> and{" "}
          <span className="text-text">Next.js</span>. Three years of
          shipping production apps for 50,000+ users across EdTech and
          ecommerce — offline-first architecture, real-time analytics, and
          CI/CD pipelines included.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View projects →
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
          <a href="/Poorna_chandrika_Frontend_developer.pdf" download className="btn-ghost">
            Download résumé ↓
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
