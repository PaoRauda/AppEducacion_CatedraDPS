import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useData } from '../DataContext'; // Importa el contexto de datos

function CursosSolicitados({ navigation }) {
  const { userId } = useData(); // Obtiene el ID del usuario del contexto de datos
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log('Valor de userId:', userId); // Agrega un console.log para verificar userId

  useEffect(() => {
    if (userId) { // Verifica que el ID del usuario esté disponible
      fetch(`https://dpswebsite.000webhostapp.com/index.php?estudiante_id=${userId}&action=ObtenerCursosInscritos`)
        .then(response => response.json())
        .then(data => {
          // Filtrar los cursos por el estado "solicitado"
          const cursosSolicitados = data.filter(curso => curso.estado === 'solicitado');
          setCursos(cursosSolicitados);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [userId]); // Asegúrate de incluir userId en la dependencia de useEffect

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos Solicitados</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View>
            {cursos.map(curso => (
              <TouchableOpacity key={curso.id} style={styles.buttonPrimary} onPress={() => navigation.navigate('DetallesCurso', { curso })}>
                <Text style={styles.buttonText}>{curso.nombre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
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
  buttonPrimary: {
    borderRadius: 10,
    backgroundColor: '#FFBA6A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonSecondary: {
    borderRadius: 10,
    backgroundColor: '#444444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CursosSolicitados;




