const Punto = {
    init: function (x, y) {
        this.x = x;
        this.y = y;
    },
    moverEnX: function moverEnX(x) {
        this.x += x;
    },
    moverEnY: function moverEnY(y)  {
        this.y += y;
    },
    distancia: function distancia(p) {
        const x = this.x -p.x
        const y = this.y -p.y
        return Math.sqrt(x*x + y*y)
    }
}

const p1 = Object.create(Punto)
p1.init(5, 6)
const p2 = Object.create(Punto)
p2.init(2,8)

console.log(p1.distancia(p2));
