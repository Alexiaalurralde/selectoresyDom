//1
alert ("Bienvenidos a mi sitio!");

//2
let avanzar = confirm ("¿Esta seguro que desea continuar?");
terminar = document.querySelector (".terminar");

if (avanzar == false) {
    terminar.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increible"
}
else if (avanzar == true) {
    terminar.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!";

let name = prompt ("Ingrese su nombre");  
saludo = document.querySelector(".usuario");
saludo.innerHTML = "Bienvendido " + name;

edad = prompt ("¿Cual es su edad?");
if (edad > 18) {
    alert("Puede continuar con el proceso");
    oscuro = confirm ("¿Desea utilizar el modo oscuro?");
    body = document.querySelector(".body");
}
else if (edad < 18) {
    alert("Acceso denegado");
}
if (oscuro == true) {
    body.style.backgroundColor = "dimgray"; 
    body.style.color = "white";
}
 
//3
let diaDeSemana = "Domingo";
if (diaDeSemana = "Domingo") {
    alert ("¡Hoy es día de descanso!")
}
}

