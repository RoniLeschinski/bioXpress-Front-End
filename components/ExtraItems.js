import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default function ExtraItems(props) {
  return (
    <View style={styles.green}>
      <Text style={styles.text}>+{props.prodLeft}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  green: {
    width: 58,
    height: 58,
    borderRadius: 58,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    backgroundColor: '#38CB6C',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
});
