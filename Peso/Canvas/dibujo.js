var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle ="blue";
lienzo.moveTo(10, 100);
lienzo.lineTo(200, 250);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle ="red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
