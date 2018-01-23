function get(URL, callback){
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        const DONE = 4
        const OK = 200
        if(this.readyState === DONE){
            if(this.status === OK){
                callback( null, JSON.parse(this.responseText))
            }else{
                callback(new Error(`Error al realizar el request: ${this.status}`))
            }
        }
    } 
    xhr.open('GET',URL)
    xhr.send(null)
}

function _handleError(err){
  console.log(err)
}

get('https://swapi.co/api/people/1/', function onResponse(err,luke){
    if(err) return _handleError(err)

    get('https://swapi.co/api/planets/1/', function onResponse(err,home){
        if(err) return _handleError(err)
        luke.home = home
            console.log(`${luke.name} nació en ${luke.home}`)
            /**
             * Callback tras callback se le llama callback hell
             */
    })
})
