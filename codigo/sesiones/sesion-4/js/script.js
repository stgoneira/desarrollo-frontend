// alert("Hola Mundo!!");

/* 
este es un comentario
multilínea
*/

window.addEventListener('DOMContentLoaded', (e) => {
    // con el evento DOMContentLoaded me aseguró que todas las etiquetas HTML 
    // fueron cargadas y procesadas por el browser 
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");

    // Sintaxis de variables:
    // let nombreVariable = valor;
    // más ejemplos
    //let nombre = "Santiago";
    //let edad   = 34; 

    let boton = document.getElementById("btn-suscribir");
    boton.addEventListener("click", (ev) => {
        // recuperar los valores del formulario 
        let nombre  = document.getElementById("nombre").value;
        let email   = document.getElementById("correo").value;
        let genero  = getGenero(); 
        let suscriptor = { // JSON =  JavaScript object notation 
            // clave: valor
            nombre_completo: nombre,  //nombre,
            email, // email: email,
            genero,
            fecha_registro: (new Date()).toISOString() 
        };        
        console.dir(suscriptor);
    });    
});
function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked")
    if ( inputSeleccionado == null ) {
        mostrarError("Debe seleccionar un género!!!");
        return false 
    }
    const genero = inputSeleccionado.value;
    return genero;
}

function mostrarError(mensajeDeError) {
    console.error(mensajeDeError); 
}

console.log("Hola Mundo!!");

