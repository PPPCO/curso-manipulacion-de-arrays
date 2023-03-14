// Es un metod que sirve para fusionar arrays, si tenemos 2 arrays y queremos fucionarlos en uno solo podemos hacer uso de concat y asi tendriamos un solo array, Tenemo que tener en cuenta que concat es inmutable osea que no modifica el array original, si no que simplemente genera uno nuevo

const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

// haciendolo con un for
const rtaArray = [...elements];// usamos el operador de dispersion para que se cree un nuevo arreglo no copie la referencia porque luego tendremos otra cosa cuando usemos concat y puede generar confusion.
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    rtaArray.push(element);
}
console.log(rtaArray);

console.log(elements.concat(othersElements));
// vemos que con concat es mucho mas facil todo

// otra forma de concaternar arreglos es simplemente usando el operador de dispesion

console.log([...elements,...othersElements]);
//  pero hay que tener cuidado como lo usamos poerque puede generar algun error

// Si queremos agregar a un arreglo otro haciendo uso del operador de dispersion lo tenemos que hacer de la siguiente forma, o como lo hicimos en la linea 10
const rta2 = elements.push(...othersElements);

// porque si no colocamos el el operadro de dispersion ... sucedera que hara push al arreglo pero de todo el objeto, quedando algo asi: [1,1,2,2,[3,3,4,4]]
console.log(elements);


// TODO LO QUE HAGAMOS DEPENDE DE LO QUERAMOS HACER ENTONCES HAY QUE ESTUDIAR BIEN TODO ESTO PARA SABER LO QUE HAREMOS Y COMO PODEMOS HACERLO
