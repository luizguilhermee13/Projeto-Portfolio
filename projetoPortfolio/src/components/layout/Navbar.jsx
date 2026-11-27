import Button from "@/components/ui/Button";

function Navbar() {
  const irParaContato = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full border-b border-line-soft bg-page/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-5 lg:gap-10">
          <a href="#inicio" className="shrink-0 font-sans text-xl font-semibold text-ink sm:text-2xl">
            Luiz Delila <span className="text-accent">.</span>
          </a>

          <span className="hidden font-mono text-[11px] text-muted sm:block lg:text-xs">
            DESENVOLVEDOR FRONT-END
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-6 text-sm text-muted md:flex lg:gap-8">
            <a href="#projetos" className="transition-colors hover:text-ink">
              Projetos
            </a>
            <a href="#sobre" className="transition-colors hover:text-ink">
              Sobre
            </a>
            <a href="#processo" className="transition-colors hover:text-ink">
              Roadmap
            </a>
          </div>

          <Button className="px-4" onClick={irParaContato}>
            Vamos Conversar
          </Button>
        </div>

        <div className="order-3 flex w-full items-center justify-between border-t border-line-soft pt-3 text-xs text-muted md:hidden">
          <a href="#projetos" className="transition-colors hover:text-ink">
            Projetos
          </a>
          <a href="#sobre" className="transition-colors hover:text-ink">
            Sobre
          </a>
          <a href="#processo" className="transition-colors hover:text-ink">
            Roadmap
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
