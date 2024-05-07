import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto de datos
const DataContext = createContext();

// Hook personalizado para acceder al contexto de datos
export const useData = () => useContext(DataContext);

// Proveedor de datos que envuelve la aplicación
export const DataProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    telefono: '',
  });

  // Función para actualizar los datos del usuario
  const updateUsuario = (userData) => {
    // Aquí puedes realizar lógica adicional, como enviar los datos al servidor
    // Por ahora, simplemente actualizamos el estado local del usuario
    setUsuario(userData);
  };

  return (
    <DataContext.Provider value={{ usuario, setUsuario, updateUsuario }}>
      {children}
    </DataContext.Provider>
  );
};
