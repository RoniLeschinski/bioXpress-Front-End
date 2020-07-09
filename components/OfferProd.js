import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default function OfferProd(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{marginLeft: 20}}
      onPress={props.press}>
      <View style={styles.product}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.offerbox} />
        <Text style={styles.txt}>-{props.off}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  product: {
    width: 129,
    height: 129,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    width: 129,
    height: 129,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    right: 4,
    color: '#ffffff',
    textAlign: 'center',
  },
  offerbox: {
    backgroundColor: '#38CB6C',
    height: 42,
    width: 120,
    position: 'absolute',
    transform: [{rotate: '30deg'}],
    marginLeft: 40,
    marginTop: -10,
  },
});
