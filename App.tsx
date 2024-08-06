import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-reanimated';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/login.screen';
import ImageConstants from './src/constants/ImageConstants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeNavigator from './src/Routers/Home.navigator';
import { NavigationContainer } from '@react-navigation/native';
import WebView1 from './src/screens/webView1';
import DrawerNavigator from './src/Routers/Drawer.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App(): React.JSX.Element {
 

  const Stack =createNativeStackNavigator();

  return (

    

       

          <DrawerNavigator></DrawerNavigator>
          
          
      
  
  
  );
}



export default App;
