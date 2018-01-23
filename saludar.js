function saludarFamilia(apellido){
    return function saludarMiembro(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
    }
}

const saludarPerez = saludarFamilia("Perez")
const saludargomez = saludarFamilia("Gomez")

saludarPerez("Martin")


/**
 * una funcion para crear prefijos 
 * prefijo que sea RED 
 */
