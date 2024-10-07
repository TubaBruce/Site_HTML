function verificarChute() {
    const chuteInput = document.getElementById('chute');
    const chute = parseInt(chuteInput.value);
    const numeroAleatorio = Math.floor(Math.random() * 10);
    const resultado = document.getElementById('resultado');

    while (chute !== numeroAleatorio) {
        if (chute > numeroAleatorio) {
            resultado.textContent = "O número secreto é menor.";
        }
        else if (chute < numeroAleatorio){
            resultado.textContent = "O número secreto é maior.";
        }
    }

    resultado.textContent = "Parabéns! Você acertou!";
}