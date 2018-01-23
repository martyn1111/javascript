
function platzon(string){
	let retStr = string;
	var isPalindrom = true;
	console.log("cambio")
	for (var x = 0, y = retStr.length-1; x < retStr.length/2; x++, y--){
		console.log("x:"+retStr[x] +"_y:"+retStr[y])
		if(retStr[x] != retStr[y])
		{
			isPalindrom = false
			break
		}

	}
	if(isPalindrom){
		return formatoPalindromo(string)
	}


	if(string[string.length-2]+ string[string.length-1] == "ar"){
		retStr =  string.substring(0,string.length-2)
	}
	if(retStr.substring(0,1).toLowerCase() == 'z'){
		retStr += "pe"
	}
	if (retStr.length >= 10){
		var i = retStr.length / 2
		retStr = retStr.substring(0,i) + "-" + retStr.substring(i,retStr.length)
	}
	return retStr
}

function formatoPalindromo(cadena){
	var sretorno ="";
	for(var i = 0; i< cadena.length; i++){
		if(i==0)
			sretorno+=cadena[i].toUpperCase();
		else
		if( i%2 == 0)
			sretorno+=cadena[i].toUpperCase();
		else
			sretorno+=cadena[i].toLowerCase();
	}

	return sretorno
}