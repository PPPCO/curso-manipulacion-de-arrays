// Find es muy parecido a filter, sin embargo fin solo va a retornar un objeto que cumpla con la conficional, filter hace lo mismo pero este retorna un array con los elementos que cumplan el condicional, si filter encuetnra  que solo un elemento cumple la condicional igual devuelve un array de un solo elemento, pero find no, Find literalmente devuleve ese objeto no me lo va a devolver como una array,  NOS DEVUELVE DIRECATEMNTE EL OBJETO QUE CUMPLE CON LA CONDICIONAL, si buscamos en un array de comidas un elemento en particular , ns devolvera ese elemento en particular, y siempre devolvera un solo elemento, el que hizo matach y el primero que hizo match con la condicion, osea que si hay mas elementos que cumplen con la condicion, este solo nos traera el primero que cumpla con la condicion, lo toma y nos lo retorna, si no encuentra ninguno nos retornara undefined


const numbers = [1,30, 49, 29,10,13];
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element  === 30){
        rta = element;
        break; // rompemos el ciclo por si ya encontro el elemento no siga iterando mas haya, asi nos aseguramos que se comporte como find
    }
}

console.log(`Usando un for: ${rta}`);

const rta2 = numbers.find(item => item == 30);
console.log(`Con find: ${rta2}`);
// RECORDEMOS SI NO ENCUETRA LA CONDICION O ALGUN ELEMENTO QUE LA CUMPLA NOS DEVOLVERA UNDEFINED

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
// Find nos sirve perfectamente con ids porque recordemos que ID es un identificador que no se repite

console.log(products.find(item => item.id == '🍕'));
// Vemos que nos retorna el objeto con todos los elementos del objeto, 

console.log(products.findIndex(item => item.id == '🍕'));
// Con findIndex nos retornara la posicion del elemento que cumple con la condicion, en este caso devuelve 0 porque ese es la posicion del elemento que cumple la condicion
// IMPORTANTE find sabemos que si no encuentra nada que cumpla la condicion devolvera 'undefined', pero findIndex devolvera -1 OJO CON ESTO, memorizar.