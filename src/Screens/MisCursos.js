import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function MisCursos({ navigation }) {

  return (
    <View>
      <Text>MisCursos</Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Inscribirse')}>
      <Text style={styles.buttonText}>Inscribirse a Diplomado</Text>
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

export default MisCursos;
