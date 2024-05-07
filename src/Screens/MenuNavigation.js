import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importaciones de pantallas
import Index from './Index';
import CalendarioActividades from './calendario';
import DetallesEvento from './DetallesEvento';
import FeedBack from './FeedBack';
import MisCursos from './MisCursos';
import DetallesCurso from './DetallesCurso';
import Inscribirse from './Inscribirse';
import MiCuenta from './MiCuenta';
import Biblioteca from './Biblioteca';
import Acerca from './acerca';
import Login from './login';
import LogOut from './logOut';
import CursosSolicitados from './CursosSolicitados';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack de Navegación relacionada a Eventos/Calendario
function Calendario() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E57D1',
        },
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen
        name="CalendarioActividades"
        component={CalendarioActividades}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetallesEvento"
        component={DetallesEvento}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Stack de Navegación relacionada a Cursos
function Cursos() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E57D1',
        },
        headerTintColor: '#FFF',
      }}
    >
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
      <Stack.Screen
        name="CursosSolicitados"
        component={CursosSolicitados}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetallesCurso"
        component={DetallesCurso}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackNavigatorMenu() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#2E57D1',
      }}
    >
     <Drawer.Screen
        name="Index"
        component={Index}
      />
      <Drawer.Screen
        name="Calendario"
        component={Calendario}
      />
      <Drawer.Screen
        name="Cursos"
        component={Cursos}
      />
      <Drawer.Screen
        name="Biblioteca"
        component={Biblioteca}
      />
      <Drawer.Screen
        name="Mi Cuenta"
        component={MiCuenta}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedBack}
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
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="App" component={StackNavigatorMenu} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MenuNavigation;
