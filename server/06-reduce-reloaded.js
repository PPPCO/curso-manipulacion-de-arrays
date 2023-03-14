const items = [1,3,2,3,3,1,10];

const rta = items.reduce((acumulador, item) => {
    //code
    if(!acumulador[item]){
        acumulador[item] = 1;
    }else{
        acumulador[item] += 1;
    }
    return acumulador;
},{}//como queremos que nos regrese un objeto, le decimos que inicie en un objeto vacio
);

console.log(rta);

/* 
    Output
    {
        1:1,// hay un 1
        3:2,// hay dos 3
        2:1// hay un 2
    }
    // Por lo tanto el array sera reducido a un objeto con su histograma
 */


// Ahora con objetos dentro del arreglo
const data = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "hight"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "medium"
    },
    {
        name: "lucia",
        level: "hight"
    }
];

const rtadata =  data.reduce((acumulador,elemento) =>{
    if(!acumulador[elemento.level]){
        acumulador[elemento.level] =1;
    }else{
        acumulador[elemento.level] += 1;
    }
    return acumulador;
},{});

console.log(rtadata);
// tratado de hacer todo en una sola linea

false ? console.log('Hola es true'): console.log('No es un true');

const rtadata1 = data.reduce((acumulador, elemento) =>{
    (!acumulador[elemento.level])?
    acumulador[elemento.level] = 1
    :
    acumulador[elemento.level] +=1;
    return acumulador;
},{});
console.log(rtadata1);

// No me salio en una sola linea, me retorna 1 pero creo es porque pues le decimos que sera = 1 entonce no esta retornando el acumulador, esta rato hay que regresar cuando sepa usar  mejor las funciones flecha, porque por lo visto aun no las se usar del todo
const rtadata3 =  data.reduce((acumulador,elemento) => (!acumulador[elemento.level])? acumulador[elemento.level] = 1 : acumulador[elemento.level] +=1, {});
console.log('Tratando de hacerlo en una linea');
console.log(rtadata3);
//  A VER creo que no funciona porque como estamos haciendo uso del operador ternario y estarlo usando dentro de una sola linea esta retornado "acumulador[elemento.level] = 1", por eso nos da 1, es como en la funcion flecha, al estar en una linea retorna, si son en mas lineas tenemos que colocarle ya return, OJO HAY debe de ser por eso.

//  ahora usando tambien map para dar solucion al problema anterior

const dataMap =  data.map(item => item.level).reduce((acumulador, elemento) =>{
    !acumulador[elemento]?
    acumulador[elemento] = 1 
    :
    acumulador[elemento] +=1;
    return acumulador;
},{});

console.log(dataMap);

/* 
    A ver usamos map porque recordemos que map nos creara un nuevo arreglo con lo que sea que hagamos con los elementos que le indicamos, en este caso le dijimos que pues simplemente crear un arreglo al cual le retornamos como valor el atributo con su valor que estaban dentro de los objetos presentes en cada elemento del array, de esta forma creamos un nuevo arreglo con unicamente los niveles y su valor, posteriormente ya pudimos hacer uso de reduce, y ahi hicimos la misma logica que con el ejemplo primero, donde le dijimos que pues si en el objeto no existia el nivel lo agregara, porque recordemos que para agregar un nuevo atributo a un objeto simplemente tnemos que colocar el nombre del objeto mas el valor del nuevo atributo, asi: objeto.atributo, sin embargo aca lo hicimos asi objeto[atributo], pero son exactamente lo mismo por lo tanto si no existia le dimos el valor 1, ademas de obviamente crearlo, y pues bueno si ya existia hagarraba y a ese atributo del objeto le sumaba 1, y ya, asi de simple.
    Bueno destacar que mejor con reduce tratar de hacer la funcion flecha multilinea, para que podamos retornar el objeto acumulador, si no luego hay como problema, entonces tener cuidado ahi.
*/

