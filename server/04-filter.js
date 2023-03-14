/* Filter ayuda a flitrar los elementos de un array con base a un condicional, los elementos que cumplan con el condicional van a ser parte de ese nuevo array, lo que quiere decir que filter es inmutable, osea que no modifica el array original, si no que crea uno nuevo con los elementos que cumplen con la condicional.
Filter es una funcion que nos puede dar un arreglo con cero elementos pues esto sucederia en el caso de que ningun elemento cumpla con la condicion planteada.Pero nunca retornara mas elementos que los que tiene el array original
*/

const words = ['Spray', 'Limit', 'Elite', 'exuberant'];

// con for
newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6){
        newArray.push(element);
    }
}
console.log("con for: " + newArray);
console.log("array original: " + words);

// con filter
const rta = words.filter(item => item.length >= 6);
console.log("Con filter: " + rta);


const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 140,
        delivered: false,
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

const rta3 = orders.filter(item => item.delivered && item.total >= 100);
//  aqui la condicion se cumple porque le estamos diciendo que retorne el elemento si item.delivered es true, recordemos que el valor en el objeto es booleano por lo tanto si cumple ese elemento la condicional, ese elemento se ira al nuevo array.
console.log('con un arreglo de objetos: ');
console.log(rta3);

// haciendo un buscador de las ordenes

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);// includes dice, o propone, "si un string esta incluido en en otro string" ej: 'ac' esta incluido en "paco"?, la respuesta sera si
    });
}
/* 
En el jemplo anterior hicimos un buscador con filter, tenemos que tener cuidado de que la funcion que va dentro de map si retorne true or flase porque de lo contrario se quedara en un limbo y no saberemos lo que esta pasando, justo esto me paso ami pues olvide colocar return donde estamos usando includes, recordemos que con incluides tendremos true or false y este valor tenemos que retornarlo  para que filter sepa si el elemento al que esta en ese momento siendo tratado por filter sepa si se agregara o no.
 */
console.log(search('olas'));


