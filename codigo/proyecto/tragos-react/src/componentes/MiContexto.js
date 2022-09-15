import React from 'react';

export const miContextoDefaultValues = {
    trago: "",
    setTrago: (t) => {},
    buscar: false,
    setBuscar: (b) => {} 
};
const MiContexto = React.createContext(miContextoDefaultValues);

export default MiContexto;
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export