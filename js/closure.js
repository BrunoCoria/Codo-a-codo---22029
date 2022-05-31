function add(primero) {
    function adder(segundo){
        console.log(primero + segundo);
    }
    return adder;
}

const addButton = document.getElementById('button').addEventListener('click', () => {
    const sumar = add(50);
    sumar(25); 
})