import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//import { createAppContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AccountScreen from './screens/AccountScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} />
    </Stack.Navigator>
  );
}

export default SettingsStack; //you need to render this