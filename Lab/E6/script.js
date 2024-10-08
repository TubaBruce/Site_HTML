let numeroAleatorio = Math.floor(Math.random() * 10);

function verificarChute() {
    const chuteInput = document.getElementById('chute');
    const chute = parseInt(chuteInput.value);
    const resultado = document.getElementById('resultado');

    // Verifica se o chute é um número válido
    if (isNaN(chute)) {
        resultado.textContent = "Digite um número válido!";
        return;
    }

    if (chute === numeroAleatorio) {
        resultado.textContent = "Parabéns! Você acertou!";
    } else {
        if (chute > numeroAleatorio) {
            resultado.textContent = "O número secreto é menor.";
        } else {
            resultado.textContent = "O número secreto é maior.";
        }
        // Limpa o campo de entrada para o próximo chute
        chuteInput.value = '';
    }
}

// Adiciona um evento de clique ao botão
const botaoVerificar = document.getElementById('verificar');
botaoVerificar.addEventListener('click', verificarChute);