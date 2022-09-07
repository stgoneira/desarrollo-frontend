$(document).ready(function(){
    $("#cabecera").load("parts/header.html");
    
    $("#btn-enviar").on("click", function(){
        const email   = $("#exampleFormControlInput1").val();
        const mensaje = $("#exampleFormControlTextarea1").val();
        const baseUrl = "https://curso-frontend-29032-default-rtdb.firebaseio.com"; 
        const url     = baseUrl + "/mensajes.json";
        $.ajax(url, {
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({email, mensaje})
        }).done((dataDone) => {
            console.dir({dataDone});
        }).fail((dataFail) => console.dir({dataFail}));
    });
});