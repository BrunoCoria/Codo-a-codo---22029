/* Cargar personas en un array

La carga de datos finaliza con edad = 0

 Validad que los datos sean correctos:
 - nombre: no vacío, longitud < 50
 - apellido: no vacío, longitud < 60
 - edad: numérico, > 0 & < 119

 Listar las personas con errores de formato
*/ 

let personas = [];

let nombre;

// Necesito leer la edad antes de evaluarla
edad = prompt('Edad');
while(parseInt(edad) > 0 && parseInt(edad) < 119) {
    const nombre = prompt('Nombre');
    const apellido = prompt('Apellido');

    personas.push(
        {
            edad: edad,
            nombre: nombre,
            apellido: apellido,
        }
    );

        edad = prompt('Edad');

}

const errores = [];

// Aplicar validaciones
for(const persona of personas) {
    // Aplica validaciones
    if(persona.nombre || persona.nombre.length > 60) {
        errores.push(persona);
    }
    if(persona.apellido || persona.apellido.length > 50) {
        errores.push(persona);
    }
}

// Listar las personas
for(const aux of errores) {
    console.log(aux);
}

// personas.forEach(aux => console.log(aux));


