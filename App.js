import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './src/DataContext';

// or any files within the Snack
import MenuNavigation from './src/Screens/MenuNavigation';

export default function App() {
  return (
    <NavigationContainer>
    
      <DataProvider>
        <MenuNavigation />
      </DataProvider>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
