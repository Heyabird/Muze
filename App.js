// source: https://reactnative.dev/docs/navigation

import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './Pages/Home';
import Explore from './Pages/Explore';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'MUZE' }}
      />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}