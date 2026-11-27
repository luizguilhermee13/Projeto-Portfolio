const tecnologias = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git", "Figma"];

function CaixaDeFerramentas() {
  const itensSlide = [...tecnologias, ...tecnologias];

  return (
    <section className="w-full border-y border-line-soft bg-[#0E101A] py-5">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-5 sm:px-8 md:flex-row md:items-center md:gap-10">
        <div className="shrink-0">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">MINHA CAIXA DE FERRAMENTAS</span>
        </div>

        <div className="group-marquee relative w-full flex-1 overflow-hidden">
          <div className="animate-marquee">
            <ul className="flex items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
              {itensSlide.map((tech, index) => (
                <li
                  key={`${tech}-${index}`}
                  className="select-none whitespace-nowrap font-sans text-base text-[#E2E6F3] sm:text-lg"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaixaDeFerramentas;
