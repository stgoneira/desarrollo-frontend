window.addEventListener('DOMContentLoaded', (e) => {
    console.log("DOM Cargado...")
    let btnSuscribir = document.getElementById("btn-suscribir");
    btnSuscribir.addEventListener("click", (e) => {
        e.preventDefault();
        let nombre      = document.getElementById("nombre").value;
        let genero      = getGenero();         
        let intereses   = getIntereses();
        console.dir(intereses);
        return false;
    });    
});

function getIntereses() {
    const arr = document.querySelectorAll("input[type='checkbox'][name='intereses']:checked");
    let intereses = [];
    arr.forEach( i => intereses.push(i.value));
    if(arr.length == 0) {
        mostrarError("Debe seleccionar al menos un tema de interés");
        return false;
    }
    return intereses;
}

function getGenero() {
    const arr = document.querySelectorAll("input[type='radio'][name='genero']:checked");
    if(arr.length == 0) {
        mostrarError("Debe seleccionar su género");
        return false;
    }
    return arr[0].value;
}

function mostrarError(mensaje) {
    console.error(mensaje);
}