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

export default function EndPurchase3({navigation}) {
  const [backColor1, setBackColor1] = useState('#fff');
  const [txt1, setTxt1] = useState('#4B4B4B');
  const [img1, setImg1] = useState(require('../assets/images/wallet2.png'));

  const [backColor2, setBackColor2] = useState('#fff');
  const [txt2, setTxt2] = useState('#4B4B4B');
  const [img2, setImg2] = useState(require('../assets/images/creditCard1.png'));

  const [backColor3, setBackColor3] = useState('#fff');
  const [img3, setImg3] = useState(
    require('../assets/images/mercadoPago1.png'),
  );

  const [card, setCard] = useState(false);

  function press1() {
    setBackColor1('#0D93FF');
    setImg1(require('../assets/images/wallet1.png'));
    setTxt1('#fff');
    setBackColor2('#fff');
    setImg2(require('../assets/images/creditCard1.png'));
    setTxt2('#4B4B4B');
    setBackColor3('#fff');
    setImg3(require('../assets/images/mercadoPago1.png'));
    setCard(false);
  }
  function press2() {
    setBackColor2('#0D93FF');
    setImg2(require('../assets/images/creditCard2.png'));
    setTxt2('#fff');
    setBackColor1('#fff');
    setImg1(require('../assets/images/wallet2.png'));
    setTxt1('#4B4B4B');
    setBackColor3('#fff');
    setImg3(require('../assets/images/mercadoPago1.png'));
    setCard(true);
  }
  function press3() {
    setBackColor3('#0D93FF');
    setImg3(require('../assets/images/mercadoPago2.png'));
    setBackColor1('#fff');
    setImg1(require('../assets/images/wallet2.png'));
    setTxt1('#4B4B4B');
    setBackColor2('#fff');
    setImg2(require('../assets/images/creditCard1.png'));
    setTxt2('#4B4B4B');
    setCard(false);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'other'} press={() => navigation.goBack()} />
      <Text style={styles.text}>Método de pago</Text>
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: backColor1}]}
            activeOpacity={0.7}
            onPress={() => press1()}>
            <Image style={styles.image} source={img1} />
            <Text style={[styles.text2, {color: txt1}]}>Efectivo</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity
              style={[
                styles.button2,
                {marginRight: '2%', backgroundColor: backColor2},
              ]}
              activeOpacity={0.7}
              onPress={() => press2()}>
              <Image style={styles.image} source={img2} />
              <Text style={[styles.text3, {color: txt2}]}>
                Tarjetas bancarias
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button2,
                {marginLeft: '2%', backgroundColor: backColor3},
              ]}
              activeOpacity={0.7}
              onPress={() => press3()}>
              <Image style={styles.image2} source={img3} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.continueContainer}>
        <TouchableOpacity
          style={styles.button3}
          activeOpacity={0.7}
          onPress={() => {
            card
              ? navigation.navigate('EndCard')
              : navigation.navigate('EndPurchase4');
          }}>
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
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -10,
    textAlign: 'center',
    width: '50%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderColor: '#4B4B4B',
    borderWidth: 0.4,
    borderRadius: 20,
    marginTop: 20,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '43%',
    borderColor: '#4B4B4B',
    borderWidth: 0.4,
    borderRadius: 20,
    marginTop: 20,
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
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  image2: {
    width: 110,
    height: 100,
    marginTop: 0,
  },
});
