const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Desenhando as linhas

//ajustar linha passar por cima do quadrado amarelo

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(200, 100);
ctx.strokeStyle = "green";
ctx.stroke();

// Desenhando os quadrados
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 20, 20);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 180, 20, 20);

ctx.fillStyle = "green";
ctx.fillRect(180, 180, 20, 20);

ctx.fillStyle = "blue";
ctx.fillRect(180, 0, 20, 20);

// Desenhando os círculos
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(40, 80, 10, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(160, 80, 10, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.stroke();
ctx.fill();

// Desenhando o arco
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI);
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.stroke();

// Adicionando o texto
ctx.font = "10px Arial";
ctx.fillText("Desenvolvimento Web", 50, 50);

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 200);
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(180, 20);
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.stroke();