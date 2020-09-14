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
import ModalCarrito from './ModalCarrito';
import {AuthContext} from '../src/Context/auth_context';
import {ProductContext} from '../src/Context/product_context';
import {CartContext} from '../src/Context/cart_context';
import ModalProv from '../components/ModalProv';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;

export default function EndPurchase2({navigation}) {

  const {setDirec} = useContext(CartContext);

  const [categoria, setCategoria] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [idCategoria, setIdCategoria] = useState();
  const [localidad, setLocalidad] = useState();
  const [CP, setCP] = useState();
  const [numero, setNumero] = useState();
  const [calle, setCalle] = useState();

  function setCategoriaAndClose(idCat, cat) {
    setIdCategoria(idCat);
    setCategoria(cat);
    setModalVisible(false);
  }
  function continuar(){
    setDirec(calle + " " + numero)
    navigation.navigate('EndPurchase3')
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalProv
        visible={modalVisible}
        press1={() => setCategoriaAndClose(1, 'Buenos Aires')}
        press2={() =>
          setCategoriaAndClose(2, 'Ciudad Autónoma de Buenos Aires')
        }
        press3={() => setCategoriaAndClose(3, 'Catamarca')}
        press4={() => setCategoriaAndClose(4, 'Chaco')}
        press5={() => setCategoriaAndClose(5, 'Chubut')}
        press6={() => setCategoriaAndClose(6, 'Córdoba')}
        press7={() => setCategoriaAndClose(7, 'Corrientes')}
        press8={() => setCategoriaAndClose(8, 'Entre Ríos')}
        press9={() => setCategoriaAndClose(9, 'Formosa')}
        press10={() => setCategoriaAndClose(10, 'Jujuy')}
        press11={() => setCategoriaAndClose(11, 'Provincia inexistente')}
        press12={() => setCategoriaAndClose(12, 'La Rioja')}
        press13={() => setCategoriaAndClose(13, 'Mendoza')}
        press14={() => setCategoriaAndClose(14, 'Misiones')}
        press15={() => setCategoriaAndClose(15, 'Neuquén')}
        press16={() => setCategoriaAndClose(16, 'Río Negro')}
        press17={() => setCategoriaAndClose(17, 'Salta')}
        press18={() => setCategoriaAndClose(18, 'San Juan')}
        press19={() => setCategoriaAndClose(19, 'San Luis')}
        press20={() => setCategoriaAndClose(20, 'Santa Cruz')}
        press21={() => setCategoriaAndClose(21, 'Santa Fe')}
        press22={() => setCategoriaAndClose(22, 'Santiago del Estero')}
        press23={() =>
          setCategoriaAndClose(23, 'Tierra del Fuego e Islas del Atlántico Sur')
        }
        press24={() => setCategoriaAndClose(24, 'Tucumán')}
      />
      <Header screen={'other'} press={() => navigation.goBack()} />
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>Domicilio</Text>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 180,
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View style={styles.container}>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <View style={[styles.container5, {marginTop: 15}]}>
                  <View style={{width: '100%'}}>
                    <Text style={styles.title2}>
                      Provincia
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '600',
                          color: '#38CB6C',
                        }}>
                        *
                      </Text>
                    </Text>
                    <TouchableOpacity
                      style={styles.button2}
                      activeOpacity={0.7}
                      onPress={() => setModalVisible(true)}>
                      <View style={{marginLeft: 20, width: '80%'}}>
                        <Text numberOfLines={1} style={styles.textCategoria}>
                          {categoria}
                        </Text>
                      </View>
                      <Image
                        source={require('../assets/images/flechaAbajo.png')}
                        style={{width: 30, height: 30, marginRight: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.container3}>
                <View style={styles.container5}>
                  <View style={{width: '60%'}}>
                    <Text style={styles.title2}>
                      Localidad
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '600',
                          color: '#38CB6C',
                        }}>
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={styles.input}
                      selectionColor="#9de0b5"
                      keyboardType="default"
                      autoCapitalize="words"
                      blurOnSubmit={false}
                      onSubmitEditing={Keyboard.dismiss}
                      onChangeText={localidad => setLocalidad(localidad)}
                    />
                  </View>
                  <View style={{width: '38%'}}>
                    <Text style={styles.title2}>
                      CP
                      <Text
                        style={{
                          fontSize: 20,
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
                      blurOnSubmit={false}
                      onSubmitEditing={Keyboard.dismiss}
                      onChangeText={CP => setCP(CP)}
                    />
                  </View>
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <View style={styles.container3}>
                  <View style={styles.container5}>
                    <View style={{width: '100%'}}>
                      <Text style={styles.title2}>
                        Calle
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#38CB6C',
                          }}>
                          *
                        </Text>
                      </Text>
                      <TextInput
                        style={styles.input}
                        selectionColor="#9de0b5"
                        keyboardType="default"
                        autoCapitalize="words"
                        blurOnSubmit={false}
                        onSubmitEditing={Keyboard.dismiss}
                        onChangeText={calle => setCalle(calle)}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 15, marginBottom:30}}>
                <View style={styles.container3}>
                  <View style={styles.container5}>
                    <View style={{width: '49%'}}>
                      <Text style={styles.title2}>
                        Número
                        <Text
                          style={{
                            fontSize: 20,
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
                        onChangeText={numero => setNumero(numero)}
                      />
                    </View>
                    <View style={{width: '49%'}}>
                      <Text style={styles.title2}>Piso/Depto.</Text>
                      <TextInput
                        style={styles.input}
                        selectionColor="#9de0b5"
                        keyboardType="default"
                        autoCapitalize="words"
                        blurOnSubmit={false}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.continueContainer}>
        <TouchableOpacity
          style={styles.button3}
          activeOpacity={0.7}
          onPress={() => continuar()}>
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
    height: '100%',
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
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
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
  textCategoria: {
    width: '85%',
    fontWeight: '600',
    fontSize: 20,
    color: '#4B4B4B',
  },
  title2: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
  },
  button2: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 5,
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
  input: {
    height: 60,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  scroll: {
    flex: 1,
  },
});
