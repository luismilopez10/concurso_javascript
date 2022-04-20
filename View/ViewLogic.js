
start = document.getElementById('send-primary-button');

start.addEventListener("click", prueba(5), false);


function prueba(number){
    console.log(`Hola, el numero de prueba es ${number}`);
}