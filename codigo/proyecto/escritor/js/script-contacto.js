$(document).ready(function(){
    $("#cabecera").load("parts/header.html");
    
    $("#btn-enviar").on("click", function(){
        const email = $("#exampleFormControlInput1").val();
        const mensaje = $("#exampleFormControlTextarea1").val();
        console.dir({
            email,
            mensaje 
        });
    });
});