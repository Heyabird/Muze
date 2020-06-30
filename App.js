// source: https://reactnative.dev/docs/navigation

import 'react-native-gesture-handler';
import * as React from 'react';
import createStackNavigator from 'react-navigation-stack';
import createBottomTabNavigator from 'react-navigation';

import AccountScreen from './screens/AccountScreen'; 
import CommunityScreen from './screens/CommunityScreen';
import HomeScreen from './screens/HomeScreen';
import MessageIndexScreen from'./screens/MessageIndexScreen';
import MessageShowScreen from'./screens/MessageShowScreen';
import PreferencesScreen from './screens/PreferencesScreen'


// import { 
//   // AccountScreen, 
//   // CommunityScreen,
//   ExploreScreen,
//   HomeScreen,   
//   MessageIndexScreen,
//   MessageShowScreen,
//   PreferencesScreen } from './screens';


export default class App extends React.Component {
  render() {
      return(<AppTabNavigator />);
  }
}

const MessagesNavigator = createStackNavigator({
  MessageIndex: MessageIndexScreen,
  MessageShow: MessageShowScreen,
}, {
  initialRouteName : 'Messages',
});

const SettingsNavigator = createStackNavigator({ 
  Account: AccountScreen,
  Preferences: PreferencesScreen,
}, {
  initialRouteName : 'Settings',
});

const AppTabNavigator = createBottomTabNavigator({
  Explore: <ExploreScreen/>,
  Messages: MessagesNavigator,
  Settings: SettingsNavigator,
 },{
 
   navigationOptions: ({ navigation }) => ({
      //define the icon for each tab here...
   }),
   tabBarOptions: {
     initialRouteName: 'Catalogue',
     activeTintColor: '#fff',
     inactiveTintColor: '#ddd',
     style: {
       backgroundColor: '#4d535e',
    }
 }
});



//configure navigators...