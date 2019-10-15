/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Main from './comps/main';
import styles from './styles/appstyles';

function App(){
  return(
    <View style={styles.app}>
    <Main />
    </View>
  )
}

export default App;
