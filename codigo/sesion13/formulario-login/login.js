// el evento DOMContentLoaded nos asegura que nuestro código
// se va a ejecutar cuando todo el HTML ya haya sido cargado 
window.addEventListener('DOMContentLoaded', (eventoLoaded) => {    
    document.querySelector("form").addEventListener(
    "submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        const email = document.querySelector("#email").value;
        const contrasena = document.querySelector("#contrasena").value;
        const emailValido = emailEsValido(email);
        const contrasenaValida = contrasenaEsValida(contrasena);
        const usuarioOk = checkUsuario(email, contrasena);
        if( emailValido && 
            contrasenaValida && 
            usuarioOk 
        ){
            redirigirAPaginaPrincipal();
        } else {
            mostrarMensajesError();
        }
        return false;
    });
});

function redirigirAPaginaPrincipal() {
    window.location = "dashboard.html";
}

function mostrarMensajesError() {
    // <div class="alert alert-danger" role="alert">Lorem</div>
    const divAlerta = document.createElement("div");
    divAlerta.className = "alert alert-danger";
    divAlerta.setAttribute("role", "alert");
    const mensaje = document.createTextNode("Por favor revise que su email o contraseña sean correctos.");
    divAlerta.appendChild(mensaje);
    document.querySelector("#mensajes").appendChild(divAlerta);
}

function emailEsValido(email) {
    const emailRegexp = new RegExp(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
      );
      return emailRegexp.test(email);
}

function contrasenaEsValida(contrasena) {
    if( contrasena.length >= 3 ) {
        return true;
    } else {
        return false;
    }
}

function checkUsuario(email, contrasena) {
    if( email == "a@123.cl" && contrasena == "123") {
        return true;
    } else {
        return false;
    }
}