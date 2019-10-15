

import React from 'react';
import {
  View,
  TextInput,
  Button,
  Alert

} from 'react-native';
import styles from '../styles/botstyles';


export default function Bot(){

    const [value, onChangeText] = React.useState('')
    return (
      
      <View style= {styles.textin}>

      <TextInput placeholder="send a text here" value={value}
      onChangeText={text => onChangeText(text)}
      ></TextInput>
      <Button title="Send" onPress={() => {
        Alert.alert('Alert', 'Your message is: ' + value)}}>

      </Button>

      

      </View>
    )
}
