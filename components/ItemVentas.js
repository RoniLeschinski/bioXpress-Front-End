import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {apiBaseUrl} from '../utils/constants';

export default function ItemVentas(props) {
  return <Image style={styles.image} source={{uri: apiBaseUrl + '/' + props.img}} />;
}

const styles = StyleSheet.create({
  image: {
    width: 58,
    height: 58,
    borderRadius: 58,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    margin: 5,
  },
});
