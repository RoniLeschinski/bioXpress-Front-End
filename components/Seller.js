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

const Seller = props => (
  <TouchableOpacity activeOpacity={0.7} style={styles.boton} 
   onPress={props.press} 
  >
    <View style={styles.container}>
      <Image style={styles.image} source={props.vendpic} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>{props.vendedor}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.text2}>VENDEDOR OFICIAL</Text>
        <Image
          style={styles.ico}
          source={require('../assets/images/verifico.png')}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  boton: {
    padding: 20,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d9d9',
  },
  container: {
    width: 80,
    height: 80,
  },
  container2: {
    marginLeft: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text1: {
    color: '#4B4B4B',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text2: {
    color: '#A6A6A6',
    fontSize: 14,
    fontWeight: 'normal',
  },
  ico: {
    height: 16,
    width: 16,
    marginLeft: 2,
  },
});
export default Seller;
