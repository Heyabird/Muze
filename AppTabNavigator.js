// import { ExploreScreen, 
//          SettingsScreen,
//          CategoryScreen, 
//          ProductScreen,  
//          SearchScreen,
//          SearchResultsScreen,
//          BagScreen } from './Screens';

// const SettingsNavigator = createStackNavigator({
//     Settings: SettingsScreen,
//     // Category: CategoryScreen,
//     //  Product: ProductScreen
// }, {
//     //configuration options...
// });
// const SearchNavigator = createStackNavigator({
//       SearchHome: SearchScreen,
//    SearchResults: SearchResultsScreen
// }, {
//     //configuration options...
// });
// const AppTabNavigator = createBottomTabNavigator({
//    Explore: CatalogueNavigator,
//       Search: SearchNavigator,
//     Settings: SettingsNavigator,
//    },{
   
//      navigationOptions: ({ navigation }) => ({
//         //define the icon for each tab here...
//      }),
//      tabBarOptions: {
//        initialRouteName: 'Catalogue',
//        activeTintColor: '#fff',
//        inactiveTintColor: '#ddd',
//        style: {
//          backgroundColor: '#4d535e',
//       }
//    }
// });