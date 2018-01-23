/**
 * funciones con parametros 1,2,3,...n
 * 
 */

function sumar(...numeros){
    //let suma = 0
    // for (let i = 0; i < numeros.length; i++){
    //     suma+= numeros[i];
    // }
    return numeros.reduce(function (acum, numero) {
        acum+=numero 
        return acum
    });
    //return suma
}

 const dobles = (...params) => params.map(numero => numero * 2)



