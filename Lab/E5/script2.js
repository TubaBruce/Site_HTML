const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function desenhar_quadrado_pequeno(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 30, 30);
    ctx.closePath();
}

function desenhar_quadrado_grande(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 45, 45);
    ctx.closePath();
}

function desenhar_quadrado_medio(x, y, cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 35, 35);
    ctx.closePath();
}

function desenhar_linha(x1, y1, x2, y2, cor){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(x, y, r, ang1, ang2, cor, cor2){
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = cor;
    ctx.fillStyle = cor2;
    ctx.arc(x, y, r, ang1, ang2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();}

function escrever(x, y, texto){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(texto,x,y);
    ctx.closePath();}


desenhar_quadrado_grande(0, 0, "blue")
desenhar_quadrado_grande(255, 0, "red")

desenhar_linha(40, 40, 150, 150, "blue")
desenhar_linha(260, 40, 150, 150, "red")

desenhar_quadrado_pequeno(0, 120, "cyan")
desenhar_quadrado_pequeno(0, 150, "cyan")
desenhar_quadrado_pequeno(270, 135, "cyan")

desenhar_quadrado_medio(115, 150, "red")

desenhar_linha(0, 150, 300, 150, "green")

desenhar_quadrado_pequeno(0, 240, "yellow")
desenhar_quadrado_pequeno(0, 270, "yellow")
desenhar_quadrado_pequeno(30, 270, "yellow")

desenhar_quadrado_pequeno(270, 240, "black")
desenhar_quadrado_pequeno(270, 270, "black")
desenhar_quadrado_pequeno(240, 270, "black")

desenhar_arco(150, 300, 45, Math.PI, 0, "green", "cyan")
desenhar_arco(150, 300, 80, Math.PI, 1.5*Math.PI, "green", "transparent")
desenhar_arco(150, 300, 62.5, 1.5*Math.PI, 0, "green", "transparent")

desenhar_linha(150,150, 150, 255, "black")

desenhar_arco(150, 150, 80, Math.PI, 1.25*Math.PI, "green", "transparent")
desenhar_arco(150, 150, 80, 1.75*Math.PI, 0, "green", "transparent")
desenhar_arco(150, 150, 60, Math.PI, 0, "green", "transparent")

desenhar_arco(150, 120, 15, 0, 2*Math.PI, "blue", "cyan")

desenhar_arco(75, 225, 15, 0, 2.5*Math.PI, "green", "yellow")
desenhar_arco(225, 225, 15, 0, 2.5*Math.PI, "green", "yellow")

escrever(115, 45, "Canvas")







