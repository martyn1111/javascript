
function platzon(string){
	let retStr = string;
	
	if(isPalindrom){
		return formatoPalindromo(string)
	}

	if(string.toLowerCase().endsWith('ar')){
		retStr = string.slice(0,-2);
	}
	if(retStr.toLowerCase().startsWith('z')){
		retStr +='pe';
	}
	if (retStr.length >= 10){
		var length = retStr.length 
		var primeraMitad = retStr.slice(0,Math.round(length/2))
		var segundaMitad = retStr.slice(Math.round(length/2))
		retStr = `${primeraMitad}-${segundaMitad}`
	}

	var isPalindrom = true;
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let capital = true;
		let retorno = ''
		for (var i = 0; i < length; i++) {
			const char = str[i]
			retorno += capital ? char.toUpperCase() : char.toLowerCase()
			capital = !capital
		}
		return retorno
	}

	if(string == reverse(string) ){
		console.log("entra")
		return minMay(string)
	}

	return retStr
}

console.log(platzon("programar"))
console.log(platzon("Zorro"))
console.log(platzon("Zarpar"))
console.log(platzon("abecedario"))
console.log(platzon("sometemos"))