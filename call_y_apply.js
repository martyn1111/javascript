/**
 * call y apply
 * 
 * Spread operator
 * const arreglo = [2,3,4] 
 * function suma(...params) {
     return params.reduce(function (suma, element){
         suma += element
     })
 }
 */

const martin = {
    nombre: "martin",
    apellido: "perez"
}

function saludo(veces,upperCase) {
    let str = `Hola soy ${this.nombre} ${this.apellido}`
    str = upperCase ? str.toUpperCase(): str

    for (var i = 0; i < veces ; i++) 
        console.log(str)
}

const array = [3,2]
saludo.call(martin,...array)
//saludo.apply(martin,[3,true])
