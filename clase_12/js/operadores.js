// Tipos de operadores
//      Aritméticos
//      Asignación
//      Lógicos
//      Relacionales

// Operadores Aritméticos: +, - , /, % ...
let a = 10;
let b = 20;
console.log(a, b);

let c = a + b;
console.log(c);
let d = c - b;
console.log(d)

// % es el resto de una división
let anio = 2022;
// Quiero saber si 2022 es par o impar
let resto = anio % 2;
console.log(resto)

// Incremento ++
let valor = 0;
valor = valor + 1;
console.log(valor, 'valor');
valor++;
console.log(valor, 'valor')

// Operadores Lógicos
// AND &&, OR ||, NOT !
let username = 'root';
let password = '1234';

let usuarioValido = username === 'root' /*TRUE*/ && password === '1234' /*TRUE*/
//                         COMPARAR
// username === TRUE && password === TRUE = AND
// username === TRUE || password === FALSE = OR
// username === FALSE || password === TRUE = OR
// username === FALSE !! password == FALSE = NOT

// Operadores Relacionales
// Dan valores booleanos true|false
let x = 10;
let y = 20;

let xMayory = (x > y);
console.log(xMayory);


