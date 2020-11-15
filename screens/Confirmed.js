import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState, useEffect, useContext} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import 'react-native-gesture-handler';
import {ProductContext} from '../src/Context/product_context';

const tst = [
  {
    key: 0,
    title: 'Docena de Huevos Pastoriles COECO',
  },
  {
    key: 1,
    title: 'Manzanas Orgánicas 1kg',
  },
  {
    key: 2,
    title: 'Rúcula Orgánica 50g',
  },
  {
    key: 3,
    title: 'Rúcula Orgánica 50g',
  },
  {
    key: 4,
    title: 'Rúcula Orgánica 50g',
  },
];

const q = 2;
export default function Confirmed({navigation}) {
  const {
    cantTot,
    setCantTot,
    precioTot,
    setPrecioTot,
    cart,
    setCart,
    cartForBack,
    setCartForBack,
  } = useContext(ProductContext);

  console.log(cart);

  function confirm() {
    setCartForBack([]);
    setCart([]);
    setCantTot(0);
    setPrecioTot(0);
    navigation.navigate('Home Comprador');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/images/confirm.png')}
          style={styles.conf}
        />
        <Text style={styles.head}>¡Acabás de comprar {cantTot} productos!</Text>
        <View style={styles.prods}>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => item.id_product}
            renderItem={({item}) => {
              return (
                <Text index={item.id_product} style={styles.prodtext}>
                  {item.titulo}
                </Text>
              );
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              paddingTop: 15,
            }}
            showsVerticalScrollIndicator={true}
          />
        </View>
        <Text style={styles.lower}>
          Ahora te ponemos en contacto con el vendedor.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => confirm()}>
          <Text style={{color: '#4b4b4b', fontWeight: 'bold', fontSize: 26}}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#38CB6C',
    height: '100%',
    paddingBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 15,
  },
  conf: {
    width: 150,
    height: 150,
    marginTop: 25,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    width: '95%',
  },
  lower: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginTop: 15,
    width: '95%',
  },
  prods: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    width: 270,
    height: 130,
    marginTop: 25,
    overflow: 'hidden',
  },
  prodtext: {
    color: '#4b4b4b',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
    marginTop: 20,
  },
});
