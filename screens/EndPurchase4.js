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
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import ItemCard from '../components/ItemCard';
import Recommended from '../components/Recommended';
import Header from '../components/Header';
import BtnMiCompra from '../components/BtnMiCompra';
import Direc from '../components/Direc';
import Pago from '../components/Pago';
import {ProductsService} from '../services/products_service';
import ModalCarrito from './ModalCarrito';
import {AuthContext} from '../src/Context/auth_context';
import {ProductContext} from '../src/Context/product_context';
import {CartContext} from '../src/Context/cart_context';

export default function EndPurchase4({navigation}) {
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
  const {token} = useContext(AuthContext);
  const {direc, envio} = useContext(CartContext);

  function comprarCarrito() {
    const service = new ProductsService();
    service.buyCart(precioTot, cartForBack, token);
    console.log(cartForBack);
    setCartForBack([]);
    setCart([]);
    setCantTot(0);
    setPrecioTot(0);
    navigation.navigate('Home Comprador');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'other'} press={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.text}>Envío</Text>
        <View style={{flexDirection: 'row'}}>
          <Direc isDirec={true} direc={direc} />
          <Direc isDirec={false} envio={envio} />
        </View>
        <Text style={styles.text}>Pago</Text>
        <Pago />
        <Text style={styles.text}>Resumen</Text>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.text2}>Total</Text>
          </View>
          <View style={styles.container4}>
            <Text style={styles.text2}>${precioTot.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.continueContainer}>
        <TouchableOpacity
          style={styles.button3}
          activeOpacity={0.7}
          onPress={() => comprarCarrito()}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
            Confirmar compra
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
    color: '#ececec',
  },
  container2: {
    width: 354,
    height: 60,
    borderWidth: 0.25,
    borderColor: '#4B4B4B',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    width: '78%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 20,
  },
  container4: {
    width: '22%',
  },
  continueContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 20,
    borderTopColor: '#d9d9d9',
    borderTopWidth: 1,
  },
  button3: {
    alignSelf: 'center',
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginVertical: 15,
    alignSelf: 'center',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
});
