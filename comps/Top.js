import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch
} from 'react-native';
import { useState } from 'react';
import styles from '../styles/Topstyles'
export default function top(){
   const [modeSwitch, setmodeSwitch ] = useState(false);

   var statemsg = null;
   var bgcolor = null;
   if(modeSwitch === false){
       statemsg = (
         <Text>Day Mode</Text>
    )
      bgcolor = styles.app
  }
   else {
      statemsg = (
        <Text style={{color:"white"}}> Night Mode</Text>
      )
      bgcolor = styles.night
  }
      return (

        <View style={bgcolor}>
          <Switch
          onValueChange = {(value)=>setmodeSwitch(value)}
          value = {modeSwitch}
          />
          {statemsg}
        </View>
      )
}