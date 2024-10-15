let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let retangulo = {
    x: 10,
    y:10,
    largura: 50,
    altura: 50,
    cor_linha: "blue",
    cor_preenchimento: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 340,
    y:340,
    largura: 50,
    altura: 50,
    cor_linha: "yellow",
    cor_preenchimento: "green",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola-de-volei.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


console.log(retangulo.largura)
console.log(retangulo.cor_preenchimento)

console.log(retangulo2.largura)
console.log(retangulo2.cor_preenchimento)

retangulo.desenha();
retangulo2.desenha();

function animacao(){
    ctx.clearRect(0,0,400,400);
    bola.desenha();
    //if(retangulo.x < 350){
        //retangulo.x++;
    //}

    //if(retangulo2.x > 0){
        //retangulo2.x--;
    //}

    retangulo.desenha(); 

    retangulo2.desenha();
    requestAnimationFrame(animacao);

}

animacao();

document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let vel = 5;

    if(tecla == "ArrowUp"){
        retangulo.y -= vel;
    }

    if(tecla == "ArrowDown"){
        retangulo.y += vel;
    }

    if(tecla == "ArrowLeft"){
        retangulo.x -= vel;
    }

    if(tecla == "ArrowRight"){
        retangulo.x+= vel;
    }
})

document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse)

    // retangulo2.x = x_mouse;
    // retangulo2.y = y_mouse;
    bola.x = x_mouse;
    bola.y = y_mouse;
})