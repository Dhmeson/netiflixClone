import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import AuthenticatePage from './pages/AuthPage.tsx';


const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Oswald-regular': require('./assets/fonts/Oswald-Regular.ttf'),
    "Oswald-Bold": require('./assets/fonts/Oswald-Bold.ttf')
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="auth" component={AuthenticatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
