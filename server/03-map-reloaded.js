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


const data = [
  {
      "ID": "22268",
      "ACTIVIDAD": "Llegada a parque y traslado a subestación",
      "HORA_INICIO": "05:59:00",
      "HORA_FIN": "07:59:00",
      "COMENTARIOS": "LLegada al parque en Oax",
      "NOMBRE": ""
  },
  {
      "ID": "61450",
      "ACTIVIDAD": "Traslado a WTG",
      "FECHA": "2023-05-06",
      "ID_PROYECTO": "270",
      "ID_AEROGENERADOR": "16189",
      "HORA_INICIO": "07:59:00",
      "HORA_FIN": "08:59:00",
      "NOMBRE": "1",
      "COMENTARIOS": "Traslado desde subestacion hacia el WTG01 "
  },
  {
      "ID": "61451",
      "ACTIVIDAD": "Inicio y termino de trabajo",
      "FECHA": "2023-05-06",
      "ID_PROYECTO": "270",
      "ID_AEROGENERADOR": "16189",
      "HORA_INICIO": "09:00:00",
      "HORA_FIN": "13:00:00",
      "NOMBRE": "1",
      "COMENTARIOS": "Mantenimiento general realizado con extio"
  },
  {
      "ID": "22269",
      "ACTIVIDAD": "Hora de comida ",
      "HORA_INICIO": "13:00:00",
      "HORA_FIN": "13:30:00",
      "COMENTARIOS": "Toma de la hora de comida",
      "NOMBRE": ""
  },
  {
      "ID": "1305",
      "ACTIVIDAD": "StandBy por Material",
      "HORA_INICIO": "13:30:00",
      "HORA_FIN": "14:00:00",
      "MOTIVO": "2",
      "ACTIVO": "1",
      "NOMBRE": "Stand By",
      "HORA_STAND": true
  },
  {
      "ID": "61452",
      "ACTIVIDAD": "Traslado a WTG",
      "FECHA": "2023-05-06",
      "ID_PROYECTO": "270",
      "ID_AEROGENERADOR": "16190",
      "HORA_INICIO": "14:01:00",
      "HORA_FIN": "15:01:00",
      "NOMBRE": "2",
      "COMENTARIOS": "Traslado desde WTG01 al WTG02\n"
  },
  {
      "ID": "1302",
      "ACTIVIDAD": "Stand by",
      "HORA_INICIO": "15:01:00",
      "HORA_FIN": "16:01:00",
      "MOTIVO": "1",
      "ACTIVO": "1",
      "NOMBRE": "Stand By",
      "HORA_STAND": true
  },
  {
      "ID": "61453",
      "ACTIVIDAD": "Inicio y termino de trabajo",
      "FECHA": "2023-05-06",
      "ID_PROYECTO": "270",
      "ID_AEROGENERADOR": "16190",
      "HORA_INICIO": "16:02:00",
      "HORA_FIN": "17:02:00",
      "NOMBRE": "2",
      "COMENTARIOS": "Mantenimiento exitoso al ascensor de emergencia"
  },
  {
      "ID": "22270",
      "ACTIVIDAD": "Salida de parque",
      "HORA_INICIO": "17:08:00",
      "HORA_FIN": "18:08:00",
      "COMENTARIOS": "Salida del parque desde WTG02",
      "NOMBRE": ""
  }
];

function TimeForm( time ){
  if( time > 0 && time < 10 ) return `0${time}`;
  if( time <= 0 ) return `00`;
  return time.toString()
}

function RestaDeHoras( hora1 , hora2 ){
  const [ horaExtra , minutoExtra ] = hora1.split( ":" ).map( element => parseInt( element ) );
  const [ horaStandby, minutoStandby ] = hora2.split( ":" ).map( element => parseInt( element ) );
  if( horaExtra < horaStandby ) return;
  const horasTotales = horaExtra - horaStandby ;
  if ( minutoExtra < minutoStandby && horaExtra === horaStandby ) {
      return;
  } else if ( minutoExtra < minutoStandby ){
      const minutosAcumulados = ( horasTotales * 60 ) + minutoExtra ;
      const  minutosTotales = minutosAcumulados - minutoStandby ;
      return `${ TimeForm( Math.trunc( minutosTotales / 60) ) }:${ TimeForm( minutosTotales % 60 ) }`;
  } else {
      return `${ TimeForm( horaExtra - horaStandby ) }:${ TimeForm( minutoExtra - minutoStandby ) }`;
  }
}

function SumatoriaHorasTrabajadas( array ){
  const horas_minutos = array.map( element => element.split( ":" ).map( item => parseInt( item ) ) );
  const horas_acumuladas = horas_minutos.reduce( (Acumulador, element) => Acumulador + element[0], 0 );
  const minutos_acumulados = horas_minutos.reduce( (Acumulador, element) => Acumulador + element[1], 0 );
  if( minutos_acumulados >= 60 ){
      return `${ TimeForm( horas_acumuladas + Math.trunc( minutos_acumulados / 60) ) }:${ TimeForm( minutos_acumulados % 60 ) }`;
  } else {
      return `${ TimeForm( horas_acumuladas ) }:${ TimeForm( minutos_acumulados ) }`;
  }
}
// DATA PERO CON LA DURACION DE LA ACTIVIDAD
const usableData = data.map( ( actividad ) => ( { 
  ...actividad, 
  "TIEMPO_DE_ACTIVIDAD" : RestaDeHoras( actividad.HORA_FIN , actividad.HORA_INICIO  ) 
} ) );
console.log( usableData );

let horasEfectivasAcumuladas = "00:00";
let flag = 0;
usableData.forEach( ( actividad ) => {
  horasEfectivasAcumuladas = SumatoriaHorasTrabajadas( [ horasEfectivasAcumuladas , actividad.TIEMPO_DE_ACTIVIDAD ] );
  if ( flag === 0 ) {
    
  } else {
    if( horasEfectivasAcumuladas >= "09:30") {
      actividad.HORA_EXTRA = "00:00"
    }
  }
});
console.log( horasEfectivasAcumuladas );
console.log( horasEfectivasAcumuladas > "12:00" );
console.log( horasEfectivasAcumuladas > "11:30" );
console.log(usableData);


const horasTotales = usableData.reduce( ( acumulador , actividad ) =>  SumatoriaHorasTrabajadas([acumulador, actividad.TIEMPO_DE_ACTIVIDAD])  , "00:00");
console.log( horasTotales );