import React, {Component, useState} from 'react';
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
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
import {AuthService} from '../services/auth_service';
import ModalProv from '../components/ModalProv';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;
export default function VRegNext({navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoria, setCategoria] = useState();
  const [idCategoria, setIdCategoria] = useState();
  function setCategoriaAndClose(idCat, cat) {
    setIdCategoria(idCat);
    setCategoria(cat);
    setModalVisible(false);
  }

  const {name} = route.params;
  const {lastName} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    navigation.navigate('Home Vendedor');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ececec'}}>
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
      <Header screen={'Reg'} press={() => navigation.goBack()} />
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container2}>
          {/* <Image
            style={styles.logo}
            source={require('../assets/images/verifico.png')}
          /> */}
          <Text style={styles.title}>Domicilio</Text>
        </View>
        <View style={{width: '100%', marginTop: 15}}>
          <View style={styles.container3}>
            <View style={styles.container5}>
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
                  onChangeText={email => setEmail(email)}
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
                  onChangeText={email => setEmail(email)}
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
                    onChangeText={email => setEmail(email)}
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
                    onChangeText={email => setEmail(email)}
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
                    onChangeText={email => setEmail(email)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}
              onPress={() => handleRegister()}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    //justifyContent: "center",
    alignItems: 'flex-start',
    backgroundColor: '#ececec',
  },
  container2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  container3: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4b4b4b',
    width: '80%',
    textAlign: 'center',
  },
  title2: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
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
  boton: {
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
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
  textCategoria: {
    width: '85%',
    fontWeight: '600',
    fontSize: 20,
    color: '#4B4B4B',
  },
});
