import React, {Component, useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

export default function Pago() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require('../assets/images/wallet2.png')}
          style={{width: 30, height: 30, marginLeft: 10}}
        />
        <Text style={styles.text}>Efectivo</Text>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.text2}>Modificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 354,
    height: 60,
    borderWidth: 0.25,
    borderColor: '#4B4B4B',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: '70%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  container3: {
    width: '30%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginLeft: 10,
  },
  text2:{
    alignSelf:"center",
    color:"#0D93FF",
    fontSize:14,
    fontWeight:"bold"
},
});
