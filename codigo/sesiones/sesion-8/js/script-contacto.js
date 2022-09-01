// # nombres con los que se puede acceder a la funcionalidad
// de JQUERY 
// ========================================
// $
// jQuery  

// esto sería análogo a DOMContentLoaded 
$(document).ready(function() {
    // similar a querySelectorAll()
    // param es un string con selector CSS 
    $("#cabecera").load("parts/header.html");
    $("#pie-pagina").load("parts/footer.html");

    $("#btn-contacto").on("click", function(){
        const email = $("#exampleFormControlInput1").val(); 
        const mensaje = $("#exampleFormControlTextarea1").val();
        console.dir({email, mensaje});
    });
});