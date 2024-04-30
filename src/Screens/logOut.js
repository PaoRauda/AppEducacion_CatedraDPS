import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useData} from '../DataContext'


function LogOut({navigation}) {
  const {usuario, setUsuario } = useData();
  setUsuario("");
  navigation.navigate("Login");
}
export default LogOut;