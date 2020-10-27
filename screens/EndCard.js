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
  TouchableWithoutFeedback,
} from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import {CartContext} from '../src/Context/cart_context';
import ModalCards from '../components/ModalCards';
import NumberFormat from 'react-number-format';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-input-credit-card';
import {TextInputMask} from 'react-native-masked-text';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;

export default function EndCard({navigation}) {
  const {setDirec} = useContext(CartContext);

  const [categoria, setCategoria] = useState();
  const [idCategoria, setIdCategoria] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [numcard, setNumCard] = useState();
  const [name, setName] = useState();
  const [expdate, setExpDate] = useState();
  const [seccode, setSecCode] = useState();
  const [dni, setDNI] = useState();

  function setCategoriaAndClose(idCat, cat) {
    setIdCategoria(idCat);
    setCategoria(cat);
    setModalVisible(false);
  }
  function continuar() {
    setDirec(calle + ' ' + numero);
    navigation.navigate('EndPurchase3');
  }

  var expiryDate = '';

  function addSlash(str) {
    let newStr = '';
    let len = str.length;
    for (let i = 0; i < len; i++) {
      newStr = newStr + str[i];
      while (newStr.length % 2 === 0) {
        newStr = newStr + '/';
      }
    }
    return newStr.substr(0, newStr.length - 1);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalCards
        visible={modalVisible}
        press1={() => setCategoriaAndClose(1, 'Crédito')}
        press2={() => setCategoriaAndClose(2, 'Débito')}
      />
      <Header screen={'other'} press={() => navigation.goBack()} />
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>Datos de tarjeta</Text>
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
                      Tipo de tarjeta
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
              <View style={{}}>
                <View style={styles.container3}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 5,
                      paddingRight: 5,
                      width: '100%',
                    }}>
                    <View style={{width: '100%'}}>
                      <Text style={styles.title2}>
                        Número de tarjeta
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#38CB6C',
                          }}>
                          *
                        </Text>
                      </Text>
                      <View style={{marginLeft: -10}}>
                        <LiteCreditCardInput
                          inputStyle={{
                            height: 60,
                            backgroundColor: 'white',
                            borderColor: '#d9d9d9',
                            marginTop: 5,
                            borderWidth: 1,
                            borderRadius: 15,
                            paddingLeft: 15,
                            fontSize: 18,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <View style={styles.container3}>
                  <View style={styles.container5}>
                    <View style={{width: '100%'}}>
                      <Text style={styles.title2}>
                        Nombre y apellido
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
                        onChangeText={name => setName(name)}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 15}}>
                <View style={styles.container3}>
                  <View style={styles.container5}>
                    <View style={{width: '49%'}}>
                      <Text style={styles.title2}>
                        Fecha de exp.
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
                        onChangeText={seccode => setSecCode(seccode)}
                      />
                    </View>
                    <View style={{width: '49%'}}>
                      <Text style={styles.title2}>
                        Código de seg.
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
                        onChangeText={expiryDate => addSlash(expiryDate)}
                        value={addSlash(expiryDate)}
                        name="expiryDate"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 15, marginBottom: 30}}>
                <View style={styles.container3}>
                  <View style={styles.container5}>
                    <View style={{width: '100%'}}>
                      <Text style={styles.title2}>
                        DNI del titular de la tarjeta
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
                        onChangeText={dni => setDNI(dni)}
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
