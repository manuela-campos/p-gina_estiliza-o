function updateActiveCard() {
    // 1. Seleciona o container que está rolando
    const container = document.querySelector('.cards-slide');
    // 2. Seleciona todos os cards
    const cards = document.querySelectorAll('.card');

    if (!container || cards.length === 0) return; // Verifica se os elementos existem

    // Calcula a posição central (scroll atual + metade da largura visível)
    const scrollCenter = container.scrollLeft + container.offsetWidth / 2;

    cards.forEach(card => {
        // Calcula a posição central do card (início + metade da largura do card)
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        
        // Calcula a distância absoluta entre o centro da tela e o centro do card
        const distance = Math.abs(scrollCenter - cardCenter); 
        
        // Define um limite de proximidade (ajuste o valor 150 se precisar)
        // Se a distância for menor que 150px, o card é considerado "ativo"
        const proximityThreshold = 150; 

        if (distance < proximityThreshold) { 
            // O card está próximo ao centro
            card.classList.add('card-active');
        } else {
            // O card está longe do centro
            card.classList.remove('card-active');
        }
    });
}

// ----------------------------------------------------------------------
// 3. Onde encaixar a função para ser executada

// A. Executa a função toda vez que houver rolagem no container.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cards-slide');
    if (container) {
        // Quando o usuário rolar o container, chama a função para atualizar
        container.addEventListener('scroll', updateActiveCard);
        
        // Chama a função uma vez no início para destacar o card inicial
        updateActiveCard();
    }
});