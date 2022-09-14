import './App.css';
import BotonClase from './componentes/BotonClase';
import BotonFuncion from './componentes/BotonFuncion';

function App() {
  return (
    <div className="App">
      <BotonFuncion texto="Boton Hola Mundo" />
      <br /><br />
      <BotonClase texto="Boton Clase Hola Mundo" />
    </div>
  );
}

export default App;
