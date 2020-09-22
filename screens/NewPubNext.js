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
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import ItemCard from '../components/ItemCard';
import Recommended from '../components/Recommended';
import Header from '../components/Header';
import BtnMiCompra from '../components/BtnMiCompra';
import {ProductsService} from '../services/products_service';
import {ProductContext} from '../src/Context/product_context';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200;

export default function NewPubNext({navigation, route}) {

  
  const {titulo} = route.params;
  const {descripcion} = route.params;
  const {idCategoria} = route.params;
  const {imagen} = route.params;

  const [backColorSi, setBackColorSi] = useState('#0D93FF');
  const [backColorNo, setBackColorNo] = useState('#fff');

  const [textColorSi, setTextColorSi] = useState('#fff');
  const [textColorNo, setTextColorNo] = useState('#4B4B4B');

  const [envio, setEnvio] = useState(1);

  const [backColorSi2, setBackColorSi2] = useState('#0D93FF');
  const [backColorNo2, setBackColorNo2] = useState('#fff');

  const [textColorSi2, setTextColorSi2] = useState('#fff');
  const [textColorNo2, setTextColorNo2] = useState('#4B4B4B');

  const [retiro, setRetiro] = useState(1);
  const [precio, setPrecio] = useState();
  const [stock, setStock] = useState();

  var data = {};

  function postProduct() {
    /* data={
      titulo:titulo,
      idCategoria:idCategoria,
      descripcion:descripcion,
      precio:precio,
      stock:stock,
      envio:envio,
      retiro:retiro
    }
    setUploadProductData(uploadProductData=>[...uploadProductData, data]) */
    const service = new ProductsService();
    service.uploadProduct(
      titulo,
      imagen,
      idCategoria,
      descripcion,
      precio,
      stock,
      envio,
      retiro,
    );
    navigation.navigate('Home Vendedor');
  }

  function onPressSi() {
    setBackColorSi('#0D93FF');
    setBackColorNo('#fff');
    setTextColorSi('#fff');
    setTextColorNo('#4B4B4B');
    setEnvio(1);
  }
  function onPressNo() {
    setBackColorSi('#fff');
    setBackColorNo('#0D93FF');
    setTextColorSi('#4B4B4B');
    setTextColorNo('#fff');
    setEnvio(0);
  }
  function onPressSi2() {
    setBackColorSi2('#0D93FF');
    setBackColorNo2('#fff');
    setTextColorSi2('#fff');
    setTextColorNo2('#4B4B4B');
    setRetiro(1);
  }
  function onPressNo2() {
    setBackColorSi2('#fff');
    setBackColorNo2('#0D93FF');
    setTextColorSi2('#4B4B4B');
    setTextColorNo2('#fff');
    setRetiro(0);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'VHome'} press={() => navigation.openDrawer()} />
      <KeyboardAvoidingView
        contentContainerStyle={{
          height: '100%',
          width: '100%',
          //justifyContent: "center",
          alignItems: 'flex-start',
          backgroundColor: '#ececec',
        }}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>Crear publicación</Text>

        <View style={styles.container}>
          <View style={styles.container2}>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={{paddingBottom: 300}}>
              <Text style={styles.text2}>Paso 2</Text>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title2}>
                    Precio
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: '600',
                        color: '#38CB6C',
                      }}>
                      *
                    </Text>
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      height: 60,
                      backgroundColor: 'white',
                      borderColor: '#d9d9d9',
                      marginTop: 5,
                      borderWidth: 1,
                      borderRadius: 15,
                      paddingLeft: 26,
                      fontSize: 18,
                    }}
                    selectionColor="#9de0b5"
                    keyboardType="numeric"
                    autoCapitalize="words"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={precio => setPrecio(precio)}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      position: 'absolute',
                      left: 35,
                      top: 61,
                      color: '#4b4b4b',
                    }}>
                    $
                  </Text>
                </View>
              </View>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title2}>
                    Unidades disponibles
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: '600',
                        color: '#38CB6C',
                      }}>
                      *
                    </Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    selectionColor="#9de0b5"
                    keyboardType="numeric"
                    autoCapitalize="words"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={stock => setStock(stock)}
                  />
                </View>
              </View>
              <View style={styles.container3}>
                <Text style={styles.title}>
                  ¿Vas a ofrecer envío?
                  <Text
                    style={{fontSize: 21, fontWeight: '600', color: '#38CB6C'}}>
                    *
                  </Text>
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: backColorSi}]}
                    activeOpacity={0.7}
                    onPress={() => onPressSi()}>
                    <Text style={[styles.text3, {color: textColorSi}]}>Sí</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: backColorNo}]}
                    activeOpacity={0.7}
                    onPress={() => onPressNo()}>
                    <Text style={[styles.text3, {color: textColorNo}]}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.container3}>
                <Text style={styles.title}>
                  ¿Vas a ofrecer retiro en persona?
                  <Text
                    style={{fontSize: 21, fontWeight: '600', color: '#38CB6C'}}>
                    *
                  </Text>
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: backColorSi2}]}
                    activeOpacity={0.7}
                    onPress={() => onPressSi2()}>
                    <Text style={[styles.text3, {color: textColorSi2}]}>
                      Sí
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: backColorNo2}]}
                    activeOpacity={0.7}
                    onPress={() => onPressNo2()}>
                    <Text style={[styles.text3, {color: textColorNo2}]}>
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          paddingBottom: 20,
          paddingTop: 20,
          borderTopColor: '#d9d9d9',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.7}
          onPress={() => postProduct()}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
            Crear producto
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    overflow: 'hidden',
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  container3: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
    color: '#4B4B4B',
    marginTop: 10,
    alignSelf: 'center',
  },
  text3: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
    marginTop: 10,
    paddingLeft: 20,
    color: '#4b4b4b',
  },
  title2: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
    marginTop: 10,
    color: '#4b4b4b',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 80,
    borderColor: '#4B4B4B',
    borderWidth: 0.4,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 15,
  },
  button2: {
    alignSelf: 'center',
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
  scroll: {
    width: '100%',
  },
});
