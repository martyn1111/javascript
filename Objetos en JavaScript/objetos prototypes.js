/*Arreglos 
en javascript no existen las clases como tal 
se le llaman prototipos
*/

function Punto(x, y) {
	this.x = x,
	this.y = y
}

Punto.prototype.moverX = function moverX(x) {
	this.x += x
};
Punto.prototype.moverY = function moverY(y) {
	this.y += y
};

Punto.prototype.distancia = function( p ) {
	const x = this.x - p.x 
	const y = this.y - p.y
	return (Math.sqrt(x*x + y*y).toFixed(2))
}

var p1 = new Punto(5,10)
var p2 = new Punto(7,9)
console.log(p1.distancia(p2));

/*function Punto(x, y) {
	this.x = x,
	this.y = y
}
new crea un objeto 
llamar esa function 
asignar objeto this ese objeto que acaba de crear 
y retorna el objeto this

*/