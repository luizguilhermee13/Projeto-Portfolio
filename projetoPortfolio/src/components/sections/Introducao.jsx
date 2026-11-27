import { ButtonSecundario } from "@/components/ui/Button";

function Introducao() {
  const irParaProjetos = () => {
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className="flex min-h-[560px] flex-col justify-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[700px] lg:py-24">
        <div className="flex flex-col items-start gap-4">
          <span className="w-fit max-w-full rounded-full bg-[#171A30] px-4 py-2 text-center font-mono text-xs text-accent sm:text-sm">
            ● DISPONIVEL PARA NOVOS PROJETOS
          </span>
          <p className="px-1 font-mono text-sm text-muted sm:text-base">OLÁ, EU SOU O LUIZ DELILA</p>
        </div>

        <div className="flex max-w-3xl flex-col gap-5">
          <h1 className="font-sans text-5xl leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
            Do primeiro pixel à <span className="text-accent">última linha</span>.
          </h1>

          <p className="max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
            Transformo ideias em experiências digitais. Design com propósito, desenvolvimento com cuidado.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <ButtonSecundario onClick={irParaProjetos}>Explorar Projetos</ButtonSecundario>
          <span className="font-sans text-sm text-muted sm:text-base">um pouco sobre mim</span>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 pb-16 sm:px-8 lg:min-h-[700px] lg:py-24">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface/90 font-mono shadow-2xl">
          <div className="relative flex items-center border-b border-line bg-surface-raised px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8B93B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#525875]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A3F59]" />
            </div>

            <span className="mx-auto pr-8 text-xs text-muted">portfolio.jsx</span>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-6">
            <ul className="flex flex-col gap-3.5 text-xs text-[#D1D5DB] sm:text-sm">
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">01</span>
                <span>const developer = {"{"}</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">02</span>
                <span className="pl-2 sm:pl-4">foco: "experiências",</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">03</span>
                <span className="pl-2 sm:pl-4">stack: ["React", "JS"],</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">04</span>
                <span className="pl-2 sm:pl-4">atenção: "aos detalhes",</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">05</span>
                <span className="pl-2 sm:pl-4">café: true</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <span className="select-none text-[#525875]">06</span>
                <span>{"}"};</span>
              </li>
            </ul>

            <hr className="my-5 border-line" />

            <div className="flex items-center gap-2.5 text-[10px] tracking-wider text-muted sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>IDEIAS EM CONSTANTE CONSTRUÇÃO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full grid w-full grid-cols-1 gap-2 px-5 pb-8 pt-4 font-mono text-[11px] text-muted sm:grid-cols-2 sm:px-8 sm:text-xs">
        <span>BASEADO NO BRASIL / CONECTADO AO MUNDO</span>
        <span className="sm:text-right">ROLE PARA EXPLORAR</span>
      </div>
    </section>
  );
}

export default Introducao;
