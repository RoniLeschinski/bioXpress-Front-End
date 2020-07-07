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
import Seller from '../components/Seller';
import Recommended from '../components/Recommended';

var sellerprod = [
  {
    key: 0,
    img: require('../assets/images/products/huevos.png'),
    titulo: 'Docena de huevos pastoriles',
    precio: 420,
    vendedor: 'La Huerta de Horacio',
    vendpic: require('../assets/images/logohoracio.png'),
    desc:
      'Huevos pastoriles provenientes de La Pampa, distribuidos por COECO y llevados a tu casa PERSONALMENTE por Horacio.',
  },
  {
    key: 1,
    img: require('../assets/images/products/sup.png'),
    desc: 'Suprema de pollo',
    precio: 300,
  },
  {
    key: 2,
    img: require('../assets/images/products/huevos.png'),
    desc: 'Docena de huevos pastoriles',
    precio: 420,
  },
  {
    key: 3,
    img: require('../assets/images/products/sup.png'),
    desc: 'Suprema de pollo',
    precio: 300,
  },
];

function verMas({index, navigation}) {
  return (
    <TouchableOpacity
      style={{
        width: 129,
        height: 129,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        marginLeft: 20,
      }}
      activeOpacity={0.7}>
      <Image
        style={{width: '60%', height: '60%'}}
        source={require('../assets/images/mas.png')}
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 14,
          color: '#4b4b4b',
        }}>
        Ver más
      </Text>
    </TouchableOpacity>
  );
}

export default function Producto({navigation, route}) {
  const {item} = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 50,
        backgroundColor: '#ececec',
      }}>
      <View style={styles.container}>
        <View style={styles.container2} />
<<<<<<< HEAD
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
          <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 10, }}>
          <Seller></Seller>
          </View>
          <View styles={styles.container6}>
            <Text style={styles.text6}>Información</Text>
            <Text style={styles.text5}>{item.info}</Text>
            <Text style={styles.text6}>Más productos del vendedor</Text>
          </View>
=======
        <View style={styles.imagecont}>
          <Image style={styles.image} source={item.img} />
        </View>
        <View style={styles.container3}>
          <Text style={styles.text1}>{item.titulo}</Text>
          <Text style={styles.text2}>${item.precio}</Text>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity activeOpacity={0.7} style={styles.button1}>
            <Text style={styles.text3}>Añadir al carrito</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <Text style={styles.text4}>Cantidad:</Text>
          <TouchableOpacity activeOpacity={0.7} styles={styles.button2}>
            <Text>+</Text>
          </TouchableOpacity>
          <Text />
          <TouchableOpacity activeOpacity={0.7}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Seller vendedor={item.vendedor} vendpic={item.vendpic} />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            marginTop: 30,
            paddingLeft: 45,
            paddingRight: 45,
          }}>
          <Text style={styles.texttitle}>Información</Text>
          <Text style={styles.textdesc}>{item.desc}</Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            marginTop: 30,
            paddingLeft: 45,
            paddingRight: 45,
          }}>
          <Text style={styles.texttitle}>Más productos del vendedor</Text>
>>>>>>> c3009f7bbffdd0e4c4c5687738a5fdfe3c864f13
        </View>

        <View style={styles.container6}>
          <FlatList
            data={sellerprod}
            renderItem={({item}) => {
              return (
                <Recommended
                  index={item.key}
                  img={item.img}
                  press={() => {
                    navigation.navigate('Producto', {item: item});
                  }}
                />
              );
            }}
            contentContainerStyle={{
              paddingRight: 40,
              paddingLeft: 25,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            ListFooterComponent={verMas}
          />
        </View>
      </View>
    </ScrollView>

    //<View styles={{backgroundColor: "blue", width: "100%", height: "50%"}}></View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    backgroundColor: '#38CB6C',
  },
  container3: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  container4: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  container5: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
<<<<<<< HEAD
  container6:{
    width: '100%',
=======
  container6: {
    height: 129,
    marginTop: 20,
>>>>>>> c3009f7bbffdd0e4c4c5687738a5fdfe3c864f13
  },
  imagecont: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -225,
  },
  image: {
    width: 310,
    height: 310,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
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
  text5:{
    color: "#4B4B4B",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 30,
    marginLeft: 30,
  },
  text6:{
    color: "#4B4B4B",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 3
  },
  button1: {
    width: '80%',
    height: 95,
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
  texttitle: {
    color: '#4B4B4B',
    fontWeight: 'bold',
    //fontFamily: "Montserrat-Black",
    fontSize: 24,
  },
  textdesc: {
    fontSize: 18,
    color: '#4B4B4B',
    marginTop: 5,
  },
});
