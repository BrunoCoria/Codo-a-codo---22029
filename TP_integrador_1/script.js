// Buttons
const deleteButton = document.getElementById('deleteButton');
const resumeButton = document.getElementById('resumeButton');

// Inputs
const amountInput = document.getElementById('amountInput');

// Total
const totalPrice = document.getElementById('total');

// Category
let select = document.getElementById('select');

// Ticket
const ticketPrice = 200;

resumeButton.addEventListener('click', () => {
    if(amountInput.value) {
        price();
    }
    else(alert('Ingrese la cantidad de tickets'));
})

deleteButton.addEventListener('click', () =>{
    clear();
})

function price() {
    let discount = 0;

    if(select.value == 1) {
        discount = 0.20;
    }
    if(select.value == 2) {
        discount = 0.50;
    }
    if(select.value == 3) {
        discount = 0.85;
    }
    if(select.value == 4) {
        discount = 1;
    }
    
    let price = (ticketPrice * amountInput.value);
    let discountedPrice = (price * discount)
    totalPrice.textContent = `Total a Pagar: $ ${discountedPrice}`;
}

function clear() {
    totalPrice.textContent = "Total a pagar: $";
    amountInput.value = "";
    select.value = "";
}











