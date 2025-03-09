const botaoNao = document.getElementById("botao-nao");

function moverBotao() {
    const x = Math.random() * (window.innerWidth - botaoNao.clientWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.clientHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}

// Para computadores (mouse)
botaoNao.addEventListener("mouseover", moverBotao);

// Para celulares (toque)
botaoNao.addEventListener("touchstart", moverBotao);
