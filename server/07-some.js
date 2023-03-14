const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo"
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15,30),
        title: "Cita con mi gefe"
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena"
    },
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo"
    }
];
console.log(dates[0].endDate);

console.log((dates[0].endDate == dates[0].endDate)? true : false);
//Mon Feb 01 2021 11:00:00 GTM-600 (hora estándar central)



const newAppointment ={
    startDate: new Date(2021, 1, 1, 11, 20),
    endDate: new Date(2021, 1, 1, 20, 30)// 8:30
};
console.log(newAppointment.startDate > dates[0].startDate);


// Entonces vamos a hcer el ejecicio de abajo sin usar librerias, pues no le veo el chiste a estar importando una para algo tan simple
const verificar = function(agenda, cita){
    return agenda.some(item => (cita.startDate >= item.startDate && cita.startDate <= item.endDate) || (cita.endDate >= item.startDate && cita.endDate <= item.endDate));

    /* 
    cita.startDate >= agenda.startDate && cita.startDate <= item.endDate
     */
}
console.log(verificar(dates, newAppointment));

/* 
Y bueno si trabaja solo que le hecharia un ojito mas a la condicion porque creo que ya me equivoque, bueno no, pero si estoy poniendo cosas inecesarias, CORREGIDO Y YA QUEDO BIEN.
 */



const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
};

console.log(isOverlap(newAppointment));



/* 
Desafio

Tu reto es  retornar 'true' si dentro de un array de numeros al menos uno es un numero par, para solucionarlo vas a encontrar una funcion llamada 'checkArray' que recibe un parametro de entrada:
    -numbres: un array de numeros

Dentro del cuerpo de la funcion checkArray debes de escribir tu solucion:

Ejemplo 1:
input: [1,3,5,7,10,11]
output: true


Ejemplo 2:
input: [1,3,5]
output: flase

Ejemplo 3:
input:[],
output: flase
 */


const checkArray = function(numbers){
    // return numbers.some(item => (item % 2 == 0)? true : false);
/* La anterior pues no es necesaria porque, hasta eso esta mal, asi que la sgunda es correcta */
    return numbers.some(item => item % 2 == 0);

}
console.log(checkArray([1,3,5,7,10,11]));

