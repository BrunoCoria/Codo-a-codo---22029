// async function getUserData(pagina) {
//     const response = await axios.get(`https://reqres.in/api/users?page=${pagina}`);
//     // ERROR404: no existe el recurso solicitado
//     // error500: error interno del servidor
//     // error401: no estás autorizado para solicitar el recurso al servidor

//     console.log(response);

//     return response;
// }

// // Asociar al botón un evento
// const btn = document.getElementById('btnGetData');

// // Asociar el evento click
// btn.addEventListener('click', async () => {
//     const paginaInput = document.getElementById('pagina')
//     if(!paginaInput.value) {
//         alert('Ingrese la página a buscar');
//         return;
//     }
//     const response = await getUserData(+paginaInput.value);

//     // Axios retorna obj.data > JSON que viene del servidor
//     const jsonData = response.data //No es el data

//     // Puedo actualizar el div con jsonData
//     // Convertir jsonData de objeto a texto
//     const jsonDataText = JSON.stringify(jsonData);

//     // Actualizo el valor del div
//     // Capturar el div por id
//     const divEnHtml  = document.getElementById('content');
//     divEnHtml.innerHTML = jsonDataText;
// })

// ------------------------------------------------

async function getUserData(pagina) {
    const response = await axios.get(`https://reqres.in/api/users?page=${pagina}`);
    // ERROR404: no existe el recurso solicitado
    // error500: error interno del servidor
    // error401: no estás autorizado para solicitar el recurso al servidor

    console.log(response);

    return response;
}

// Closure
async function outer() {

}

// Asociar al botón un evento
const btn = document.getElementById('btnGetData');

// Asociar el evento click
btn.addEventListener('click', async () => {
    const paginaInput = document.getElementById('pagina')
    if(!paginaInput.value) {
        alert('Ingrese la página a buscar');
        return;
    }
    const response = await getUserData(+paginaInput.value);

    // Axios retorna obj.data > JSON que viene del servidor
    const jsonData = response.data //No es el data

    // Puedo actualizar el div con jsonData
    // Convertir jsonData de objeto a texto
    const jsonDataText = JSON.stringify(jsonData);

    // Actualizo el valor del div
    // Capturar el div por id
    const divEnHtml  = document.getElementById('content');
    divEnHtml.innerHTML = jsonDataText;
})

