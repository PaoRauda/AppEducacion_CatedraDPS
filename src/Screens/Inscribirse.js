import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useData } from '../DataContext';
import { useNavigation } from '@react-navigation/native';

function Inscribirse() {
  const { userId } = useData();
  const [cursosDisponibles, setCursosDisponibles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (userId) {
      fetch(`https://dpswebsite.000webhostapp.com/index.php?estudiante_id=${userId}&action=ObtenerCursosSinInscribir`)
        .then(response => response.json())
        .then(data => {
          setCursosDisponibles(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  const handleSeleccionarCurso = (curso) => {
    setCursoSeleccionado(curso);
    setShowConfirmation(true);
    console.log('Curso seleccionado:', curso);
  };

  const confirmSolicitudCurso = () => {
    if (cursoSeleccionado) {
      setShowConfirmation(false);
      const cursoId = cursoSeleccionado.id;
      console.log('ID del curso seleccionado:', cursoId);
      
      // Datos a enviar al servidor
      const data = {
        estudiante_id: userId,
        curso_id: cursoId,
        action: "AgregarSolicitud"
      };

      fetch('https://dpswebsite.000webhostapp.com/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
        navigation.navigate('CursosSolicitados', { curso: cursoSeleccionado });
      })
      .catch(error => {
        console.error('Error en la solicitud de inscripción:', error);
        Alert.alert('Error', 'No se pudo completar la solicitud de inscripción.');
      });
    } else {
      Alert.alert('Error', 'No se ha seleccionado ningún curso.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos Disponibles</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {cursosDisponibles.map((curso, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cursoButton}
              onPress={() => handleSeleccionarCurso(curso)}
            >
              {curso.nombre && typeof curso.nombre === 'string' && (
                <Text>{curso.nombre}</Text>
              )}
            </TouchableOpacity>
          ))}
        </>
      )}
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('CursosSolicitados')}>
        <Text style={styles.buttonText}>Ver Cursos Solicitados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>

      {showConfirmation && (
        <View style={styles.confirmationContainer}>
          <Text>¿Desea solicitar el curso "{cursoSeleccionado ? cursoSeleccionado.nombre : ''}"?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmationButton} onPress={confirmSolicitudCurso}>
              <Text style={styles.confirmationText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmationButton} onPress={() => setShowConfirmation(false)}>
              <Text style={styles.confirmationText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cursoButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonPrimary: {
    borderRadius: 10,
    backgroundColor: '#FFBA6A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  confirmationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmationButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmationText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSecondary: {
    borderRadius: 10,
    backgroundColor: '#444444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Inscribirse;
