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

export default function Direc(props) {
  return props.isDirec ? (
    <View style={[styles.container, {marginRight: 10}]}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.container2}>
          <Image
            source={require('../assets/images/mapLocation1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>{props.direc}</Text>
          <Text style={styles.text2}>{props.direc2}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={{marginBottom:5}}>
          <Text style={styles.text3}>Modificar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={[styles.container, {marginLeft: 10}]}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.container2}>
          <Image
            source={require('../assets/images/truck1.png')}
            style={[styles.image, {marginLeft: 7}]}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>{props.envio}</Text>
        <Text style={styles.text2}>{props.envio2}</Text> 
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.text3}>Modificar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 167,
    height: 87,
    borderWidth: 0.25,
    borderColor: '#4B4B4B',
    borderRadius: 20,
  },
  container2: {
    height: '100%',
    justifyContent: 'center',
  },
  container3: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginLeft:5,
  },
  text2: {
    fontSize: 11,
    fontWeight: '500',
    color: '#A6A6A6',
  },
  text3:{
      alignSelf:"center",
      color:"#0D93FF",
      fontSize:14,
      fontWeight:"bold"
  },
  image: {
    width: 40,
    height: 40,
  },
});
