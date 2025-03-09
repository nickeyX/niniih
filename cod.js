document.getElementById("botao-sim").addEventListener("click", function() {
    window.location.href = "sim.html"; // Redireciona para a nova página
});

const botaoNao = document.getElementById("botao-nao");

botaoNao.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});