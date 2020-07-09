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
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export default function VHome(){
    return(
        <View>
                <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />

            <Text>Esta es la pantalla VHome</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      //justifyContent: "center",
      alignItems: 'flex-start',
      backgroundColor: '#ececec',
    },
});