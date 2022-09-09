document.addEventListener("DOMContentLoaded", (e) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini";
    fetch(url)
        .then( datosEnCrudo => datosEnCrudo.json() ) 
        .then( datos => mostrarTragos(datos.drinks) ) 
        .catch( err => console.error(err.message) ) 
});

function mostrarTragos(datos) {
    // [0].strDrinkThumb 
    // [1].strDrink 
    
    /* Tenemos 2 alternativas para modificar el DOM
    1) API DOM 
    2) Propiedad innerHTML 
    */
    const galeriaDiv = document.getElementById("galeria-fotos");

    // 1) API DOM     
    /*
    datos.forEach( (trago) => {
        // es como crear lo siguiente:
        // <img src="url-img-trago" alt="nombre-trago" />
        const imagen = document.createElement("img");
        imagen.src = trago.strDrinkThumb; 
        imagen.alt = trago.strDrink; 
        // inserto la etiqueta img en el contenedor 
        galeriaDiv.appendChild(imagen); 
    });
    */

    // 2) innerHTML 
    datos.forEach( (trago) => { 
        const imgSrc = trago.strDrinkThumb; 
        const imgAlt = trago.strDrink; 
        const imgHtml = '<img src="'+imgSrc+'" alt="'+imgAlt+'" />';
        // equivalente a galeriaDiv.innerHTML = galeriaDiv.innerHTML + "";
        galeriaDiv.innerHTML += imgHtml;
    });
}