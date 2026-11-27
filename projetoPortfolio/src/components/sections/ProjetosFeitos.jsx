import Button from "@/components/ui/Button";
import Cards from "@/components/projects/Cards";

function ProjetosFeitos() {
  return (
    <section id="projetos" className="w-full bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm text-accent">01 / PROJETOS SELECIONADOS</span>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-4xl font-sans text-4xl leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Ideias que viraram interface.
            </h2>

            <span className="font-mono text-xs text-muted sm:text-sm lg:text-right">
              EXPLORAÇÕES & PROJETOS CONCEITO
            </span>
          </div>
        </div>

        <Cards />

        <div className="flex flex-col gap-5 border-t border-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs text-muted sm:text-sm">CADA PROJETO, UMA NOVA FORMA DE RESOLVER</span>
          <Button className="w-full sm:w-auto">Ver mais Projetos</Button>
        </div>
      </div>
    </section>
  );
}

export default ProjetosFeitos;
