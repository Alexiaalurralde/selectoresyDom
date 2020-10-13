//1 

alert ("Bienvenidos a mi sitio!");

//2 a,b


let avanzar = confirm ("¿Estas seguro de querer avanzar?");

if (avanzar == false) {
    let avanzarFalse = document.querySelector (".nosigue");
    avanzarFalse.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble";
}

else if (avanzar == true) {
    let avanzarTrue = document.querySelector (".nosigue");
    avanzarTrue.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!";
}



//2 c


let nombre = prompt ("Ingrese su nombre");

let bienvenido = document.querySelector ("usuario");
bienvenido.innerHTML = "Bienvenido" + nombre;



