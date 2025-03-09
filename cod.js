const botaoNao = document.getElementById("botao-nao");

function moverBotao(event) {
    event.preventDefault(); // Impede toques acidentais no mobile

    const larguraJanela = window.innerWidth - botaoNao.clientWidth;
    const alturaJanela = window.innerHeight - botaoNao.clientHeight;

    const x = Math.max(0, Math.random() * larguraJanela);
    const y = Math.max(0, Math.random() * alturaJanela);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}
