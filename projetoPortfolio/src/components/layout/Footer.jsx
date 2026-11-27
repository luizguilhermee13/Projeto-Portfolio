function Footer() {
  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full border-t border-line-soft bg-black text-ink">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
          <span className="font-sans text-lg font-semibold text-ink">
            Luiz Guilherme<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
            FEITO COM INTENÇÃO. © 2026
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-muted">
          <a
            href="https://github.com/luizguilhermee13"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-ink"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/luiz-delila-56a38a203/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-ink"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <button
            type="button"
            onClick={voltarAoTopo}
            className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-ink"
          >
            <span>Voltar ao topo</span>
            <span>↑</span>
          </button>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
