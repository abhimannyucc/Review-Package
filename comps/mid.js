import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch,
  Picker,
} from 'react-native';
import styles from '../styles/midstyles';
import { useState } from 'react';

export default function Mid(){
  const [bgcolor, setbgcolor]= useState('lightyellow');
  
    return (
      <View style={[styles.box,{backgroundColor:bgcolor}]}>
          <Picker
              style={styles.pic}
              selectedValue={bgcolor}
              onValueChange={(value)=>setbgcolor(value)}
          >
              <Picker.Item label="Color 1" value="lightyellow"/>
              <Picker.Item label="Color 2" value="#DAB"/>
              <Picker.Item label="Color 3" value="#BAD"/>
              <Picker.Item label="Color 4" value="lightgreen"/>
          </Picker>
      </View>
    )
}