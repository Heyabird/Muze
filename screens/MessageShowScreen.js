import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Lord Quas</Text>
      </View>
      <View style={styles.messagebox1}>
        <Text style={styles.text}>Hello! What's your favorite Gorillaz Album?</Text> 
      </View>
      <View style={styles.messagebox2}>
        <Text style={styles.text}>Demon Days!</Text> 
      </View>
      <View style={styles.messagebox1}>
        <Text style={styles.text}>Same!</Text> 
      </View>
    </>
  );
}

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
  messagebox1: {
    display: 'flex',
    flexDirection: 'column-reverse',
    borderColor: '#6A67FF',
    // borderWidth: 2,
    // alignContent: 'flex-start',
    backgroundColor: '#DBFFAE',
    // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    // transition: 0.3,
    // width: '100%',
    // height: '40%',
    margin: 10,
    marginRight: 90,
    // textAlign: 'center',
    borderRadius: 15,
  },
  messagebox2: {
    display: 'flex',
    flexDirection: 'column-reverse',
    borderColor: '#6A67FF',
    // borderWidth: 2,
    // alignContent: 'flex-start',
    backgroundColor: '#FFF7AE',
    // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    // transition: 0.3,
    // width: '100%',
    // height: '40%',
    margin: 10,
    marginLeft: 90,
    // textAlign: 'center',
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    textAlign: 'left',
    zIndex: 1
  },
});
