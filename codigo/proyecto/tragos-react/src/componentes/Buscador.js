import { useContext } from "react";
import MiContexto from "./MiContexto";

function Buscador(props) {
    const contexto = useContext(MiContexto);

    return (
        <form>
            <p>Escriba el nombre del trago que desea buscar:</p>
            <input type="text" value={contexto.trago} onChange={(e) => contexto.setTrago(e.target.value)} />
            <button type="button" onClick={() => contexto.setBuscar(true)}>Buscar</button>
        </form>
    )
}

export default Buscador;