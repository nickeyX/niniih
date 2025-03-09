const botaoNao = document.getElementById("botao-nao");

function moverBotao(event) {
    event.preventDefault(); // Evita cliques acidentais

    const larguraJanela = window.innerWidth - botaoNao.clientWidth;
    const alturaJanela = window.innerHeight - botaoNao.clientHeight;

    const x = Math.random() * larguraJanela;
    const y = Math.random() * alturaJanela;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;

    // Para forçar a reativação do evento no mobile
    setTimeout(() => {
        botaoNao.style.pointerEvents = "auto";
    }, 100);
}

// Para computadores (mouse)
botaoNao.addEventListener("mouseover", moverBotao);

// Para celulares (toque)
botaoNao.addEventListener("touchstart", function (event) {
    botaoNao.style.pointerEvents = "none"; // Evita que ele "pare" depois de alguns toques
    moverBotao(event);
});
