function fight() {
	
	let gokuLife =100;
	let vegetaLife =100;

	function nivelPoder() {
		const min = 5
		const max = 12
		return Math.round( Math.random() * (max - min)) + min
	}

	const siguenVivos = () => gokuLife > 0 && vegetaLife > 0

	while (siguenVivos()){

		var poderGoku = nivelPoder();
		var poderVegeta = nivelPoder();
		
		if(poderVegeta > poderGoku){
			gokuLife -= poderVegeta
			console.log(`golpe de Vegeta de ${poderVegeta}`)
		}
		else{
			vegetaLife -= poderGoku
			console.log(`golpe de Goku de ${poderGoku}`)
		}
	}


	if ( gokuLife <= 0)
		console.log(`Vegeta ha Ganado \nVegeta Vida:${vegetaLife} VS Goku Vida:${gokuLife} `)
	else
		console.log(`Goku ha Ganado \nVegeta Vida:${vegetaLife} VS Goku Vida:${gokuLife} `)
}

console.log(fight())
