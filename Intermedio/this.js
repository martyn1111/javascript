class  Persona {
    constructor(nombre, amigos = []){
        this.nombre = nombre
        this.amigos = amigos
    }

    saludarAmigos (){
        //solucion 1
        const _this = this 
        //fin solucion 1 
        this.amigos.forEach(function (amigo) {
            console.log(_this) //undefined
            console.log(`Hola soy ${_this.nombre} y soy amigo de ${amigo}`)
        })
    }
}
const martin = new Persona ("martin",["juan","walter white"])

//Nos da un error debido a que this no esta definido en ese SCOPE
martin.saludarAmigos();