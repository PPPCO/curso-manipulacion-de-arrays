/* 
Sort es un metodo para hacer ordenamiento dentro de los arrays
Some es un metodo que va a mutar, es decir, cada vez que se aplique va a cambiar el orden del array original, claro esta que esto dependera de como se aplique, pero es un metodo que es mutable.
*/

const months = ["March", "Jan", "Feb", "Dec"];
console.log(
    months.sort()
);
/*
Si solo usamos sort lo que hara con el  arreglo de months es que los ordenara usando las letras y su posicion en el abecedario.
Quiza no tiene sentido entorno a los meses de anio pero si conforme a su posicion en el abecedario, y para ello js se apoya de los valores de los caracteres en el codigo ACII 
 */

const numbers = [1, 30, 4, 21, 100000];

console.log( numbers.sort( (a, b) => a - b ) );
// console.log( numbers.sort( (a,b) => Math.random() ));

/* 
----------------PORQUE A - B  O B - A?-----------------------
La funcion que le enviamos a sort es la funcion 'compareFN' donde: 
- Si 'compareFN(a,b)' devuelve un valor mayor que 0, ordena b antes que a.
- Si 'compareFN(a,b) devuelve un valor menor que 0 devuelve a antes que b.
-Si 'compareFN(a,b)' deuvelve 0 a y b se consideran iguales.

Tomando en cuenta lo anterior tenemos entonces en queta que peues el cuer de la funcion o lo que hara la funcion no neceita que pues usemos a y b que le pasamos a la funcion cuando usamos sort, entonces
podemos usar una funcion adentro de la funcion que le pasamos a sort para que simplemnte de manera aleatoria nos de un valor menor a 0, mayor a cero o simplemente 0 y entorno a ello nos pueda ir acomodadndo el arreglo de manera aleatoria. 
Pensando en esto realice el siguiente algoritmo y pues nada ahi esta:
*/
console.log( Math.random(1, 10) );
console.log( numbers.sort( ( a , b ) => Math.random() - 0.5  ) );


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log( words.sort() );

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log( orders.sort( (a, b) => a.total - b.total ) );
