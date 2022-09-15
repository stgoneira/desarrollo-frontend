import { useContext } from "react";
import { MiContexto } from "./MiContexto";

function Buscador() {
    const contexto = useContext( MiContexto ); 

    return (
        <form>
            <input 
                type="text" 
                value={contexto.trago} 
                onChange={
                    (e) => contexto.setTrago(e.target.value)
                }
            />
            <button type="button">Buscar</button>
        </form>
    )
}

export default Buscador; 