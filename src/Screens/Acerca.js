import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Acerca() {

  return (
    <View style={styles.container}>
      <Text style={[styles.texto, styles.titulo]}>Vision</Text>
      <Text style={styles.texto}>Ser una institución líder en la modalidad educativa de enseñanza modular y complementaria ofreciendo diplomados novedosos y de bajo costo en el área de informática, idiomas, negocios y liderazgo con el fin de complementar, actualizar y suplir los conocimientos en aspectos académicos, técnicos, tecnológicos y laborales, de nuestros estudiantes basados en la enseñanza de tecnologías aplicadas con software libre.</Text>
      <Text style={[styles.texto, styles.titulo2]}>Misión</Text>
      <Text style={styles.texto}>Formar a nuestros estudiantes con calidad competitiva, compromiso ético, responsabilidad social y valores cristianos, proporcionándoles oportunidades para el acceso a los conocimientos en informática, lenguas extranjeras y negocios, potenciando sus capacidades para el mercado laboral según su especialidad por medio de la utilización de tecnologías basadas en software libre.</Text>
      <Text style={[styles.texto, styles.titulo3]}>Valores Institucionales</Text>
      <View style={styles.lista}>
        <Text style={styles.listaItem}>• Compromiso Social</Text>
        <Text style={styles.listaItem}>• Responsabilidad</Text>
        <Text style={styles.listaItem}>• Integridad</Text>
        <Text style={styles.listaItem}>• Respeto</Text>
        <Text style={styles.listaItem}>• Ética</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contactos 2237-0901 o esc.educacion@gmail.com</Text>
        <Text style={styles.footerText2}>Educación de calidad con Proyeccion Social</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  titulo: {
    color: '#00f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo2: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo3: {
    color: '#EB910E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    color: '#010000',
  },
  lista: {
    alignSelf: 'flex-start', // Alineado a la izquierda
    marginLeft: 20,
    marginBottom: 10,
  },
  listaItem: {
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#010000',
  },
  footerText2: {
    fontSize: 12,
    color: '#F88B74',
  }
});

export default Acerca;
