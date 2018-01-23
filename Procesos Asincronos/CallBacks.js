/**
 * reducir la cola de ejecución de llamadas a lo minimo
 * debido a que en 
 */

setTimeout(function callback() {
   console.log("A") 
} ,3000 )
/**
 * todo este codigo que pueda ser ejecutado aqui puede afectar el funcionamiento de la pagina 
 * por eso debería usarse lo menos posible la cola de ejecución
 */
for (let i = 0; i < 99999999999; i++) ;
console.log("B")