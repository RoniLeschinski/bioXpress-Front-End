import React, {Component, useState, useContext} from 'react';
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
  Keyboard
} from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
/* import {signInWithEmailAndPassword} from '../services/auth_service'; */
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { AuthContext } from '../src/Context/auth_context';
import {
  base64_encode_data,
  base64_encode,
  base64url_encode,
  base64_decode,
} from '../utils/sourceBase64';
import axios from 'axios';
import {apiBaseUrl} from '../utils/constants';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200;

export default function Login({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")

  const {token, setToken} = useContext(AuthContext); 

  async function signInWithEmailAndPassword (){ 
    const toBase64 = base64_encode(
      email + ':' + password,
    ); 
    const credentials = 'Basic ' + toBase64;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: credentials,
    };
    await axios
      .post(
        apiBaseUrl + '/users/login',
        {user: 'test', password: 'test'},
        {
          headers: headers,
        },
      )
      .then(
        response => {
          
          switch (response.status) {
            case 200: {
              var token=(response.data.token);
              setToken(token)
              setStatus("ok")
              break;
            }
            case 401: {
              console.log('Unauthorized');
              throw "error";
            }
            case 429: {
              console.log('Too Many Requests');
              throw "error";
            }
          }
        },
        error => {
          console.log(error);
        }, 
      );
      }
      if (status=="ok"){
        console.log(token)
        navigation.navigate("Home Comprador")
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ececec'}}>
      <Header screen={'Login'} press={() => navigation.goBack()} />
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container2}>
          <Image
            style={styles.logo}
            source={require('../assets/images/verifico.png')}
          />
          <Text style={styles.title}>Iniciar sesión</Text>
        </View>
        <View style={{width: '100%', marginTop: 40}}>
          <View style={styles.container3}>
            <View style={styles.container3}>
              <Text style={styles.title2}>Correo electrónico</Text>
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
          <View style={{marginTop: 15}}>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title2}>Contraseña</Text>
                  <TextInput
                    style={styles.input}
                    selectionColor="#9de0b5"
                    keyboardType="default"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={password => setPassword(password)}

                  />
                <TouchableOpacity activeOpacity={0.7} style={{marginTop: 15}}>
                  <Text style={styles.textbutton}>Olvidé mi contraseña</Text>
                </TouchableOpacity>
                </View>
              </View>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 50}}>
          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => signInWithEmailAndPassword()}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
              Ingresar
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
    marginTop: 10,
  },
  container3: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#4b4b4b',
  },
  title2: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
  },
  boton: {
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
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
  textbutton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#38CB6C',
    width: '100%',
  },
});
