console.log("antes de usar fetch")
fetch('https://swapi.co/api/people/1/')
.then(res => res.json())
.then((json) => {
    luke = json
    return fetch(json.homeworld)
})
.then(res => res.json())
.then ((json) =>{
    luke.home = json
    console.log("Usando Fetch")
    console.log(`${luke.name} nació en ${luke.home.name}`)
})
.catch((err)=> _handleError(err) )

////////// PROMESAS 
function get(URL){
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            const DONE = 4
            const OK = 200
            if(this.readyState === DONE){
                if(this.status === OK){
                    resolve(JSON.parse(this.responseText))
                }else{
                    reject(new Error(`Error al realizar el request: ${this.status}`))
                }
            }
        } 
        xhr.open('GET',URL)
        xhr.send(null)
    })
}

function _handleError(err){
  console.log(err)
}

console.log("antes de llamar promesas encadenadas")
let luke
get('https://swapi.co/api/people/1/')
.then((res)=>{
    luke = res
    return get(luke.homeworld)
})
.then((home) => {
    luke.home = home
    console.log("Encadenando Promesas")
    console.log(`${luke.name} nació en ${luke.home.name}`)
    
})
.catch((err)=> _handleError(err) )

//PRIMERA FORMA DE HACERLA PERO SE ENCADENAN LOS THEN COMO EL CALLBACK HELL
console.log("antes de llamar promesas dentro de promesas")
get('https://swapi.co/api/people/1/')
.then((luke)=>{
    get('https://swapi.co/api/planets/1/')
    .then((home) => {
        luke.home = home
        console.log("Promesas dentro de otra promesa ")
        console.log(`${luke.name} nació en ${luke.home.name}`)
        /**
         * Igual que el callback hell 
         * estoy repitiendo promesas dentro de promesas 
         */
    })
})
.catch({
    
})