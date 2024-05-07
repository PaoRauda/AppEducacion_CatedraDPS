import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usuario, setUsuario] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [userId, setUserId] = useState([]); // Agrega el estado para el ID del usuario
  

  return (
    <DataContext.Provider
      value={{
        usuario,
        setUsuario,
        cursos,
        setCursos,
        eventos,
        setEventos,
        userId, // Agrega el estado del ID del usuario al contexto
        setUserId, // Agrega la función para establecer el ID del usuario al contexto
      }}
    >
      {children}
    </DataContext.Provider>
  );
};



export const useData = () => useContext(DataContext);
