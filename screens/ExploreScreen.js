import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Avatar from './avatar.jpeg'


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function ExploreScreen() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.welcome}>Explore</Text>
    </View>
    <View style={styles.card}>
      {/* <img src={Avatar} alt="Avatar" style="width:100%"/> */}
      <Text style={styles.text}>Quasimoto</Text> 
      {/* <p>Architect & Engineer</p>  */}
    </View>
    <View style={styles.card}>
      {/* <img src={Avatar} alt="Avatar" style="width:100%"/> */}
      <Text style={styles.text}></Text> 
      {/* <p>Architect & Engineer</p>  */}
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'flex-start',
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
  card: {
    display: 'flex',
    flexDirection: 'column-reverse',
    // alignContent: 'flex-start',
    backgroundColor: '#DBFFAE',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    // transition: 0.3,
    width: '50%',
    height: '50%',
    margin: 'auto',
    // textAlign: 'center',
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    padding: 10
  }
});
