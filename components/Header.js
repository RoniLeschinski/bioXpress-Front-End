import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Header (){
    return(
        <View style={{height:40, backgroundColor: "#38CB6C"}}>
            <View>
                <Image 
                source={require('./assets/images/logo.png')}
                style={{width: 40, height: 40, alignSelf: 'center'}}/>
            </View>
        </View>
    )
}