import React from 'react';
import { StatusBar,SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';  
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';


import theme from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return (<AppLoading/>)
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar  barStyle={"light-content"}></StatusBar>
      <Dashboard/>
    </ThemeProvider>
  );
}