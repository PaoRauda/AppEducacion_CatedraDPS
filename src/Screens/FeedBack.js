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
      {!feedbackEnviado ? (
        <View>
          <Text style={styles.label}>Curso:</Text>
          <TextInput
            style={styles.input}
            value={curso}
            onChangeText={text => setCurso(text)}
            placeholder="Nombre del curso"
          />
          <Text style={styles.label}>Instructor:</Text>
          <TextInput
            style={styles.input}
            value={instructor}
            onChangeText={text => setInstructor(text)}
            placeholder="Nombre del instructor"
          />
          <Text style={styles.label}>Instalaciones:</Text>
          <TextInput
            style={styles.input}
            value={instalaciones}
            onChangeText={text => setInstalaciones(text)}
            placeholder="Estado de las instalaciones"
          />
          <Text style={styles.label}>Comentario:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            value={comentario}
            onChangeText={text => setComentario(text)}
            multiline
            placeholder="Escribe tu comentario"
          />
          <Button title="Enviar Comentarios" onPress={enviarFeedback} />
        </View>
      ) : (
        <View>
          <Text style={styles.confirmationText}>¡Gracias por tu comentariok!</Text>
          <Button title="Enviar otro comentario" onPress={resetFormulario} />
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
    paddingHorizontal: 20,
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
});
