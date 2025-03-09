document.addEventListener("DOMContentLoaded", function() {
    const botaoSim = document.getElementById("botao-sim");
    const botaoNao = document.getElementById("botao-nao");

    if (botaoSim) {
        botaoSim.addEventListener("click", function() {
            window.location.href = "sim.html"; // Troque pelo nome da sua página
        });
    }

    function moverBotao() {
        const larguraJanela = window.innerWidth - botaoNao.offsetWidth;
        const alturaJanela = window.innerHeight - botaoNao.offsetHeight;

        const x = Math.random() * larguraJanela;
        const y = Math.random() * alturaJanela;

        botaoNao.style.position = "absolute";
        botaoNao.style.left = `${x}px`;
        botaoNao.style.top = `${y}px`;
    }

    if (botaoNao) {
        botaoNao.addEventListener("mouseover", moverBotao);
        botaoNao.addEventListener("touchstart", (event) => {
            event.preventDefault();
            moverBotao();
        });
    }
});

