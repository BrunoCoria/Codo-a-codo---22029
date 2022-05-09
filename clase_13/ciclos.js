// En cada piso atiende una persona
// La persona tiene nombre y apellido
// Creo objeto persona

const persona1 = {
    nombre: 'José',
    apellido: 'López'
};

const persona2 = {
    nombre: 'Juan',
    apellido: 'Pérez'
};

const persona3 = {
    nombre: 'María',
    apellido: 'Benítez'
};

const persona4 = {
    nombre: 'Marta',
    apellido: 'Rodríguez'
};

// Recorrer el edifico hasta encontrar a José
// Cargo los objetos persona dentro del array edificio
// Primero defino los objetos y luego el array en el que los cargo
const edificio = [];
edificio.push(persona3, persona2, persona1, persona4);
// edificio = [persona1, persona2, persona3, persona4];
console.log(edificio);

// let pisoDeJose = 0;
// for(const piso of edificio) {
//     pisoDeJose++;
//     if(piso.nombre === 'José') {
//         console.log('José se encuentra en el piso ' + pisoDeJose + ' del edificio');
//     }
// }

for(piso = 0; piso < edificio.length; piso++) {
    const personaEnElPiso = edificio[piso];
    if(personaEnElPiso.nombre === 'José') {
        console.log('José esta en el piso ', piso);
        break;
    } 
}

// Otra forma de hacer el array 
const edificio2 = [
    {
        nombre: 'José',
        apellido: 'López'
    },
    {
        nombre: 'Juan',
        apellido: 'Pérez'
    },
    {
        nombre: 'María',
        apellido: 'Benítez'
    },
    {
        nombre: 'Marta',
        apellido: 'Rodríguez'
    }
]

console.log(edificio2);

// Indicar cuantas personas se van a cargar
let vector = []; //Vacío
let personas = [];

// El usuario indica el valor
let cantidadPersona = prompt('Ingrese la cantidad de usuarios');

alert(`Se van a cargar ${cantidadPersona} usuarios`); 

for(let i = 0; i < cantidadPersona; i++) {
    const nombre = prompt(`Nombre ${i}:`) //Ingresar nombre
    const apellido = prompt(`apellido ${i}`) //Ingresar apellido

    // Crear un objeto
    // 1 forma con una función
    const persona = construirPersona(nombre, apellido);
    personas.push(persona); //Agregar un objeto
}

function construirPersona(nombreParam, apellidoParam) {
    const persona = {
        nombre: nombreParam,
        apellido: apellidoParam
    };

    return persona;
}

console.log(personas);

// CUANDO USAR UN FOR OF: cuando solo quiero recorrer los datos dentro de un array sin que me importe la posición



