import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'

export default function App() {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
}