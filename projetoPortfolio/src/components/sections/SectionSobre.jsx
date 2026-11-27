import Button from "@/components/ui/Button";

const pilares = [
  {
    numero: "01",
    titulo: "Interfaces com intenção",
    descricao: "Cada escolha visual tem um porquê.",
  },
  {
    numero: "02",
    titulo: "Detalhes que importam",
    descricao: "Do comportamento responsivo à acessibilidade.",
  },
  {
    numero: "03",
    titulo: "Aprendizado contínuo",
    descricao: "Sempre há uma forma melhor de construir.",
  },
];

function SectionSobre() {
  return (
    <section id="sobre" className="w-full bg-surface-soft">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[620px] lg:py-24">
          <span className="font-mono text-sm text-accent">02 / ALÉM DA TELA</span>

          <h2 className="max-w-2xl font-sans text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-6xl">
            Curiosidade no olhar. Cuidado na entrega.
          </h2>

          <span className="font-sans text-sm text-muted sm:text-base">PENSAR. CRIAR. TESTAR. EVOLUIR.</span>
        </div>

        <div className="flex flex-col justify-center gap-10 border-t border-line px-5 py-16 text-ink sm:px-8 sm:py-20 lg:min-h-[620px] lg:border-l lg:border-t-0 lg:py-24">
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted sm:text-xl">
            Sou Luiz Guilherme, desenvolvedor front-end. Gosto de conectar design e tecnologia para criar experiências simples, acessíveis e
            com personalidade.
          </p>

          <div className="w-full max-w-2xl border-t border-line">
            {pilares.map((item) => (
              <div key={item.numero} className="flex items-baseline gap-5 border-b border-line py-6 sm:gap-8">
                <span className="shrink-0 font-mono text-sm text-accent-strong">{item.numero}</span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-lg font-medium text-ink sm:text-xl">{item.titulo}</h3>
                  <p className="font-sans text-sm text-subtle sm:text-base">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start lg:justify-end">
            <Button className="w-full sm:w-auto">Mais Sobre Mim</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
