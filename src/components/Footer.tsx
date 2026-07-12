export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-text-muted sm:flex-row sm:px-6">
        <p>© {year} Poorna Chandrika Velikinti</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/poorna068/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text"
          >
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/poorna-chandrika-velikinti-599125223"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text"
          >
            LinkedIn
          </a>
          <a href="mailto:vpoorna068@gmail.com" className="hover:text-text">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
