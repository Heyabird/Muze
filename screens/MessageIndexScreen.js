import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
// useNavigation allows you to use the navigation prop from any component (not just screen component)
// https://reactnavigation.org/docs/connecting-navigation-prop/
import { useNavigation } from '@react-navigation/native';


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

function MessageIndexScreen() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Messages</Text>
      <Button
        onPress={() =>
          navigation.navigate('MessageShowScreen')
        }
        title="Lord Quas"
      />
      <Button
        onPress={() =>
          navigation.navigate('MessageShowScreen')
        }
        title="Noodle"
      />
    </View>
  );
}

export default MessageIndexScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  // Button: {
  //   borderColor: 'black',
  //   borderWidth: 3
  // }
});




