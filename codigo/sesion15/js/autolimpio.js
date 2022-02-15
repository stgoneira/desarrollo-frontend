const boton = document.getElementById("btnCalcular");
boton.addEventListener("click", () => {
    // reviso si están checkeados los servicios
    const lavadoExterior    = $("#lavadoExterior").prop("checked");
    const lavadoMotor       = $("#lavadoMotor").prop("checked");

    // creo variable para hacer cálculo
    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    // cálculo impuesto y total 
    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;

    // cargo los datos a pantalla 
    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
});

/*
function manejarEvento() {
    // acá va el código 
}

function () {
    // acá va el código 
}

() => {
    // acá va el código     
}
*/