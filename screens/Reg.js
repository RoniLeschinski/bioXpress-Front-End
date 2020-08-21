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
  Keyboard
} from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200;
export default function Reg({navigation}) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');


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
            ¡Bienvenido a{' '}
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                marginTop: 5,
                color: '#38CB6C',
              }}>
              bio
            </Text>
            Xpress!
          </Text>
        </View>
        <View style={{width: '100%', marginTop: 30}}>
          <View style={styles.container3}>
            <View style={styles.container3}>
              <Text style={styles.title2}>Nombre</Text>
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
          <View style={{marginTop: 15}}>
            <View style={styles.container3}>
              <View style={styles.container3}>
                <Text style={styles.title2}>Apellido</Text>
                <TextInput
                  style={styles.input}
                  selectionColor="#9de0b5"
                  keyboardType="default"
                  autoCapitalize="words"
                  blurOnSubmit={false}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={lastName => setLastName(lastName)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('RegNext', { name:name, lastName:lastName})}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
              Continuar
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
  boton: {
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
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
});
