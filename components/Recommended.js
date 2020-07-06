import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';



export default function Recommended(props) {

   
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{height: 129, marginLeft: 20}}
        onPress={props.press}
        >
        <Image key={props.key} source={props.img} style={styles.product} />
      </TouchableOpacity>
    );
  };


  const styles = StyleSheet.create({
    product: {
        width: 129,
        height: 129,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20,
      },
});