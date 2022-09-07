document.addEventListener("DOMContentLoaded", (e) => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
        .then( (raw) => raw.json() )
        .then( (fotos) => mostrarFotos(fotos) )
        .catch( (err) => console.error(err.message) )
    ;
});

function mostrarFotos(fotos) {
    console.dir(fotos);
}