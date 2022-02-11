document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtNombre = input.value;

    // let o const - formas recomendadas de variables o constantes
    const feedbackNombre = document.getElementById("feedback-nombre");

    if( txtNombre.length < 3 ) {        
        feedbackNombre.innerHTML = "El nombre es muy corto.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackNombre.className = "invalid-feedback";
    } else {        
        feedbackNombre.innerHTML = "El nombre está OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackNombre.className = "valid-feedback";
    }
});