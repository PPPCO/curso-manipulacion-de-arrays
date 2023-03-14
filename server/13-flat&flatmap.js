// Estos metodos son recientes, manipulan arrays que tienen otros arrays dentro, viene a resolver la duda de como "aplanar" los arrays a uno solo

const matriz =[
    [1,2,3],
    [4,5,6,[1,2,[1,2,3]]],
    [7,8,9]
];

// haciendolo con un for
const newArray =[];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}

console.log('Con for: ');
console.log(newArray);

const rta = matriz.flat(3);
console.log(rta);



// Flatmap es un metodo que tiene la funcion de alinear todo nuestro array y un map, osea ir transdormando a medida que va aplanando el array

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

  const rta3 = users.map(item => item.attributes).flat();
  console.log(rta3);
  

const rta4 = users.flatMap(user => user.attributes);
console.log(rta4);


// Como podemos  hacer un flat map pero no teniendo un array de arrays como el que se muestra a continuacion, El reto es que solo queremos un array de las fechas de inicio e esos apoinmets, queremos un array lineal de las fechas de inicio
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


const objaArray =  Object.values(calendars);
console.log('Objeto convertido en array ', objaArray );

const elementArrays = objaArray.flatMap(item => item.map(date => date.startDate));
console.log(elementArrays);


const arrayNewApp = Object.values(calendars);// recordemos que Object.values o object.keys, nos devolvera un arreglo con los valores o keys de un objeto, entonces usamos esto para convertir el objeto en un array, tenemos que estar al pendiente de ello y aocrdarnos de las funciones disponibles en los objetos de js
  console.log(arrayNewApp);

const resultadoAp = arrayNewApp.flatMap(item => item.map(date => date.startDate));
console.log(resultadoAp);


// A ver explicando lo anterior para que nos quede mas claro todo, 
/* 
1.- Tenemos un objeto con arreglos dentro, por lo cual no podemos aplicarle las funciones de flat o flatmap al objeto, perimero debemos de convertir el objeto a un arreglo, para poder  hacer uso de las funcines de objetos de js
---Para ello hacemos uso de la funcio Object.values que recordemos que nos regresa un arreglo con los valores del objeto, nos devolveria algo asi:

  [ 
    [ 
      { startDate: Mon Feb 01 2021 15:00:00 GMT-0600 (hora estándar central),
      endDate: Mon Feb 01 2021 15:30:00 GMT-0600 (hora estándar central),
      title: 'Cita 1' },
      { startDate: Mon Feb 01 2021 17:00:00 GMT-0600 (hora estándar central),
      endDate: Mon Feb 01 2021 18:00:00 GMT-0600 (hora estándar central),
      title: 'Cita 2' } 
    ],
    [ 
      { startDate: Mon Feb 01 2021 12:00:00 GMT-0600 (hora estándar central),
      endDate: Mon Feb 01 2021 12:30:00 GMT-0600 (hora estándar central),
      title: 'Cita 2' },
      { startDate: Mon Feb 01 2021 09:00:00 GMT-0600 (hora estándar central),
      endDate: Mon Feb 01 2021 10:00:00 GMT-0600 (hora estándar central),
      title: 'Cita 4' } 
    ]
  ]
Como vemos ya tenemos un arreglo de arreglos, que en su interior de cada arreglo tiene objetos.

2.- Bueno como tenemos una arreglo de arreglos ya podemos aplanarlo, con flat, porque recordemos que flat permite apalanar un arreglo de arreglos, por lo tanto podemos aplicar flat lo que nos devolvera un arreglo pero que cada elemento es un  objeto, asi:

[ 
  { startDate: Mon Feb 01 2021 15:00:00 GMT-0600 (hora estándar central),
    endDate: Mon Feb 01 2021 15:30:00 GMT-0600 (hora estándar central),
    title: 'Cita 1' },
  { startDate: Mon Feb 01 2021 17:00:00 GMT-0600 (hora estándar central),
    endDate: Mon Feb 01 2021 18:00:00 GMT-0600 (hora estándar central),
    title: 'Cita 2' },
  { startDate: Mon Feb 01 2021 12:00:00 GMT-0600 (hora estándar central),
    endDate: Mon Feb 01 2021 12:30:00 GMT-0600 (hora estándar central),
    title: 'Cita 2' },
  { startDate: Mon Feb 01 2021 09:00:00 GMT-0600 (hora estándar central),
    endDate: Mon Feb 01 2021 10:00:00 GMT-0600 (hora estándar central),
    title: 'Cita 4' }  
],
Como vemos ya tenemos un arreglo apalanado, 

3.- como el reto era que nos devolviera una rreglo apalanado de unicamente las fechas de entrada del objeto, pues tenemos que aplicar map por separado porque en este caso con flapmap no nos permitia acceder a mas niveles porque bueno tenia una rreglo de arreglos que en su interior tenia objetos, si embaro ya con map ya podemos transformar cada elemento del arreglo aunque este pues sea un objeto porque en si al tener ya un arreglo con elementos, map nos permitira acceder a cada elemento y indicarle a que atributo, por lo tanto fue por eso que usarmos 

const elementArrays = objaArray.flatMap(item => item.map(date => date.startDate));
El primer flatmap, fue para aplanar el arreglo de arreglos, y el map que esta dentro del flapmap es para que transforme cada item de arreglo que nos habia devuelto objetos, pero como queremos que unicamente nos devuelva un arreglo de fechas de entrada tenemos que indicarle con map que cada item de arreglo aplanado lo transdorme o nos de unicamente la fecha por eso le decimos que nos retorne date.starDate,

Con eso ya queda mas claro todo, el resultado final es:
[ Mon Feb 01 2021 15:00:00 GMT-0600 (hora estándar central),
  Mon Feb 01 2021 17:00:00 GMT-0600 (hora estándar central),
  Mon Feb 01 2021 12:00:00 GMT-0600 (hora estándar central),
  Mon Feb 01 2021 09:00:00 GMT-0600 (hora estándar central) ]


  Un arreglo con las fechas de inicio de las citas.
 */




  /* 
                      DESAFIO DE LA CLASE

En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:

array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.

Ejemplo:

Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20

  */
const countWords = function(array){
  return array.reduce((acum, phrase) =>{
    // console.log(phrase.split(' ').length);
    
    return acum += phrase.split(' ').length;
  }, 0);
}
const inputReto = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];
console.log(countWords(inputReto));

const conutWordOneLine = (array) => array.reduce((num, phrase)=> num += phrase.split(' ').length, 0);
console.log(conutWordOneLine(inputReto));


// ahora con map o flatmap

const conutWorsFM = (array) => array.flatMap(element => element.split(' ')).length;
console.log(conutWorsFM(inputReto));
