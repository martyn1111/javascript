class Punto {
    constructor(x, y){
        this.x = x
	    this.y = y
    }
   
    moverX(x) {
        this.x += x
    }

    moverY(y) {
        this.y += y
    }

    distancia (p) {
        const x = this.x - p.x 
        const y = this.y - p.y
        return (Math.sqrt(x*x + y*y).toFixed(2))
    }
}

var p1 = new Punto(5,10)
var p2 = new Punto(7,9)
console.log(p1.distancia(p2));