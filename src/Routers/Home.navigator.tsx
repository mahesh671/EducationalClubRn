import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login.screen";
import WebView1 from "../screens/webView1";
import { NavigationContainer } from "@react-navigation/native";
import ImageConstants from "../constants/ImageConstants";
import { ImageBackground, StatusBar ,StyleSheet,View,SafeAreaView, useColorScheme} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeNavigator=(props:any)=>{
    const Stack = createNativeStackNavigator();
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return(
        <SafeAreaView style={[backgroundStyle, styles.safeArea]}>
        <View style={styles.overlay}>
        <StatusBar backgroundColor='#d7d7e9' barStyle='light-content' />
        <ImageBackground source={ImageConstants.bg_image} style={ {flex: 1,width: '100%',height:'100%',justifyContent: 'center',}} resizeMode='cover'>
        <Stack.Navigator screenOptions={{
            headerShown:false,
            gestureEnabled:true,
            gestureDirection:'horizontal',
            contentStyle:{backgroundColor:'transparent'},
            animationDuration:1000,
            animation:'slide_from_left',
            presentation:'card'

        }}
        initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="WebView1" component={WebView1}/>

        </Stack.Navigator>
        </ImageBackground>
        </View>
        </SafeAreaView>
    
    )
    
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
   
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    //   padding: 20, // Ensure content is well spaced
    },
  });
export default HomeNavigator;