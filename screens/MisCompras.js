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
import Header from '../components/Header';

export default function MisCompras({navigation}){
    return(
        <View>
            <Header screen={'CHome'} press={() => navigation.openDrawer()} />
        </View>
    )
}