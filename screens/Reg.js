import React, {Component} from 'react';
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
} from 'react-native';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import Input from '../components/Input';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200;
export default function Reg({navigation}) {
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
          <Input title="Nombre" name={true} isLog={false} />
          <View style={{marginTop: 15}}>
            <Input title="Apellido" name={true} isLog={false} />
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 60}}>
          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('RegNext')}>
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
    backgroundColor: '#38CB6C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
});
