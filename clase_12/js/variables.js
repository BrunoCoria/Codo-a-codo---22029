// Variables
let edad = 10; //tipo number
console.log(edad); //no es un alert()

console.log(edad, typeof edad)

// Puedo cambiar el valor de edad
edad = 20;
console.log(edad); //no es un alert()

// Quiero definir una variable numérica, pero que no se pueda modificar su valor
const altura = 100;
console.log(altura);
// altura = 50
// console.log(altura) no se puede hacer

var nombre = 'ciro'; //Define una variable de manera global

// Tipo de dato string
let apellido = 'simon'

console.log(nombre, typeof nombre, apellido, typeof apellido);

const flag = true;
const iguales = false;

console.log(flag, typeof flag, iguales, typeof iguales);

// array de string
const nombres = []; //esto es un array de string vacio
// Para mostrar un valor del array:
// console.log( *nombreVariable[posición]* ) //posición inicia en 0
const materias = ['lengua', 'inglés', 'matemática']
//                    0         1           2
console.log(materias[1])

let materia = materias
console.log(materia[2])

console.error(materia[2]); //Muestra en la posición [2] del array como un error

// Reasignar en la variable el valor de materias[1]
console.info(materia[1]);

// Crear un objeto
// Crar un objeto persona
let persona = {
    edad: 4, //nombreAtributo: valor
    argentina: true,
    nombre: 'ciro',
    apellido: 'simon',
    idiomas: ['español','ingles'],
}

console.log(persona, typeof persona); //object

// Undefined
let perro = undefined;
// const perro = undefined / La variable no puede ser convertida en un objeto
// perro.apodo = 100; No se pueden modificar variables indefinidas
// Convertir variable undefined perro en un objeto
perro = {
    apodo: 'firulais',
}

console.log(perro, typeof perro);

let gato = e;
// gato.edad= 100;
console.log(gato, typeof gato);

// LOS TIPOS DE DATOS TIENEN FUNCIONES O MÉTODOS
let nacionalidad = '      argentina';
console.log(nacionalidad);
console.log(nacionalidad.length); //Añade los espacios adelante

nacionalidad = nacionalidad.trim();
console.log(nacionalidad);
// .trim borra los espacios antes y despues del string

nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);
// toUpperCase pone el string en mayúsculas

nacionalidad = nacionalidad.toLocaleLowerCase(); //Minúsculas
console.log(nacionalidad);

// Cantidad de caracteres de un string
console.log(nacionalidad.length);

// 1
// Hacer sumas de string
// let num = '1';
// num = +(num) + 1;
// console.log(num);

// 2
// let num = '1';
// num = parseInt(num) + 1;
// console.log(num);

// 3

let num = '1';
num = Number(num) + 1;
console.log(num);

// Nan se da cuando quiero convertir a número un texto no numérico

let ValFlotante = 175.5;
console.log(parseInt(ValFlotante)) //parseInt no muestra las decimales
console.log(parseFloat(ValFlotante)) //parseFloat si
console.log(Number(ValFlotante)) //Number también





// Variables
// Tipo 'number': let edad = 10;
// string: let apellido = simon;
// Undefined: let perro = undefined;

// Comandos
// let = definir variable
// var = definir variable global
// console.log = informar cada dato y su valor 
// typeof = mostrar tipo de dato en consola [(console.log(typeof dato)]

// Objeto
//let persona = {
//  edad: 4, //nombreAtributo: valor
//  argentina: true,
//  nombre: 'ciro',
//  apellido: 'simon',
//  idiomas: ['español','ingles'],
// }

// Métodos
// .trim borra los espacios antes y despues del string
// .toUpperCase pone el string en mayúsculas
// .toLowerCase pone el string en minúsculas
// length cuenta los caracteres del string

