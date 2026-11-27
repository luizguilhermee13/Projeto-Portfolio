import projeto1Img from "@/assets/temp.jpg";

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
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
      {conteudoCards.map((card) => (
        <article
          key={card.id}
          className="overflow-hidden rounded-2xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1"
        >
          <img src={card.imagem} alt={card.titulo} className="aspect-[16/10] w-full object-cover" />

          <div className="p-4 sm:p-5">
            <h3 className="text-lg font-semibold text-ink">{card.titulo}</h3>
            <p className="mt-1 text-sm text-muted">{card.tecnologias}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Cards;
