import React from "react";

function Footer() {
  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full text-[#F2F3FA] bg-black">
      <div className="w-full px-6 sm:px-8 py-8 border-t border-[#1C2033] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-lg font-semibold text-[#F2F3FA]">
            Luiz Guilherme<span className="text-[#A6ADFF]">.</span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E738B]">FEITO COM INTENÇÃO. © 2026</span>
        </div>

        <nav className="flex items-center gap-6 font-mono text-xs text-[#A1A4B6]">
          <a
            href="https://github.com/luizguilhermee13"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2F3FA] transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-delila-56a38a203/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F2F3FA] transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <button
            type="button"
            onClick={voltarAoTopo}
            className="hover:text-[#F2F3FA] transition-colors inline-flex items-center gap-1 cursor-pointer"
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
