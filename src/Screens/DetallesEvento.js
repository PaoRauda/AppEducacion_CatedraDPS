import React from 'react';
import { View, Text } from 'react-native';

const DetallesEvento = ({ route }) => {
  // Obtener los datos del evento de los parámetros de la navegación
  const { evento } = route.params;

  return (
    <View>
      <Text>Detalles del Evento:</Text>
      <Text>Nombre: {evento.nombre}</Text>
      <Text>Fecha: {evento.fecha}</Text>
      {/* Mostrar otros detalles del evento según sea necesario */}
    </View>
  );
};

export default DetallesEvento;
