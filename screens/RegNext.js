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
  Keyboard,
} from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';
/* import {AuthService} from '../services/auth_service'; */
import { AuthContext } from '../src/Context/auth_context';
import {apiBaseUrl} from '../utils/constants';
import axios from 'axios';


const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;
export default function RegNext({navigation, route}) {
  const {name} = route.params;
  const {lastName} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setToken} = useContext(AuthContext); 

  function registerWithEmail() {
    const data = {
      first_name: name,
      last_name: lastName,
      username: email,
      password: password,
      id_type: 1
    }
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
    var token;
    
      axios
      .post(
        apiBaseUrl + '/users/createUser',
        data,
        {
          headers: headers,
        },
        
      )
      .then(
        response => {
          switch (response.status) {
            case 200: {
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

      navigation.navigate('Login');
    
  }

  function handleRegister() {
    registerWithEmail(name, lastName, email, password);
    
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ececec'}}>
      <Header screen={'Reg'} press={() => navigation.goBack()} />
      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container2}>
          <Image
            style={styles.logo}
            source={require('../assets/images/verifico.png')}
          />
          <Text style={styles.title}>
            {name}, por favor completá los siguientes datos
          </Text>
        </View>
        <View style={{width: '100%', marginTop: 30}}>
          <View style={styles.container3}>
            <View style={styles.container3}>
              <Text style={styles.title2}>
                Correo electrónico
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
          <View style={{marginTop: 15}}>
            <View style={styles.container3}>
              <View style={styles.container3}>
                <Text style={styles.title2}>
                  Contraseña
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
                  secureTextEntry={true}
                  autoCapitalize="none"
                  blurOnSubmit={false}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={password => setPassword(password)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}
              onPress={() => registerWithEmail()}>
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
  boton: {
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
});
