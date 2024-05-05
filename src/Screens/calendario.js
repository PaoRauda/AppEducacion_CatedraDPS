import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import (useData) from '../DataContext'

const Calendario = ({ email, password }) => {
  const [usuario, setUsuario] = useState(null); // Estado para almacenar los datos del usuario
  const [actividades, setActividades] = useState({});

  useEffect(() => {
    // Llama a la función para obtener los datos del usuario cuando el componente se monta
    getUsuario();
  }, []);

  const getUsuario = async () => {
    try {
      const response = await axios.get('https://dpswebsite.000webhostapp.com/index.php?estudiante_id=1&action=ObtenerEventos');
      setUsuario(response.data); // Guarda los datos obtenidos de la API en "usuario"
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calendario de Actividades</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          // Configuración del calendario
          onDayPress={(day) => { console.log('selected day', day) }}
          // Aquí se pueden personalizar los aspectos de las fechas según las actividades
          markedDates={actividades}
          style={styles.calendar}
        />
      </View>
      {usuario && (
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Usuario: {usuario.nombre}</Text>
          <Text style={styles.userInfoText}>Email: {usuario.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 60,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  calendarContainer: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  calendar: {
    width: '100%',
    borderRadius: 10,
  },
  userInfo: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Calendario;


