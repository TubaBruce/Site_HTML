const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Desenhando as linhas
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(380, 280);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20, 280);
ctx.lineTo(380, 20);
ctx.strokeStyle = "blue";
ctx.stroke();

// Desenhando os quadrados
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 20, 20);

ctx.fillStyle = "yellow";
ctx.fillRect(10, 260, 20, 20);

ctx.fillStyle = "green";
ctx.fillRect(360, 260, 20, 20);

// Desenhando os círculos
ctx.beginPath();
ctx.arc(120, 120, 20, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(280, 120, 20, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

// Desenhando o arco
ctx.beginPath();
ctx.arc(200, 200, 100, Math.PI, 0);
ctx.strokeStyle = "green";
ctx.stroke();

// Adicionando o texto
ctx.font = "20px Arial";
ctx.fillText("Desenvolvimento Web", 100, 100);