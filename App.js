import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import * as constants from './constants';
import { Block } from './components';


//import all used images
// const images = [
//   require('./assets/images/'),
//   require('./assets/images/'),
  
// ]

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
});