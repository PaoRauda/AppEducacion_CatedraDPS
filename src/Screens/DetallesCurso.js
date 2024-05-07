import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useData } from '../DataContext';

const DetallesCurso = ({ route, navigation }) => {
  const { curso } = route.params; // Se obtiene el curso de los parámetros de navegación
  const { userId } = useData();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Nombre del Curso: {curso.nombre}</Text>
      <Text style={styles.text}>Categoría: {curso.nombre_categoria}</Text>
      <Text style={styles.text}>Costo: {curso.costo}</Text>
      <Text style={styles.text}>
        Profesor: {curso.nombre_profesor} {curso.apellido_profesor}
      </Text>
      <Text style={styles.text}>
        Email del Profesor: {curso.email_profesor}
      </Text>
      <Text style={styles.text}>Capacidad: {curso.capacidad}</Text>
      <Text style={styles.text}>Fecha de Inicio: {curso.fechaInicio}</Text>
      <Text style={styles.text}>Fecha Final: {curso.fechaFinal}</Text>
      <Text style={styles.text}>Estado: {curso.estado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonBack: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  text: {
    marginBottom: 5,
  },
});

export default DetallesCurso;
