window.addEventListener('DOMContentLoaded', (e) => {
    console.log("DOM Cargado...")
    let btnSuscribir = document.getElementById("btn-suscribir");
    btnSuscribir.addEventListener("click", (e) => {
        e.preventDefault();
        let nombre      = document.getElementById("nombre").value;
        let esMasculino = document.getElementById("masculino").checked;
        let marketingDirecto = document.getElementById("marketing-email").checked;
        console.log(nombre);
        return false;
    });
    
});