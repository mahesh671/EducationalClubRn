import React, { useEffect, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import WebView from 'react-native-webview'

const WebView1=(props:any)=> {
  const ref=useRef<WebView>(null);

  
  return (
    
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Pressable onPress={()=>ref.current?.reload()}><Text>Reload</Text></Pressable>
    </View> 
   <WebView ref={ref} source={{uri:props.route.params.uri} }></WebView>
   </View>
  )
}

export default WebView1