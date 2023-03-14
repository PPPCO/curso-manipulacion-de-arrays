const personas = [
    {
        nombre: "Paco",
        edad: 10,
        neduc: 'primaria'
    },
    {
        nombre: "Alan",
        edad: 11,
        neduc: 'primaria'
    },
    {
        nombre: "Karen",
        edad: 14,
        neduc: 'secundaria'
    },
    {
        nombre: "Pedro",
        edad: 15,
        neduc: 'secundaria'
    },
    {
        nombre: "Adrea",
        edad: 14,
        neduc: 'secundaria'
    },
    {
        nombre: "Rosa",
        edad: 16,
        neduc: 'preparatoria'
    },
    {
        nombre: "Luis",
        edad: 17,
        neduc: 'preparatoria'
    }
];

const perxnivel = personas.reduce((objeto, element) => {
    (!objeto[element.neduc])?// estamos accediendo a un elemento de un objeto por eso debemo de hacero asi: objeto[element.neduc], no objeto.element.neduc, podemos acceder a objetos como arreglos pero no a arreglos como objetos atentos ahi, aunque creo que aqui pues si estabamos accediendo a un objeto entonces no se porque no nos dejo usar con puntos.
    objeto[element.neduc] = 1:
    objeto[element.neduc] += 1;
    return objeto;
},{});

console.log(perxnivel);

const rangoxedad = personas.reduce((objeto, element)=> {
    if(element.edad <= 12){
        objeto['1-12'] +=1;
    }else if(element.edad > 12 && element.edad <= 15){
        objeto['13-15'] +=1;
    }else if(element.edad > 15 && element.edad <=18){
        objeto['16-18'] += 1;
    }
    return objeto;
}, {
    "1-12": 0,
    "13-15": 0,
    "16-18": 0
});
console.log(rangoxedad);

// haciendo lo mismo pero como si no hubiesemos declarado antes el objeto con los atributos inicializados.
const rangEdad = personas.reduce((objeto, element) =>{
    if(element.edad <= 12){
        if(!objeto['1-12']){
            objeto['1-12'] = 1;
        }else{
            objeto['1-12'] +=1;
        }
    }else if(element.edad > 12 && element.edad <= 15){
        if(!objeto['13-15']){
            objeto['13-15'] = 1;
        }else{
            objeto['13-15'] +=1;
        }
        // objeto['13-15'] +=1;
    }else if(element.edad > 15 && element.edad <=18){
        if(!objeto['16-18']){
            objeto['16-18'] = 1;
        }else{
            objeto['16-18'] +=1;
        }
        // objeto['16-18'] += 1;
    }
    return objeto;
},{});
console.log(rangEdad);





var newObj = {...rangoxedad, '18-24': 2}
console.log(newObj);

const personasArray = personas.map(itemt => itemt.nombre);
console.log(personasArray);

const personasArray2 = personas.map(itemt => ({...itemt, escuela: 'Jose Vasconcelos'}));
console.log(personasArray2);

const personasFiltradasxEdad = personas.filter(item => item.edad >= 12 && item.edad <= 15);
console.log(personasFiltradasxEdad);

// Convertir edad de numero a strings.
const edadPersonasaStr = personas.map((item)=>{
    item.edad = item.edad.toString();
    return item;
});
console.log(edadPersonasaStr);

console.log(`Existe algun alumno mayor a 20 anios? ${personas.some(item => item.edad > 20)}`);
// No existe ningun alumno mayor a 20 anios, por eso retornara flase

console.log(`Existe algun alumno menor a 20 anios? ${personas.some(item => item.edad < 20)}`);
// Si existen algumnos menores a 20 anios por eso nos retorna true




function calcSum(numbers){
    const niguales = numbers.every(item => item == numbers[0]);
    if (niguales) {
        return numbers.reduce((acumulador, item) => acumulador += item, 0);
    }else {
        return numbers;
    }
    if (numbers.lenght == 0) {
        return 0;
    }
}
const input1 = [1,1,1,1,1];
console.log(calcSum(input1));

const input2 =[2,4,8];
console.log(calcSum(input2));

const input3 = [];
console.log(calcSum(input3));


console.log(input1.every(item => item == input1[0]));

