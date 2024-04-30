import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Inscribirse({ navigation }) {

  return (
    <View>
      <Text>Inscribirse</Text>
      <TouchableOpacity  style={styles.buttonPrimary} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Regresar a Mis Cursos</Text>
      </TouchableOpacity>
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
    backgroundColor: '#838404',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Inscribirse;