import React, {Component, useState, useContext} from 'react';
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
  Modal,
} from 'react-native';
import {apiBaseUrl} from '../utils/constants';
import NumberFormat from 'react-number-format';

export default function ItemCat(props) {
  const source = apiBaseUrl + '/' + props.img;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.press}>
      <View style={styles.container2}>
        <Image source={{uri: source}} style={styles.image} />
      </View>
      <View style={styles.container3}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text2}>
          <NumberFormat
            value={props.price}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={'$'}
            renderText={value => <Text>{value}</Text>}
            allowNegative={false}
            decimalScale={0}
            fixedDecimalScale={true}
          />
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 260,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container2: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    width: '100%',
    height: '30%',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4B4B4B',
    width: '90%',
  },
  text2: {
    fontSize: 21,
    fontWeight: '700',
    color: '#4B4B4B',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
