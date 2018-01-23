//IIFE
//Immediately Invoked Function Expression

//conflicto ya que las siguientes lineas interpretan como si (function saludo.... ) esta en la
//misma linea
const martin = "martin"
(function saludo() {
    console.log("hola")
})()

/////////////////////////
//INICIA PROBLEMA / CONFLICTO DEBIDO AQUE TOMA LA VARIABLE PEGADA AL ARRAY 
const variable = "xd"
[
    "martin",
    "marina",
    "jaqueline"
].forEach(function  (nombre){
    console.log(nombre)
})
//FIN PROBLEMA / CONFLICTO DEBIDO AQUE TOMA LA VARIABLE PEGADA AL ARRAY 

////SOLUCION separar el arreglo
const variable = "xd"
const nombres = [
    "martin",
    "marina",
    "jaqueline"
]
nombres.forEach(function  (nombre){
    console.log(nombre)
})
//SOLUCION 2  punto y coma
const variable = "xd";
[
    "martin",
    "marina",
    "jaqueline"
].forEach(function  (nombre){
    console.log(nombre)
})