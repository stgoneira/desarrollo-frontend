import { createContext } from "react";

export const miContextoValoresPorDefecto = {
    trago: "",
    setTrago: (t) => {} 
};

export const MiContexto = createContext( miContextoValoresPorDefecto );