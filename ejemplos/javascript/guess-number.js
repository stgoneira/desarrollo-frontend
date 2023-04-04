const numeroMaximo = 10
/* Math.random() genera un número entre 0 y 1, donde es igual o mayor que 0 y menor que 1 */
const numero = Math.floor( Math.random()*numeroMaximo ) +1  // genera número entre 1 y 100 
console.log(numero)

const numeroUsuario = prompt("Ingrese un número entre 1 y "+numeroMaximo);
console.log(numeroUsuario);

if( numeroUsuario == null ) {
    alert("Gracias por jugar con nosotros");
} else if( numeroUsuario == numero ) {
    alert("Ganaste!!!");
} else {
    alert("Inténtalo de nuevo...");
    location.reload();
}