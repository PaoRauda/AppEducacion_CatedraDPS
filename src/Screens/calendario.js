import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import { useData } from '../DataContext';

const CalendarioActividades = () => {
  const { userId } = useData();
  const [actividades, setActividades] = useState({});
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(`https://dpswebsite.000webhostapp.com/index.php?estudiante_id=${userId}&action=ObtenerEventos`)
        .then(response => response.json())
        .then(data => {
          const actividadesMarcadas = {};

          data.forEach(actividad => {
            // Se extrae la fecha de la actividad en formato 'YYYY-MM-DD'
            const fechaActividad = actividad.fecha.split(' ')[0]; 

            // Construir el objeto de marcado para la fecha
            actividadesMarcadas[fechaActividad] = {
              marked: true,
              dotColor: 'blue', // Color del punto de marcado
              selectedColor: 'green', // Color de fondo seleccionado
              actividad: actividad // Guardar la actividad en el objeto marcado
            };
          });

          setActividades(actividadesMarcadas);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userId]);

  const mostrarActividad = (day) => {
    const fechaSeleccionada = day.dateString;
    const actividad = actividades[fechaSeleccionada].actividad;
    setEventoSeleccionado(actividad);
  };

  const closeModal = () => {
    setEventoSeleccionado(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Calendario de Actividades</Text>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => { mostrarActividad(day) }}
            markedDates={actividades}
            style={styles.calendar}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={eventoSeleccionado !== null}
          onRequestClose={closeModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{eventoSeleccionado && eventoSeleccionado.tipo_evento}</Text>
              <Text style={styles.modalText}>{eventoSeleccionado && eventoSeleccionado.fecha}</Text>
              <Text style={styles.modalText}>{eventoSeleccionado && eventoSeleccionado.curso}</Text>
              {/* Agrega aquí más campos según sea necesario */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeModal}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contactos 2237-0901 o esc.educacion@gmail.com</Text>
        <Text style={styles.footerText2}>Educación de calidad con Proyección Social</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollView: {
    flexGrow: 1,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#222',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 5,
  },
  footerText2: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default CalendarioActividades;
