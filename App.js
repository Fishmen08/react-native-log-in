/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Navigation from './src/navigation'
//import {
//  Colors,
//} from 'react-native/Libraries/NewAppScreen';



const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.root}>
        <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
  flex: 1,
  backgroundColor: '#f9fbfc',
  }
});

export default App;
