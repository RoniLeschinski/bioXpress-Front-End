import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ventas from '../components/Ventas';

export default function VHome() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{paddingBottom: 50, backgroundColor: '#ececec'}}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#38CB6C" />
        <Text style={styles.texto}>Ventas pendientes</Text>
        <View style={styles.container2}>
          <Ventas />
        </View>

        <Text style={styles.texto}>Mis productos</Text>
        <View style={styles.container3} />
        <Text style={styles.texto}>Ventas concretadas</Text>
        <View style={styles.container3} />
      </View>
    </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 139,
    marginTop: 20,
  },
  container3: {
    height: 129,
    marginTop: 20,
  },
  texto: {
    color: '#4B4B4B',
    fontWeight: 'bold',
    //fontFamily: "Montserrat-Black",
    fontSize: 24,
    marginLeft: 30,
    marginTop: 30,
  },
  scroll: {
    flex: 1,
  },
  scroll2: {
    paddingLeft: 5,
  },
  product: {
    width: 129,
    height: 129,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
  },
  list: {
    marginTop: 20,
  },
});
