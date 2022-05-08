// Array
let nombres = ['Alejandro', 'Juan', 'Natalia', 'Sofia'];
let tamaño = nombres.length;

// Estructura de iteración
// Recorrer el array de nombres y mostrar cada uno 
// FOR
for(let i = 0; i < tamaño; i++) {
    console.log(i, nombres[i], typeof nombres);
}

// foreach
for(let nombre of nombres) {
    console.log(nombre, typeof nombre); //No necesita índice
}

// while
let i = 0;
while(nombres[i] !== 'Sofia') {
    i++;
    console.log(nombres[i]);
}

i = 0;
while(i < tamaño) {
    if(nombres[i] == 'Sofia') {
        console.log(i, 'Sofia');
        break
    }
    i++;
}

// Objetos 
let personasObj = [
    {
        edad: 25,
        nombre: 'pedro'
    },
    {
        edad: 30,
        nombre: 'valentina'
    },
    {
        edad: 27,
        nombre: 'tobías'
    }
]

// Detectar a la menor de las personas

let primero = true;
let personaMasJoven //Contiene a la personas más jóven
for(const persona of personasObj) {
    if(primero) {
        personaMasJoven = persona;
        primero = false;
    }
    // Si personaMasJoven es menor que persona, entonces pasa a ser la nueva persona más jóven
    if(persona.edad < personaMasJoven) {
        personaMasJoven = persona;
    }
}
console.log(personaMasJoven);

// Contar cuantas veces se repite el 3
contador = 0;
let pos = []; //Va a contener las posiciones en las que se repite el 3
let numeros = [1, 2, 3, 3, 2, 5, 3, 1, 3, 2, 1, 4, 2, 3, 3, 2, 3, 1, 3, 2, 4];
for(i = 0; i < numeros.length; i++) {
    if(numeros[i] === 3) {
        contador++;
        pos.push(i); //Obtener todas las posiciones en las que se repite el 3, en un objeto
        // console.log([i]) //Mostrar la posición en la que se repite el 3
    }
}
console.log('cantidad de veces que se repite 3: ' + contador);
console.log('posiciones de 3: '+ pos, typeof pos);

// Filtrar los números mayores a 2
let mayorA2 = []
for(i = 0; i < numeros.length; i++) {
    if(numeros[i] > 2 ) {
        mayorA2.push(numeros[i]);
    }
}
console.log(mayorA2);

// Filter

//let nombreVariable = nombreArray.filter(num => (condición que quiero > 2));
// console.log(nombreVariable)

let mayoresA2ConFilter = numeros.filter(num => num > 2); //Qué quiero
console.log(mayoresA2ConFilter + ' con filter')

// Variables que js evalua como false
let aux = 0;
if(aux) {
    console.log('false');
}

let aux2 = undefined;
if(aux2) {
    console.log('false');
}

let aux3 = null;
if(aux3) {
    console.log('false');
}

