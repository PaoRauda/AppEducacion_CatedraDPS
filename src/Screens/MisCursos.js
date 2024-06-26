import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useData } from '../DataContext'; // Importa el contexto de datos

function MisCursos({ navigation }) {
  const { userId } = useData(); // Obtiene el ID del usuario del contexto de datos
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log('Valor de userId:', userId); // Agrega un console.log para verificar userId

  useEffect(() => {
    if (userId) { // Verifica que el ID del usuario esté disponible
      fetch(`https://dpswebsite.000webhostapp.com/index.php?estudiante_id=${userId}&action=ObtenerCursosInscritos`)
        .then(response => response.json())
        .then(data => {
          // Filtrar los cursos por el estado "inscrito"
          const cursosInscritos = data.filter(curso => curso.estado === 'inscrito');
          setCursos(cursosInscritos);
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
      <Text style={styles.title}>Mis Cursos</Text>
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
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Inscribirse')}>
            <Text style={styles.buttonText}>Inscribirse a Diplomado</Text>
          </TouchableOpacity>
        </>
      )}
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contactos 2237-0901 o esc.educacion@gmail.com</Text>
        <Text style={styles.footerText2}>Educación de calidad con Proyección Social</Text>
      </View>
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
  footer: {
    backgroundColor: '#222',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default MisCursos;
