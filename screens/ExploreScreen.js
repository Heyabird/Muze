import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Avatar from './avatar.jpeg'
import Quas from './Quas.jpg'


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function ExploreScreen() {
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Match</Text>
      </View>
      <View style={styles.card}>
        {/* <Image source={require('./Quas.png')} alt="Quas" 
          style={styles.image}
        /> */}
        <Text style={styles.text}>Lord Quas</Text> 
        {/* <p>Architect & Engineer</p>  */}
      </View>
      <View style={styles.card}>
        {/* <img src={Avatar} alt="Avatar" style="width:100%"/> */}
        <Text style={styles.text}></Text> 
        {/* <p>Architect & Engineer</p>  */}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  all: {
    // position: 'absolute'
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    height: '15%'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    display: 'flex',
    flexDirection: 'column-reverse',
    borderColor: '#6A67FF',
    // borderWidth: 2,
    // alignContent: 'flex-start',
    backgroundColor: '#DBFFAE',
    // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    // transition: 0.3,
    // width: '100%',
    height: '40%',
    margin: 10,
    // textAlign: 'center',
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    textAlign: 'right',
    zIndex: 1
  },
  image: {
    width: '100%',
    zIndex: 0
  }
});
