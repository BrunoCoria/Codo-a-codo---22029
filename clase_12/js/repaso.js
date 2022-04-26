// Variables

// Estructura de iteración
let alumnos = ['alan', 'alejandro', 'daiana', 'daniel'];

// Hay 4 elementos
// alan = 0
// alejandro = 1
// daiana = 2
// daniel = 3

// array.length = saber la cantidad de objetos en el array
let tamanio = alumnos.length;
console.log(tamanio);

// Recorrer el array de nombres y mostrar cada uno 
for(let i= 0; i < tamanio; i++ ) {
    console.log(i, alumnos[i], typeof alumnos[1]);
}

// foreach
for(let nombre of alumnos) {
    console.log(nombre);
}

// while
console.log('while 1')
let i = 0;
while(alumnos[i] !=='daiana') {
    console.log(i, alumnos[i]);
    i++; //Debemos incrementar el índice que usamos para recorrer el vector
}


console.log('while 2');
i=0; //reset del índice
while( i < tamanio) {

    if(alumnos[i] === 'daiana'){
        console.log(i, 'daiana');
        break; //sale del ciclo while
    }
    i++;
}

// Ahora con objetos
let alumnosObj = [
    {
        edad: 25,
        nombre: 'jose',
    },
    {
        edad: 24,
        nombre: 'martin',
    },
    {
        edad: 35,
        nombre: 'maria'
    }
];

// for / while do-while
// ¿Cómo detecto el menor de los alumnos?

let primero = true;
for(const alumnoObj of alumnosObj) {
    if(primero) {
        alumnoMasChico = alumnoObj;
        primero = false;
    }
    // Si alumnoMasChico es menor a alumnoObj, entonces pasa a ser el nuevo menor
    if(alumnoObj.edad < alumnoMasChico.edad) {
        alumnoMasChico = alumnoObj;
    }
}

// Al finalizar el ciclo for obtengo al menor
console.log('alumno mas chico', alumnoMasChico);


const vector = [ 1, 2, 1, 3, 4, 2, 1, 3, 4, 1, 2, 1, 3, 4, 1 ]

let contador = 0;
let pos =[];

for(let i = 0; i < vector.length; i++) {
    if(vector[i] === 3) {
        contador++;
        pos.push(i);
    }
}

console.log('cantidad de 3:', contador);
console.log('posiciones',pos);

// Filtrar los números > 2
let mayoresA2 = [];
for(let i of  vector) {
    if(i > 2) {
        mayoresA2.push(i);
    }
}
console.log(mayoresA2);

// filter
