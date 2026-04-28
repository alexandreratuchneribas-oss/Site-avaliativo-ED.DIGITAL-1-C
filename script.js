document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de pedir
    const botoesPedir = document.querySelectorAll('.btn-pedir');

    botoesPedir.forEach(botao => {
        botao.addEventListener('click', (e) => {
            // Pega o nome da coxinha clicada (o h3 acima do botão)
            const nomeCoxinha = e.target.parentElement.querySelector('h3').innerText;
            
            // Simula uma ação de pedido
            alert(`✅ Você adicionou uma "${nomeCoxinha}" ao seu pedido!`);
        });
    });
});
