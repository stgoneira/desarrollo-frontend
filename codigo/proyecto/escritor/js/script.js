window.addEventListener('DOMContentLoaded', (e) => {
    console.log("DOM Cargado...")
    let btnSuscribir = document.getElementById("btn-suscribir");
    btnSuscribir.addEventListener("click", async (e) => {
        e.preventDefault();

        try {            
            let nombre      = document.getElementById("nombre").value;
            let email       = document.getElementById("correo").value;
            let genero      = getGenero();
            let intereses   = getIntereses();
            let suscriptor  = {
                    nombre,
                    email,
                    genero,
                    intereses 
            };        
            //const url   = `https://frontend-course-336a0-default-rtdb.firebaseio.com/suscriptores.json`;        
            const url = "https://learningfirebase-fcaed-default-rtdb.firebaseio.com/suscriptores.json";
            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(suscriptor)
            });
            if( !respuesta.ok ) {
                throw new Error("Error en la respuesta. Código: "+respuesta.status);
            }
            const data = await respuesta.json();
            mostrarExito(`Se ha guardado su suscripción con ID: ${data.name}`)
        } catch( e ) {
            mostrarError(e.message);
        }
        return false;
    });    
});

function getIntereses() {
    const arr = document.querySelectorAll("input[type='checkbox'][name='intereses']:checked");
    let intereses = [];
    arr.forEach( i => intereses.push(i.value));
    if(arr.length == 0) {
        throw new Error("Debe seleccionar al menos un tema de interés");
    }
    return intereses;
}

function getGenero() {
    const arr = document.querySelectorAll("input[type='radio'][name='genero']:checked");
    if(arr.length == 0) {
        throw new Error("Debe seleccionar su género");        
    }
    return arr[0].value;
}

function mostrarMensaje(idContenedor, mensaje) {
    const ul = document.querySelector(`#${idContenedor} ul`);
    const li = document.createElement("li")
    const liContent = document.createTextNode( mensaje )
    li.appendChild( liContent )
    ul.appendChild(li);
}

function displayMensajeExito(b) {
    const idExito = "form-suscripcion-exito";
    const idError = "form-suscripcion-error";
    
    if( b ) {        
        document.getElementById(idExito).style.display = "block";
        document.getElementById(idError).style.display = "none";
    } else {
        document.getElementById(idExito).style.display = "none";
        document.getElementById(idError).style.display = "block";
    }
}

function mostrarExito(mensaje) {
    const idExito = "form-suscripcion-exito";
    displayMensajeExito(true);
    mostrarMensaje(idExito, mensaje);
}

function mostrarError(mensaje) {
    const idError = "form-suscripcion-error";
    displayMensajeExito(false);
    mostrarMensaje(idError, mensaje);
}