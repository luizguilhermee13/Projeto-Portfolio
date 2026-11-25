import React from "react";

const etapas = [
  {
    numero: "01",
    titulo: "Entender",
    descricao: "Escuto a ideia, exploro o contexto e defino o que realmente precisa ser resolvido.",
  },
  {
    numero: "02",
    titulo: "Construir",
    descricao: "Transformo a direção em uma interface clara e em uma experiência responsiva.",
  },
  {
    numero: "03",
    titulo: "Refinar",
    descricao: "Testo, ajusto os detalhes e preparo cada entrega para o próximo passo.",
  },
];

function SectionProcesso() {
  return (
    <div className="w-full text-[#F2F3FA] bg-black">
      {/* Linha de Cima */}
      <section className="w-full px-6 sm:px-8 pt-20 pb-14">
        <div className="flex flex-col gap-3 mb-12">
          <span className="font-mono text-xs tracking-widest uppercase text-[#A6ADFF]">03 / DO BRIEF AO BROWSER</span>
          <h2 className="font-sans text-3xl sm:text-5xl font-medium tracking-tight text-[#F2F3FA]">
            Um bom resultado começa com boas perguntas.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {etapas.map((etapa) => (
            <div key={etapa.numero} className="border-t border-[#23273D] pt-6 flex flex-col gap-3">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#8B93F5] shrink-0">{etapa.numero}</span>
                <h3 className="font-sans text-lg font-medium text-[#F2F3FA]">{etapa.titulo}</h3>
              </div>

              <p className="font-sans text-sm leading-relaxed text-[#8E93A8] pl-8">{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Linha debaixo */}
      <section className="w-full px-6 sm:px-8 pb-16">
        <div className="w-full rounded-3xl bg-[#A6ADFF] text-[#090A10] p-8 sm:p-12 flex flex-col justify-between gap-12">
          {/* Topo do card: label + título + seta diagonal */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#23273D]">TEM UMA IDEIA EM MENTE?</span>

            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-4xl sm:text-6xl font-medium tracking-tight text-[#090A10]">Vamos tirar do papel.</h3>
                <p className="font-sans text-base sm:text-lg text-[#23273D]">Um projeto, uma colaboração ou uma boa conversa.</p>
              </div>

              <svg
                className="w-10 h-10 sm:w-14 sm:h-14 text-[#090A10] shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          {/* Base do card: botão escuro + e-mail + mensagem à direita */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:seuemail@exemplo.com"
                className="inline-flex items-center justify-between min-w-52.5 h-12 px-6 rounded-full bg-[#0B0D17] text-[#F2F3FA] text-sm font-sans hover:bg-[#15192B] transition-colors group"
              >
                <span>Vamos conversar</span>
                <svg
                  className="w-4 h-4 text-[#A6ADFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <span className="font-mono text-xs text-[#23273D]">seuemail@exemplo.com</span>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-widest text-[#23273D]">O PRÓXIMO PROJETO PODE SER O SEU.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionProcesso;
