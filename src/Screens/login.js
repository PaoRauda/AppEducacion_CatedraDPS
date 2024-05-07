import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { useData } from '../DataContext';

function Login({ navigation }) {
  const { setUsuario, setUserId } = useData(); // Obtén la función setUsuario y setUserId del contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const getUsuario = async () => {
    try {
      const respuesta = await axios.get(`https://dpswebsite.000webhostapp.com/?email=${email}&password=${password}&action=ObtenerUsuario`);
      const userData = respuesta.data;
      setUsuario(userData); // Guarda los datos obtenidos de la API en "usuario"
      setUserId(userData.id); // Guarda el ID del usuario en el contexto de datos
      navigation.navigate('App');
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      setError('Usuario no encontrado');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>Bienvenido/a</Text>
        <Image
          source={require('../../assets/icons/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.buttonPrimary} onPress={getUsuario}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#2E57D1',
  },
    welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    height: 40,
    color: '#',
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: '#FF6D59',
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonPrimary: {
    borderRadius: 10,
    backgroundColor: '#53BB37',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;

