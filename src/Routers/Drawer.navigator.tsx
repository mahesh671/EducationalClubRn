import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Home.navigator";


const DrawerNavigator=(props:any)=>{
    const Drawer= createDrawerNavigator();
    return(

        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown:false,
            }} initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
                </Drawer.Navigator>
            
        </NavigationContainer>
    )
}

export default DrawerNavigator;