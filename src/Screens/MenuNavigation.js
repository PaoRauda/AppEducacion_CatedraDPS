import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importaciones de pestañas
import Calendario from './calendario';
import MisCursos from './MisCursos';
import Inscribirse from './Inscribirse';
import MiCuenta from './MiCuenta';
import Acerca from './Acerca';
import Login from './login';
import LogOut from './logOut';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


 function Cursos(){
   return(
     <Stack.Navigator>
     <Stack.Screen
        name="Mis Cursos"
        component={MisCursos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inscribirse"
        component={Inscribirse}
        options={{ headerShown: false }}
      />
     </Stack.Navigator>
   );
 }

function StackNavigatorMenu(){
  return(
  <Drawer.Navigator>
      <Drawer.Screen
        name="Calendario"
        component={Calendario}
      />
      <Drawer.Screen
        name="Cursos"
        component={Cursos}
      />
      <Drawer.Screen
        name="Mi Cuenta"
        component={MiCuenta}
      />
      <Drawer.Screen
        name="Acerca De"
        component={Acerca}
      />
      <Drawer.Screen
        name="Log Out"
        component={LogOut}
        options={{
          drawerLabel: "Log Out",
          drawerLabelStyle: {
            color: "red",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function MenuNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="App" component={StackNavigatorMenu} options={{ headerShown: false }}/>
    </Stack.Navigator>
    
  );
}

export default MenuNavigation;
