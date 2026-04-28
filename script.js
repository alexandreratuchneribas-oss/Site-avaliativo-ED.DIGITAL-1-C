document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-saiba-mais');

    botao.addEventListener('click', () => {
        alert('🍗 Hummm! Estamos preparando sua coxinha virtual. Em breve você poderá fazer pedidos reais por aqui!');
        
        // Exemplo de log no console para desenvolvedores
        console.log('O usuário clicou no botão de pedido.');
    });

    // Efeito de scroll suave para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
