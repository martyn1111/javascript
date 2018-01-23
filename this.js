class Persona{
    constructor(nombre, amigos = []){
        this.nombre = nombre
        this.amigos = amigos
    }
    saludarAmigos (){
        this.amigos.forEach((amigo) => {
            console.log(`Me llamo ${this.nombre} y ${amigo} es mi amigo`)
        })
    }
}

const obj = new Persona("martin",["jose","pepe","juan"])
obj.saludarAmigos();