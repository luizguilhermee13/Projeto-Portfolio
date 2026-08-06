document.addEventListener("DOMContentLoaded", function cardsPortfolio() {
  const cardExperiencias = document.getElementById("containerExperiencias");

  const cardInfo = [
    {
      id: 1,
      titulo: "Cafeteria Goument",
      descricao:
        "Este projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) no ano de 2024, para o curso superior de Sistemas de Informação",
      subtitulo: "Projeto Pessoal",
    },
    {
      id: 2,
      titulo: "Pokedex Api",
      descricao:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa atque veniam,",
      subtitulo: "Projeto Pessoal",
    },
    {
      id: 3,
      titulo: "Bikcraft",
      descricao:
        "O Bikcraft é um site responsivo desenvolvido para uma empresa fictícia de bicicletas elétricas e seguros personalizáveis.,",
      subtitulo: "Projeto Pessoal",
    },
  ];

  const CardsPage = cardInfo
    .map((item) => {
      return `
   <div class="cardExperiencias">
      <div class="texto">
        <span>${item.titulo}</span>
        <p>${item.descricao}</p>
      </div>
      <div class="habilidades">
        <span>${item.subtitulo}</span>
        <ul>
         <li>HTML</li>
         <li>CSS3</li>
         <li>JavaScript</li>
         <li>GitHub</li>
        </ul>
        
      </div>
     
    </div>
    `;
    })
    .join("");

  cardExperiencias.innerHTML = CardsPage;
});

/*  
<div class="cardExperiencias">
              <div class="texto">
                <span>Cafeteria Goument</span>
                <p>
                  Este projeto foi desenvolvido como Trabalho de Conclusão de
                  Curso (TCC) no ano de 2024, para o curso superior de Sistemas
                  de Informação
                </p>
              </div>
              <div class="habilidades">
                <span>Projeto Pessoal</span>
                <ul>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
*/
