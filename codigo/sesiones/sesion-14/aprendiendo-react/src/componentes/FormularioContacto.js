import { useState } from "react";

function FormularioContacto() {
    const [nombre, setNombre]   = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarDatos = () => {
        const baseUrl = 'https://frontend-course-336a0-default-rtdb.firebaseio.com';
        const path = '/react.json';
        const url = baseUrl+path;
        const datos = {
            nombre,
            mensaje
        }
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify( datos )
        })
            .then( raw => raw.json() )
            .then( data => console.dir(data) )
            .catch( err => console.error(err.message) )    
        ;
    };

    return (
        <>
        <form>
            Nombre: <br />
            <input 
                type="text" 
                value={nombre} 
                onChange={
                    (e) => setNombre(e.target.value) 
                }
            /><br />
            Mensaje: <br />
            <textarea
                value={mensaje}
                onChange={
                    (e) => setMensaje(e.target.value)
                }
            ></textarea>
            <br />
            <button
                type="button"
                onClick={ enviarDatos }
            >
                Enviar
            </button>
        </form>
        <div>
            Nombre: {nombre}<br />
            Mensaje: {mensaje}
        </div>
        </>
    );
}

export default FormularioContacto; 