import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticatePage from './pages/AuthPage.tsx';
import Home from './pages/Home';
import CreateAcountPage from './pages/CreateAcountPage.tsx';
import ProviderCtxCredentials from './context/credetials';
import SelectVideoPage from './pages/SelectVideoPage';


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
    <ProviderCtxCredentials>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="auth" component={AuthenticatePage} />
        <Stack.Screen name="new-acount" component={CreateAcountPage} />
        <Stack.Screen name="movies" component={SelectVideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ProviderCtxCredentials>
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
