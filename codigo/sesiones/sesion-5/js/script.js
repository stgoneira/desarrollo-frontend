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
        try {
            // recuperar los valores del formulario 
            let nombre  = document.getElementById("nombre").value;
            let email   = document.getElementById("correo").value;
            if( nombre.length < 5 ) {
                throw new Error("El nombre es demasiado corto!!!");
            }
            let genero  = getGenero(); 
            let intereses = getIntereses();
            let suscriptor = { // JSON =  JavaScript object notation 
                // clave: valor
                nombre_completo: nombre,  //nombre,
                email, // email: email,
                genero,
                intereses,
                fecha_registro: (new Date()).toISOString() 
            };        
            console.dir(suscriptor);
            guardarSuscriptor( suscriptor );
            mostrarExito("Se guardó correctamente su suscripción!!!");
        } catch(err) { 
            mostrarError(err.message); 
        }
    });    
});
function mostrarExito(mensaje) {
    // aparezca cuadro verder y
    // se muestre el mensaje 
    alert(mensaje);
    // TODO: hacer que el mensaje se muestre en el cuadro verde 
}

async function guardarSuscriptor( suscriptor ) {
    const url = "https://curso-frontend-29032-default-rtdb.firebaseio.com/suscriptores.json";
    // alternativas:
    // 1) Callbacks     
    /*
    fetch(url, {
        method: "POST",
        body:   JSON.stringify(suscriptor) 
    })
        .then( respuesta => respuesta.json() ) // devuelve una Promesa 
        .then( data => mostrarExito("Se guardó correctamente su suscripción") )
    ;
    */

    // 2) Async Await 
    const respuesta = await fetch(url, {
        method: "POST",
        body:   JSON.stringify(suscriptor) 
    });
    const data = await respuesta.json();
    mostrarExito("Se guardó correctamente su suscripción"); 
}

function getIntereses() {
    let inputIntereses  = document.querySelectorAll("input[name='intereses']:checked");
    let arrIntereses    = []; 
    
    // alternativa 1:
    //inputIntereses.forEach( nodoInteres => arrIntereses.push(nodoInteres.value) );
    
    // alternativa 2:
    for( let i = 0; i < inputIntereses.length; i++ ) {
        const interes = inputIntereses[i].value;
        arrIntereses.push(interes);
    }

    if( inputIntereses.length < 1 ) {
        throw new Error("Debe seleccionar al menos 1 tema de su interés!!!");
    }
    return arrIntereses; 
}
function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked");
    if ( inputSeleccionado == null ) {
        throw new Error("Debe seleccionar un género!!!");
    }
    const genero = inputSeleccionado.value;
    return genero;
}

function mostrarError(mensajeDeError) {
    // valor anterior "none"    
    document.getElementById("form-mensaje-error").style.display = "block";
    const ul = document.querySelector("#form-mensaje-error ul");
    const li = document.createElement("li");
    const liText = document.createTextNode(mensajeDeError);
    li.appendChild(liText); 
    ul.appendChild(li); 
}
