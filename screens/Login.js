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
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header screen={'Login'} />
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image
            style={styles.logo}
            source={require('../assets/images/verifico.png')}
          />
          <Text style={styles.title}>Iniciar sesión</Text>
        </View>
      </View>
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
    marginTop: 20,
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
});
