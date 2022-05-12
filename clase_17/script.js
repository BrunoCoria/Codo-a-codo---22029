// Acceder al dom y obtener body
const bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

// Cantidad de hijos
console.log(bodyElement.length, 'el main');

// Obtener el primer hijo de body > main
const bodyTag = bodyElement[0].firstChild;
console.log(bodyTag); //#text

const mainTag = bodyElement[0].getElementsByTagName("main");
console.log(mainTag);

// Accedo vía id
const h1Tag = document.getElementById('titulo');
console.log(h1Tag);

// Acceder al elemento padre
const parentOfH1Tag = h1Tag.parentNode;
console.log(parentOfH1Tag);

// Accedo al primer y al último hijo
// firstChild, lastChild



const main = mainTag[0];

// Filtrar o eliminar los #text
for(const childOfMain of main.childNodes) {
    if(childOfMain.nodeName == '#text') {
        // Eliminar del documento los #text
        // removeChild
        main.removeChild(childOfMain);
    }
}

for(const childOfMain of main.childNodes) {
    if(childOfMain.nodeName == '#comment') {
        // Eliminar del documento los comment
        // removeChild
        main.removeChild(childOfMain);
    }
}

const firstChild = main.firstChild;
const lastChild = main.lastChild;

console.log(firstChild);
console.log(lastChild);

// Accedo al formulario por medio del DOM
let form = document.forms[0];
form = document.forms; //array

for(const f of form) {
    if(f.id === 'myForm') {

    }
}

form = document.getElementById('myForm');
const inputinform = form.getElementsByTagName('input');

for(const input of inputinform) {
    // Agregar clase .rojo a cada element
    input.className = 'rojo';
}

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p1.onclick = pRojo;

function pRojo() {
    p1.className = 'rojo';
    p2.className = 'rojo';
}


