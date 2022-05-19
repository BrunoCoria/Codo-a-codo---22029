// Captar el botón
const button = document.getElementById('btn-agregar');

// Agregar un evento
button.addEventListener('click',() => {
    const input = document.getElementById('input');
    
    if(input.value) {
        const existeLiEnUl = existe(input.value);
        if(!existeLiEnUl) {
            const newLi = document.createElement('li');
            newLi.innerHTML = input.value;
            newLi.id = Math.random //[0 1)
    
            // Agregar el li dentro del ul
            const ul = document.getElementById('articulos');
            ul.appendChild(newLi);
            input.value = '';
        }
    }
});

// También es una función
existe = (texto) => {
    const ul = document.getElementById('articulos');
//     for(const li of ul.childNodes) {
//         if(li.textContent === texto) {
//             existe = true;
//         }
//     }
//     


return Array.from(ul.childNodes).some(li => li.textContent === texto);
}