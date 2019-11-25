var c = document.getElementById("ice-cream");
var ctx = c.getContext("2d");
//cornet
ctx.fillStyle = '#AA6522';
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(70, 180);
ctx.lineTo(40, 50);
ctx.closePath();
ctx.fill();
//glace à la cerise
ctx.fillStyle = '#FF0000';
ctx.beginPath();              
ctx.moveTo(40,50);
ctx.bezierCurveTo(40,75, 50,-60,100,50);
ctx.fill();