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
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{flexGrow: 1, flex: 1}}>
        <View style={styles.container}>
          <View style={styles.container2} />
          <View style={styles.imagecont}>
            <Image style={styles.image} source={item.img} />
          </View>
          <View style={styles.container3}>
            <Text style={styles.text1}>{item.desc}</Text>
            <Text style={styles.text2}>${item.precio}</Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
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
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
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
  imagecont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -225,
  },
  image: {
    width: 320,
    height: 320,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  text1: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4B4B4B',
    width: '75%',
  },
  text2: {
    marginLeft: '5%',
    fontSize: 36,
    fontWeight: '600',
    color: '#4B4B4B',
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  text4: {
    color: '#4B4B4B',
    fontWeight: '600',
    fontSize: 21,
  },
  button1: {
    width: '80%',
    height: '100%',
    backgroundColor: '#38CB6C',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button2: {
    width: '5%',
    height: '80%',
    backgroundColor: '#38CB6C',
    borderRadius: 1,
  },
});
