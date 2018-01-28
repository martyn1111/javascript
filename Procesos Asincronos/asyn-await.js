function _handleError(err){
    console.log(err)
  }
  
  async function getLuke(){
    try {
      const response  = await fetch('https://swapi.co/api/people/1/')
      const luke  = await response.json()
      const home = await fetch(luke.homeworld)
      luke.home = await home.json()
         console.log(`${luke.name} nació en ${luke.home.name}`)
    }
    catch(err) {
        _handleError(err)
    }
  }
 getLuke();