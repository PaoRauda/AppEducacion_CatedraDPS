import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FeedBack() {
  const [curso, setCurso] = useState('');
  const [instructor, setInstructor] = useState('');
  const [instalaciones, setInstalaciones] = useState('');
  const [comentario, setComentario] = useState('');
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);

  const enviarFeedback = () => {
    setFeedbackEnviado(true);
  };

  const resetFormulario = () => {
    setCurso('');
    setInstructor('');
    setInstalaciones('');
    setComentario('');
    setFeedbackEnviado(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {!feedbackEnviado ? (
          <View>
            <Text style={styles.label}>Curso:</Text>
            <TextInput
              style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
              value={curso}
              onChangeText={text => setCurso(text)}
              placeholder="Nombre del curso"
            />
            <Text style={styles.label}>Instructor:</Text>
            <TextInput
              style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
              value={instructor}
              onChangeText={text => setInstructor(text)}
              placeholder="Nombre del instructor"
            />
            <Text style={styles.label}>Instalaciones:</Text>
            <TextInput
              style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
              value={instalaciones}
              onChangeText={text => setInstalaciones(text)}
              placeholder="Estado de las instalaciones"
            />
            <Text style={styles.label}>Comentario:</Text>
            <TextInput
              style={[styles.input, {backgroundColor: '#FFF', color: '#000', height: 100}]}
              value={comentario}
              onChangeText={text => setComentario(text)}
              multiline
              placeholder="Escribe tu comentario"
            />
            <Button title="Enviar Comentarios" onPress={enviarFeedback} color="#2E57D1" />
          </View>
        ) : (
          <View>
            <Text style={styles.confirmationText}>¡Gracias por tu comentario!</Text>
            <Button title="Enviar otro comentario" onPress={resetFormulario} color="#2E57D1" />
          </View>
        )}
      </View>
      {/* Footer Copiado de Acerca */}
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
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20, // Agregamos paddingBottom para dejar espacio para el footer
  },
  formContainer: {
    backgroundColor: '#FFBA6A',
    padding: 20,
    borderRadius: 10,
    width: '100%', // Asegura que el formulario ocupe todo el ancho
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  confirmationText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  // Footer Estilos Copiados de Acerca
  footer: {
    position: 'absolute', // Para que el footer esté fijo en la parte inferior
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
