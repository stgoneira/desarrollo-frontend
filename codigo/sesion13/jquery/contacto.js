$("#nombre").blur((evento) => {
    const input = evento.currentTarget;
    const txtNombre = input.value;

    const feedbackNombre = $("#feedback-nombre");

    if( txtNombre.length < 3 ) {
        feedbackNombre.html("El nombre es muy corto.");

        feedbackNombre.removeClass("valid-feedback");
        feedbackNombre.addClass("invalid-feedback");

        $(input).removeClass("is-valid");
        $(input).addClass("is-invalid");
    } else {
        feedbackNombre.html("El nombre está OK.");

        feedbackNombre.removeClass("invalid-feedback");
        feedbackNombre.addClass("valid-feedback");

        $(input).removeClass("is-invalid");
        $(input).addClass("is-valid");
    }

});