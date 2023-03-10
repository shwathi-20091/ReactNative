import React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// import AppNavigation from './src/Navigation/AppNavigation';
import {AppContainer} from './src/Navigation/index'
export default function App() {
  return (
   <AppContainer />
  );
}
