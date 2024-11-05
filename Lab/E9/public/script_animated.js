let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function() {
        this.img.src = 'bola-de-volei.jpg';
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    }
}

function animacao() {
    ctx.clearRect(0, 0, 400, 400);
    bola.desenha();
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener("mousemove", function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;


    // Centraliza o mouse na imagem
    bola.x = x_mouse;
    bola.y = y_mouse;

    // Impede que a imagem saia do canvas
    bola.x = Math.max(bola.raio, Math.min(bola.x, canvas.width - bola.raio));
    bola.y = Math.max(bola.raio, Math.min(bola.y, canvas.height - bola.raio));
})