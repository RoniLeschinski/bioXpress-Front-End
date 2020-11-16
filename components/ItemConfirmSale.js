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
  SafeAreaView,
} from 'react-native';
import ItemCard from './ItemCard';

export default function ItemConfirmSale(props) {
  return (
    <View style={styles.container}>
      <ItemCard
        isChome={true}
        index={props.key}
        img={props.img}
        off={props.off}
        isOffer={props.isOffer}
        offline={false}
      />
      <View style={styles.container2}>
        <Text style={styles.text}>{props.titulo}</Text>
        <Text style={styles.text2}>${props.precio}</Text>
        <View style={styles.container3}>
          <View style={{marginTop: 10}}>
            <Text style={styles.text3}>Cantidad: {props.cant}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  container2: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    marginLeft: 10,
  },
  container3: {
    flexDirection: 'row',
  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: -10,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4B4B4B',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
  text3: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#A6A6A6',
  },
  text4: {
    fontWeight: '600',
    fontSize: 14,
    color: '#4B4B4B',
  },
  text5: {
    fontWeight: '600',
    fontSize: 14,
    color: '#4B4B4B',
  },
  button: {
    width: 70,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#4B4B4B',
  },
  cantContainer1: {
    width: '70%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
  },
  cantContainer2: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
