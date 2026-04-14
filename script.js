// Dados de Instrumentos Musicais
const instrumentos = [
  { nome: "Guitarra", imagem: "https://via.placeholder.com/300x200?text=Guitarra" },
  { nome: "Piano", imagem: "https://via.placeholder.com/300x200?text=Piano" },
  { nome: "Bateria", imagem: "https://via.placeholder.com/300x200?text=Bateria" },
  { nome: "Violino", imagem: "https://via.placeholder.com/300x200?text=Violino" },
  { nome: "Saxofone", imagem: "https://via.placeholder.com/300x200?text=Saxofone" },
  { nome: "Flauta", imagem: "https://via.placeholder.com/300x200?text=Flauta" }
];

// Função para renderizar os cards de instrumentos
function renderizarCards() {
  const container = document.querySelector(".cards-container");
  instrumentos.forEach(instrumento => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${instrumento.imagem}" alt="Imagem do ${instrumento.nome}" />
      <h3>${instrumento.nome}</h3>
    `;
    container.appendChild(card);
  });
}

// Função para criar o carrossel
function renderizarCarrossel() {
  const container = document.querySelector(".carousel-container");
  instrumentos.forEach(instrumento => {
    const imagem = document.createElement("img");
    imagem.src = instrumento.imagem;
    imagem.alt = `Imagem do ${instrumento.nome}`;
    container.appendChild(imagem);
  });
}

// Função para ajustar o tamanho da fonte globalmente
function ajustarFonte(tamanho) {
  document.documentElement.style.fontSize = `${tamanho}px`;
}

// Inicializando as funções de renderização
document.addEventListener("DOMContentLoaded", () => {
  renderizarCards();
  renderizarCarrossel();
});

// Eventos de teclado para aumentar/diminuir a fonte
document.addEventListener("keydown", (event) => {
  if (event.key === '+') {
    ajustarFonte(18); // Aumenta o tamanho da fonte
  } else if (event.key === '-') {
    ajustarFonte(14); // Diminui o tamanho da fonte
  }
});
