const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
console.log('Array original');
console.log( orders);

const rta = orders.map(item => item.total);
console.log(rta);

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item
// });
// // En el ejecrcicio anterior seguimos modificando la referencia de los objetos porque recordemos que los objetos tienen una referencia aparte por lo tanto al modificar el arreglo que contiene referencias de objetos con map, podemos modificar el arrgelo, pero las referencias de los objetos se siguen manteniendo.

// console.log('Original');
// console.log(orders);

// console.log('rta2');
// console.log(rta2);

const rta3 = orders.map(item => {
    return {
        ...item,// usando el operador de propagacion
        tax: .19,
    }
});
//  Bueno como dije anteriormente estabamos teniendo un problema que consitia en que a pesar de que estabamos usando map pues al contener arreglos y modificabamos el elemento del arreglo, pues al ser objetos se moficcaba el objeto original, lo estabamos mutando, para solicionar esto hicimos que cada que quizieramos modificar el elemento del arreglo, siendo consientes de que este pues es un objeto, usamso el operador de propagacion ... que recordemos que nos podra extraer todo un objeto o arreglo en otro, por lo tanto estariamos creando un objeto nuevo con referencia nueva, lo cual soluciona el problema que veniamos tratando.


console.log('Original');
console.log(orders);

console.log('rta3');
console.log(rta3);



/* 
EJERCICIO:
Tienes un array de objetos que representan datos de productos con los siguientes atributos:

name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

EJEMPLO:
Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]
 */

// function addNewArt(array){
//     const newArr = array.map(products =>{
//         return {
//             ...products,
//             taxes: Math.trunc(products.price * .19)
//         };
//     });
//     return newArr;
// }
// Simplificando la funcion lo maximo posibe, recordemos que si queremos retornar un objeto en una linea en una funcion flecha debemos de encerrarlo entre parentesis
function addNewArt(array){
    return array.map(products => ({...products,taxes: Math.trunc(products.price * .19)}));
}
const input = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ];
console.log("arreglo original: ");
console.log(input);
console.log(addNewArt(input));
