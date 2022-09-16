import { useContext, useEffect, useState } from "react";
import { MiContexto } from "./MiContexto";

function Galeria(props) {
    const contexto = useContext(MiContexto);

    const [fotos, setFotos] = useState([]);

    const [textoCargando, setTextoCargando] = useState("");

    // usamos useEffect() para escuchar los cambios 
    // del 2do parámetro, en este caso, la variable contexto 
    useEffect(() => {
        if( contexto.trago.length > 3 ) {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+contexto.trago;
            setTextoCargando("Cargando fotos...");
            fetch(url)
                .then( raw => raw.json() ) 
                .then( datos => setFotos(datos.drinks)  )
                .catch( err => console.error(err.message) )
                .finally( () => setTextoCargando("") )
            ;
        }
    }, [contexto]); 

    return (
        <section style={{backgroundColor: "#ccc"}}>
            <h2>{props.titulo}: {contexto.trago}</h2>
            <span>{textoCargando}</span>
            
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {fotos.map( f => 
                    <img 
                        key={f.idDrink} 
                        src={f.strDrinkThumb} 
                        style={{width: "30%"}}
                    /> 
                )}
            </div>

        </section>
    )
}
export default Galeria; 