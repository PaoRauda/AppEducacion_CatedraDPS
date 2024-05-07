import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useData, updateUsuario } from '../DataContext'; // Importa el contexto de datos

function MiCuenta() {
  const { usuario, setUsuario } = useData(); // Obtiene el usuario del contexto de datos
  const [userData, setUserData] = useState(usuario); // Estado local para los datos del usuario

  const handleChange = (field, value) => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = () => {
    updateUsuario(userData); // Llama a la función para actualizar el usuario en el contexto de datos
    setUsuario(userData); // Actualiza el usuario en el contexto local
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>ID:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.id}
            onChangeText={text => handleChange('id', text)}
            placeholder="ID"
          />
        </View>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.nombre}
            onChangeText={text => handleChange('nombre', text)}
            placeholder="Nombre"
          />
        </View>
        <View>
          <Text style={styles.label}>Apellido:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.apellido}
            onChangeText={text => handleChange('apellido', text)}
            placeholder="Apellido"
          />
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.email}
            onChangeText={text => handleChange('email', text)}
            placeholder="Email"
          />
        </View>
        <View>
          <Text style={styles.label}>Dirección:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.direccion}
            onChangeText={text => handleChange('direccion', text)}
            placeholder="Dirección"
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: '#FFF', color: '#000'}]}
            value={userData.telefono}
            onChangeText={text => handleChange('telefono', text)}
            placeholder="Teléfono"
          />
        </View>
        <Button title="Guardar" onPress={handleSave} color="#2E57D1" />
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

export default MiCuenta;
