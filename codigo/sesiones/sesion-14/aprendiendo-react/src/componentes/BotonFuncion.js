import { useState } from "react";

function BotonFuncion(props) {
    const [likes, setLikes] = useState(0); 

    return (
        <>
        <button
            onClick={
                () => setLikes(likes + 1)
            }
        >
            {props.texto}
        </button>
        <span>A {likes} les gusta este contenido.</span>
        </>
    )
}

export default BotonFuncion;