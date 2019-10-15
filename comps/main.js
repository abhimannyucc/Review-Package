import React from 'react';
import {View,Text} from 'react-native';
import Top from './Top';
import Mid from './mid';
import Bot from './bot';
import styles from '../styles/mainstyles';

export default function Main(){
    return(
        <View>
            <Top />
            <Mid />
            <Bot />
        </View>
    )
}