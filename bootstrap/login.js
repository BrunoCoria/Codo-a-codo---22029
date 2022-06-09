// capturo el evento click del login button
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async() => {
    login();
})

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validaciones
    if(!username || !password) {
        return
    }

    // const response = await axios.post(`https://reqres.in/api/login`, {
    //     'email': username,
    //     'password': password
    // });

    const response = axios.post(`https://reqres.in/api/login`, {
        'email': username,
        'password': password
    }).then(function (response){
        // Salio todo bien
        localStorage.setItem('token', response.data.token);
        window.location = 'home.html';
    })
    .catch(function (error){
        // Se rompió por algo
        localStorage.removeItem('token', response.data.token);
        alert(error);
    })

    console.log(response);

    return response;
}

