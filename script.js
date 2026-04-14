// Dados sobre os Tipos de Coxinhas
const coxinhas = [
  { nome: "Coxinha de Frango", imagem: "https://images.unsplash.com/photo-1594714568967-b484a97a5f78?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8Q29oaW5oYSBkZSBmcmFuZ28gfGVufDB8fHx8fDE2NzYwMzI2NzI&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Coxinha de Carne", imagem: "https://images.unsplash.com/photo-1605903964136-d0f1b1ac0a52?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8Q29oaW5oYSBkZSBjYXJuZXxlbnwxfHx8fDE2NzYwMzI5Mzk&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Coxinha Vegana", imagem: "https://images.unsplash.com/photo-1597566474644-973d45919b1f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8Q29oaW5oYSBkZSB2ZWdhbmF8ZW58MHx8fHx8fDE2NzYwMzI3NTg&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Coxinha de Queijo", imagem: "https://images.unsplash.com/photo-1597534532652-f292eb7d628d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Nnx8Q29oaW5oYSBkZSBxdWVpam98ZW58MHx8fHx8fDE2NzYwMzI1MTY&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Coxinha de Camarão", imagem: "https://images.unsplash.com/photo-1608505979360-df871568674b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8NXx8Q29oaW5oYSBkZSBjYW1hcsbhxZW58MHx8fHx8fDE2NzYwMzI1NzI&ixlib=rb-1.2.1&q=80&w=400" }
];

// Função para renderizar os cards de tipos de coxinhas
function renderizarCards() {
  const container = document.querySelector(".cards-container");
  coxinhas.forEach(coxinha => {
    const card = document.createElement("div");
    card.classList.add("card");
    card
