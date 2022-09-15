import { useContext } from "react";
import { MiContexto } from "./MiContexto";

function Galeria(props) {
    const contexto = useContext(MiContexto);
    return (
        <section style={{backgroundColor: "red"}}>
            <h2>{props.titulo}: {contexto.trago}</h2>
            <div>
                Fotos aquí...
            </div>
        </section>
    )
}
export default Galeria; 