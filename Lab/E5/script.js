function verificarChute() {
    const chute = document.getElementById('chute').value;
    const numeroAleatorio = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9

    while (chute != numeroAleatorio) {
        if (chute > numeroAleatorio) {
            document.getElementById('resultado').textContent = "O número secreto é menor.";
        } else {
            document.getElementById('resultado').textContent = "O número secreto é maior.";
        }
        chute = prompt("Tente novamente: ");
    }

    document.getElementById('resultado').textContent = "Parabéns! Você acertou!";
}