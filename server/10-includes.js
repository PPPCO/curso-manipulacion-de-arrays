// Este metodo nps dice si un elemento esta o no dentro de un array, por lo tanto nos retorna true or false

const pets =['cat','dog','bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'cat'){
        includeInArray = true;
        break;// y aqui ya podemos interrumpir el ciclo poque ya podemos decir que si, si esta el elemento dentro del array
    }
}
console.log('Con un for: ' + includeInArray);


console.log(pets.includes('dog'));
// devielve true porque si hay elemento que diga dog

console.log(pets.includes('cow'));
// como no hay cow devuelve flase

// TENEMOs que tener en cuenta que esta funcion no recibe un arrow function como paratetro, como en el caso de las otras funcioes, por lo tanto tenemos que tenter en cuetna de que no podemos trabar con objetos como lo haciamos con las otras, a menos que le pasemos directamene la referencia del objeto, pero seria un poquito mas de movimientos

console.log(pets[0].includes('at'));
// De esta ultima forma estamos pregundando si un string contiene una cadena de tecto que le indicamos esto es muy util porque como vemos, retorna true por cat si contiene 'at' entonces esto es muy util, hay que tenerlo en cuenta



// Reto de la clase

/* 
Tu reto es retornar un array solo con las palabras que cumplan con la condicion de tener un termino de busqueda dado.
Para solucionarlo vas a encontrar una funcion llamada 'filterByTerm' que recibe los siguiente parametros de entrada:

    -array: Un array de strings con palabras
    -term: Un string con el termino a buscar.

Dentro del cuerpo de la funcion filterByTerm debes escribir tu solucion

Ejemplo 1: 
Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]


Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]
 */

const filterByTerm = function(array, term){
    return array.filter(item=> item.includes(term));
}

console.log(filterByTerm(["ana", "santi", "nico", "anastasia"],'ana'));
console.log(filterByTerm(["ana", "santi", "nico", "anastasia"],'xyz'));
console.log(filterByTerm(["ana", "santi", "nico", "anastasia"],'a'));

