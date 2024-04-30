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
import {useData} from '../DataContext'

function Login({ navigation }) {
  const {usuario, setUsuario } = useData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { // Al cambiar valor de Usuario se llama el metodo validarLogin()
    if (usuario != '') {
      validarLogin();
    }
  }, [usuario]);

  const getUsuario = async () => {
      const respuesta = await axios.get('https://dpswebsite.000webhostapp.com/?email='+email+'&password='+password+'&action=ObtenerUsuario');
      setUsuario(respuesta.data) // Se guardan datos obtenidos de la API en "usuario"
  };

  const validarLogin = () => { // Se verifica que haya datos en "usuario"
    if(usuario != false && usuario != null ){ 
      navigation.navigate('App')
      } else {
        setError("Usuario no encontrado")
      }
  }

  const handleLogin = () => {
    //navigation.navigate('App')
    getUsuario();
};


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Text>Bienvenido/a{usuario.nombre}</Text>
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
      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
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
    backgroundColor: '#FFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#696276 ',
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
