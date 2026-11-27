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
    <section id="processo" className="w-full bg-black text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">03 / DO BRIEF AO BROWSER</span>
          <h2 className="max-w-5xl font-sans text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Um bom resultado começa com boas perguntas.
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {etapas.map((etapa) => (
            <div key={etapa.numero} className="flex flex-col gap-3 border-t border-line pt-6">
              <div className="flex items-baseline gap-4">
                <span className="shrink-0 font-mono text-xs text-accent-strong">{etapa.numero}</span>
                <h3 className="font-sans text-lg font-medium text-ink">{etapa.titulo}</h3>
              </div>

              <p className="pl-8 font-sans text-sm leading-relaxed text-subtle">{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contato" className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="flex w-full flex-col justify-between gap-12 rounded-3xl bg-accent p-6 text-page sm:p-10 lg:p-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-line">TEM UMA IDEIA EM MENTE?</span>

            <div className="flex items-start justify-between gap-5 sm:gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-4xl font-medium tracking-tight text-page sm:text-6xl">Vamos tirar do papel.</h3>
                <p className="font-sans text-base text-line sm:text-lg">Um projeto, uma colaboração ou uma boa conversa.</p>
              </div>

              <svg
                className="mt-1 h-9 w-9 shrink-0 text-page sm:h-14 sm:w-14"
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

          <div className="flex flex-col justify-between gap-6 pt-2 md:flex-row md:items-center">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <a
                href="mailto:luizguidelila@gmail.com"
                className="group inline-flex min-h-12 w-full items-center justify-between gap-6 rounded-full bg-[#0B0D17] px-6 text-sm text-ink transition-colors hover:bg-[#15192B] sm:w-auto sm:min-w-52"
              >
                <span>Vamos conversar</span>
                <svg
                  className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              </a>

              <span className="break-all font-mono text-xs text-line">luizguidelila@gmail.com</span>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-widest text-line md:text-right">
              O PRÓXIMO PROJETO PODE SER O SEU.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProcesso;
