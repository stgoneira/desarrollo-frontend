document.addEventListener("DOMContentLoaded", (e) => {
    //const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini";
    fetch(url)
        .then( (raw) => raw.json() )
        .then( (fotos) => mostrarFotos(fotos.drinks) )
        .catch( (err) => console.error(err.message) )
    ;
});

function mostrarFotos(fotos) {
    const contenedor = document.getElementById("fotos");
    fotos.forEach((f) => {
        const imagen = document.createElement("img");
        imagen.src = f.strDrinkThumb;
        imagen.alt = f.strDrink;        
        contenedor.appendChild(imagen);
    });
}