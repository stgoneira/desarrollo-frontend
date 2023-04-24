export default function Saludo({nombre, children}) {
    return (
        <div>
            <h1>Saludo</h1>
            <p>
                Hola Mundo {nombre}!!!! 
            </p>
            {children}
        </div>
    );
}