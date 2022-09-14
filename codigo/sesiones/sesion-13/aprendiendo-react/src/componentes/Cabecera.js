// notación de función 
// también se pueden escribir como clases 
function Cabecera(props) {
    // usar JSX 

    // backgroundColor y NO background-color 
    return (        
        <header className="bg-rojo">
            <p
                style={{
                    backgroundColor: "yellow",
                    color: "green"
                }}
            >
                Título: {props.titulo}
            </p>
            <ul>
                <li>Uno</li>
                <li>Dos</li>
                <li>Tres</li>
            </ul>
        </header>
    )
}

export default Cabecera; 