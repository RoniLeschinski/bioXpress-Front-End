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
import 'react-native-gesture-handler';

export default function Producto({navigation, route}) {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image style={styles.image} source={item.img} />
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>{item.desc}</Text>
        <Text style={styles.text2}>{item.precio}</Text>
      </View>
      <View style={styles.container4}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text3}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container5}>
        <Text style={styles.text4}>Cantidad:</Text>
        <TouchableOpacity styles={styles.button2}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {

  },
  container: {
    flex: 1,
    //height: '100%',
    //width: '100%',
    //justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    backgroundColor: '#38CB6C',
  },
  container3: {
    width: '100%',
    padding: 30,
    marginTop: '20%',
  },
  container4: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: '100%',
    padding: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '80%',
    height: '130%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: '5%',
  },
  text1: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4B4B4B',
  },
  text2: {
    marginLeft: '5%',
    fontSize: 36,
    fontWeight: '800',
    color: '#4B4B4B',
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  text4:{
    color: "#4B4B4B",
    fontWeight: "600",
    fontSize: 21,
  },
  button1: {
    width: '80%',
    height: '100%',
    backgroundColor: '#38CB6C',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: '5%',
    height: '80%',
    backgroundColor: '#38CB6C',
    borderRadius: 1,
  },
});
