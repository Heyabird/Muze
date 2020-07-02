// source: https://reactnative.dev/docs/navigation

import 'react-native-gesture-handler';
import * as React from 'react';
// import createStackNavigator from 'react-navigation-stack';
// import createBottomTabNavigator from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import AccountScreen from './screens/AccountScreen'; 
import CommunityScreen from './screens/CommunityScreen';
import ExploreScreen from './screens/ExploreScreen';
import HomeScreen from './screens/HomeScreen';
import MessageIndexScreen from'./screens/MessageIndexScreen';
import MessageShowScreen from'./screens/MessageShowScreen';
import PreferencesScreen from './screens/PreferencesScreen'
import SettingsScreen from './screens/SettingsScreen';
import SettingsStack from './SettingsStack'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Messages() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MessageIndexScreen" component={MessageIndexScreen} />
      <Stack.Screen name="MessageShowScreen" component={MessageShowScreen} />
    </Stack.Navigator>
  );
}
// export default Messages

function Settings() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
      <Stack.Screen name="Account" component={AccountScreen}/>
      <Stack.Screen name="Preferences" component={PreferencesScreen}/>
    </Stack.Navigator>
  )
}

function App () {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
export default App

//configure navigators...