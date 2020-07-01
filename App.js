// source: https://reactnative.dev/docs/navigation

import 'react-native-gesture-handler';
import * as React from 'react';
import createStackNavigator from 'react-navigation-stack';
// import createBottomTabNavigator from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import AccountScreen from './screens/AccountScreen'; 
import CommunityScreen from './screens/CommunityScreen';
import ExploreScreen from './screens/ExploreScreen';
import HomeScreen from './screens/HomeScreen';
import MessageIndexScreen from'./screens/MessageIndexScreen';
import MessageShowScreen from'./screens/MessageShowScreen';
import PreferencesScreen from './screens/PreferencesScreen'
import SettingsStack from './SettingsStack'


const Tab = createBottomTabNavigator();

// const AppTabNavigator = createBottomTabNavigator({
//   Explore: <ExploreScreen/>,
//   Messages: <MessageIndexScreen/>,
//   Settings: <PreferencesScreen/>,
//  },{
 
//    navigationOptions: ({ navigation }) => ({
//       //define the icon for each tab here...
//    }),
//    tabBarOptions: {
//      initialRouteName: 'Catalogue',
//      activeTintColor: '#fff',
//      inactiveTintColor: '#ddd',
//      style: {
//        backgroundColor: '#4d535e',
//     }
//  }
// });

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="Messages" component={MessageIndexScreen} />
          <Tab.Screen name="Preferences" component={PreferencesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

//configure navigators...