function texto(frase) {
    document.write("<br>");
    document.write("<br>");
    document.write(frase);
    document.write("<br>");
    document.write("<br>");
}

// while
texto("while");

let i = 0;

while(i < 11) {
    document.write(i);
    i++;
}

// do-while
texto("do-while");

function dowhile(num) {
    let i = 0;
    do {
        document.write(i);
        i++
    } while(i < num)
}

dowhile(4);

// for
texto("for");

function bucleFor(num) {
    for(let i = 0; i < num; i++) {
        document.write(i);
    }
}

bucleFor(10);

texto("array");

const array = []
array[0] = "1";
array[1] = "2";

// COMO HACER UNA GOOD PERFORMANCE EN FOR --------------------------------

const obj = {
    unArray: new Array(10000)
}

function badPerformance() {
    console.time("bad");
    for(let i = 0; i < obj.unArray.length; i++) {
        obj.unArray[1] = 'hola';
    }
    console.timeEnd('bad')
}

function goodPerformance() {
    console.time('good');

    // let longitud = obj.unArray.length;
    let unArray = obj.unArray //Ahorra tiempo al acceder al array directamente y no desde el objeto

    for(let i=0, longitud = obj.unArray.length; i < longitud; i++) {
    obj.unArray[1] = 'hola';
    }
    console.timeEnd('good');
}

badPerformance();

goodPerformance();

// foreach
texto("foreach");

let miArray = [1, 2, 3, 4];
miArray.forEach((item, index) => {
    console.log(`El valor de la posición ${index} es: ${item}`);
})

// const usuarios = [];

// let cantidadUsuarios = prompt('Cantidad de usuarios');
// i = 0;

// while(i <= cantidadUsuarios) {
//     const nombreUsuario = prompt('Ingrese el nombre del usuario');
//     const apellidoUsuario = prompt('Ingrese el apellido del usuario');

//     usuarios.push(
//         {
//         nombre: nombreUsuario,
//         apellido: apellidoUsuario
//         }
//     )
//     i++;
// }

// console.log(usuarios);

const numeros = [3, 7, 23, 6, 23, 72, 1, 745, 246, 12, 2];
let posicionesMayoresA5 = [];
let mayoresA5 = [];
const numerosTamaño = numeros.length;
let contador = 0;

for(let i = 0; i < numerosTamaño; i++) {
    if(numeros[i] > 5) {
        contador++;
        posicionesMayoresA5.push(i);
    } 
}

console.log(`El número supera a 5: ${contador} veces`)
console.log(posicionesMayoresA5)

for(const numero of numeros) {
    if(numero > 5) {
        mayoresA5.push(numero);
    }
}
console.log(mayoresA5)

let numerosFavoritos = [];
const cantidadNumeros = prompt('Cantidad de números a ingresar');
let a = 0;

while(a <= cantidadNumeros) {
    let numeroFavorito = prompt('Ingrese su número favorito');
    numerosFavoritos.push(
        {
            numero: numeroFavorito,
        }
    )
    a++;
 }

 console.log(numerosFavoritos);



 






