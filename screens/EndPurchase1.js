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
import {ProductsService} from '../services/products_service';
import ModalCarrito from './ModalCarrito';
import {AuthContext} from '../src/Context/auth_context';
import {ProductContext} from '../src/Context/product_context';
import {CartContext} from '../src/Context/cart_context';

export default function EndPurchase1({navigation}) {

  const {setEnvio} = useContext(CartContext);

  const [backColor1, setBackColor1] = useState("#fff")
  const [txt1, setTxt1] = useState("#4B4B4B")
  const [img1, setImg1] = useState(require("../assets/images/home2.png"))

  const [backColor2, setBackColor2] = useState("#fff")
  const [txt2, setTxt2] = useState("#4B4B4B")
  const [img2, setImg2] = useState(require("../assets/images/shop1.png"))

  function press1(){
    setBackColor1("#0D93FF")
    setImg1(require("../assets/images/home1.png"))
    setTxt1("#fff")
    setBackColor2("#fff")
    setImg2(require("../assets/images/shop1.png"))
    setTxt2("#4B4B4B")
    setEnvio("A domicilio")
  }
  function press2(){
    setBackColor2("#0D93FF")
    setImg2(require("../assets/images/shop2.png"))
    setTxt2("#fff")
    setBackColor1("#fff")
    setImg1(require("../assets/images/home2.png"))
    setTxt1("#4B4B4B")
    setEnvio("Retiro en local")
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'other'} press={() => navigation.goBack()} />
      <Text style={styles.text}>Método de envío</Text>
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.button, {backgroundColor:backColor1}]} activeOpacity={0.7} onPress={() => press1()}>
            <Image style={[styles.image, {marginTop:15}]} source={img1} />
            <Text style={[styles.text2, {color:txt1}]}>Envío a domicilio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginBottom:20, backgroundColor:backColor2}]} activeOpacity={0.7} onPress={() => press2()}>
            <Image style={styles.image} source={img2} />
            <Text style={[styles.text2, {color:txt2, marginBottom:15}]}>Domicilio del vendedor</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.continueContainer}>
        <TouchableOpacity
          style={styles.button3}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EndPurchase2')}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ececec',
    width: '100%',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    overflow: 'hidden',
    borderColor: '#d9d9d9',
    borderWidth: 1,
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
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginVertical: 25,
    alignSelf: 'center',
  },
  text2:{
      fontSize:24,
      fontWeight:"bold",
      marginBottom:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderColor: '#4B4B4B',
    borderWidth: 0.4,
    borderRadius: 20,
    marginTop:20
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
  image:{
      width:90,
      height:90,
      marginVertical:10
  },
});
