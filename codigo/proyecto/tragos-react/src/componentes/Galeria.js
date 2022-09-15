import { useContext, useEffect, useState } from "react";
import MiContexto from "./MiContexto";

function Galeria(props) {
    const contexto = useContext(MiContexto);

    const [buscandoTexto, setBuscandoTexto] = useState("");
    const [fotos, setFotos]                 = useState([]);

    useEffect(() => {
        if( !contexto.buscar ) {            
            // no hacer nada            
        } else {
            // buscar los tragos 
            console.log(`Buscando el trago ....:${contexto.trago}`);
            setBuscandoTexto(`Buscando el trago ....:${contexto.trago}`);
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${contexto.trago}`;
            fetch(url)
                .then( raw  => raw.json() )
                .then( data => setFotos(data.drinks) ) 
                .catch( err => {
                    console.error(err.message);
                })
                .finally( () => setBuscandoTexto('') ) 
            ;
            
            contexto.setBuscar(false);
        }
    }, [contexto]);

    return (
        <div>
            <h1>Galería</h1>
            <p>{buscandoTexto}</p>
            <div style={{display: "flex", flexWrap: "wrap"}}>
            { 
                fotos?.map(f => 
                    <img 
                        key={f.idDrink} 
                        src={f.strDrinkThumb} 
                        alt={f.strDrink} 
                        style={{width: "50%"}}
                    />
                )
            }
            </div>
        </div>
    )
}

export default Galeria;