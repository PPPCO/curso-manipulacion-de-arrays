// Todos los elementos del arreglo deben de cumplir la condicion, retornara true o false

const numbers =  [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >=40){
        rta = false;
    }
}

console.log("Con un for: " + rta);

const rta2 = numbers.every(item => item <=40);
console.log("Con every: " + rta2);

/* 
Dado el siguiente array, verificar que todos los integrantes del equipo sean menores a 15 anios
 */

const equipo = [
    {
        nombre: 'Juan',
        edad: 10
    },
    {
        nombre: 'Mario',
        edad: 11
    },
    {
        nombre: 'Pedro',
        edad: 9
    },
    {
        nombre: 'Carlos',
        edad: 11
    },
    {
        nombre: 'Ramon',
        edad: 9
    },
    {
        nombre: 'Carmen',
        edad: 12
    }
];

console.log(`Los integrantes son menores de 15 anios? ${equipo.every(item => item.edad <= 15)}`);

const edades = equipo.reduce((acum, item)=>{
    if(acum[item.edad]){
        acum[item.edad] += 1;
    }else{
        acum[item["edad"]] = 1;
    }
    return acum;
},{});

console.log(`Las edades son las sigueintes: `);
console.log(edades);

/* 
Reto de la clase

Tu reto es retornar true si dentro de array de numeros todos son pares, para solucionarlo vas a encontrar una funcion llamada 'chechArray' que recibe un parametro de entrada: 

-numbers: un array de numeros

Dentro del cuerpo de la funcion "checkArray" debes escribir tu solucion.

Ejemplo 1:

input:  [2,4,6,8,10]
output; true


Ejemplo 2:

input: [1,3,5,7,10, 11]
output: false


Ejemplo 3:

input: [1,3,5]if(array.length == 0){
        return false;
    }
    return array.every(item => item % 2 == 0);


Ejemplo 4:

input: []
output: flase
 */


const checkArray = function(array){
    if(array.length == 0){
        return false;
    }
    return array.every(item => item % 2 == 0);
}

console.log(checkArray([2,4,6,8,10]));
console.log(checkArray([1,3,5,7,10, 11]));
console.log(checkArray([1,3,5]));
console.log(checkArray([]));
