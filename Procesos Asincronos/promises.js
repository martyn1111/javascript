const promise = new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject(new Error("Ha fallado la funcion promise"))
    },3000)
})

promise.then(function (res) {
    console.log("Succeed")    
})
.catch(function (error) {
    _handleError(error)
})

function _handleError(err){
    console.log(err)
}

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

let luke
get('https://swapi.co/api/people/1/')
.then((res)=>{
    luke = res
    return get(luke.homeworld)
})
.then((home) => {
    luke.home = home
    console.log(`${luke.name} nació en ${luke.home.name}`)
    /**
     * Igual que el callback hell 
     * estoy repitiendo promesas dentro de promesas 
     */
})
.catch((err)=> _handleError(err) )


fetch('https://swapi.co/api/people/1/')
.then(res => res.json())
.then((json) => {
    luke = json
    return fetch(luke.homeworld)
})
.then((home) => {
    luke.home = home
    console.log(`${luke.name} nació en ${luke.home.name}`)
    /**
     * Igual que el callback hell 
     * estoy repitiendo promesas dentro de promesas 
     */
})
.catch((err)=> _handleError(err) )



//PRIMERA FORMA DE HACERLA PERO SE ENCADENAN LOS THEN COMO EL CALLBACK HELL
// get('https://swapi.co/api/people/1/')
// .then((luke)=>{
//     get('https://swapi.co/api/planets/1/')
//     .then((home) => {
//         luke.home = home
//             console.log(`${luke.name} nació en ${luke.home.name}`)
//             /**
//              * Igual que el callback hell 
//              * estoy repitiendo promesas dentro de promesas 
//              */
//     })
// })
// .catch({
    
// })