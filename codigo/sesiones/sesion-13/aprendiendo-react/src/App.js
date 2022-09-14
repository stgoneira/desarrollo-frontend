import logo from './logo.svg';
import './App.css';
import Cabecera from './componentes/Cabecera';
import BotonMeGusta from './componentes/BotonMeGusta';

function App() {
  return (
    <div className="App">
      <Cabecera titulo="Aprendiendo React" /> 

      <Cabecera titulo="Otro título" /> 

      <BotonMeGusta />
      <br /><br />
      <BotonMeGusta />
    </div>
  );
}

export default App;
