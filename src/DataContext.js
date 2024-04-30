import React, {createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [usuario, setUsuario] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [eventos, setEventos] = useState([]);

  return (
    <DataContext.Provider
      value={{ usuario, setUsuario, cursos, setCursos, eventos, setEventos}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);