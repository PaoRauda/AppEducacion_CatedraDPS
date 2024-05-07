import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function Biblioteca() {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const renderLink = (url, text) => {
    return (
      <TouchableOpacity onPress={() => openLink(url)}>
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const Card = ({ title, links }) => (
    <View style={styles.card}>
      <Text style={[styles.texto, styles.titulo]}>{title}</Text>
      <View style={styles.linkContainer}>
        {links.map((link, index) => (
          <View key={index} style={styles.linkItem}>
            {renderLink(link.url, link.text)}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Biblioteca</Text>
        <Text style={styles.subHeaderText}>Bienvenido a tu biblioteca donde podrás encontrar más temas de tu interés, que te ayudarán a tu desarrollo personal</Text>
      </View>
      <Card
        title="Diplomados en Idiomas:"
        links={[
          { url: 'https://www.uv.mx/pozarica/cadi/files/2019/11/Ingles-1-Tema-1.pdf', text: 'TÉC. EN IDIOMA INGLÉS' },
          { url: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros_contenido/arxius/41/40469_Frances_Facil.pdf', text: 'TÉC. EN IDIOMA FRANCÉS' },
          { url: 'https://www.euskadi.eus/contenidos/informacion/dic6_programaciones_por_idioma/es_def/adjuntos/portugues/portugues_A1_c.pdf', text: 'TÉC. EN IDIOMA PORTUGUÉS' }
        ]}
      />
      <Card
        title="Diplomados en Informática y Negocios:"
        links={[
          { url: 'https://gc.scalahed.com/recursos/files/r161r/w25469w/ingdelsoftwarelibro9_compressed.pdf', text: 'TÉC. OPERADOR EJECUTIVO DE SOFTWARE' },
          { url: 'https://www.conalepveracruz.edu.mx/iniciobackup/wp-content/uploads/2021/03/Mantenimiento-de-equipo-de-cómputo-básico-MÓDULO-PROFESIONAL.pdf', text: 'TÉC. EN REPARACIÓN Y MANTENIMIENTO DE PC' },
          { url: 'https://www.colibri.udelar.edu.uy/jspui/bitstream/20.500.12008/307/1/M-CD4103.pdf', text: 'TÉC. EN CALL CENTER Y MARKETING' },
          { url: 'https://www.recope.go.cr/wp-content/uploads/2013/10/Asistente-de-Contabilidad.pdf', text: 'TÉC. ASISTENTE CONTABLE ADMINISTRATIVO WEB' },
          { url: 'https://www.usac.edu.gt/empleos/archivos/_Anuncio-Asistente-de-Gerencia-Bilingue-noviembre-2019--TRANSOIL.pdf', text: 'TÉC. SECRETARIADO EN GERENCIA BILINGÜE' },
          { url: 'https://fad.es/wp-content/uploads/2019/05/Manual-de-atención-al-Cliente.pdf', text: 'TÉC. ASISTENTE EJECUTIVO DE ATENCIÓN AL CLIENTE' }
        ]}
      />
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFBA6A',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
  },
  linkContainer: {
    alignItems: 'flex-start', // Alineación izquierda
  },
  linkItem: {
    marginBottom: 5, // Espacio entre links
  },
  linkText: {
    fontSize: 16,
    color: '#000', // Color negro
    fontFamily: 'Arial',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default Biblioteca;
