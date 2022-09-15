import './App.css';
import BotonClase from './componentes/BotonClase';
import BotonFuncion from './componentes/BotonFuncion';
import FormularioContacto from './componentes/FormularioContacto';

function App() {
  return (
    <div className="App">
      <FormularioContacto /> 
      <br /><br /><br /><br /><br />
      <BotonFuncion texto="Boton Hola Mundo" />
      <br /><br />
      <BotonClase texto="Boton Clase Hola Mundo" />
    </div>
  );
}

export default App;
