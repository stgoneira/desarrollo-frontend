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

        const baseUrl = "https://frontend-course-336a0-default-rtdb.firebaseio.com";
        const url     = baseUrl + "/mensajes.json"; 
        $.ajax(url, {
            method: "POST",
            data: JSON.stringify({email, mensaje})
        }).done(function(d){
            alert("Se insertó su mensaje con ID: "+d.name);
        }).fail(function(){
            alert("Su mensaje no pudo ser guardado, por favor contacte al administrador!!!"); 
        });
    });
});