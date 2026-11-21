import React from "react";
import Button from "./Button";
import Cards from "./Cards";

function ProjetosFeitos() {
  return (
    <section className="flex flex-col gap-6 p-8">
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[12px] text-[#A6ADFF]">01 / PROJETOS SELECIONADOS</span>
        <div className="flex justify-between items-center">
          <h2 className="text-5xl text-[inter]">Ideias que viraram interface.</h2>
          <span className="text-[14px] font-mono text-[#A1A4B6]">EXPLORAÇÕES & PROJETOS CONCEITO</span>
        </div>
      </div>
      <Cards />
      <div className="flex justify-between items-center">
        <span className="text-[14px] font-mono text-[#A1A4B6]">CADA PROJETO, UMA NOVA FORMA DE RESOLVER</span>
        <Button>Ver mais Projetos</Button>
      </div>
    </section>
  );
}

export default ProjetosFeitos;
