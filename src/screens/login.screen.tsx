import React from 'react';
import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ImageConstants from '../constants/ImageConstants';
import { useNavigation } from '@react-navigation/native';

const LoginScreen=(props:any) =>{
    
  return (
    <View style={styles.mainContainer}>
      <Image source={ImageConstants.logo} style={styles.logo} />
      <Text style={styles.welcomeText}>
        Welcome to! ECE Educational Club
      </Text>
      <View>
      <Pressable style={{...styles.button,...{backgroundColor:'orange'}}} onPress={()=>Alert.alert('Redirecting','Redirecting to Educational Club ',[{text:'OK',onPress:()=>props.navigation.navigate('WebView1',{uri:'https://sites.google.com/view/ece-educational-club/home'})}])}>
        <Text style={styles.btnText}>ECE EDUCATIONAL CLUB</Text>
      </Pressable>
      <Pressable style={{...styles.button,...{backgroundColor:'orange'}}} onPress={()=>Alert.alert('Redirecting','Redirecting to Sri Vasavi Engg clg Website',[{text:'OK',onPress:()=>props.navigation.navigate('WebView1',{uri:'https://www.srivasaviengg.ac.in/'})}])}>
        <Text style={styles.btnText}>Sri Vasavi Engineering</Text>
      </Pressable>
      <Pressable style={{...styles.button,...{backgroundColor:'orange'}}} onPress={()=>Alert.alert('Redirecting','Redirecting to Contact Page',[{text:'OK',onPress:()=>props.navigation.navigate('WebView1',{uri:'https://sites.google.com/view/ece-educational-club/about'})}])}>
        <Text style={styles.btnText}>CONTACT US</Text>
      </Pressable>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 100,
    // marginBottom: 50,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginBottom: 20, // Add some space between the image and text
  },
  welcomeText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    shadowColor:'black',
    shadowRadius:2,
    fontFamily:'Times New Roman'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:30,
    elevation:3,
    width:300,
    margin:12
    
  },
  btnText:{
    fontSize:20, 
    fontWeight:'bold',
    color:'black'
    }
});


export default LoginScreen