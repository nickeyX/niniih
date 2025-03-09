document.getElementById("botao-sim").addEventListener("click", function() {
    alert("Quer viver uma vida feliz ao meu lado? 💖");
});

const botaoNao = document.getElementById("botao-nao");

function moverBotao() {
    const larguraJanela = window.innerWidth - botaoNao.offsetWidth;
    const alturaJanela = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * larguraJanela;
    const y = Math.random() * alturaJanela;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}

// Para computadores (mouse)
botaoNao.addEventListener("mouseover", moverBotao);

// Para celulares (toque)
botaoNao.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Evita bugs no toque
    moverBotao();
});
