import React from "react";
import projeto1Img from "../../assets/temp.jpg";

function Cards() {
  const conteudoCards = [
    {
      id: 1,
      titulo: "Projeto 1",
      imagem: projeto1Img,
      tecnologias: "teste1 ,teste2",
    },
    {
      id: 2,
      titulo: "Projeto 2",
      imagem: projeto1Img,
      tecnologias: "teste1 ,teste2",
    },
    {
      id: 3,
      titulo: "Projeto 3",
      imagem: projeto1Img,
      tecnologias: "teste1 ,teste2",
    },
    {
      id: 4,
      titulo: "Projeto 4",
      imagem: projeto1Img,
      tecnologias: "teste1 ,teste2",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {conteudoCards.map((card) => (
        <article key={card.id} className="rounded-xl bg-[#11131F] border border-[#23273D] overflow-hidden">
          <img src={card.imagem} alt={card.alt} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{card.titulo}</h3>
            <p className="text-sm text-[#A1A4B6] mt-1">{card.tecnologias}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Cards;
