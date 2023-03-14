/* Reduce toma un array y lo reduce a un solo valor, no devuelve otro array como array o filter con los elementos que cumplen una condicion. No deberia retornar un array, en algunos casos lo hace pero depende del codigo que le demos.
Este se utiliza mucho para hacer calculos, por ejemplo en cienca de datos podriamos sacar todos lo totales y sacar una suma total de todas las ventas de mes, o un promedio o un minimo, maximo, etc.
  */

const total = [1,2,3,4];

// Haciendolo con un for
let suma = 0;
for (let index = 0; index < total.length; index++) {
    const element = total[index];
    suma += element;
}
console.log("Total: " + suma);

const rta = total.reduce((sum,element) => sum + element, 0);
/* 
A reduce le tenemos que pasar 2 variables, en este caso el primer parametro es el arrw function y el segundo parametro es el estado inicial de sum.

En los parametos de la funcion que le pasamos como primer elemento, tenemos que pasarle la variable o declarar el elemento que sera el acumulador, despues como segundo parametro tenemos que pasarle doonde queremos que inicie, nosotros le pasamos 0 para que desde ahi comience a acumular los valores del arreglo, pero podemos empezarlo desde 10 o cualquier otro numero

Investigando mas encontre la siguiente definicion de este metodo, la cual me gusto mucho y dice lo siguiente:

El metodo reduce() aplica una funcion  a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un unico valor.

Va elemento por elemento acumulando el valor al atributo de la funcion que declaramos y desde donde le indicamos que inicie,
CON REDUCE TENEMOS UN ARRAY Y LO REDUCE A UNO SOLO a veces a mas pero eso ya lo veremos despues
 */

// ESTUDIAR MAS ESTO QUE ES MUY IMPORTANTE E UTIL
console.log(`Respuesta con reduce: ${rta}`);



//  MAS FUNCIONES DE ARREGLOS


/* 
        Some()

  El metodo some() verifica si algun elemento de un array cumple con el test implementado por la funcion brindad. Si se apreuba, devuelve "true" de lo contrario false.
  
  Es importante destacar que nos regresara true apenas ecuentre un elemento dentro de arreglo que cumpla con la condicion. Es importante tener en cuenta esto
 */

let arr = [1,2,3,4,5,6,7];
console.log(arr.some((element) => element > 3)); // Nos arrojara true porque si hay un elemento que es mayor a 3
console.log(arr.some((element) => element > 7)); // Nos arroja false porque no hay algun elemento que sea mayor que 7

//  haciendolo con un for, vemos que denuevo con el for usamos mas linas, lo cual es inecesario, ademas de que en este caso solo nos regresara true, porque si le ponemos que retorne false si la condicion no se cumple, sucedera que nos retornara false por cada elemento del arreglo lo cual es muy engorroso, si podriamos hacer que nos regrese un flase nadamas, pero implicaria mas lineas, o al si colocamos luego luego un return que nos regtorne false, al primer elemento queno cumpla la condicion terminara la ejecucion, lo cual no permitira que se "escaneen" o evaluen todos los elementos del arreglo, en fin, mejor usemos some.
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(element > 3){
    return console.log("desde un for: " + 'true');
  }
}


/* 
      EVERY

  El metodo every() verifica si todos los elementos en el arreglo pasan la prueba implementada por la funcion dada.

 */
// Ejemplo: usaremos el arreglo definido con la variable arr
arr = [1,2,3,4,5,6,7];
console.log(arr.every((element) => element < 10));// aqui nos regresa 'true' porque todos los elemtos son menores a 10
console.log(arr.every((element) => element > 4)); // nos regresa falase porque no todos los elementos son mayores a 4
console.log(arr.every((element) => typeof element == "number" ));// nos arroja true porque todos los elemento del arreglo son de tipo numerico

// Podriamos hacer esto tambien con un for each, pero creo que el proceso seria mucho mas largo porque ahorita pensando rapido podriamos hacer o que al primer elemento que no cumpla con la condicion nos regrese false, y en base a ello si no nos regresa false es porque los elementos si cumplen con la funcion y por ende es true, o hacer que por cada elemento que si cumpla la condicion, agarre y sume 1 a una variable para despues cuando termine el for hagarrar y pregundar si el valor acumulado de la varible es igual al .length del array, si son iguales sera true, si no false, Osea es mas relajo, sin ebargo con el uso de every vemos que es mucho mas facil todo, por lo tanto, MEJOR USEMSO EVERY

console.log(`Existe algun alumno mayor a 20 anios? ${personas.some(item => item.edad > 20)}`);
