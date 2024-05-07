import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

function Acerca() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Card title="Visión">
            <Text style={styles.texto}>Ser una institución líder en la modalidad educativa de enseñanza modular y complementaria ofreciendo diplomados novedosos y de bajo costo en el área de informática, idiomas, negocios y liderazgo con el fin de complementar, actualizar y suplir los conocimientos en aspectos académicos, técnicos, tecnológicos y laborales, de nuestros estudiantes basados en la enseñanza de tecnologías aplicadas con software libre.</Text>
          </Card>
          <Card title="Misión">
            <Text style={styles.texto}>Formar a nuestros estudiantes con calidad competitiva, compromiso ético, responsabilidad social y valores cristianos, proporcionándoles oportunidades para el acceso a los conocimientos en informática, lenguas extranjeras y negocios, potenciando sus capacidades para el mercado laboral según su especialidad por medio de la utilización de tecnologías basadas en software libre.</Text>
          </Card>
          <Card title="Valores Institucionales">
            <View style={styles.lastCardContent}>
              <Text style={styles.listaItem}>• Compromiso Social</Text>
              <Text style={styles.listaItem}>• Responsabilidad</Text>
              <Text style={styles.listaItem}>• Integridad</Text>
              <Text style={styles.listaItem}>• Respeto</Text>
              <Text style={styles.listaItem}>• Ética</Text>
            </View>
          </Card>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Contactos 2237-0901 o esc.educacion@gmail.com</Text>
          <Text style={styles.footerText2}>Educación de calidad con Proyeccion Social</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  header: {
    width: '100%',
  },
  card: {
    backgroundColor: '#FFBA6A',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    color: '#010000',
  },
  listaItem: {
    textAlign: 'center', // Alineado al centro
    marginBottom: 5,
  },
  lastCardContent: {
    width: '100%',
  },
  footer: {
    width: '100%',
    backgroundColor: '#2E57D1',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
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

export default Acerca;
