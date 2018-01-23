//BINDINGS
class Toggable {
    constructor(elemento){
        this.elemento = elemento
        this.elemento.innerHTML = "OFF" 
        this.activated = false
        this.elemento.addEventListener('click',this.onClick.bind(this))
    }

    onClick(){
        this.activated =  !this.activated
        this.toggleText()
    }

    toggleText(){
        this.elemento.innerHTML = this.activated ? "ON" : "OFF"
    }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)


//BINDINGS
function saludar (nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}

//el primer parametro de bind es el contexto seguido de los parametros de la funcion
const saludarMartin= saludar.bind(null,"martin")

saludarMartin("Perez")
saludarMartin("cuevas")
