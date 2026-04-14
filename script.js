// Dados de Instrumentos Musicais
const instrumentos = [
  { nome: "Guitarra", imagem: "https://images.unsplash.com/photo-1527071021696-64d57b443d96?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8Z3uitaXJ8ZW58MHx8fHwxNjcwMDgwNzYw&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Piano", imagem: "https://images.unsplash.com/photo-1563591459-d497f5be6060?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8cGlhbm98ZW58MHx8fHwxNjY5ODg1Njk0&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Bateria", imagem: "https://images.unsplash.com/photo-1530437006256-1587c978c21f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8MTF8fGJhdGVyeXxlbnwxfHx8fDE2NzYwMjI5Njg&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Violino", imagem: "https://images.unsplash.com/photo-1526233295764-8286d7e897a9?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8Vm9saW5vfGVufDB8fHx8fDE2NzYwMjMwNzI&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Saxofone", imagem: "https://images.unsplash.com/photo-1535946903721-93732514be56?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8U2F4b2ZvbmUgfGVufDB8fHx8fDE2NzYwMjM4NzI&ixlib=rb-1.2.1&q=80&w=400" },
  { nome: "Flauta", imagem: "https://images.unsplash.com/photo-1548197013-27186bb61b85?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2NzN8MHx8c2VhY2h8Mnx8RmxhdXRhfGVufDB8fHx8fDE2NzYwMjQyNzQ&ixlib=rb-1.2.1&q=80&w=400" }
];

// Função para renderizar os cards de instrumentos
function renderizarCards() {
  const container = document.querySelector(".cards-container");
  instrumentos.forEach(instrumento => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${instrumento.imagem}" alt="Imagem do ${instrumento
