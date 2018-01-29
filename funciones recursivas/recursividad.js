
let contador = 1;
function fibonacciRecursivo(numero){
    contador++
    if(numero==1 )
        return 0
    else if(numero == 2)
        return 1    
    return fibonacciRecursivo(numero-1) + fibonacciRecursivo(numero -2)
}
fibonacciRecursivo(20)
console.log(contador)

//A ESTE METODO SE LE LLAMA MEMORIZACION
let contadorMem = 1;
function fibonacciMem(numero,mem = { }){
    contadorMem++
    if(mem[numero]) return mem[numero]
    if(numero==1 ) return 0
    if(numero == 2) return 1    
    return mem[numero] = fibonacciMem(numero-1,mem) + fibonacciMem(numero -2,mem)
}

fibonacciMem(20)
console.log(contadorMem)
