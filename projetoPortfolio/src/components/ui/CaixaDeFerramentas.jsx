import React from "react";

const tecnologias = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git", "Figma"];

function CaixaDeFerramentas() {
  // Duplicamos a lista para o loop infinito ficar contínuo sem buracos
  const itensSlide = [...tecnologias, ...tecnologias];

  return (
    <section className="w-full bg-[#0E101A] border-y border-[#1E2235] py-5 px-6 sm:px-8">
      {/* Div Pai (Container) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
        {/* Div 1: Texto fixo à esquerda */}
        <div className="shrink-0">
          <span className="font-mono text-xs tracking-wider uppercase text-[#A1A4B6]">MINHA CAIXA DE FERRAMENTAS</span>
        </div>

        {/* Div 2: Janela do slide à direita com lista de <li> */}
        <div className="relative w-full flex-1 overflow-hidden group-marquee">
          {/* Trilho animado */}
          <div className="animate-slide-direita">
            <ul className="flex items-center gap-10 pr-10">
              {itensSlide.map((tech, index) => (
                <li key={`${tech}-${index}`} className="text-base sm:text-lg font-sans text-[#E2E6F3] whitespace-nowrap select-none">
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
