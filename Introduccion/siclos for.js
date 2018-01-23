const nombre = "Martin"
let dias  = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"]

function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max -min)) + min   //RANDOM SOLO RESPONDE ENTRE 0 y 1
}

let totalKms = 0;
let length = dias.length
for (var i = 0; i < length; i++) {
	const km = correr();
	totalKms += km
	console.log(`El día ${dias[i]} corrió ${km} Kms`)
}

var promedio = totalKms / length
console.log(`En promedio ${nombre} corrió ${promedio.toFixed(2)} KMs`)