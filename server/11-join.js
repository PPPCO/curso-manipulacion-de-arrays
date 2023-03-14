// Sirve para unificar todo un array

const elements = ["Fire", "Air", "Water"];
let rtaFinal = ""; 
const separatir = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element +separatir;
}

console.log(rtaFinal);

console.log(elements.join('--'));
// Con eso ya estamos unificando el array en un solo string, como parametro la funcio join recibe el elemento que servira como separador

//                          SPLIT
const title = "Curso de Manipulacion de arrays";

const titleFinal = title.split(" ");
console.log(titleFinal);
// lO QUE Hace split es lo opuesto a join, pues toma un string y lo pude separar, la funcion split recibe como argumento el elemento que devera de identificar para proceder a separar el string en distintos elementos de nuestro arreglo

console.log(titleFinal.join('/').toLocaleLowerCase());
//  Con lo anterior despues de tomar las palabras del string aharramos un las colocamos en un array y luego usamos el join para juntarlas con un patron en especifico asi es como si crearamos una url, bueno lo importante ya lo aprendimos XD.


// Reto de la clase

/* 

En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:

Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:

Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:

Input: "Curso de arrays"
Output: "curso-de-arrays"
 */

const parseToURL = function(title){
    // return title.split(" ").join("-").toLocaleLowerCase();
    // OTRA FORMA AUN MAS SENCILLA ES
    return title.replaceAll(' ', '-').toLocaleLowerCase();
}

console.log(`Ejemplo 1: ${parseToURL("La forma de correr Python")}`);
console.log(`Ejemplo 2: ${parseToURL("La API para nunca parar de aprender")}`);
console.log(`Ejemplo 3: ${parseToURL("Curso de arrays")}`);
