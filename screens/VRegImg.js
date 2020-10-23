import React, { Component, useState, useContext } from 'react';
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
import { useNavigation, useLinkProps } from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
import { AuthService } from '../services/auth_service';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'
import { apiBaseUrl } from '../utils/constants';
import { AuthContext } from '../src/Context/auth_context';


const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;

export default function VRegImg({ navigation, route }) {
  const { name } = route.params;
  const { DNI } = route.params;
  const { num } = route.params;
  const { provincia } = route.params;
  const { localidad } = route.params;
  const { CP } = route.params;
  const { calle } = route.params;
  const { numero } = route.params;
  const { piso } = route.params;

  const { token } = useContext(AuthContext);

  const [photo, setPhoto] = useState(null);

  async function VRegister() {
    console.log(photo.path)
    console.log(token)
    RNFetchBlob.fetch('POST', apiBaseUrl + '/stores/createStore', {
      'Content-Type': `multipart/form-data`,
      Authorization: 'Bearer ' + token,
    }, [
      { name: 'dni', data: String(DNI) },
      { name: 'phone_number', data: String(num) },
      { name: 'store_name', data: String(name) },
      { name: 'ds_store', data: '' },
      { name: 'filee', filename: photo.fileName, type: photo.type, data: RNFetchBlob.wrap(photo.path) },
      { name: 'provincia', data: String(provincia) },
      { name: 'localidad', data: String(localidad) },
      { name: 'cp', data: String(CP) },
      { name: 'calle', data: String(calle) },
      { name: 'piso', data: String(piso) },
      { name: 'numero', data: String(numero) }
    ])
    navigation.navigate('Home Vendedor')
  }

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto(response);
        console.log(photo)
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ececec' }}>
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
          <Text style={styles.title}>
            Subí una imagen de perfil para tu local
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {!photo ? (
              <View
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: 'grey',
                }}
              />
            ) : null}
            {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            )}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => handleChoosePhoto()}>
              <Text style={styles.buttonText}>Subir imagen</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4}>
            NOTA: Se recomienda que la imagen tenga un fondo blanco y una
            calidad de 800x800
          </Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: 26 }}
              onPress={() => VRegister()}>
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
  boton: {
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 70,
    backgroundColor: '#0D93FF',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  text4: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B4B4B',
    width: 300,
    textAlign: 'center',
    marginVertical: 10,
  },
});
