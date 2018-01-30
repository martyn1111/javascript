/**
 * side efect 
 * al tener una funcion como 
 * 
 */
let contador = 0
function cumple(persona) {
    // contador++
    // persona.edad = 23
    /**
     * dentro de esta funcion no se espera que se cambien los valores de los parámetros
    todo lo que se haga en javascript dentro de aqui afecta las variables que fueron pasadas
    por parámetro
    por ejemplo siempre que se invoque el metodo cumple persona tendrá 23 años
    lo que se hace para evitar esto se utiliza 
    */
    const clone = Object.assign({},persona)      
    clone.edad++
    return clone
}