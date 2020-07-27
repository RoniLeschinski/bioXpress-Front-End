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

export default function Intro({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: 250, height: 225, marginTop: 130}}
        source={require('../assets/images/logotext.png')}
      />
      <View style={{width: '100%', alignItems: 'center', marginBottom: 50}}>
        <TouchableOpacity
          style={styles.boton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Reg')}>
          <Text style={{color: '#4b4b4b', fontWeight: 'bold', fontSize: 26}}>
            Registrarse
          </Text>
        </TouchableOpacity>
        <View style={{width: '100%', alignItems: 'center', marginTop: 5}}>
          <TouchableOpacity
            style={styles.boton2}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#38CB6C',
  },
  boton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
  boton2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
});
