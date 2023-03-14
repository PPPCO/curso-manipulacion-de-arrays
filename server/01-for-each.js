const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for ' + element);
}
// la funcion de abajo hace exactamente lo mismo
letters.forEach(item => console.log('for each ' + item));