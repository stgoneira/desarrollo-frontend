import { useState } from 'react';
import './App.css';
import MiContexto from './componentes/MiContexto';

function App(props) {
  const [trago, setTrago]   = useState(""); 
  const [buscar, setBuscar] = useState(false); 

  const estado = {
    trago, setTrago,
    buscar, setBuscar
  };

  return (    
    <MiContexto.Provider value={estado}>
      <div className="App">
        {props.children}
      </div>
    </MiContexto.Provider>    
  );
}

export default App;
