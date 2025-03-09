const botaoNao = document.getElementById("botao-nao");

botaoNao.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - botaoNao.clientWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.clientHeight);
    
    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});
