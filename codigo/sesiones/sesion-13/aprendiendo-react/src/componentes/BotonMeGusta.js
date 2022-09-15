import { useState } from "react";

function BotonMeGusta() {
    // hook useState() - permite guardar el estado 
    const [likes, setLikes] = useState(0);

    // JSX => HTML para Javascript 
    // <br /> -> HTML5 compatible y JSX compatible 
    // <br>   -> HTML5 compatible, pero no JSX compatible 
    return (
        <>
        <button
            onClick={() => setLikes(likes+1)}
        >
            Me gusta 
        </button>
        { likes > 0 && 
            <span>A {likes} les gusta esto.</span>
        }        
        </>
    )
}

export default BotonMeGusta; 