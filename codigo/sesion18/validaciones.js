document.getElementById("rut").addEventListener("blur", (e) => {
	const rut = parseInt( document.getElementById("rut").value );
  
  // NaN (not a number) 
  if( isNaN(rut) ) {
  	// es que hay un error en lo que introdujo el usuario
    console.error("el RUT no es número válido");
  }
  
  if( rut > 1000000 && rut < 99999999) {
  	// es válido 
  } else {
  	// NO es válido 
    console.error("el RUT está fuera de rango.");
  }
});

document.getElementById("dv").addEventListener("blur", (e) => {
	const dv = document.getElementById("dv").value;
  const permitidos = ['0', '1','2','3','4','5','6','7','8','9','k','K'];
  
  if( !permitidos.includes(dv) ) {
  	// muestro mensaje de error
    console.error("Dígito verificador NO permitido!!!");
  }
});

document.getElementById("direccion").addEventListener("blur", (e) => {
	const direccion = document.getElementById("direccion").value;
  const expresionRegular = /[a-z ]{1,80}/i;
  if( !expresionRegular.test(direccion) ) {
  	// mostrar mensaje error 
    console.error("La dirección incluye caracteres NO válidos!!!");
  }
});