import React from "react";
import { ButtonSecundario } from "./Button";

function Introducao() {
  return (
    <div className="w-full  grid grid-cols-2">
      {/* Coluna Esquerda */}
      <div className="h-185 pl-8 flex flex-col gap-4 justify-evenly">
        <div className="flex flex-col gap-4">
          <span className="bg-[#171A30] text-[#A6ADFF] rounded-2xl w-62 h-7.5 py-1.5 text-[14px] font-mono text-center">
            ● DISPONIVEL PARA NOVOS PROJETOS
          </span>
          <p className="text-[17px] text-[#A1A4B6] font-mono px-1">OLÁ, EU SOU O LUIZ DELILA</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-[inter] text-8xl ">
            Do primeiro pixel à <span className="text-[#A6ADFF]">última linha</span>.
          </h1>
          <span className="font-[inter] text-[#A1A4B6] ">
            Transformo ideias em experiências digitais. Design com propósito, desenvolvimento com cuidado.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ButtonSecundario>Explorar Projetos</ButtonSecundario>{" "}
          <span className="font-[inter] text-[#A1A4B6] text-[17px]">um pouco sobre mim</span>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="min-h-105 lg:h-185 px-6 lg:pr-8 flex justify-center items-center">
        <div className="w-full max-w-92 rounded-2xl bg-[#11131F]/90 border border-[#23273D] overflow-hidden shadow-2xl font-mono">
          <div className="relative flex items-center px-5 py-3.5 bg-[#191D30] border-b border-[#23273D]">
            {/* 3 Bolinhas de Controle */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B93B8]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#525875]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3F59]"></span>
            </div>

            <span className="mx-auto pr-8 text-xs text-[#A1A4B6]">portfolio.jsx</span>
          </div>

          <div className="p-6 flex flex-col justify-between">
            <ul className="flex flex-col gap-3.5 text-sm text-[#D1D5DB]">
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">01</span>
                <span>const developer = {"{"}</span>
              </li>
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">02</span>
                <span className="pl-4">foco: "experiências",</span>
              </li>
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">03</span>
                <span className="pl-4">stack: ["React", "JS"],</span>
              </li>
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">04</span>
                <span className="pl-4">atenção: "aos detalhes",</span>
              </li>
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">05</span>
                <span className="pl-4">café: true</span>
              </li>
              <li className="flex gap-5">
                <span className="text-[#525875] select-none">06</span>
                <span>{"}"};</span>
              </li>
            </ul>

            <hr className="border-t border-[#23273D] my-5" />

            <div className="flex items-center gap-2.5 text-[11px] tracking-wider text-[#A1A4B6]">
              <span className="w-2 h-2 rounded-full bg-[#A6ADFF]"></span>
              <span>IDEIAS EM CONSTANTE CONSTRUÇÃO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé da Introdução*/}
      <div className="col-span-full w-full h-22 px-8 flex justify-between items-center  text-[14px] font-mono text-[#A1A4B6]">
        <span>BASEADO NO BRASIL / CONECTADO AO MUNDO</span>
        <span>ROLE PARA EXPLORAR</span>
      </div>
    </div>
  );
}

export default Introducao;
