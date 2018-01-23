/*Arreglos 
en javascript no existen las clases como tal 
se le llaman prototipos
*/
var p1 = {
	x: 5,
	y: 10,
	moverX: function (x) {
		this.x += x
	},
	moverY: function (x) {
		this.y += y
	}
}

var p2 = {
	x: 7,
	y: 9,
	moverX: function (x) {
		this.x += x
	},
	moverY: function (y) {
		this.y += y
	}
}

function distancia(p1,p2) {
	const x = p1.x - p2.x 
	const y = p1.y - p2.y
	return (Math.sqrt(x*x + y*y).toFixed(2))
}

