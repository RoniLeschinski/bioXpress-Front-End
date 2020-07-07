import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const ImgPantComp = props => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.7}
      onPress={props.press}>
      <Image style={styles.image} source={props.img} />
    </TouchableOpacity>
    <Text style={styles.txt}>{props.txt}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
    height: 139,
    marginLeft: 25,
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  image: {
    width: '60%',
    height: '60%',
    marginVertical: 10,
  },
  txt: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    top: 5,
    color: '#4b4b4b',
  },
});
export default ImgPantComp;
