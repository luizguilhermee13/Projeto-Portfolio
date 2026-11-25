import Button from "./Button";

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
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#111420] ">
      {/* Coluna Esquerda */}
      <div className="min-h-105 lg:min-h-185 px-6 sm:px-8 lg:pl-8 py-12 flex flex-col gap-6 justify-between lg:justify-evenly">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm text-[#A6ADFF]">02 / ALÉM DA TELA</span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-white">
            Curiosidade no olhar. Cuidado na entrega.
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-sans text-[#A1A4B6] text-base sm:text-[17px]">PENSAR. CRIAR. TESTAR. EVOLUIR.</span>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="min-h-105 lg:min-h-185 px-6 sm:px-8 lg:pr-8 py-12 flex flex-col justify-center gap-10 text-white">
        <p className="font-sans text-lg sm:text-xl leading-relaxed text-[#A1A4B6] max-w-2xl">
          Sou Luiz Guilherme, desenvolvedor front-end. Gosto de conectar design e tecnologia para criar experiências simples, acessíveis e
          com personalidade.
        </p>

        <div className="w-full max-w-2xl border-t border-[#23273D]">
          {pilares.map((item) => (
            <div key={item.numero} className="flex items-baseline gap-6 sm:gap-8 py-6 border-b border-[#23273D]">
              <span className="font-mono text-sm text-[#8B93F5] shrink-0">{item.numero}</span>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-lg sm:text-xl font-medium text-[#F2F3FA]">{item.titulo}</h3>
                <p className="font-sans text-sm sm:text-base text-[#8E93A8]">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full -col-end-1 flex justify-end pr-6 py-4">
        <Button>Mais Sobre Mim</Button>
      </div>
    </section>
  );
}

export default SectionSobre;
