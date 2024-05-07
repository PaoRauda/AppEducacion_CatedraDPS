import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Bienvenido a ESC Educación</Text>
        <Text style={styles.paragraph}>ESC Educación es una Institución especializada en impartir cursos de Idioma avanzado, Técnicos en asistencias contables, Computación, Administración de empresas y ¡más! Gracias por formar parte de nuestra Institución</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/ESC.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFBA6A',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Alinear el contenido al centro horizontalmente
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  // Footer Estilos Copiados de Acerca
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2E57D1',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#FFF',
  },
  footerText2: {
    fontSize: 12,
    color: '#F88B74',
  }
});

export default Inicio;
