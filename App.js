
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Navigator from './navigations/nav';
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded , setFontsLoaded] = useState(false)
  const fetchFonts = () => {
    return Font.loadAsync({
      'Kanit':require('./assets/Fonts/Kanit-Regular.ttf'),
      'Kanit-SemiBold':require('./assets/Fonts/Kanit-SemiBold.ttf'),
    })
  }
  if(!fontsLoaded){
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={(err) => console.log(err)}
/>
  }
  return <Navigator />
}

