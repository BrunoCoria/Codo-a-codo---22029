const token = localStorage.getItem('token');
const navbarSupportedContent = document.getElementById('navbarSupportedContent');

if(!token) {
    // Oculto el navbar
    navbarSupportedContent.className = "hide";
} else {
    window.location = 'home.html'; 
}