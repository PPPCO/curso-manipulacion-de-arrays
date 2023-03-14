/* 
¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
.Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad de elementos que el array que le aplicaste el método.
 */

const letters = ['a', 'b', 'c'];

const newArray = []; 
// con un for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + "++");
}
console.log(newArray);

// con map

const newArrMap = letters.map(item => item + '++');// debemos recordar que map devuelve un arreglo nuevo, por lo tanto debemos de asignarlo a una variable.
console.log(`Con map: ${newArrMap}`);

/* 
RetoÑ

Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.
 */

function multiplicidad(array){
    const resultado = array.map(numero => numero *2);
    console.log(resultado);
    // debe ser return en vez del console.log
    /* 
    Ademas pudo quedar de la siguiente forma para mas rapido
    return array.map(numero => numero*2);
     */
    
}
multiplicidad([1,2,3,4,5]);